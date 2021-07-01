import React from 'react';
import Left from "./containers/left";
import Right from "./containers/right";
var chats = [
  {
    id:0,
    dp:"./images/apk.jpg",
    name: "Saleem",
    messages: ["Hello", "Hi Boss", "kya haal chaal", "Bdhia hai aap sunaiye"],
  },
  {
    id:1,
    dp:"./images/azhar.JPG",
    name: "Azhar",
    messages: ["Hello", "Hi", "How are you", "I'm fine you tell"],
  },
  {
    id:2,
    dp:"./images/shubham.jpg",
    name: "Shubham",
    messages: ["Hello", "Hi", "How are you", "I'm fine you tell"],
  },
  {
    id:3,
    dp:"./images/raman.jpg",
    name: "Raman",
    messages: ["Hello", "Hi", "How are you", "I'm fine you tell"],
  },
  {
    id:4,
    dp:"./images/aashish.jpg",
    name: "Aashish",
    messages: ["Hello", "Hi", "How are you", "I'm fine you tell"],
  },
  {
    id:5,
    dp:"./images/rahul.jpg",
    name: "Rahul",
    messages: ["Hello", "Hi", "How are you", "I'm fine you tell"],
  },
  {
    id:6,
    dp:"./images/harbir.jpg",
    name: "Harbir",
    messages: ["Hello", "Hi", "How are you", "I'm fine you tell"],
  },
  {
    id:7,
    dp:"./images/abhi.jpg",
    name: "Abhishek",
    messages: ["Hello", "Hi", "How are you", "I'm fine you tell"],
  },
  {
    id:8,
    dp:"./images/jaiveer.jpg",
    name: "Jaiveer",
    messages: ["Hello", "Hi", "How are you", "I'm fine you tell"],
  },
  {
    id:9,
    dp:"./images/sumit.jpg",
    name: "Sumit",
    messages: ["Hello", "Hi", "How are you", "I'm fine you tell"],
  },
  {
    id:10,
    dp:"./images/apk2.jpg",
    name: "Sachin",
    messages: ["Hello", "Hi", "How are you", "I'm fine you tell"],
  }
];
export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      selected:-1,
      myclass:"",
    }
  }
    onHandleUser = (value,myclass)=>{
      this.setState({selected:value,myclass:myclass});
    }

  render(){
    return (
    <div className="App">
      <Left chats={chats} onHandleUser={this.onHandleUser} selected={this.state.selected} myclass={this.state.myclass} />
      <Right chats={chats} selected={this.state.selected}/>
    </div>
  );
  } 
}
