import React, { useState, useEffect } from "react";
import useToken from "./useToken";

const Address = () => {
  const userToken = useToken();
  const [address, setAddress] = useState([]);

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: userToken.userData.data.token,
      },
      // body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };
    fetch("http://3.109.247.241:6778/api/v2/customer/address", requestOptions)
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData);
        // console.log(userToken.userData.data.token);

        setAddress([...responseData.data]);

        // responseData.data.map((e)=>address.push(e))
        // setAddress(...address);
        console.log("Array Data in Address:", address);
        console.log(responseData.data);
      })
      // .then(response=>setAddress(response))
      // console.log(response)

      .catch((error) => console.warn(error));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="container">
      <div className="col-xd-6">
        <div
          className="col-sm-2"
          style={{
            textAlign: "right",
            marginLeft: "750px",
            fontStyle: "initial",
          }}
        >
          <br />
          <button className="btn btn-warning">
            <a
              href="/addaddress"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              ADD ADDRESS
            </a>
          </button>
        </div>
      </div>
      <div
        className="card col-xd-6"
        style={{ marginLeft: "25px", width: "50%", textAlign: "left" }}
      >
        {/* <h1>Address Listing: </h1> */}
        {address.map((data) => (
          <span>
            Name: {data.firstName} {data.lastName}{" "}
          </span>
        ))}
        <br />
        {address.map((data) => (
          <span key={data._id}>Address: {data.address} </span>
        ))}
        <br />
        {address.map((data) => (
          <span key={data._id}>Mobile Number: {data.mobile} </span>
        ))}
      </div>
    </div>
  );
};

export default Address;

// return address.map(a=>
//     <div>
//         <h1>Address Listing:</h1>
//         Address:{a.fullName};
//     </div>
