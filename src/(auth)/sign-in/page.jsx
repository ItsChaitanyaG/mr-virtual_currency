import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  IconLoader2,
  IconMail,
  IconLock,
  IconArrowRight,
} from "@tabler/icons-react";
import supabase from "../../lib/supabase";
import logo from "../../assets/Gemini_Generated_Image_5x0pfd5x0pfd5x0p.png";

function Signin() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate("/");
      }
    };

    checkUser();
  }, [navigate]);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(data) {
    const { email, password } = data;

    setLoading(true);
    setError(false);
    setErrorMessage("");

    const { data: signInData, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(false);
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    // Success
    setError(true);
    setErrorMessage("Login successful!");

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-white relative overflow-hidden">

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/5 rounded-full blur-[140px]" />

      <div className="relative z-10 w-full max-w-md mx-6">

        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 overflow-hidden">
              <img src={logo} alt="MR Virtual Currency" className="w-full h-full object-cover" />
            </div>
          </Link>
          <Link to="/" className="text-xl font-bold tracking-tight">
            MR&nbsp;Virtual&nbsp;Currency
          </Link>
          <p className="text-slate-500 text-sm mt-1">Welcome back</p>
        </div>

        {/* Card */}
        <form
          className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-xl shadow-black/30"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-bold text-2xl mb-1 text-center">Sign In</h1>
          <p className="text-slate-400 text-sm text-center mb-7">
            Enter your credentials to access your wallet
          </p>

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
                className="w-full bg-slate-800/60 border border-slate-700/60 py-2.5 pl-10 pr-4 rounded-xl text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 transition"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-1.5">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Error or Success message */}
          {errorMessage && (
            <p
              className={`text-center text-sm mt-3 ${
                error === false ? "text-red-400" : "text-emerald-400"
              }`}
            >
              {errorMessage}
            </p>
          )}

          {/* Submit */}
          <button
            disabled={loading === true}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-linear-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all py-2.5 px-6 rounded-xl font-semibold text-sm shadow-lg shadow-violet-500/25 cursor-pointer"
          >
            {loading === false ? (
              <>
                Sign In
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

          {/* Sign up link */}
          <p className="text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-violet-400 hover:text-violet-300 font-medium transition"
            >
              Create account
            </Link>
          </p>
        </form>

        {/* Back to Landing Page*/}
        <p className="text-center mt-6">
          <Link
            to="/"
            className="text-xs text-slate-600 hover:text-slate-400 transition"
          >
            &larr; Back to Landinf Page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
