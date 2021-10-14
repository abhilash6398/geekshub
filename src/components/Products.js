import React from "react";

const Products = (props) => {
    const {color,countInStock,desc,img,numReviews,price,rating,size,title} = props;
  return (
    <div>
      <div className="container">
        <h1>Productt Page</h1>
        <br/>

        {/* {/ <img src={image} alt=" "/> /} */}
        <div className="XYZ">
            <img src={img} alt="" />
        </div>
        <div className="XYZ" style={{marginLeft:"15px"}}>
            <h3>Title: {title}</h3>
            <p>Color : {color}</p>
            <p>countInStock: {countInStock}</p>
            <p>Desc: {desc}</p>
            <p>Reviews: {numReviews}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <p>Size: {size}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
