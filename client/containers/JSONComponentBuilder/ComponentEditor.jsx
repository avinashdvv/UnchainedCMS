import React from "react";
import PropTypes from "prop-types";

import { Icon, Button } from "unchained-ui-react";

// import { updateCMDData } from 'api/auth';

import BaseComponentEditModal from "./BaseComponentEditModal";

class ComponentEditor extends React.Component {
  static propTypes = {
    jsonObj: PropTypes.object,
    children: PropTypes.object,
    updateJsonData: PropTypes.func,
    componentData: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      showComponentSpecificPopup: false
    };
  }

  hidePopup = () => {
    this.setState({
      showComponentSpecificPopup: false,
      editableDataPoints: null
    });
  };

  showComponentSpecificPopup = props => {
    this.setState({
      showComponentSpecificPopup: true,
      editableDataPoints: props
    });
  };

  updateNode = (data, nodeId, changedData) => {
    if (Array.isArray(data)) {
      data.map(item => {
        if (item.id === nodeId) {
          item.value.children = changedData; // eslint-disable-line
        }
        return this.updateNode(item.value.children, nodeId, changedData);
      });
    }
  };

  updateCMDData = async data => {
    const { jsonObj, updateJsonData } = this.props;
    if (data) {
      this.updateNode(jsonObj.body, data[0].parent_id, data);
    }
    // await updateCMDData(
    //   jsonObj.id,
    //   {
    //     type: jsonObj.meta.type,
    //     body: jsonObj.body,
    //   }
    // );
    updateJsonData({
      ...jsonObj
    });
    this.hidePopup();
  };

  render() {
    const { showComponentSpecificPopup, editableDataPoints } = this.state;
    const { children, componentData } = this.props;
    return (
      <div className="unchainedEditableEl">
        <div className="unchainedEditableBtn">
          <Button
            icon
            className="editButtonUnchainedEditableEl"
            onClick={() => this.showComponentSpecificPopup(componentData)}
          >
            <Icon name="edit" />
          </Button>
        </div>
        {children}
        {showComponentSpecificPopup && (
          <BaseComponentEditModal
            editableDataPoints={editableDataPoints}
            cancelCB={this.updateCMDData}
          />
        )}
      </div>
    );
  }
}

export default ComponentEditor;
