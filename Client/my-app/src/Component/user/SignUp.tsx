import React from 'react'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="signin__form">
      <div className="signin__main__right  sm:hiden">
        <h3 className="text-2xl font-bold text-center">Welcome back</h3>
        <p className="text-center my-8">To keep connected with us  please login with
          your personal info</p>
        <div className="text-center">
          <button className="p-2 text-white border-1 rounded">Sign Up</button>
        </div>
      </div>
      <div className="signin__main__left  text-center">
        <h1 className="text-3xl font-bold">Signin To Website </h1>
        <div className="signin__main__right__login__google text-center my-6">
          <i className="fa-brands fa-facebook" />
          <i className="fa-brands fa-twitter" />
          <i className="fa-solid fa-g" />
        </div>
        <p>or user email acount</p>
        <form >
          <div className="m">
            <input className="p-2 text-white" type="text" placeholder="Name" />
          </div>
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
    </div>

  )
}

export default SignUp