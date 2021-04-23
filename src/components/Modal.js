import React, { useState } from "react";

function Modal(props) {
  const { currentJob,setOpen } = props;

  console.log('----',currentJob);

  const {job_name,job_id}=currentJob;

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgba(200,200,100,.5)",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        zIndex: "10",
      }}
    >
      <div
        style={{
          width: "200px",
          border: "2px solid",
          alignSelf: "center",
          //   alignItems:"center"
        }}
      >
        <h2>Job Detail</h2>
        <p>{job_id}{job_name}</p>
        <button onClick={()=>{setOpen(false)}}>close</button>
      </div>
    </div> 
  );
}

export default Modal;
