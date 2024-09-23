
import { useState } from 'react';
import ButtonComponent from './Components/ButtonComponent';
import NavBarComponents from './Components/NavBarComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal]=useState(0);
  const [firstNumber, setFirstNumber]=useState(null);
  const [operator, setOperator]=useState(null);
  const [secondNumber, setSecondNumber]=useState(null);

  const handleChange=(charToAdd)=>{
    if (operator == null){
      if (firstNumber==null){  
        // Je verifie que mon caractere est un point 
      setFirstNumber(charToAdd);
      setTotal(charToAdd);
    } else{
      if (charToAdd == "."){
        // Verifie que mon firstNumber ne contient pas de point
        if (!firstNumber.toString().includes(".")){
          setFirstNumber(firstNumber+''+charToAdd);
          setTotal(total+''+charToAdd);
        }
        // Je fais mon setNumber si mon caractere n'est pas un point 
      } else{
        setFirstNumber(firstNumber+''+charToAdd);
        setTotal(total+''+charToAdd);
      }
    }
  } else{
    if (secondNumber==null){
      setSecondNumber(charToAdd);
      setTotal(total+''+charToAdd);
    } else{
      if (charToAdd == "."){
        // Verifie que mon firstNumber ne contient pas de point
        if (!secondNumber.toString().includes(".")){
          setSecondNumber(secondNumber+''+charToAdd);
          setTotal(total+''+charToAdd);
        }
        // Je fais mon setNumber si mon caractere n'est pas un point 
      } else{
        setSecondNumber(secondNumber+''+charToAdd);
        setTotal(total+''+charToAdd);
      }
    }
  }
}

const calculate=()=>{
  switch(operator){
    case "+":
      setTotal(parseFloat(firstNumber) + parseFloat(secondNumber));
      setFirstNumber(parseFloat(firstNumber) + parseFloat(secondNumber));
      setSecondNumber(null);
      setOperator(null);
      break;
    case "-":
      setTotal(parseFloat(firstNumber) - parseFloat(secondNumber));
      setFirstNumber(parseFloat(firstNumber) - parseFloat(secondNumber));
      setSecondNumber(null);
      setOperator(null);
      break;
    case "*":
      setTotal(parseFloat(firstNumber) * parseFloat(secondNumber));
      setFirstNumber(parseFloat(firstNumber) * parseFloat(secondNumber));
      setSecondNumber(null);
      setOperator(null);
      break;
    case "/":
      if (secondNumber != "0"){
        setTotal(parseFloat(firstNumber) / parseFloat(secondNumber));
        setFirstNumber(parseFloat(firstNumber) / parseFloat(secondNumber));
        setSecondNumber(null);
        setOperator(null);
      }else{
        setTotal("Erreur")
      }
      break;
    case "%":
      if (secondNumber != "0"){
        setTotal(parseFloat(firstNumber) % parseFloat(secondNumber));
        setFirstNumber(parseFloat(firstNumber) % parseFloat(secondNumber));
        setSecondNumber(null);
        setOperator(null);
      }else{
        setTotal("Erreur")
      }
      break;
    default:
      console.log("Calcul impossible");
      break;
  }
}

const checkIfOperatorIsInTotal=(charactere)=>{
  if (!total.toString().includes('%')&& !total.toString().includes('/')&& !total.toString().includes('*')
    && !total.toString().includes('+')&& !total.toString().includes('-')) {
    setTotal(total+charactere);
  }
}


  return  <>
    <NavBarComponents />
    {/* <h1>Application</h1>
    <p>Count : {count}</p>
    <button className="grey" onClick={()=>{setCount(count+1)}}>Increment</button>
    
    {count>0 && <button onClick={()=>{setCount(count-1)}}>Decrement</button>}

    <ButtonComponent classN='grey' functionToDo={()=>{setCount(count+10)}} text='+10'/>
    <ButtonComponent classN='orangeRed' functionToDo={()=>{setCount(count+20)}} text='+20'/> */}
    {firstNumber}
    {operator}
    {secondNumber}

    <div className='d-flex flex-column align-items-center mt-3 gap-2'>
      <div className="col-6">
    <InputGroup className="mb-3 col-6">
        <InputGroup.Text id="basic-addon1">Calcul :</InputGroup.Text>
        <Form.Control
          aria-describedby="basic-addon1"
          disabled
          value={total}
        />
      </InputGroup>
      </div>
      <div className='col-6 d-flex gap-3 justify-content-center'>
      <Button variant="outline-secondary" className="col-6">AC</Button>{' '}
      <Button variant="outline-secondary"className="col-3"onClick={()=>{setOperator('%');checkIfOperatorIsInTotal("%")}}>%</Button>{' '}
      <Button variant="outline-info"className="col-3"onClick={()=>{setOperator('/');checkIfOperatorIsInTotal("/")}}>/</Button>{' '}
      </div>
      <div className='col-6 d-flex gap-3 justify-content-center mb-2'>
      <Button variant="outline-secondary" className="col-3" onClick={()=>{handleChange(7)}}>7</Button>{' '}
      <Button variant="outline-secondary"className="col-3"onClick={()=>{handleChange(8)}}>8</Button>{' '}
      <Button variant="outline-secondary"className="col-3"onClick={()=>{handleChange(9)}}>9</Button>{' '}
      <Button variant="outline-info"className="col-3"onClick={()=>{setOperator('+');checkIfOperatorIsInTotal("+")}}>+</Button>{' '}
      </div>
      <div className='col-6 d-flex gap-3 justify-content-center mb-2'>
      <Button variant="outline-secondary" className="col-3"onClick={()=>{handleChange(4)}}>4</Button>{' '}
      <Button variant="outline-secondary"className="col-3"onClick={()=>{handleChange(5)}}>5</Button>{' '}
      <Button variant="outline-secondary"className="col-3"onClick={()=>{handleChange(6)}}>6</Button>{' '}
      <Button variant="outline-info"className="col-3"onClick={()=>{setOperator('-');checkIfOperatorIsInTotal("-")}}>-</Button>{' '}
      </div>
      <div className='col-6 d-flex gap-3 justify-content-center mb-2'>
      <Button variant="outline-secondary" className="col-3"onClick={()=>{handleChange(1)}}>1</Button>{' '}
      <Button variant="outline-secondary"className="col-3"onClick={()=>{handleChange(2)}}>2</Button>{' '}
      <Button variant="outline-secondary"className="col-3"onClick={()=>{handleChange(3)}}>3</Button>{' '}
      <Button variant="outline-info"className="col-3"onClick={()=>{setOperator('*');checkIfOperatorIsInTotal("*")}}>*</Button>{' '}
      </div>
      <div className='col-6 d-flex gap-3 justify-content-center'>
      {/* <Button variant="outline-warning">7</Button>{' '} */}
      <Button variant="outline-danger"className="col-3">Delete</Button>{' '}
      <Button variant="outline-secondary"className="col-3"onClick={()=>{handleChange(0)}}>0</Button>{' '}
      <Button variant="outline-secondary"className="col-3"onClick={()=>{handleChange(".")}}>.</Button>{' '}   
      <Button variant="outline-success" className="col-3" onClick={calculate}>=</Button>{' '}
      </div>
    </div>
  </>;
}

export default App;
