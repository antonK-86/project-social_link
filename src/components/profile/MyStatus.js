import React, { useState, useEffect } from "react";
import { Field } from "redux-form";

const MyStatus = (props) => {
  //debugger;
  let [editModeStatus, setEditMode] = useState(false);
  let [localStatus, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(localStatus);
    props.setProfileStatusThunk();
  };

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
      setEditMode(false);
      props.updateStatus(localStatus);
      props.setProfileStatusThunk();
    }
  };
  return (
    <div>
      <span>My status:</span>&nbsp;
      {props.userId === props.authId ? (
        editModeStatus ? (
          <input
            style={{
              outline: "none",
              borderRadius: "3px",
              backgroundColor: "rgb(211, 202, 202)",
              color: "rgb(71, 70, 66)",
              fontWeight: "bold",
            }}
            autoFocus={true}
            type="text"
            maxLength="40"
            onBlur={deActivateEditMode}
            onChange={onChangeStatus}
            onKeyUp={keyPress}
            value={localStatus}
          />
        ) : (
          <span
            style={{ color: "cornsilk", cursor: "pointer" }}
            onDoubleClick={activateEditMode}
          >
            {props.status}
          </span>
        )
      ) : (
        <span>{props.status}</span>
      )}
    </div>
  );
};

export default MyStatus;
