import React from "react";
import RightHeader from "../components/right_header";
import RightMessages from "../components/right_messages";
import RightFixFooter from "../components/right_fix_footer";
class Right extends React.Component{
  state={
    active:false
  }
  onHandleEmoji=(value)=>{
    this.setState({active:value});
  }
  a=()=>{
    if(this.state.active===true){return "active"}
    else{
      return "inactive"
    }
  }
  render(){
    return (
      <div className="right">
        <RightHeader msgs={this.props.chats} selected={this.props.selected} />
        <RightMessages msgs={this.props.chats} selected={this.props.selected} />
        <RightFixFooter msgs={this.props.chats} selected={this.props.selected} active={this.state.active} a={this.a} onHandleEmoji={this.onHandleEmoji}/>
      </div>
    );
  }
}

export default Right;
