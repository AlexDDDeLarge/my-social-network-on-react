import React, { useState } from "react";

class ProfileStatus extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {editMode: false};
  // }

  state = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
    // if (!this.state.status && !this.state.editMode) {
    //   this.setState({
    //     status: this.props.status
    //   })
    // }
  }

  activateEditMode = () => { 
    if (!this.state.editMode) {
      this.setState({editMode: true});
    } else {
      this.setState({editMode: false});
      this.props.updateStatus(this.state.status);
    }
  }

  onStatusChenge = e => {
    this.setState({status: e.currentTarget.value});
  }

  render() {
    return (
      <div>
        {
          !this.state.editMode && <div
            onClick={this.activateEditMode}
          >
            <p><b>Status: </b></p>
            <span>{this.props.status || "---"}</span>
          </div>
        }
        {
          this.state.editMode && <div>
            <input
              onChange={this.onStatusChenge}
              onBlur={this.activateEditMode}
              type="text"
              value={this.state.status}
            />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;

// let ProfileStatus = (props) => {

//   let [editMode, changeEditMode] = useState(false);

//   let activateEditMode = () => {
//     if (!editMode) {
//       changeEditMode(true);
//     } else {
//       changeEditMode(false);
//     }
//   }

//   return (
//     <div>
//       {
//         !editMode && <span
//           onClick={activateEditMode}
//         >{props.status}</span>
//       }
//       {
//         editMode && <div>
//           <input
//             autoFocus={true}
//             onBlur={activateEditMode}
//             type="text"
//             value={props.status}
//           />
//         </div>
//       }
//     </div>
//   )
// }

// export default ProfileStatus;