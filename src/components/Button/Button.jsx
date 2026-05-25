import React from "react";

export default function Button({ onLoad }) {
  return (
    <button type="button" onClick={onLoad}>
      LOAD MORE
    </button>
  );
}
