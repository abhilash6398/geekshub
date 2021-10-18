import React, { Component } from "react";
// import "../../style/Mainn.css";
// import "../assets/css/style.css";

class Mainn extends Component {
  constructor(){
    super();
    this.state={
      Mainn: []
    };
  }

  componentDidMount(){
    fetch("/posterPage")
    .then(response=>{
      if(!response.ok){
        throw Error("Error fetching")
      }
      return response.json()
    })
    .then(allData=>{
      this.setState({Mainn: allData});
    })
    .catch(err=>{
      throw Error (err.message);
    })
  }

  render(){
    return(
      <section className="xyz">
        <p>Hello</p>
      </section>
    )
  }
}

export default Mainn;
