import React, { Component } from "react";
import PropTypes from "prop-types";

import ReactQuill from "react-quill";
import {
  Modal,
  Container,
  Input,
  Button,
  Image,
  Grid,
  Label,
  Icon,
  Checkbox
} from "unchained-ui-react";

import { FILE_TYPES } from "constants/defaults";

import FilePickerModal from "./FilePickerModal";

import "./BaseComponentEditModal.scss";

const SIZE = {
  SMALL: "small",
  FULLSCREEN: "fullscreen"
};

class BaseComponentEditModal extends Component {
  static propTypes = {
    cancelCB: PropTypes.func,
    editableDataPoints: []
  };

  state = {
    showComponentSpecificPopup: false,
    settings: [],
    size: SIZE.SMALL
  };

  componentWillMount() {
    this.setState({
      settings: Object.assign([], this.props.editableDataPoints)
    });
  }

  hidePopup = data => {
    this.props.cancelCB(data);
  };

  updateSettingsObj = (value, setting, type) => {
    const { settings } = this.state;
    settings.map(s => {
      if (s.id === setting.id) {
        s.value[type] = value; // eslint-disable-line
      }
    });
    this.setState({ settings });
  };

  setSize = size => this.setState({ size });

  getControlType(setting) {
    switch (setting.type) {
      case "UnchainedCtrlRichTextBlock":
        return (
          <ReactQuill
            value={setting.value.richText}
            onChange={value =>
              this.updateSettingsObj(value, setting, "richText")
            }
          />
        );
      case "UnchainedCtrlCharBlock":
        return (
          <Input
            type="text"
            value={setting.value.text}
            onChange={el =>
              this.updateSettingsObj(el.target.value, setting, "text")
            }
          />
        );
      case "UnchainedCtrlBooleanBlock":
        return (
          <Checkbox
            label={setting.value.label}
            value={setting.value.radio}
            onChange={el =>
              this.updateSettingsObj(el.target.value, setting, "text")
            }
          />
        );
      case "UnchainedCtrlImageBlock":
        return (
          <Grid>
            <Grid.Column computer={3}>
              <Image src={setting.value.image} />
              <Button
                className="editBtn"
                onClick={() => {
                  this.setState({
                    imagePickerData: setting
                  });
                }}
              >
                <Icon name={"edit"} />
              </Button>
            </Grid.Column>
            <Grid.Column computer={9}>
              <div>
                <Label ribbon>Alt Text</Label>
                <Input
                  type="text"
                  value={setting.value.altText}
                  onChange={el =>
                    this.updateSettingsObj(el.target.value, setting, "altText")
                  }
                />
              </div>
            </Grid.Column>
          </Grid>
        );
      default:
        break;
    }
    return null;
  }

  render() {
    const { settings, size, imagePickerData, editableDataPoints } = this.state;
    return (
      <Modal
        open
        className="unchainedEditableElSettingsPopup"
        size={size}
        closeOnEscape
        closeOnDimmerClick
        onClose={() => this.hidePopup(editableDataPoints)}
      >
        <Modal.Header>
          Settings
          <div className="actions">
            {size === "small" ? (
              <Button
                type="button"
                icon
                onClick={() => this.setSize(SIZE.FULLSCREEN)}
              >
                <Icon name="window maximize" />
              </Button>
            ) : (
              <Button
                type="button"
                icon
                onClick={() => this.setSize(SIZE.SMALL)}
              >
                <Icon name="window minimize" />
              </Button>
            )}
          </div>
        </Modal.Header>
        <Modal.Content>
          <Container>
            {settings &&
              settings.map((setting, i) => {
                return (
                  <div className="setting-control" key={`setting-${i + 1}`}>
                    {this.getControlType(setting)}
                  </div>
                );
              })}
            {imagePickerData && (
              <FilePickerModal
                fileType={FILE_TYPES.IMAGES}
                updateImage={data => {
                  const imageLocation = settings.indexOf(imagePickerData);
                  const newSettings = [...settings];
                  newSettings[imageLocation].value.image = data;
                  this.setState({
                    settings: newSettings,
                    imagePickerData: null
                  });
                }}
                handleModal={imagePickerData => {
                  this.setState({
                    imagePickerData
                  });
                }}
              />
            )}
          </Container>
        </Modal.Content>
        <Modal.Actions>
          <Button
            className="actionBtns"
            onClick={() => this.hidePopup(editableDataPoints)}
          >
            Cancel
          </Button>
          <Button
            className="actionBtns"
            onClick={() => this.hidePopup(settings)}
            content={"Save"}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default BaseComponentEditModal;
