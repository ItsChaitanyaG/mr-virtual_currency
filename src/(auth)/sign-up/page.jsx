import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    const localData = localStorage.getItem("Current User");
    if (localData) {
      navigate("/");
    }
  }, [navigate]);

  const [registerSuccess, setRegisterSuccess] = useState("");
  const [successState, setSuccessState] = useState(null);

  async function onSubmit(data) {
    console.log(data);
    navigate("/signin");
  }

  return (
    <section className="flex justify-center-safe items-center h-screen text-white">
      <div className="text-white flex justify-center flex-col items-center w-full max-w-md mx-6">
        <form
          className="text-center flex flex-col justify-between items-center bg-slate-900 w-full p-10 rounded-md shadow-xl shadow-slate-900 border border-slate-800"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-bold text-2xl mb-8">Create Account</h1>

          {/* Name fields */}
          <div className="flex flex-col sm:flex-row gap-4 w-full mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-slate-800 py-2 px-4 w-full rounded-[10px] focus:outline-none focus:ring-2 focus:ring-slate-800"
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "First name must be at least 3 characters",
                },
              })}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-slate-800 py-2 px-4 w-full rounded-[10px] focus:outline-none focus:ring-2 focus:ring-slate-800"
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "Last name must be at least 3 characters",
                },
              })}
            />
          </div>
          {errors.firstName && (
            <p className="text-red-600 mb-4">{errors.firstName.message}</p>
          )}

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="border border-slate-800 py-2 px-4 w-full mb-4 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-slate-800"
            {...register("userName", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            })}
          />
          {errors.userName && (
            <p className="text-red-600 mb-4">{errors.userName.message}</p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="email@domain.com"
            className="border border-slate-800 py-2 px-4 w-full mb-4 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-slate-800"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className="text-red-600 mb-4">{errors.email.message}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password (at least 6 characters)"
            className="border border-slate-800 py-2 px-4 w-full mb-6 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-slate-800"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 mb-4">{errors.password.message}</p>
          )}

          {/* Sign-in link */}
          <p className="mb-4">
            Already have an account?{" "}
            <Link to="/signin">
              <span className="cursor-pointer text-blue-400">Login</span>
            </Link>
          </p>

          {/* Success/Error message */}
          <p
            className={`mb-4 ${
              successState === true ? `text-green-500` : `text-red-500`
            }`}
          >
            {registerSuccess}
          </p>

          {/* Register button */}
          <button className="bg-slate-700 text-[18px] py-2 px-6 rounded-[10px] shadow shadow-indigo-800 cursor-pointer hover:bg-slate-600 min-w-full">
            Register
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
