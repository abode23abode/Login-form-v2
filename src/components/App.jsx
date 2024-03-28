import React, { useState } from "react";

function App() {
  const [fullName,currentFullNAME]=useState({

    fName:"",
    lName:""
  });
  
function changeFullName(event){
  
// const newValue=event.target.value;
// const inputName=event.target.name;

const {value,name}=event.target;

currentFullNAME((preValue)=>{
if(name==="fName"){
  return{
    fName:value,
    lName:preValue.lName
  };
}else if(name==="lName"){
  return{
    fName:preValue.fName,
    lName:value
  };
}
})

}



  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange={changeFullName} name="fName" placeholder="First Name" value={fullName.fName} />
        <input onChange={changeFullName} name="lName" placeholder="Last Name" value={fullName.lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
