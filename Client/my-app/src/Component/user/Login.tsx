import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (

    <div className="grid grid-cols-12 gap-8 m-auto">
      <div className="signin__form col-span-12 w-10/12 m-auto py-12 mt-8 flex justify-center">
        <div className="signin__main__left  w-full ">
          <div className="text-center ml-24">

            <h1 className="text-3xl font-bold">Signin To Website </h1>
            <div className="signin__main__right__login__google text-center my-6">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-solid fa-g" />
            </div>
            <p className="text-center">or user email acount</p>

            <form >
              <div className="m">
                <input className="p-2 text-white" type="email" placeholder="Email" />
              </div>
              <div>
                <input className="p-2 text-white" type="password" placeholder="password" />
              </div>

              <p className="my-6 text-center">
                <a href="#">Forgot your password?</a>
              </p>

              <div className="text-center">
                <button className="p-2 text-white border-1 rounded">Sign in</button>
              </div>
            </form>
          </div>

        </div>
        <div className="signin__main__right w-full my-24">
          <h3 className="text-2xl font-bold text-center">Hello Friend !</h3>
          <p className="signin__main__right__text text-center my-8">
            Enter your personal details start journey with us
          </p>
          <div className="text-center">
            <button className="p-2 text-white border-1 rounded">Sign Up</button>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Login;
