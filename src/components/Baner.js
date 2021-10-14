import React from "react";

const Baner = (props) => {
    const {image,url} = props;
  return (
    <div>
      <div className="container">
        <h1>Banner Page</h1>
        <br/>

        {/* {/ <img src={image} alt=" "/> /} */}
        <div className="XYZ">
            <img src={image} alt="" />
        </div>
        <div className="XYZ" style={{marginLeft:"50px"}}>
            <h3>{url}</h3>
        </div>
      </div>
    </div>
  );
};

export default Baner;
