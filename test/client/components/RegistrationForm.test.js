import React from "react";
import RegistrationForm from "../../../src/client/components/RegistrationForm";
import { shallow } from "enzyme";

it("registers the current user", () => {
  const setCurrentUser = jest.fn();
  const wrapper = shallow(
    <RegistrationForm setCurrentUser={setCurrentUser} />
  ).setState({ firstName: "Current", lastName: "User" });

  wrapper.find(".Register").simulate("click");
  expect(setCurrentUser).toHaveBeenCalled();
  const args = setCurrentUser.mock.calls[0][0];
  expect(args.firstName).toEqual("Current");
  expect(args.lastName).toEqual("User");
  expect(args.id).toBeDefined();
});
