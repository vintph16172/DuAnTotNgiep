import React from 'react'

type Props = {}

const Login = (props: Props) => {
 <div>
  return (
  <div className="signin__form grid grid-cols-3 py-12">
    <div className="signin__main__left col-span-2 text-center">
      <h1 className="text-3xl font-bold">Signin To Website </h1>
      <div className="signin__main__right__login__google text-center my-6">
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-solid fa-g" />
      </div>
      <p>or user email acount</p>
      <form >
        <div className="m">
          <input className="p-2 text-white" type="email" placeholder="Email" />
        </div>
        <div>
          <input className="p-2 text-white" type="password" placeholder="password" />
        </div>
        <p className="my-6"><a href="#">Forgot your password?</a></p>
        <div className="text-center">
          <button className="p-2 text-white border-1 rounded">Sign in</button>
        </div>
      </form>
    </div>
    <div className="signin__main__right col-span-1">
      <h3 className="text-2xl font-bold text-center">Hello Friend !</h3>
      <p className="text-center my-8">Enter your personal detail start
        journey with us</p>
      <div className="text-center">
        <button className="p-2 text-white border-1 rounded">Sign Up</button>
      </div>
    </div>
  </div>
  )
</div>

}
export default Login 