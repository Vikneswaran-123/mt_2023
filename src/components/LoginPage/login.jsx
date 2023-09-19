import banner from "../../assets/Illustration.svg"

const Login = () => {
  return (
    <div className="flex justify-center place-items-center">
      <div>
        <div className="flex">
          <h1 className="text-4xl opacity-90 font-notosanSemi">Sign In</h1>
        </div>
        <div className="flex flex-row">
          <div className="text-lg opacity-90 font-notosanSemi">New user?</div>
          <div className="text-lg font-notosanSemi text-[#587FFF] pl-2">
            <a href="index">Create an account</a>
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
      </div>
      <div className="px-20">
        <img src={banner}></img>
      </div>
    </div>
  )
}

export default Login
