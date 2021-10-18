import React, { useState, useEffect } from "react";
import useToken from "./useToken";

const GetProfile = () => {
  const userToken = useToken();
  const [user, setUser] = useState([]);

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
    fetch("http://3.109.247.241:6778/api/v2/customer/profile", requestOptions)
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData);
        // console.log(userToken.userData.data.token);

        setUser([userToken.userData.data]);

        // responseData.data.map((e)=>address.push(e))
        // setAddress(...address);
        console.log("Array Data in Address:", user);
        console.log(userToken.userData.data.user);
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
              href="/editProfile"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Edit Profile
            </a>
          </button>
        </div>
      </div>
      <div
        className="card col-xd-6"
        style={{ marginLeft: "25px", width: "50%", textAlign: "left" }}
      >
        {/* <h1>Address Listing: </h1> */}
        {user.map((data) => {
          return (
            <div className="card">
              <p>
                First Name: {data.user.firstName} 
              </p><br/>
              <p>
                Last Name: {data.user.lastName} 
              </p><br/>
              <p>
                Username: {data.user.username} 
              </p><br/>
              <p>
                Email: {data.user.email} 
              </p><br/>
              <br/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetProfile;

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
