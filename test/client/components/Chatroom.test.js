import React from "react";
import { shallow } from "enzyme";
import Chatroom from "../../../src/client/components/Chatroom";

const currentUser = { firstName: "Current", lastName: "User", id: 12345 };

it("recognizes that the user is a different user", () => {
  const wrapper = shallow(<Chatroom currentUser={currentUser} />);
  const isCurrentUser = wrapper
    .instance()
    .isCurrentUser({ firstName: "Other", lastName: "User", id: 67890 });
  expect(isCurrentUser).toBe(false);
});

it("recognizes that the user is the current user", () => {
  const wrapper = shallow(<Chatroom currentUser={currentUser} />);
  const isCurrentUser = wrapper.instance().isCurrentUser(currentUser);
  expect(isCurrentUser).toBe(true);
});

it("returns the appropriate message card for each user", () => {
  const otherUser1 = { firstName: "Other", lastName: "User1", id: 23456 };
  const otherUser2 = { firstName: "Other", lastName: "User2", id: 34567 };

  const messages = [
    { body: "Hi there! It's nice to meet you", sender: currentUser },
    { body: "Hi! It's nice to meet you too", sender: otherUser1 },
    { body: "Nice to meet you both!", sender: otherUser2 },
    { body: "What shall we discuss today?", sender: currentUser }
  ];

  const wrapper = shallow(<Chatroom currentUser={currentUser} />);
  const messageCardComponents = wrapper.instance().getMessageCards(messages);
  expect(messageCardComponents.length).toEqual(4);

  expect(messageCardComponents[0].type.name).toEqual("CurrentUserMessageCard");
  expect(messageCardComponents[0].props.message).toEqual(messages[0]);
  expect(messageCardComponents[1].type.name).toEqual("OtherUserMessageCard");
  expect(messageCardComponents[1].props.message).toEqual(messages[1]);
  expect(messageCardComponents[2].type.name).toEqual("OtherUserMessageCard");
  expect(messageCardComponents[2].props.message).toEqual(messages[2]);
  expect(messageCardComponents[3].type.name).toEqual("CurrentUserMessageCard");
  expect(messageCardComponents[3].props.message).toEqual(messages[3]);
});
