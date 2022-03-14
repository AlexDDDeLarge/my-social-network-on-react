import React, { useState } from "react";

/* class ProfileStatus extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {editMode: false};
  // }

  state = {
    editMode: false
  }

  activateEditMode = () => {
    if (!this.state.editMode) {
      this.setState({editMode: true});
    } else {
      this.setState({editMode: false});
    }
  }

  render() {
    return (
      <div>
        {
          !this.state.editMode && <div
            onClick={this.activateEditMode}
          >
            <span>{this.props.status}</span>
          </div>
        }
        {
          this.state.editMode && <div>
            <input
              onChange={() => {
                  this.state.editMode = false;
                }}
              type="text"
              value={this.props.status}
            />
          </div>
        }
      </div>
    )
  }
} */

let ProfileStatus = (props) => {

  let [editMode, changeEditMode] = useState(false);

  let activateEditMode = () => {
    if (!editMode) {
      changeEditMode(true);
    } else {
      changeEditMode(false);
    }
  }

  return (
    <div>
      {
        !editMode && <span
          onClick={activateEditMode}
        >{props.status}</span>
      }
      {
        editMode && <div>
          <input
            autoFocus={true}
            onBlur={activateEditMode}
            type="text"
            value={props.status}
          />
        </div>
      }
    </div>
  )
}

export default ProfileStatus;