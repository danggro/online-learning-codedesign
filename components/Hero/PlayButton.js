import React from "react";

function PlayButton() {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="none"
        viewBox="0 0 80 80"
      >
        <circle cx="40" cy="40" r="40" fill="#fff"></circle>
        <path
          fill="currentColor"
          d="M54.575 39.81a1 1 0 010 1.714l-21.06 12.665A1 1 0 0132 53.332v-25.33a1 1 0 011.515-.858l21.06 12.666z"
        ></path>
      </svg>
    </button>
  );
}

export default PlayButton;
