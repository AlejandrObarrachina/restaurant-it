import React from "react";
import { EVENTS } from "../consts";

export function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export default function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };
  return (
    <>
      <a
        onClick={handleClick}
        href={to}
        target={target}
        {...props}
        className="px-8 py-4 rounded-md border-[2px] border-orange-400 border-solid blueShadow"
      />
    </>
  );
}
