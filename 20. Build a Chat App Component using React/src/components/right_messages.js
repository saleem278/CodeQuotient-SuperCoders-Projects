import React from "react";
function Right_Messages(props) {

let msgss=[];
props.msgs.forEach((x,xindex)=> {
if(x.id===props.selected){
  msgss=x.messages;
}
});
  return (
    <div className="messages">
      <div>
        <ul>
          {
         msgss.map((value) => {
            return (
              <li key={value}><a>{value}</a></li>
            );
          }) }
        </ul>
      </div>
    </div>
  );
}
export default Right_Messages;
