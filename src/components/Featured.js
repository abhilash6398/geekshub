import React from "react";

const Featured = (props) => {
    const {title, desc,price,img} = props;
  return (
    <div>
      <div className="container">
        <h1>Feature Products</h1>
        <br/>

        {/* {/ <img src={image} alt=" "/> /} */}
        <div className="XYZ">
            <img src={img} alt="" />
        </div>
        <div className="XYZ" style={{marginLeft:"50px"}}>
            <h3>{title}</h3>
            <h5>{desc}</h5>
            <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Featured;
