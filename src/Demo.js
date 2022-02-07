import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React from "react";
import MaskedInput from "react-text-mask";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1)
  }
}));

const autoCorrectedDatePipe = createAutoCorrectedDatePipe("mm/dd/yyyy", {
  minYear: 1900,
  maxYear: 2099
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      pipe={autoCorrectedDatePipe}
      guide
      keepCharPositions
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

export default function FormattedInputs() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    textmask: null
  });

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  return (
    <div className={classes.container}>
      <TextField
        className={classes.formControl}
        value={values.textmask}
        onChange={handleChange("textmask")}
        id="formatted-text-mask-input-2"
        InputProps={{
          inputComponent: TextMaskCustom
        }}
        helperText="mm/dd/yyyy"
        variant="outlined"
        margin="dense"
      />
    </div>
  );
}
