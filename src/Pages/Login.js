import React from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginHandler } from "../redux/slices/userSlice";

const dummyImg = 'https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp';
const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    dispatch(loginHandler(response));
    navigate("/home");
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="max-w-lg">
        <img
          src={dummyImg}
          alt="Login screen" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <FacebookLogin
          appId={facebookAppId}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
    </section>
  );
};

export default Login;
