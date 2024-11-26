import UserInput from './component/UserInput';
import Header from './component/Header';
import Results from './component/Results';
import { useState } from "react"

function App() {
  let [userinput,setuserinput]= useState({
    "initialInvestment":10000,
    "annualInvestment":1200,
    "expectedReturn":6,
    "duration":10,
})

function handlechange(inputidentifier,newvalue){
    setuserinput((previnput)=>{
      return{
        ...previnput,
        [inputidentifier]:+newvalue,
      }
    })
}

let inputisvalid= userinput.duration>=1;
  return (
  <>
 <Header></Header>
 <UserInput
 change={handlechange}
 ip={userinput}></UserInput>
 {inputisvalid ? <Results input={userinput}></Results> : <p className='center'>Please enter a durtion greater than 0</p>}

 </>

  )
}

export default App
