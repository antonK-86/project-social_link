import React from "react";

const MyStatus = (props) => {
  return (
    <div>
      My status:<span>{" " + props.status}</span>
    </div>
  );
};

export default MyStatus;
