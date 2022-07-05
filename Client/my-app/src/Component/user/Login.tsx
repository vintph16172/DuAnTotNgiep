import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div class="signin__form grid grid-cols-3 py-12">
  <div class="signin__main__left col-span-2 text-center">
    <h1 class="text-3xl font-bold">Signin To Website </h1>
    <div class="signin__main__right__login__google text-center my-6" >
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-solid fa-g"></i>
    </div>
    <p>or user email acount</p>
    <form action="">
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

  <div class="signin__main__right col-span-1">
        <h3 class="text-2xl font-bold text-center">Hello Friend !</h3>

        <p class="text-center my-8">Enter your personal detail start
            journey with us</p>

        <div class="text-center">
            <button class="p-2 text-white border-1 rounded">Sign Up</button>
        </div>
  </div>
</div>
  )
}
export default Login 