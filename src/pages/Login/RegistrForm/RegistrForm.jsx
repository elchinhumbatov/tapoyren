import React, { useState } from "react";
import s from "../Login.module.scss";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControlLabel,
  Checkbox,
  InputLabel,
  OutlinedInput,
  TextField,
  FormControl,
  IconButton,
  InputAdornment,
} from "@mui/material";

const days = [];
const years = [];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentYear = new Date().getFullYear();
for (let i = 1; i <= 31; i++) days.push(i);
do {
  years.push(currentYear);
  currentYear--;
} while (currentYear > 1960);

const validate = (values) => {
  const errors = {};

  if (!values.fullName) errors.fullName = "Required";
  if (!values.sex) errors.sex = "Required";
  if (!values.day) errors.day = "Required";
  if (!values.month) errors.month = "Required";
  if (!values.year) errors.year = "Required";
  if (!values.password) errors.password = "Required";
  if (!values.terms) errors.terms = "Required";
  if (values.secondTimePass !== values.password)
    errors.secondTimePass = "Passwords doesn't match";

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

function RegistrForm() {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      sex: "",
      day: "",
      month: "",
      year: "",
      password: "",
      secondTimePass: "",
      terms: false,
    },
    validate,
    onSubmit: (values) => {
      if (values.secondTimePass !== values.password) {
        formik.errors.secondTimePass = "Passwords doesn't match";
      }
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FullName formik={formik} />
      <Email formik={formik} />
      <Sex formik={formik} />
      <Birthday formik={formik} />
      <Password formik={formik} />
      <ConfirmPassword formik={formik} />
      <Terms formik={formik} t={t} />
      <Button
        color="primary"
        variant="contained"
        type="submit"
        disabled={!formik.isValid}
        fullWidth
        style={{ textTransform: "capitalize" }}
      >
        {t("login.form.registration")}
      </Button>
    </form>
  );
}

export default RegistrForm;

const FullName = ({ formik }) => (
  <div className={s.formControl}>
    <TextField
      name="fullName"
      label="Ad Soyad"
      variant="outlined"
      size="small"
      fullWidth
      value={formik.values.fullName}
      error={formik.touched.fullName && formik.errors.fullName ? true : false}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {/* {formik.touched.fullName && formik.errors.fullName ? (
          <small>{formik.errors.fullName}</small>
        ) : null} */}
  </div>
);
const Email = ({ formik }) => (
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
  </div>
);
const Sex = ({ formik }) => (
  <div className={s.formControl}>
    <select
      className={s.select}
      name="sex"
      value={formik.sex}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    >
      <option value="">Sex</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
);
const Birthday = ({ formik }) => (
  <div className={s.formControl + " " + s.date}>
    <select
      name="day"
      value={formik.day}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className={(formik.errors.day && s.error) + " " + s.select}
    >
      <option value="">Day</option>
      {days.map((day) => (
        <option key={day} value={day}>
          {day}
        </option>
      ))}
    </select>
    <select
      name="month"
      value={formik.month}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className={(formik.errors.month && s.error) + " " + s.select}
    >
      <option value="">Month</option>
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
    <select
      name="year"
      value={formik.year}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className={(formik.errors.year && s.error) + " " + s.select}
    >
      <option value="">Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
    {formik.touched.birthday && formik.errors.birthday ? (
      <small>{formik.errors.birthday}</small>
    ) : null}
  </div>
);
const Password = ({ formik }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((prev) => (prev = !showPassword));

  return (
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
              <IconButton onClick={handleShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};
const ConfirmPassword = ({ formik }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((prev) => (prev = !showPassword));

  return (
    <div className={s.formControl}>
      <FormControl variant="outlined" size="small" fullWidth>
        <InputLabel htmlFor="secondTimePass">Confirm</InputLabel>
        <OutlinedInput
          name="secondTimePass"
          label="Password"
          type={showPassword ? "text" : "password"}
          value={formik.values.secondTimePass}
          error={
            formik.touched.secondTimePass && formik.errors.secondTimePass
              ? true
              : false
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      {formik.touched.secondTimePass && formik.errors.secondTimePass ? (
        <small>{formik.errors.secondTimePass}</small>
      ) : null}
    </div>
  );
};
const Terms = ({ formik, t }) => (
  <div className={s.formControl + " " + s.checkboxWrap}>
    <FormControlLabel
      control={
        <Checkbox
          className={formik.errors.terms && s.error}
          name="terms"
          onChange={formik.handleChange}
        />
      }
      label={t("login.form.terms")}
    />
    <Link to="terms-and-conditions" style={{ textDecoration: "underline" }}>
      bax
    </Link>
  </div>
);
