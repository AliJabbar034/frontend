import { useState } from "react";
import InputComponet from "./InputComponet";
import logo from "./assets/logo.png";
import { IoChevronBack } from "react-icons/io5";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className=" h-screen w-[100%] grid  md:grid-cols-2">
      {/* input form  */}

      <div className=" flex  items-center justify-center h-[100%]  relative">
        <div className=" absolute top-3  space-x-2 left-10 md:left-20 flex flex-row items-center justify-center">
          <div className="pt-1">
            {" "}
            <IoChevronBack />
          </div>
          <p>Back</p>
        </div>
        <div className=" flex-1 flex-col  px-10 md:px-20  items-center justify-center ">
          <h1
            className=" text-[rgb(233,41,40)]"
            style={{
              fontFamily: "DM Sans",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Sign In
          </h1>
          <p className="text-[#A3AED0]">
            Enter your email and password to sign in!
          </p>

          <form action="" className=" space-y-3">
            <InputComponet
              label={"Email"}
              labelFor={"email"}
              placeholder={"ali@gmail.com"}
              value={email}
              setValue={setEmail}
            />

            <InputComponet
              label={"Password"}
              labelFor={"password"}
              placeholder={"Min. 8 characters"}
              value={password}
              setValue={setPassword}
            />

            <div className=" flex-row flex justify-between">
              <div className=" flex-row items-center flex space-x-2">
                <input className="checkbox" type="checkbox" />
                <p style={{ fontFamily: "DM Sans" }}>Keep me logged in</p>
              </div>

              <p className="text-[#E92928]" style={{ fontFamily: "DM Sans" }}>
                Forget password?
              </p>
            </div>

            <input
              type="submit"
              className=" bg-[#E92928] flex flex-col cursor-pointer items-center justify-center py-2 rounded-lg text-white w-[100%]"
              placeholder="Submit"
            />

            <p
              className=" text-gray-500"
              style={{
                fontFamily: "DM Sans",
              }}
            >
              Not registered yet?
              <span className=" text-red-600">
                <a href="#">Create an Account</a>
              </span>
            </p>
          </form>
        </div>

        <p
          className=" absolute bottom-4 text-[#A3AED0]"
          style={{ fontFamily: "DM Sans" }}
        >
          © 2023 Spark Drive. All Rights Reserved.{" "}
        </p>
      </div>

      {/* second container  */}

      <div className=" bg-[#E92928] relative  space-y-3 flex flex-col rounded-bl-[80px] items-center justify-center">
        <div className=" flex-row flex space-x-3 ">
          <img src={logo} alt="logo" className=" h-12 w-12" />
          <div className="border-2 border-white rounded-lg items-center justify-center text-center px-10">
            <h1
              className="  font-semibold text-white pt-2.5"
              style={{ fontFamily: "Ponnala" }}
            >
              Spark
            </h1>
          </div>
        </div>

        <div className=" border flex flex-col border-[#FFFFFF33] px-3 rounded-lg py-1 items-center justify-center">
          <p
            className="text-white font-[10px] text-center"
            style={{
              fontFamily: "Montserrat",
            }}
          >
            Learn more about Air Drive on
          </p>
          <p className=" text-white font-[29px] text-center font-bold">
            Spark.pl
          </p>
        </div>

        <div className=" absolute bottom-4 flex flex-row space-x-2">
          <p
            className="text-[14px] text-white"
            style={{ fontFamily: "DM Sans" }}
          >
            License
          </p>
          <p
            className="text-[14px] text-white"
            style={{ fontFamily: "DM Sans" }}
          >
            Terms of Use
          </p>
          <p
            className="text-[14px]  text-white"
            style={{ fontFamily: "DM Sans" }}
          >
            Blog
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
