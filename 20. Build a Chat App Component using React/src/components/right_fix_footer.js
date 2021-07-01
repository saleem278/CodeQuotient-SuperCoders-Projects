import React, { useState } from "react";
import Picker, { SKIN_TONE_LIGHT } from "emoji-picker-react";
import "../App.css";
function Right_fix_footer(props) {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  if (props.selected === -1) {
    return <></>;
  } else {
    return (
      <div className="type_box">
        <div className="typebox_left">
          <div className={props.a()}>
            <Picker onEmojiClick={onEmojiClick} skinTone={SKIN_TONE_LIGHT} />
          </div>
          <a>
            <i
              onClick={() => {
                if (props.active === false) {
                  props.onHandleEmoji(true);
                } else {
                  props.onHandleEmoji(false);
                }
              }}
              className="fa fa-smile-o mysmile"
            ></i>
          </a>
          <a>
            <input
              data-emojiable="true"
              value={chosenEmoji ? `${chosenEmoji.emoji}` : ""}
              data-emoji-input="unicode"
            />
          </a>
          <a>
            <i className="fa fa-paperclip"></i>
          </a>
          <a>
            <i className="fa fa-camera"></i>
          </a>
        </div>
        <div className="typebox_right">
          <a>
            <i className="fa fa-microphone" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}
export default Right_fix_footer;
