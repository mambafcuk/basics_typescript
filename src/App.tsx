import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/Welcome';
import { ToggleButton } from './components/ToggleButton';
import { UserForm } from './components/UserForm';


function Sum(a: number, b:number){
  return a+b
}


// Function Component

interface IProps{
  a: number;
  b: number;
}


function SumComponent(props: IProps){
  return <>{props.a+props.b}</>
}

function App() {

  const value = Sum(6,5)
  return (
    <div className="App">
      <header className="App-header">
       <div>
        
        Sum of two numbers : {value}

        <br></br>

        Sum of two numbers using Function Component : <SumComponent a={5} b={7}/>


        <br></br>

        Sum of two numbers using Function Component using Destructioning : <Welcome name={"Devil"}/>


        <br></br>
        Toggle Button : <ToggleButton />


        <br></br>

        User Form :
        <br></br>
        <UserForm/>
       </div>
      </header>
    </div>
  );
}

export default App;
