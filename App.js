import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const[enteredTasks,setEnteredTasks] = useState([]);
  const[value,setValue] = useState('');
  const[completedTasks,setCompletedTasks] = useState([]);
  const[uncompletedTask,setUnCompletedTask] = useState([]);

  const handleInput = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  const handleClickButton = (event) => {
    if(!value){
      return;
    }

    if(enteredTasks.includes(value))
    return;
    
    //dodijeljivanje value variable nizu
    setEnteredTasks(state => [
      ... state,
      value
    ]);
    setValue('');
    //console.log(enteredTasks);
  }

  /*const handleCompletedOptionItem = (event) => {
    const item = event.target.value;
    setItem(item);
  }
  */

  const handleCompleteClick = (task) => {
    setEnteredTasks(prevState => prevState.filter((et)=>{
      if(et == task)
      return false;
      return true;
    }));
    setCompletedTasks((prevState) => {
      const retVal = [];
      for(let i = 0;i<prevState.length;i++){
        retVal.push(prevState[i]);
      } 
      retVal.push(task);

      return retVal;
    })
  }

  const handleUncompletedClick = (task) => {
    setEnteredTasks(prevState => prevState.filter((et)=>{
      if(et == task)
      return false;
      return true;
    }));
    setUnCompletedTask((prevState) => {
      const retVal2 = [];
      for(let i = 0;i<prevState.length;i++){
        retVal2.push(prevState[i]);
      } 
      retVal2.push(task);

      return retVal2;
    })
  }

 

 
  return (
    <div className="App">
     
     <div className="headerPart">
       <h1>React ToDo</h1>
       <hr></hr>
     </div>
     <div className="taskPart">
       <input className = "enteringTasks" placeholder = "Enter your task:" onChange = {handleInput} value = {value}></input>
       <button className = "addTasks" onClick = {handleClickButton}>Add tasks</button>
       
       <ul>
       {enteredTasks.map((task,index) => (
         <li className = 'taskElement' key={index}>{task}
         <select onChange = {(e)=>{
           switch(e.target.value){
             
             case 'uncompleted' : handleUncompletedClick(task);
             break;
             case 'completed' : handleCompleteClick(task);
             break;
             default : 
             break;
           }
        }} defaultValue = 'none'>
         <option value="none" >Please choose...</option>
         <option value = 'completed'>Completed</option>
         <option value = 'uncompleted'>Uncompleted</option>
       </select>
          </li>
        ))}
       </ul>
     </div>

     <div className="completedTasks">
       <u><h3>Completed tasks:</h3></u>
       <ul>
       {completedTasks.map((element,index) => (
          <li className = 'taskElement' key={index}>{element} </li>
        ))}
       </ul>
     </div>

     <div className="unCompletedTasks">
       <u><h3>Uncompleted tasks:</h3></u>
       <ul>
       {uncompletedTask.map((element,index) => (
          <li className = 'uncompletedTask' key={index}>{element} </li>
        ))}
       </ul>
     </div>

    </div>
  );
}

export default App;
