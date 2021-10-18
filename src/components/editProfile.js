import React, {useState, useEffect} from 'react';
import useToken from "./useToken";

function AddAddress () {

  const userToken = useToken();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function saveChanges() 
  {
    console.warn({firstName,lastName});
    let data = {firstName,lastName}
    fetch("http://3.109.247.241:6778/api/v2/customer/profile",{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        "Content-Type": "application/json",
        token: userToken.userData.data.token,
      },
      body: JSON.stringify(data)
    }).then((result)=>{
      console.warn("result",result)
    })
    }
    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     token: userToken.userData.data.token,
    //   },
    // };
    // fetch("http://3.109.247.241:6778/api/v2/customer/address", requestOptions)
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     setFirstName([...responseData.data]);
    //     console.log("Array Data in Address:", firstName);
    //     console.log(responseData.data);
    //   })
    //   .catch((error) => console.warn(error));
  return (
    <div className="container">
      <label>First Name</label>
      <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder="First Name"/>
      <br/>
      <label>Last Name</label>
      <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder="Last Name"/><br/>
      <button type="submit" className="btn btn-warning" onClick={saveChanges}>Save Changes</button>
    </div>
  )
}

export default AddAddress

