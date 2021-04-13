import React, { useContext } from "react";
import loginImg from "../../images/login.png";
import { useForm } from "react-hook-form";
import "./Login.css";
import firebase from "firebase";
import { firebaseConfig } from "../../Firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [userInfo, setUserInfo] = useContext(UserContext);
  
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const isSignedIn = {
          isSigned: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUserInfo(isSignedIn);
        history.replace(from);
      });
  };
  console.log(userInfo);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="row container-fluid">
      <div className="col-md-5">
        <div className="form  py-5 h-100 d-flex align-items-center justify-content-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center">Sign In</h2>
            <input {...register("firstName")} placeholder="First Name" />{" "}
            {/* register an input */}
            <br />
            <input
              {...register("lastName", { required: true })}
              placeholder="Last Name"
            />
            <br />
            {errors.lastName && <p>Last name is required.</p>}
            <input
              {...register("email", { pattern: /\d+/ })}
              placeholder="Email"
            />
            <br />
            {errors.age && <p>Please enter number for age.</p>}
            <br />
            <input type="submit" /> <br />
            <button className="btn btn-danger" onClick={handleGoogleSignIn}>
              Sign In with GOOGLE-mama
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-7">
        <img src={loginImg} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default Login;
