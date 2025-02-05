import Header from './components/Header'
import Result from './components/Result';
import UserInput from './components/UserInput'
 import { useState } from 'react';
function App() {
  
    const [userInput1, setuserInput] = useState({
      initaialInvestment: 10000,
      annualInvestment: 1200,
      expectionreturn: 6,
      duration: 10,
    });

  function handleChange(inputIdentifier, newvalue) {
    setuserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputIdentifier]: + newvalue,
      };
    });
  }

  const inputIsvalid=userInput1.duration >=1;
  return(
    
   <>
   <Header/>
   <UserInput 
   userInput={userInput1}
   onChange={handleChange}/>
   {!inputIsvalid&&<p className='center'>please enter a duration greater then 0</p>}
   {inputIsvalid &&<Result input={userInput1}/>}

   </>
   
    
  )
}

export default App
