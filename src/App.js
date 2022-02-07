import React from "react";
import { makeStyles } from "@material-ui/core";

import IPDemo from "./IPDemo";
import Demo from "./Demo";
import Mac from "./Mac";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1)
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Demo />
      <IPDemo />
      <Mac />
    </div>
  );
}
