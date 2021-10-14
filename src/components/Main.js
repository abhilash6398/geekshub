import React, { useState, useEffect } from "react";
import Baner from "./Baner";
import Categories from "./Categories";
import Featured from "./Featured";
import Products from "./Products";
import useToken from "./useToken";

const Main = () => {
  const userToken = useToken();
  const [baner, setBaner] = useState([]);
  const [products, setProducts] = useState([]);
  const [feature, setFeature] = useState([]);
  const [category, setCategory] = useState([]);
  

  //   const [address, setAddress] = useState();

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: userToken.token,
      },
      // body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };
    fetch("http://3.109.247.241:6678/api/product/all", requestOptions)
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData);
        // console.log(userToken.userData.data.token);

        // setAddress([...responseData.data]);
        // setBanner(responseData.banner[0].image)
        setFeature([...responseData.featuredProduct]);
        setCategory([...responseData.Categories]);
        setProducts([...responseData.product]);
        setBaner([...responseData.banner]);
        // responseData.data.map((e)=>address.push(e))
        // setAddress(...address);
        console.log("API-FeaturedProduct", feature);
        console.log("API-Categories", category);
        console.log("API-Product", products);
        console.log("API-Banner", baner);
        console.log(responseData);
      })
      // .then(response=>setAddress(response))
      // console.log(response)

      .catch((error) => console.warn(error));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="container">
      <h1>Home Page:</h1>
      {
        //   address.map(e=>

        //         <p>FirstName:{e.landmark}</p>

        //     )

        // feat.map(e=>
        //return <Product image={e.img},title={e.title}/>
        // )

        feature.map((feat) => (
          // <h3 key={feat._id}> Title: {feat.title} {feat.img}</h3>

          <Featured key={feat._id} title={feat.title}  desc={feat.desc} price={feat.price} img={feat.img}/>
        ))
        
      }
      {
        category.map((eat) => (
          // <h3 key={feat._id}> Title: {feat.title} {feat.img}</h3>

          <Categories key={eat._id} name={eat.name} icon={eat.icon}/>
        ))
      }
      {
        products.map((a) => (
          // <h3 key={feat._id}> Title: {feat.title} {feat.img}</h3>
          <Products key={a._id} title={a.title} color={a.color} img={a.img} countInStock={a.countInStock} desc={a.desc} numReviews={a.numReviews} price={a.price} rating={a.rating} size={a.size} />
        ))
      }
      {
        baner.map((x) => (
          // <h3 key={feat._id}> Title: {feat.title} {feat.img}</h3>
          <Baner key={x._id} image={x.image} url={x.url} />
        ))
      }
    </div>
  );
};

export default Main;
