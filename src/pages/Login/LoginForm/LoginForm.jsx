import React, { useState } from "react";
import s from "../Login.module.scss";
import { InputLabel, OutlinedInput, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, TextField } from "@mui/material";
import { Button } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleClickShowPassword = () =>
    setShowPassword((prev) => (prev = !showPassword));

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={s.formControl}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          size="small"
          fullWidth
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email ? true : false}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <small>{formik.errors.email}</small>
        ) : null}
      </div>
      <div className={s.formControl}>
        <FormControl variant="outlined" size="small" fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            error={
              formik.touched.password && formik.errors.password ? true : false
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.touched.password && formik.errors.password ? (
            <small>{formik.errors.password}</small>
          ) : null}
        </FormControl>
      </div>
      <div className={s.formControl + ' ' + s.checkboxWrap}>
        <FormControlLabel
          control={
            <Checkbox name="rememberMe" onChange={formik.handleChange} />
          }
          label={t("login.form.remember")}
        />
        <Link to='/' style={{paddingTop: '5px'}}>{t('login.form.forget')}</Link>
      </div>
      <Button
        color="primary"
        variant="contained"
        type="submit"
        disabled={!formik.isValid}
        fullWidth
        style={{ textTransform: "capitalize", marginTop: 20 }}
      >
        {t("login.form.login")}
      </Button>
    </form>
  );
}

export default LoginForm;
