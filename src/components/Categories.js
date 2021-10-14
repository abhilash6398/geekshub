import React from "react";

const Categories = (props) => {
    const {icon,name} = props;
  return (
    <div>
      <div className="container">
        <h1>Categories</h1>
        <br/>

        {/* {/ <img src={image} alt=" "/> /} */}
        <div className="XYZ">
            <img src={icon} alt="" />
        </div>
        <div className="XYZ" style={{marginLeft:"50px"}}>
            <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
