import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
//import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 10,
    minWidth: 60,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #138bff",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 10,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("0");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.margin}>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={value}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem selected disabled value="0">
            <em>command</em>
          </MenuItem>
          <MenuItem value={1}>val 1</MenuItem>
          <MenuItem value={2}>val 2</MenuItem>
          <MenuItem value={3}>val 3</MenuItem>
          <MenuItem value={4}>val 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
