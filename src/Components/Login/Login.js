import React, { useContext, useState } from "react";
import loginImg from "../../images/login.png";
import loaderGif from "../../images/Loading.gif";
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
  const [loading, setLoading] = useState(false);
  const { from } = location.state || { from: { pathname: "/" } };
  const [userInfo, setUserInfo] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);

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
  const handleBlur = (e) => {
    console.log(e.target.name, e.target.value);
    let fieldValid = false;
    if (e.target.name === "email") {
      fieldValid = /\S+@\S+\.\S+/.test(e.target.value.toLowerCase());
    }
    if (e.target.name === "password") {
      //script for min 8 letter password, with at least a symbol, upper and lower case letters and a number
      fieldValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
        e.target.value
      );
    }
    if (e.target.name === "name") {
      fieldValid = e.target.value;
    }

    if (fieldValid) {
      const newUserInfo = { ...userInfo };
      newUserInfo[e.target.name] = e.target.value;
      setUserInfo(newUserInfo);
    }
  };

  const handleFormSubmit = (e) => {
    if (newUser && userInfo.email && userInfo.password) {
      setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((res) => {
          const newUserInfo = { ...userInfo };
          newUserInfo.error = "";
          newUserInfo.isSigned = true;
          setUserInfo(newUserInfo);
          updateUserInfo(userInfo.name);
          setLoading(false);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...userInfo };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUserInfo(newUserInfo);
          setLoading(false);
        });
    }
    if (!newUser && userInfo.email && userInfo.password) {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((res) => {
          const newUserInfo = { ...userInfo };
          newUserInfo.name = res.user.displayName;
          console.log({ newUserInfo });
          newUserInfo.error = "";
          newUserInfo.isSigned = true;
          setUserInfo(newUserInfo);
          console.log({ newUserInfo });
          setLoading(false);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...userInfo };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUserInfo(newUserInfo);
          setLoading(false);
        });
    }
    e.preventDefault();
  };

  const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("User name updated successfully!!!!!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        const signUserOut = { isSigned: false, name: "", email: "", photo: "" };
        setUserInfo(signUserOut);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row container-fluid align-items-center justify-content-center">
      <div className="col-md-5 ">
        <div className="form  py-5 h-50 d-flex align-items-center justify-content-center">
          {loading && <img src={loaderGif} alt=" " />}
          {!userInfo.isSigned && !loading && (
            <div>
            <form>
              <div>
                {newUser && (
                  <input
                    onBlur={handleBlur}
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                )}
                <br />
                <br />
                <input
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
                <br />
                <br />
                <input
                  onBlur={handleBlur}
                  type="password"
                  name="password"
                  placeholder="Your Password"
                />
                <br />
                <br />
                {newUser && !loading ? (
                  <>
                    <input
                      onClick={handleFormSubmit}
                      type="submit"
                      value="Sign Up"
                    />
                    <p>
                      Already have an Account?{" "}
                      <span
                        onClick={() => setNewUser(!newUser)}
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        className="fw-bold text-white"
                      >
                        Login
                      </span>
                    </p>
                  </>
                ) : (
                  !loading && (
                    <>
                      <input
                        onClick={handleFormSubmit}
                        type="submit"
                        value="Login"
                      />
                      <p>
                        Doesn't have an Account?{" "}
                        <span
                          onClick={() => setNewUser(!newUser)}
                          style={{
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                          className="fw-bold text-white "
                        >
                          Register
                        </span>
                      </p>
                    </>
                  )
                )}
              </div>
            </form>
            <button className="btn btn-danger" onClick={handleGoogleSignIn}>
            Sign In with GOOGLE-mama
          </button>
          </div>
          )}
          {userInfo.success && (
            <input onClick={handleSignOut} type="submit" value="Log Out" />
          )}
          <p>{userInfo.error}</p>
          {userInfo.success && (
            <p>{newUser ? "Signup" : "Logged in"} Succedded!!!</p>
          )}
        </div>
      </div>
      <div className="col-md-7 text-center">
        <img src={loginImg} alt="" className="img-fluid align-items-center justify-content-center" />
      </div>
    </div>
  );
};

export default Login;
