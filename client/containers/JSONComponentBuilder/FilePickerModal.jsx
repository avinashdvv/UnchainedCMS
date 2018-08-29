import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { map, debounce, filter, escapeRegExp } from "lodash";
import { Modal, Form, Button, Input, Loader, Dimmer } from "unchained-ui-react";

import { getImages, uploadImage } from "api/auth";
import { FILE_TYPES } from "constants/defaults";

import ImageGallary from "./ImageGallary";
import FileGallary from "./FileGallary";

import "./FilePickerModal.scss";

const data = require("./dummy.json");

class FilePickerModal extends React.Component {
  static propTypes = {
    handleModal: PropTypes.func,
    updateImage: PropTypes.func,
    fileType: PropTypes.string
  };

  TAB_TYPES = {
    FILE_UPLOAD: "FILE_UPLOAD",
    FILE_PREVIEW: "FILE_PREVIEW"
  };

  constructor(props) {
    super(props);
    this.state = {
      options: [],
      files: data.images.items,
      tab: this.TAB_TYPES.FILE_PREVIEW,
      isLoading: false,
      formData: {
        tags: []
      }
    };
  }

  componentDidMount() {
    // this.fetchImages();
  }

  changeTab = tab => {
    this.setState({
      ...this.state,
      tab,
      files: data.images.items
    });
  };

  fetchImages = async () => {
    const res = await getImages();
    this.setState({
      files: res
    });
  };

  hidePop = () => {
    this.props.handleModal();
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      if (value.length < 1) {
        this.setState({
          files: data.images.items,
          isLoading: false
        });
        return;
      }
      const re = new RegExp(escapeRegExp(value), "i");
      const isMatch = ({ meta: { tags } }) =>
        filter(tags, tag => re.test(tag)).length > 0;
      const files = filter(data.images.items, isMatch);
      this.setState({
        isLoading: false,
        files
      });
    }, 300);
  };

  onSubmit = async e => {
    e.preventDefault();
    await uploadImage({
      ...e.value
    });
  };

  renderFileUploader = () => {
    const { options, formData } = this.state;
    const tagsValue = map(formData.tags, ({ value }) => value);
    return (
      <Form onSubmit={e => this.onSubmit(e)}>
        <Form.Input fluid label="Title" placeholder="Title" />
        <Form.Input fluid type="file" label="Image" placeholder="Image" />
        <Form.Select
          search
          selectOnBlur={false}
          name="tags"
          options={options}
          value={tagsValue}
          allowAdditions
          selection
          multiple
          onAddItem={(e, { value }) => {
            const selectedValue = find(options, { id: value });
            if (!selectedValue) {
              this.setState({
                options: [...options, { text: value, value }],
                formData: {
                  tags: [...formData.tags, { text: value, value }]
                }
              });
            }
          }}
          onChange={(e, { value }) => {
            const selectedValue = find(options, { value });
            if (selectedValue) {
              this.setState({
                formData: {
                  tags: [...selectedValue]
                }
              });
            }
          }}
        />
        <div className="text-right">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    );
  };

  render() {
    const { updateImage, fileType } = this.props;
    const { files, tab, isLoading } = this.state; // eslint-disable-line
    return (
      <div>
        <Modal open className="image-picker-modal" onClose={this.hidePop}>
          <Modal.Header>
            <Button
              className={classNames("tab", {
                active: tab === this.TAB_TYPES.FILE_PREVIEW
              })}
              onClick={() => this.changeTab(this.TAB_TYPES.FILE_PREVIEW)}
            >
              Preview Files
            </Button>
            <Button
              className={classNames("tab", {
                active: tab === this.TAB_TYPES.FILE_UPLOAD
              })}
              onClick={() => this.changeTab(this.TAB_TYPES.FILE_UPLOAD)}
            >
              Upload File
            </Button>
          </Modal.Header>
          <Modal.Content
            className={classNames({
              active_tab_1: tab === this.TAB_TYPES.FILE_PREVIEW,
              active_tab_2: tab === this.TAB_TYPES.FILE_UPLOAD
            })}
          >
            {tab === this.TAB_TYPES.FILE_PREVIEW && (
              <div>
                <Input
                  fluid
                  loading={isLoading}
                  icon="search"
                  placeholder="Search..."
                  onChange={debounce(this.handleSearchChange, 500, {
                    leading: true
                  })}
                />
                <br />
                {isLoading && (
                  <Dimmer active inverted>
                    <Loader inverted content="Loading" />
                  </Dimmer>
                )}
                {!isLoading &&
                  files &&
                  files.length === 0 && <h1> No files are found </h1>}
                <div className="file-container">
                  {fileType === FILE_TYPES.IMAGES && (
                    <ImageGallary
                      images={files}
                      updateImage={file => updateImage(file)}
                    />
                  )}
                  {fileType === FILE_TYPES.DOCUMENTS && (
                    <FileGallary
                      images={files}
                      updateImage={file => updateImage(file)}
                    />
                  )}
                </div>
              </div>
            )}
            {tab === this.TAB_TYPES.FILE_UPLOAD && this.renderFileUploader()}
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default FilePickerModal;
