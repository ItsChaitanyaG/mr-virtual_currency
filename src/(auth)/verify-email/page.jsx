import { Link } from "react-router-dom";
import {
  IconMailCheck,
  IconArrowRight,
} from "@tabler/icons-react";
import logo from "../../assets/Gemini_Generated_Image_5x0pfd5x0pfd5x0p.png";

export default function VerifyEmail() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-emerald-500/5 rounded-full blur-[140px]" />

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
        </div>

        {/* Card */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-xl shadow-black/30 text-center">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mx-auto mb-6">
            <IconMailCheck className="size-8 text-emerald-400" />
          </div>

          <h1 className="text-2xl font-bold mb-2">Almost There!</h1>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            We sent a confirmation email to your inbox.
            <br />
            Please click the link in the email to activate your account.
          </p>

          <Link
            to="/signin"
            className="inline-flex items-center justify-center gap-2 w-full bg-linear-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all py-2.5 px-6 rounded-xl font-semibold text-sm shadow-lg shadow-violet-500/25"
          >
            Go to Sign In
            <IconArrowRight className="size-4" />
          </Link>

          {/* Tip */}
          <p className="text-xs text-slate-600 mt-6">
            Didn't receive the email? Check your spam folder or try signing up again.
          </p>
        </div>

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
