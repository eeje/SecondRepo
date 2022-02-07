import * as React from "react";
import MaskInput from "react-text-mask";

export default function Mac() {
  return <MaskInput guide={false} mask={mask} pipe={pipe} />;
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
