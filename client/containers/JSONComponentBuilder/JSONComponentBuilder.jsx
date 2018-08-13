import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { isEqual, map, cloneDeep } from 'lodash';
import {
  Message,
  Icon,
  Button,
} from 'unchained-ui-react';


import BaseComponentEditModal from './BaseComponentEditModal';
import ComponentRearrangeModal from './ComponentRearrangeModal';

class JSONComponentBuilder extends Component {
  static propTypes = {
    components: PropTypes.object,
    jsonObj: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.currentConfigData = null;
    this.state = {
      showComponentSpecificPopup: false,
      jsonObj: props.jsonObj,
    };
  }

  unchainedControlPrefix = 'UnchainedCtrl';

  componentWillReceiveProps(nextProps, props) {
    if (isEqual(nextProps.jsonObj, props.jsonObj)) {
      this.setState({
        jsonObj: nextProps.jsonObj,
      });
    }
  }

  buildSEOComponents = (seoObj = {}) => {
    return Object.keys(seoObj).map((k, i) => {
      const key = k.toLowerCase();
      const value = seoObj[k];

      if (key.indexOf('og') === 0) {
        const loopKey = i + 1;
        const property = key.replace(/(og)(.*)/, (originalStr, former, latter) => `${former}:${latter.toLowerCase()}`);
        return <meta key={loopKey} property={property} content={value} />;
      }

      let tag = null;

      switch (key) {
        case 'seo_title':
          tag = <title key={Math.random()}>{value}</title>;
          break;
        case 'search_description':
          tag = <meta key={Math.random()} name={'description'} content={value} />;
          break;
        default:
          // tag = <meta key={Math.random()} name={key} content={value} />;
          break;
      }

      return tag;
    });
  }

  isUnchainedCtrl = (arr) => {
    const a = arr.find(i => i.type.indexOf(this.unchainedControlPrefix) > -1) || [];
    return (a.length === arr.length);
  }

  buildChildComponents(jsonObj, isEditable) {
    if (!jsonObj || jsonObj.length === 0 || this.isUnchainedCtrl(jsonObj)) {
      return null;
    }
    if (isEditable) {
      return (
        <div className="unchainedEditableEl parentEl">
          {this.developComponents(jsonObj)}
          <div className="unchainedEditableBtn">
            <Button
              icon
              className="editButtonUnchainedEditableEl"
              onClick={() => {
                this.setState({
                  componentRearrangeData: jsonObj,
                  componentType: jsonObj[0].type,
                });
              }}
            >
              <Icon name="setting" />
            </Button>
          </div>
        </div>
      );
    }
    return this.developComponents(jsonObj);
  }

  showComponentSpecificPopup = (props) => {
    this.setState({ showComponentSpecificPopup: true, editableDataPoints: props });
  }

  developComponents(jsonObj) {
    const {
      components,
    } = this.props;

    return jsonObj.map((item) => {
      const componentName = item.type;

      const Element = components[componentName];

      if (Element) {
        const children = this.buildChildComponents(item.value.children, item.isEditable);
        const props = JSON.parse(JSON.stringify(item.value.children));
        delete props.children;

        if (props.wrapperComponent === true) {
          return children;
        }
        if (item.isEditable) {
          return (
            <div className="unchainedEditableEl">
              <div className="unchainedEditableBtn">
                <Button icon className="editButtonUnchainedEditableEl" onClick={() => this.showComponentSpecificPopup(props)}>
                  <Icon name="edit" />
                </Button>
              </div>
              <Element data={props}>{children}</Element>
            </div>
          );
        }
        return <Element data={props}>{children}</Element>;
      }

      if (item.type.indexOf(this.unchainedControlPrefix) > -1) {
        return null;
      }

      return (
        <Message
          warning
          header={'Component work in Progress'}
          content={`We are working hard at building ${componentName} component`}
        />
      );
    });
  }

  hidePopup = () => {
    this.setState({ showComponentSpecificPopup: false, editableDataPoints: null });
  }

  updateNode = (data, nodeId, changedData) => {
    if (Array.isArray(data)) {
      data.map(item => {
        if (item.id === nodeId) {
          item.value.children = changedData; // eslint-disable-line
        }
        return this.updateNode(item.value.children, nodeId, changedData);
      });
    }
  }

  updateCMDData = async (data) => {
    const { jsonObj } = this.state;
    // let updatedjsonObj = { ...jsonObj };
    if (data) {
      this.updateNode(jsonObj.body, data[0].parent_id, data);
    }
    this.setState({
      jsonObj: {
        ...jsonObj,
      }
    });
    this.hidePopup();
  }
  render() {
    const {
      showComponentSpecificPopup,
      componentRearrangeData,
      componentType,
      editableDataPoints,
      jsonObj,
    } = this.state;
    const {
      components
    } = this.props;
    return (
      <div>
        <Helmet>
          {this.buildSEOComponents(jsonObj.meta)}
        </Helmet>
        {this.developComponents(jsonObj.body)}
        {
          showComponentSpecificPopup ?
            <BaseComponentEditModal
              editableDataPoints={editableDataPoints}
              cancelCB={this.updateCMDData}
            />
            : null
        }
        {
          componentRearrangeData &&
          <ComponentRearrangeModal
            data={componentRearrangeData}
            type={componentType}
            components={components}
            hidePopup={(data) => {
              const updatedjsonObj = { ...jsonObj };
              if (data) {
                const changedData = jsonObj.body.find((e) => (e.id === data[0].parent_id));
                const changedDataLocation = changedData && jsonObj.body.indexOf(changedData);
                if (changedDataLocation >= 0) {
                  updatedjsonObj.body[changedDataLocation].value.children = data;
                }
              }
              this.setState({
                componentRearrangeData: null,
                jsonObj: updatedjsonObj,
              });
            }}
          />
        }
      </div>
    );
  }
}

export default JSONComponentBuilder;
