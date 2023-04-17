import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/user";
import { useLocalStorage } from "../../hooks";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user", null);

  const onSbmit = async (data: any) => {
    const {
      data: { accessToken, user },
    } = await signIn(data);
    setUser({
      accessToken,
      user,
    });
    console.log(accessToken);

    navigate("/");
  };
  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="md:flex-shrink-0 bg-indigo-500 py-3 px-4 sm:py-5 sm:px-6 md:py-0 md:px-0">
            <h2 className="text-2xl font-bold text-white">Sign in</h2>
            <p className="mt-1 text-white">Welcome back!</p>
          </div>
          <div className="p-4 md:p-6">
            <form onSubmit={handleSubmit(onSbmit)}>
              <div className="mb-4">
                <label className="block font-medium text-gray-700">Email</label>
                <input
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  id="email"
                  type="email"
                  {...register("email")}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium text-gray-700">
                  Password
                </label>
                <input
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  id="password"
                  type="password"
                  {...register("password")}
                />
              </div>

              <div>
                <button
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 font-medium"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
