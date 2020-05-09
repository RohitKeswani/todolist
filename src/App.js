import React from 'react';
import './App.css';

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
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems =[...this.state.items, newItem];
      this.setState({
        item :newItems,
        currentItem :{
          text:'',
          key:''
        }
      })
    }
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
      </div>
    );
  }
}

export default App;
