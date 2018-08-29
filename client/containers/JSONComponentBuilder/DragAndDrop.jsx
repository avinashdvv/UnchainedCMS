import React from 'react';
import { flow, isEqual } from 'lodash';
import classNames from 'classnames';
import { DragSource, DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class DragAndDrop extends React.Component { // eslint-disable-line
  shouldComponentUpdate(nextProps, props) {
    return !isEqual(nextProps, props);
  }
  render() {
    const { connectDragSource, connectDropTarget, children, isOver, isDragging } = this.props; // eslint-disable-line
    const styles = {
      width: '100%'
    };
    return (
      <div className="drag-and-drop" style={styles}>
        {
          connectDragSource(connectDropTarget(
            <div
              className={
                classNames(
                  'edit-component',
                  {
                    hover: isOver,
                    dragging: isDragging,
                  }
                )
              }
            >
              {children}
            </div>
          ))
        }
      </div>
    );
  }
}

const DragAndDropComponent = flow(
  DragSource(
    'DragAndDrop',
    {
      beginDrag(props) {
        props.onDrag(true);
        return {
          ...props,
        };
      },
      endDrag(props) {
        props.onDrag(false);
        return {
          props,
        };
      }
    },
    (connect, monitor) => {
      return {
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging()
      };
    }
  ),
  DropTarget(
    'DragAndDrop',
    {
      drop(targetProps, monitor) {
        const prevProps = monitor.getItem();
        targetProps.onDropComponent(prevProps.data);
        return targetProps;
      },
      hover(props) {
        // const prevProps = monitor.getItem();
        // props.onDropComponent(prevProps.data);
        return {
          ...props,
          isHover: true,
        };
      }
    },
    (connect, monitor) => ({
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
    })
  ),
)(DragAndDrop);

export default DragDropContext(HTML5Backend)(DragAndDropComponent);
