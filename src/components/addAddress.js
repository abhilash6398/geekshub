import React, {useState, useEffect} from 'react';
import useToken from "./useToken";

function AddAddress () {

  const userToken = useToken();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [mobile, setMobile] = useState("");

  function saveChanges() 
  {
    console.warn({firstName,lastName,address,city,state,pincode,landmark,mobile});
    let data = {firstName,lastName,address,city,state,pincode,landmark,mobile}
    fetch("http://3.109.247.241:6778/api/v2/customer/address",{
      method:'POST',
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
      <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder="First Name: "/>
      <br/>
      <label>Last Name</label>
      <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder="Last Name: "/><br/>
      <label>Address</label>
      <input type="textarea" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="Address: "/><br/>
      <label>Pincode</label>
      <input type="number" value={pincode} onChange={(e)=>{setPincode(e.target.value)}} placeholder="Pincode: "/><br/>
      <label>City</label>
      <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} placeholder="City: "/><br/>
      <label>State</label>
      <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}} placeholder="State: "/><br/>
      <label>Landmark</label>
      <input type="text" value={landmark} onChange={(e)=>{setLandmark(e.target.value)}} placeholder="Landmark: "/><br/>
      <label>Mobile NUmber</label>
      <input type="number" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} placeholder="Mobile: "/><br/>
      <button type="submit" className="btn btn-warning" onClick={saveChanges}>Save Changes</button>
    </div>
  )
}

export default AddAddress

