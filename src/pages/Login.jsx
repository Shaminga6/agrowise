import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import Loader from "../components/Loader";
import ErrorAlert from "../components/ErrorAlert";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // -------- Redirect user if logged in -----------------
  useEffect(() => {
    const user = localStorage.getItem("userData");

    if (user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { email, password } = formData;

    try {
      const res = await (
        await fetch(`https://agrowise-api.vercel.app/api/auth/jwt/create/`, {
          method: "POST",

          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
      ).json();

      const token = res;

      if (token.access) {
        const data = await (
          await fetch(`https://agrowise-api.vercel.app/api/auth/users/me/`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token.access}`,
            },
          })
        ).json();
        setIsLoading(false);

        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("userData", JSON.stringify(data));

        navigate("/dashboard");
      } else {
        setShowError(true);
        setErrorMsg("Invalid credentials");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showError ? <ErrorAlert errorMsg={errorMsg} /> : ""}

      <div className="min-h-screen flex items-center justify-end bg-white relative max-[640px]:block">
        <div className="text-center login min-h-screen overflow-x-hidden rounded-r-3xl fixed top-0 bottom-0 left-0 max-[640px]:hidden"></div>

        <div className="max-[640px]:py-12 login-form h-full w-full  flex items-center gap-6 justify-center flex-col md:w-3/5 lg:w-1/2 xl:w-1/3">
          <h1 className="text-2xl">Welcome Back</h1>
          <form className="w-3/5 full-width" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mobile-label"
                htmlFor="username"
              >
                Email address
              </label>
              <input
                className="border border-gray-300 text-sm rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gray-400"
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mobile-label"
                htmlFor="username"
              >
                Password
              </label>
              <input
                className="border border-gray-300 text-sm rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gray-400"
                id="email"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 flex justify-between items-center">
              <div className="flex items-center">
                <input
                  className="mr-1 w-4 h-4"
                  type="checkbox"
                  id="rememberMe"
                />
                <label className="text-xs" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>

              <Link to="/reset-password" className="text-orange-500 text-xs">
                Forgot password?
              </Link>
            </div>

            <div>
              <button
                className="w-full full-width bg-green-900 hover:bg-green-950 text-sm font-semibold transition ease-out text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Loader /> : "Login"}
              </button>
            </div>
          </form>

          <p className="text-xl">Or</p>

          <button
            className="w-3/5 mobile-label flex items-center gap-1 border border-gray-300 text-sm transition ease-out text-gray-900 py-3 px-4 rounded focus:outline-none justify-center"
            type="submit"
          >
            <img src={google} alt="Login with google" className="w-5" />
            Login with Google
          </button>

          <p className="flex items-center gap-1 text-sm">
            Don't have an account?
            <Link to="/signup" className="text-orange-500 text-sm">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;