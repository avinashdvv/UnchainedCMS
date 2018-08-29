import React, { Component } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { isEqual } from "lodash";
import { Message } from "unchained-ui-react";

import ContainerEditor from "./ContainerEditor";
import ComponentEditor from "./ComponentEditor";
import DragAndDrop from "./DragAndDrop";

class JSONComponentBuilder extends Component {
  static propTypes = {
    components: PropTypes.object,
    jsonObj: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.currentConfigData = null;
    this.state = {
      showComponentSpecificPopup: false,
      jsonObj: props.jsonObj
    };
  }

  unchainedControlPrefix = "UnchainedCtrl";

  componentWillReceiveProps(nextProps, props) {
    if (isEqual(nextProps.jsonObj, props.jsonObj)) {
      this.setState({
        jsonObj: nextProps.jsonObj
      });
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log(this, error, errorInfo); // eslint-disable-line
  }

  buildSEOComponents = (seoObj = {}) => {
    return Object.keys(seoObj).map((k, i) => {
      const key = k.toLowerCase();
      const value = seoObj[k];

      if (key.indexOf("og") === 0) {
        const loopKey = i + 1;
        const property = key.replace(
          /(og)(.*)/,
          (originalStr, former, latter) => `${former}:${latter.toLowerCase()}`
        );
        return <meta key={loopKey} property={property} content={value} />;
      }

      let tag = null;

      switch (key) {
        case "seo_title":
          tag = <title key={Math.random()}>{value}</title>;
          break;
        case "search_description":
          tag = (
            <meta key={Math.random()} name={"description"} content={value} />
          );
          break;
        default:
          // tag = <meta key={Math.random()} name={key} content={value} />;
          break;
      }

      return tag;
    });
  };

  isUnchainedCtrl = arr => {
    const a =
      arr.find(i => i.type.indexOf(this.unchainedControlPrefix) > -1) || [];
    return a.length === arr.length;
  };

  buildChildComponents = (jsonObj, isRearrange, isCreateNew) => {
    if (!jsonObj || jsonObj.length === 0 || this.isUnchainedCtrl(jsonObj)) {
      return null;
    }
    if (isRearrange) {
      return [
        <DragAndDrop
          data={jsonObj}
          onDrag={isDragging => {
            this.setState({ isDragging });
          }}
          onDropComponent={data => {
            const cmsData = this.state.jsonObj.body;
            const newComponetData = [...cmsData];
            const totalData = cmsData.find(ele => data[0].parent_id === ele.id);
            const totalEleData = cmsData.find(
              ele => jsonObj[0].parent_id === ele.id
            );
            const dataLocation = cmsData.indexOf(totalData);
            const eleLocation = cmsData.indexOf(totalEleData);
            newComponetData[dataLocation] = totalEleData;
            newComponetData[eleLocation] = totalData;
            this.updateJsonData({
              ...this.state.jsonObj,
              body: [...newComponetData]
            });
          }}
        >
          <ContainerEditor
            isCreateNew={isCreateNew}
            componentData={jsonObj}
            jsonObj={this.state.jsonObj}
            updateJsonData={this.updateJsonData}
          >
            {this.developComponents(jsonObj)}
          </ContainerEditor>
        </DragAndDrop>
      ];
    }
    return this.developComponents(jsonObj);
  };

  developComponents(jsonObj) {
    const { components } = this.props;

    return jsonObj.map(item => {
      const componentName = item.type;

      const Element = components[componentName];
      console.log(item); // eslint-disable-line
      if (Element) {
        const children = this.buildChildComponents(
          item.value.children,
          item.isRearrange,
          item.isCreateNew
        );
        const props = JSON.parse(JSON.stringify(item.value.children));
        delete props.children;

        if (props.wrapperComponent === true) {
          return children;
        }
        if (item.isEditable) {
          return (
            <ComponentEditor
              componentData={props}
              jsonObj={this.state.jsonObj}
              updateJsonData={this.updateJsonData}
            >
              <Element data={props}>{children}</Element>
            </ComponentEditor>
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
          header={"Component work in Progress"}
          content={`We are working hard at building ${componentName} component`}
        />
      );
    });
  }

  updateJsonData = jsonData => this.setState({ jsonObj: jsonData });

  render() {
    const { jsonObj } = this.state;
    return (
      <div>
        <Helmet>{this.buildSEOComponents(jsonObj.meta)}</Helmet>
        {this.developComponents(jsonObj.body)}
      </div>
    );
  }
}

export default JSONComponentBuilder;
