import React from "react";
import { icons } from "../assets/ImgManaz";


function Login() {
  

  return (
    <div className="login-wrap">
      <div className="login">
        <img src={icons.logo2} alt="" />
        <form action="" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            required
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}

          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            required
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="error">{formik.errors.confirmPassword}</div>
          )}

          <button type="submit">Sign IN</button>
        </form>
        <p>Already have an account</p>
      </div>
    </div>
  );
}

export default Login;
