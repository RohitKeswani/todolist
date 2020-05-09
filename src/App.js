import React from 'react';
import './App.css';
import ListItems from './ListItems'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      items:[],
      currentItem :{
        text :'',
        key :''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items : filteredItems
    })    
  }


  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    // console.log(newItem);
    if(newItem.text!==""){
      const newItems =[...this.state.items, newItem];
      this.setState({
        items :newItems,
        currentItem :{
          text:'',
          key:''
        }
      })
    }
  }

  setUpdate(text, key){
    const updatedText = text;
    const items = this.state.items;
    items.map(item=> 
      {
        if(item.key === key){
          item.text = updatedText;
        }
      }
      )
    this.setState({
      items:items
    })
  }

  render(){
    return (
      <div className ="App">
        <h3 id ="title">Your own To-Do List</h3>
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type ="text" placeholder ="Enter your task here" value={this.state.currentItem.text} 
            onChange={this.handleInput}/>
            <button type ="submit">Add Task</button>
          </form>
        </header>
        <ListItems items = {this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}></ListItems>
      </div>
    );
  }
}

export default App;