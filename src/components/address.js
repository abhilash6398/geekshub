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
    <>
      <div className="pgaddressrow">
        <h1 className="heading">Saved Address</h1>
        <h4 className="smheading">
          <a href="/home" style={{ textDecoration: "none" }}>
            Home
          </a>{" "}
          / Saved Address
        </h4>
      </div>
      <div className="container">
        <div className="col-xd-6">
          <div
            className="col-sm-2"
            style={{
              textAlign: "right",
              marginLeft: "975px",
              padding: "20px",
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
          className="card col-xd-12"
          style={{ marginLeft: "25px", width: "100%", textAlign: "left" }}
        >
          {/* <h1>Address Listing: </h1> */}
          {address.map((data) => {
            return (
              <>
                <div className="container">
                  <div className="profilinputs">
                    <div className="imvendwrap">
                      <div className="row clearfix">
                        <div className="nameconbox">
                          <h4>
                            Full Name: {data.firstName} {data.lastName}
                          </h4>
                        </div>
                        <div className="nameconbox">
                          <h4>Address: {data.address}</h4>
                          <h5> Landmark: {data.landmark}</h5>
                          <h6> City: {data.city}</h6>
                          <p> State: {data.state}</p>
                          <p> Pincode: {data.pincode}</p>
                        </div>
                        <div className="nameconbox">
                          <h4>Mobile: {data.mobile}</h4>
                        </div>
                        {/* <div className="nameconbox">
                      <button className="btn btn-primary">EDIT</button> | 
                      <button className="btn btn-danger">DELETE</button>
                    </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Address;

// return address.map(a=>
//     <div>
//         <h1>Address Listing:</h1>
//         Address:{a.fullName};
//     </div>

// {address.map((data) => (
//   <span>
//     Name: {data.firstName} {data.lastName}{" "}
//   </span>
// ))}
