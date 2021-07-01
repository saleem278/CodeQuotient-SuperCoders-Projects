import React from "react";

function Left_User_List(props) {
   return (
    <div className="chat_list">
      <ul>
        {
          props.chats.map((value)=>{
            function a(){
              if(props.myclass === "class"+value.id){
                return ("selected")
              }
            }
            return <li className={a()}  onClick={()=>{props.onHandleUser(value.id,"class"+value.id);}} key={value.name}><img src={value.dp}/><p>{value.name.trim()}</p></li>
          })
        }
      </ul>
    </div>
  );
}

export default Left_User_List;
