import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  IconLoader2,
  IconMail,
  IconLock,
  IconUser,
  IconAt,
  IconArrowRight,
} from "@tabler/icons-react";
import supabase from "../../lib/supabase";
import logo from "../../assets/Gemini_Generated_Image_5x0pfd5x0pfd5x0p.png";

function SignUp() {
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [successState, setSuccessState] = useState(null);
  const [loading, setLoading] = useState(false);

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

  async function onSubmit(data) {
    const { email, password, firstName, lastName, userName } = data;

    setLoading(true); // start loading immediately

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "http://localhost:5173/signin",
        data: {
          first_name: firstName,
          last_name: lastName,
          username: userName,
        },
      },
    });

    if (error) {
      setRegisterSuccess(error.message);
      setSuccessState(false);
      setLoading(false);
    } else {
      setRegisterSuccess("Account created! Check your email to confirm.");
      setSuccessState(true);

      setTimeout(() => {
        setLoading(false);
        navigate("/verify-email");
      }, 2000);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-white relative overflow-hidden py-10">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/5 rounded-full blur-[140px]" />

      <div className="relative z-10 w-full max-w-md mx-6">
        {/* Logo / Brand */}
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 overflow-hidden">
              <img src={logo} alt="MR Virtual Currency" className="w-full h-full object-cover" />
            </div>
          </Link>
          <Link to="/" className="text-xl font-bold tracking-tight">
            MR&nbsp;Virtual&nbsp;Currency
          </Link>
          <p className="text-slate-500 text-sm mt-1">Create your account</p>
        </div>

        {/* Card */}
        <form
          className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-xl shadow-black/30"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-bold text-2xl mb-1 text-center">Create Account</h1>
          <p className="text-slate-400 text-sm text-center mb-7">
            Set up your wallet in just a few steps
          </p>

          {/* Name fields */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label className="text-sm text-slate-400 mb-1.5 block">First Name</label>
              <div className="relative">
                <IconUser className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="John"
                  className="w-full bg-slate-800/60 border border-slate-700/60 py-2.5 pl-10 pr-4 rounded-xl text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 transition"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 3,
                      message: "First name must be at least 3 characters",
                    },
                  })}
                />
              </div>
              {errors.firstName && (
                <p className="text-red-400 text-xs mt-1.5">{errors.firstName.message}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="text-sm text-slate-400 mb-1.5 block">Last Name</label>
              <div className="relative">
                <IconUser className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full bg-slate-800/60 border border-slate-700/60 py-2.5 pl-10 pr-4 rounded-xl text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 transition"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 3,
                      message: "Last name must be at least 3 characters",
                    },
                  })}
                />
              </div>
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1.5">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="text-sm text-slate-400 mb-1.5 block">Username</label>
            <div className="relative">
              <IconAt className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4.5 text-slate-500" />
              <input
                type="text"
                placeholder="johndoe"
                className="w-full bg-slate-800/60 border border-slate-700/60 py-2.5 pl-10 pr-4 rounded-xl text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 transition"
                {...register("userName", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters",
                  },
                })}
              />
            </div>
            {errors.userName && (
              <p className="text-red-400 text-xs mt-1.5">{errors.userName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-slate-400 mb-1.5 block">Email</label>
            <div className="relative">
              <IconMail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4.5 text-slate-500" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-slate-800/60 border border-slate-700/60 py-2.5 pl-10 pr-4 rounded-xl text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 transition"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="text-sm text-slate-400 mb-1.5 block">Password</label>
            <div className="relative">
              <IconLock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4.5 text-slate-500" />
              <input
                type="password"
                placeholder="At least 6 characters"
                className="w-full bg-slate-800/60 border border-slate-700/60 py-2.5 pl-10 pr-4 rounded-xl text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 transition"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-1.5">{errors.password.message}</p>
            )}
          </div>

          {/* Success/Error message */}
          {registerSuccess && (
            <p
              className={`text-center text-sm mt-3 ${
                successState === true ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {registerSuccess}
            </p>
          )}

          {/* Register button */}
          <button
            disabled={loading === true}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-linear-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all py-2.5 px-6 rounded-xl font-semibold text-sm shadow-lg shadow-violet-500/25 cursor-pointer"
          >
            {loading === false ? (
              <>
                Create Account
                <IconArrowRight className="size-4" />
              </>
            ) : (
              <IconLoader2 stroke={2} className="animate-spin size-5" />
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-slate-800" />
            <span className="text-xs text-slate-600 uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          {/* Sign-in link */}
          <p className="text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-violet-400 hover:text-violet-300 font-medium transition"
            >
              Sign in
            </Link>
          </p>
        </form>

        {/* Back to home */}
        <p className="text-center mt-6">
          <Link
            to="/"
            className="text-xs text-slate-600 hover:text-slate-400 transition"
          >
            &larr; Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
