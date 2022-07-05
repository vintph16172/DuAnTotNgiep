import React from 'react'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div class="signin__form">

    <div class="signin__main__right  sm:hiden">
          <h3 class="text-2xl font-bold text-center">Welcome back</h3>

          <p class="text-center my-8">To keep connected with us  please login with
            your personal info</p>

          <div class="text-center">
              <button class="p-2 text-white border-1 rounded">Sign Up</button>
          </div>
    </div>
    <div class="signin__main__left  text-center">
      <h1 class="text-3xl font-bold">Signin To Website </h1>
      <div class="signin__main__right__login__google text-center my-6" >
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-solid fa-g"></i>
      </div>
      <p>or user email acount</p>
      <form action="">
        <div class="m">
          <input class="p-2 text-white" type="text" placeholder="Name" />
        </div>

        <div class="m">
          <input class="p-2 text-white" type="email" placeholder="Email" />
        </div>

        <div>
          <input
            class="p-2 text-white"
            type="password"
            placeholder="password"
          />
        </div>

        <p class="my-6"><a href="#">Forgot your password?</a></p>
        
        <div class="text-center">
          <button class="p-2 text-white border-1 rounded">Sign in</button>
        </div>
       

      </form>
    </div>

  </div>
  )
}

export default SignUp