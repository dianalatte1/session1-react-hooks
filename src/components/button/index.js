import React, { useState } from "react";
import "./styles.css";

export function Button() {
  const [textButton, setTextButton] = useState("I am a Button");
  return (
    <button
      className="button-component "
      onClick={() => {
        setTextButton("I am Diana");
      }}
    >
      {textButton}
    </button>
  );
}
