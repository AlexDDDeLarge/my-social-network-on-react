import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    if (status !== props.status && !editMode) {
      setStatus(props.status)
    }
  })

  let activateEditMode = () => { 
    if (!editMode) {
      setEditMode(true);
    } else {
      setEditMode(false);
      props.updateStatus(status);
    }
  }

  let onStatusChange = e => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      <p><b>Status: </b>
      {
        !editMode && <div
          onClick={activateEditMode}
        >
          <span>{props.status || "---"}</span>
        </div>
      }
      {
        editMode && <div>
          <input
            onChange={onStatusChange}
            onBlur={activateEditMode}
            type="text"
            value={status}
          />
        </div>
      }
      </p>
    </div>    
  )
}

export default ProfileStatusWithHooks;

/* class ProfileStatus extends React.Component {
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

export default ProfileStatus; */