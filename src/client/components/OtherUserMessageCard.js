import React from "react";
import "./OtherUserMessageCard.css";
import { getInitials } from "../util";
export default function OtherUserMessageCard(props) {
  return (
    <div className="OtherUserMessageCard">
      <div className="OtherUserAvatar">
        <span className="OtherUserAvatarLabel">
          {getAvatarLabel(props.message.sender)}
        </span>
      </div>
      <div className="OtherUserMessageBubble">
        <p className="OtherUserMessage">{props.message.body}</p>
      </div>
    </div>
  );
}

const getAvatarLabel = sender => {
  const initials = getInitials(sender.firstName, sender.lastName);
  return initials ? initials : ":)";
};
