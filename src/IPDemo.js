import React from "react";
import MaskedInput from "react-text-mask";
import styled from "styled-components";

const props = {
  mask: (value) => {
    let result = [];
    const chunks = value.split(".");
    console.log(result);
    for (let i = 0; i < 4; ++i) {
      const chunk = (chunks[i] || "").replace(/_/gi, "");
      if (chunk === "") {
        result.push(/\d/, /\d/, /\d/, ".");
        continue;
      } else if (+chunk === 0) {
        result.push(/\d/, ".");
        continue;
      } else if (
        chunks.length < 4 ||
        (chunk.length < 3 && chunks[i].indexOf("_") !== -1)
      ) {
        if (
          (chunk.length < 2 && +`${chunk}00` > 255) ||
          (chunk.length < 3 && +`${chunk}0` > 255)
        ) {
          result.push(/\d/, /\d/, ".");
          continue;
        } else {
          result.push(/\d/, /\d/, /\d/, ".");
          continue;
        }
      } else {
        result.push(
          ...new Array(chunk.length < 4 ? chunk.length : 3).fill(/\d/),
          "."
        );
        continue;
      }
    }

    result = result.slice(0, -1);
    return result;
  },
  pipe: (value) => {
    if (value === "." || value.endsWith("..")) return false;

    let parts = value.split(".");

    if (
      parts.length > 4 ||
      parts.some(
        (part) => part === "00" || Number(part) < 0 || Number(part) > 255
      )
    ) {
      return false;
    }

    parts = value.split(".").map((c) =>
      c.match(/\d/g)
        ? c
            .split("")
            .filter((s) => s !== "_")
            .join("")
        : c
    );

    return parts.join(".");
  }
};

export default function IPDemo() {
  return <Test placeholder="0.0.0.0" {...props} />;
}
const Test = styled(MaskedInput)`
  background-color: orange;
  height: 40px;
  border-color: #138bff;
  border-radius: 10px;
  text-align: center;
`;
