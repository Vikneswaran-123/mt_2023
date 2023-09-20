import banner from "../../assets/Illustration.svg"
import google from "../../assets/Circle Button.svg"
import facebook from "../../assets/facebook.svg"

import linkedin from "../../assets/linkedinn.svg"
import twitter from "../../assets/twitter.svg"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate()

  const Signin = () => {
    navigate("/Home")
  }

  return (
    <div className="flex justify-center place-items-center">
      <div className="flex flex-col h-screen justify-around py-10">
        <div className="flex justify-center lg:justify-start md:justify-start">
          <h1 className="text-4xl opacity-90 font-notosanSemi">Sign In</h1>
        </div>
        <div className="flex flex-row">
          <div className="text-lg opacity-90 font-notosanSemi">New user?</div>
          <div className="text-lg font-notosanSemi text-[#587FFF] pl-2">
            <a href="/">Create an account</a>
          </div>
        </div>
        <div className="border-black border-4 p-3 border-opacity-70  ">
          <input
            placeholder="Username or email"
            className="placeholder-black opacity-80 focus:outline-none font-notosanSemi"
            type="text"
          />
        </div>
        <div className="border-black border-4 p-3 border-opacity-70  ">
          <input
            placeholder="Password"
            className="placeholder-black opacity-80 focus:outline-none border-none font-notosanSemi"
            type="password"
          />
        </div>

        <div className=" flex justify-around">
          <input className="border-black w-8 h-8 " type="checkbox" />
          <p className="text-lg font-notosanSemi opacity-80">
            Keep me signed in
          </p>
        </div>
        <div className="bg-[#3C3C3C] text-white text-lg font-notosanSemi opacity-90 p-3">
          <button onClick={Signin} className="">
            Sign In
          </button>
        </div>
        <div>
          <div class="inline-flex items-center justify-center w-full">
            <hr class=" w-16 h-px my-8 border-2 " />
            <span class=" px-3 text-base font-notosanSemi opacity-80">
              Or Sign In With
            </span>
            <hr class=" w-16 h-px my-8 border-2 " />
          </div>
        </div>
        <div className="flex justify-around">
          <img src={google} alt="ERR" />
          <img src={facebook} alt="ERR" />
          <img src={linkedin} alt="Err" />
          <img src={twitter} alt="Err" />
        </div>
      </div>
      <div className="pl-72 hidden  lg:flex md:flex ">
        <img className="" src={banner} />
      </div>
    </div>
  )
}

export default Login
