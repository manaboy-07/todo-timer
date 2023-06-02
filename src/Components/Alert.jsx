/** @format */

import React from "react";

function Alert({ type, text }) {
  return <div className={`alerts text-center text-xl text-white p-3 alert-${type}`}>{text}</div>;
}

export default Alert;
