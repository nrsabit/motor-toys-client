import React, { useContext, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { signInWithGoogle, signUp, updateUserInfo } = useContext(AuthContext);

const handleSignUp = event => {
    event.preventDefault()
    const form = event.target 
    const name = form.name.value 
    const photo = form.photo.value 
    const email = form.email.value 
    const password = form.password.value 

    signUp(email, password)
    .then(() => {
        updateUserInfo(name, photo)
        Swal.fire({
          title: 'Success',
          text: 'Sign Up Completed',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        form.reset()
    })
    .catch((error) => {
      if(password < 6){
        Swal.fire({
          title: 'Error..',
          text: 'Please provide a password with atleast 6 characters',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      }
      Swal.fire({
        title: 'Error..',
        text: 'Something is wrong, Please provide desired details',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    })
}

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          title: 'Success',
          text: 'Logged in Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error..',
          text: 'Something is wrong, Please Try Again',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      });
  };
  return (
    <div className="hero my-14 max-w-7xl mx-auto">
      <div className="w-full md:flex rounded py-14 md:px-20 bg-[#E0F4DB]">
        <div className="text-center md:w-1/2 flex flex-col justify-center items-center pb-8 md:pb-0">
          <h1 className="text-3xl font-bold">Register on MotorToys</h1>
          <img
            className="h-20 w-20 rounded mx-auto mt-8"
            src="/logo-dark.png"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 md:w-1/3 mx-auto shadow-2xl bg-base-100 ">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  required
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
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
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-block border-none hover:text-white bg-[#E0F4DB] text-gray-700 outline-0">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="mt-4">
              Already have an Account?{" "}
              <Link to="/login">
                <span className=" font-semibold hover:underline">
                  Login Now
                </span>
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-md flex gap-2 border-none hover:text-white bg-[#E0F4DB] text-gray-700 outline-0"
            >
              Sign up with<BsGoogle></BsGoogle>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
