import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithGoogle, logInWithEmail } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInWithEmail(email, password)
      .then(() => {
        setError(null);
        Swal.fire("Logged in Successfully");
        form.reset()
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(() => {
      setError(null);
      Swal.fire("Logged in Successfully")
    })
    .catch((error) => setError(error.message))
    }


  return (
    <div className="hero my-14 max-w-7xl mx-auto">
      <div className="w-full md:flex rounded py-14 md:px-20 bg-[#E0F4DB]">
        <div className="text-center md:w-1/2 flex flex-col justify-center items-center pb-8 md:pb-0">
          <h1 className="text-3xl font-bold">Login to MotorToys</h1>
          <img
            className="h-20 w-20 rounded mx-auto mt-8"
            src="/logo-dark.png"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 md:w-1/3 mx-auto shadow-2xl bg-base-100 ">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-block border-none hover:text-white bg-[#E0F4DB] text-gray-700 outline-0">
                  Login
                </button>
              </div>
            </form>
            <p className="mt-4">
              New on MotorToys?{" "}
              <Link to="/register">
                <span className=" font-semibold hover:underline">
                  Register Now
                </span>
              </Link>
            </p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-md flex gap-2 border-none hover:text-white bg-[#E0F4DB] text-gray-700 outline-0">
              Sign in with<BsGoogle></BsGoogle>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
