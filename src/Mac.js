import * as React from "react";
import MaskedInput from "react-text-mask";

export default function Mac() {
  return <MaskedInput guide={false} mask={mask} pipe={pipe} showMask />;
}
const mask = () => {
  return [
    /[\d|A-Z|a-z]/,
    /[\d|A-Z|a-z]/,
    ":",
    /[\d|A-Z|a-z]/,
    /[\d|A-Z|a-z]/,
    ":",
    /[\d|A-Z|a-z]/,
    /[\d|A-Z|a-z]/,
    ":",
    /[\d|A-Z|a-z]/,
    /[\d|A-Z|a-z]/,
    ":",
    /[\d|A-Z|a-z]/,
    /[\d|A-Z|a-z]/,
    ":",
    /[\d|A-Z|a-z]/,
    /[\d|A-Z|a-z]/
  ];
};

const pipe = (value) => {
  return value.toUpperCase();
};
