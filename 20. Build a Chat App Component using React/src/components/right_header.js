import React from "react";

function Right_Header(props) {
  let uname,udp;
  props.msgs.forEach((x,xindex)=> {
  if(x.id===props.selected){
    uname=x.name;
    udp =x.dp;
  }
});
  if(props.selected===-1){
    return <div className="nothing">Click name to see chat</div>
  }else{
    return (
      <header className="chat">
        <div className="chat_left_header">
          <a>
            <i className="fa fa-arrow-left"></i>
          </a>
          <a>
            <img src={udp} />
          </a>
          <a className="Name_lastseen">
            <p>{uname.trim()}</p>
            <small>online</small>
          </a>
        </div>
        <div className="chat_right_header">
          <a>
            <i className="fa fa-video-camera" aria-hidden="true"></i>
          </a>
          <a>
            <i className="fa fa-phone" aria-hidden="true"></i>
          </a>
          <a>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </a>
        </div>
      </header>
  );}
}

export default Right_Header;
