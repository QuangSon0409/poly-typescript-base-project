import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ISignUp } from "../../interface/user";
import { signUp } from "../../api/user";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleOnSunmit = async (data: any) => {
    const response = await signUp(data);
    console.log(response);
    navigate("/signin");
  };
  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="md:flex-shrink-0 bg-indigo-500 py-3 px-4 sm:py-5 sm:px-6 md:py-0 md:px-0">
            <h2 className="text-2xl font-bold text-white">Sign up</h2>
            <p className="mt-1 text-white">
              Create an account and start your journey.
            </p>
          </div>
          <div className="p-4 md:p-6">
            <form onSubmit={handleSubmit(handleOnSunmit)}>
              <div className="mb-4">
                <label
                  className="block font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  type="text"
                  {...register("name")}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  id="email"
                  type="email"
                  {...register("email")}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  id="password"
                  type="password"
                  {...register("password")}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-medium text-gray-700"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                />
              </div>
              <div>
                <button
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 font-medium"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
