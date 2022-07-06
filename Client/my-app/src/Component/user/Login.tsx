import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div class="grid grid-cols-12 gap-8 m-auto">
      <div class="signin__form col-span-12 w-10/12 m-auto py-12 mt-8 flex justify-center">
        <div class="signin__main__left  w-full ">
          <div class="text-center ml-24">
            <h1 class="text-3xl font-bold">Signin To Website </h1>
            <div class="signin__main__right__login__google text-center my-6">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-solid fa-g"></i>
            </div>
            <p class="text-center">or user email acount</p>
            <form action="">
              <div class="m">
                <input
                  class="p-2 text-white"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  class="p-2 text-white"
                  type="password"
                  placeholder="password"
                />
              </div>

              <p class="my-6 text-center">
                <a href="#">Forgot your password?</a>
              </p>

              <div class="text-center">
                <button class="p-2 text-white border-1 rounded">Sign in</button>
              </div>
            </form>
          </div>
        </div>

        <div class="signin__main__right w-full my-24">
          <h3 class="text-2xl font-bold text-center">Hello Friend !</h3>

          <p class="signin__main__right__text text-center my-8">
            Enter your personal details start journey with us
          </p>

          <div class="text-center">
            <button class="p-2 text-white border-1 rounded">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
