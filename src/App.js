import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Button from './component/Button'



function App() {
  let[text,setText] =useState("abc");
let[list,setList] =useState([]);
let add = () =>{
  list.push(text);
  setList([...list])
};
let deleteItem = (i) =>{
  list.splice(i,1)
  setList([...list])
};
let editItem = (e,i) =>{
  let newValue = prompt("Edit the text", e);
  list[i] = newValue;
  setList([...list])
};
let deleteAll = () =>{
  setList([]);
};
  return (
    <div className="App">
      <header className="App-header">
    <input onChange={(e) => {
     setText(e.target.value);
     console.log(setText)
    }}></input>
    <Button btnValue = "Add" func= {add} class="add" />
    <Button btnValue = "Delete All" func= {deleteAll} class="delete" />
    <ul>
      {
list.map((e,i) => {
return <li key= {i} className= "list">{e}<Button btnValue = "Edit" class="edit" func= {() => editItem(e,i)} />
<Button btnValue = "Delete" class="delete" func= {() => deleteItem(i)} /></li>
})
}
    </ul>
      </header>
    </div>
  );
}

export default App;
