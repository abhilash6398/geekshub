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
        "token": userToken.userData.data.token,
      },
      // body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };
    fetch("http://3.109.247.241:6778/api/v2/customer/address", requestOptions)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        console.log(userToken.userData.data.token);
        console.log(responseData.data);
      })
      // .then(response=>setAddress(response))
      // console.log(response)

      .catch((error) => console.warn(error));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  },);

  return address.map(a => (
    <div>
      <h1>Address Listing:</h1>
      firstName:{a.data.firstName};
    </div>
  ))
};

export default Address
