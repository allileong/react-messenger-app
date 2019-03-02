import React from "react";
import RegistrationForm from "./RegistrationForm";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="Home">
      <RegistrationForm setCurrentUser={props.setCurrentUser} />
    </div>
  );
}
