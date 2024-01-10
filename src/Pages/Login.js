import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import { icons } from "../assets/ImgManaz";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider, userUpdate } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import useFoodContext from "./../hook/useFoodHook";
import useLoginFormik from "../Formik/Formik";

function Login() {
  const { getUser, user } = useFoodContext();
  const [signIn, setSignIn] = useState(false);

  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const onSubmit = (values) => {
    const { email, password, name } = values;
    console.log("click");
    if (signIn) {
      console.log("sighUp");
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setSignUp(true);
          userUpdate(name);
          getUser(true);
          navigate(-1);
        })
        .catch((err) => {
          setError(true);
          setErrorMessage(err.message);
        });
    } else {
      console.log("lopgin");
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => setLogin(true))
        .catch((err) => {
          setError(true);
          setErrorMessage(err.massege);
        });
      getUser(true);
      navigate(-1);
    }
  };

  const formik = useLoginFormik(onSubmit);

  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        getUser(true);
        navigate(-1);
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="login-wrap">
      <div className="login">
        <img src={icons.logo2} alt="" />
        <form action="" onSubmit={formik.handleSubmit}>
          {signUp ? (
            <>
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
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="error">{formik.errors.confirmPassword}</div>
                )}
            </>
          ) : (
            <>
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
            </>
          )}

          {signIn ? (
            <button type="submit" onClick={() => setSignIn(!signIn)}>
              Sign In
            </button>
          ) : (
            <button type="submit">Login</button>
          )}
        </form>
        <p onClick={() => setSignIn(!signIn)}>
          {signIn ? "Already have an account" : "Create a acount"}
        </p>
        {signUp && <p className="S">Sign Up Susses</p>}
        {login && <p className="S">Login Susses</p>}
        {error && <p className="F">{errorMessage}</p>}
        <div className="google-signIn" onClick={signInGoogle}>
          <FcGoogle /> Sign in with google
        </div>
      </div>
    </div>
  );
}

export default Login;
