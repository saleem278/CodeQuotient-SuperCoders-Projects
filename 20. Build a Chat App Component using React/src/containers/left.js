import React from 'react';
import LeftHeader from "../components/left_header";
import LeftUserList from "../components/left_user_list";
export default class Left  extends React.Component
{
  render(){
    return(  
      
      <div className="left">
          <LeftHeader/>
          <LeftUserList chats={this.props.chats} onHandleUser={this.props.onHandleUser} selected={this.props.selected} myclass={this.props.myclass}/>
      </div>
    )
  }
}