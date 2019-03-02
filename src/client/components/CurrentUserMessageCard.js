import React from "react";
import "./CurrentUserMessageCard.css";
import { getInitials } from "../util";

export default function CurrentUserMessageCard(props) {
  return (
    <div className="CurrentUserMessageCard">
      <div className="CurrentUserMessageBubble">
        <p className="CurrentUserMessage">{props.message.body}</p>
      </div>
      <div className="CurrentUserAvatar">
        <span className="CurrentUserAvatarLabel">
          {getAvatarLabel(props.message.sender)}
        </span>
      </div>
    </div>
  );
}

const getAvatarLabel = sender => {
  const initials = getInitials(sender.firstName, sender.lastName);
  return initials ? initials : "ME";
};
