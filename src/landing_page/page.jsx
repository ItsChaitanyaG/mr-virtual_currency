import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
    IconWallet,
    IconArrowRight,
    IconShieldCheck,
    IconBolt,
    IconChartBar,
    IconUsers,
    IconArrowsExchange,
    IconCircleCheck,
    IconClock,
} from "@tabler/icons-react";
import Footer from "@/components/ui/footer";
import logo from "@/assets/Gemini_Generated_Image_5x0pfd5x0pfd5x0p.png";

const LandingPage = () => {
    // Live countdown timer for "Next Cycle"
    const CYCLE_DURATION = 4 * 60 * 60; // 4 hours in seconds
    const [secondsLeft, setSecondsLeft] = useState(CYCLE_DURATION);
    const [balance, setBalance] = useState(12450.0);
    const earned = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    // Cycle reset — add earnings
                    earned.current += 25;
                    setBalance((b) => b + 25);
                    return CYCLE_DURATION;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (s) => {
        const h = Math.floor(s / 3600);
        const m = Math.floor((s % 3600) / 60);
        const sec = s % 60;
        return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    };

    const cycleProgress = ((CYCLE_DURATION - secondsLeft) / CYCLE_DURATION) * 100;
    const statsList = [
        { value: "3", label: "Active Users" },
        { value: "$1K+", label: "Transactions" },
        { value: "99.9%", label: "Uptime" },
        { value: "1", label: "Countries" },
    ];

    const featureItems = [
        {
            icon: <IconWallet className="size-7" />,
            title: "Secure Wallet",
            desc: "Your funds are protected with industry-leading encryption and multi-layer security.",
            color: "text-violet-400",
            bg: "bg-violet-500/10",
            hoverBg: "group-hover:bg-violet-500/20",
            border: "hover:border-violet-500/30",
        },
        {
            icon: <IconArrowsExchange className="size-7" />,
            title: "Instant Transactions",
            desc: "Send and receive virtual currency in seconds, with real-time confirmations.",
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            hoverBg: "group-hover:bg-cyan-500/20",
            border: "hover:border-cyan-500/30",
        },
        {
            icon: <IconChartBar className="size-7" />,
            title: "Earning Dashboard",
            desc: "Track your earnings, growth, and portfolio performance with rich analytics.",
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            hoverBg: "group-hover:bg-emerald-500/20",
            border: "hover:border-emerald-500/30",
        },
        {
            icon: <IconShieldCheck className="size-7" />,
            title: "Bank-Grade Security",
            desc: "Two-factor authentication, session management, and end-to-end encryption.",
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            hoverBg: "group-hover:bg-blue-500/20",
            border: "hover:border-blue-500/30",
        },
        {
            icon: <IconBolt className="size-7" />,
            title: "Lightning Fast",
            desc: "Optimized for speed — every interaction is snappy and responsive.",
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            hoverBg: "group-hover:bg-amber-500/20",
            border: "hover:border-amber-500/30",
        },
        {
            icon: <IconUsers className="size-7" />,
            title: "Community Driven",
            desc: "Join a growing community of users earning and trading virtual currency.",
            color: "text-rose-400",
            bg: "bg-rose-500/10",
            hoverBg: "group-hover:bg-rose-500/20",
            border: "hover:border-rose-500/30",
        },
    ];

    const steps = [
        {
            step: "01",
            title: "Create Account",
            desc: "Sign up with your email and set up your secure wallet.",
        },
        {
            step: "02",
            title: "Fund Your Wallet",
            desc: "Add virtual currency to your wallet and start earning.",
        },
        {
            step: "03",
            title: "Transact & Earn",
            desc: "Send, receive, and grow your virtual currency effortlessly.",
        },
    ];

    return (
        <div className="min-h-screen text-white">
            <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-slate-800/60 backdrop-blur-md">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="MR Virtual Currency" className="size-8 rounded-lg object-cover" />
                    <span className="text-xl font-bold tracking-tight">
                        MR&nbsp;Virtual&nbsp;Currency
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
                    <a href="#features" className="hover:text-white transition">
                        Features
                    </a>
                    <a href="#how-it-works" className="hover:text-white transition">
                        How It Works
                    </a>
                    <a href="#stats" className="hover:text-white transition">
                        Stats
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        to="/signin"
                        className="text-sm text-slate-300 hover:text-white transition px-4 py-2"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/signup"
                        className="text-sm bg-linear-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all px-5 py-2 rounded-lg font-medium shadow-md shadow-violet-500/20"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>

            <section className="px-6 md:px-12 py-12 md:py-16 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

                {/* Hero Content */}
                
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
                        <IconBolt className="size-4 text-violet-400" />
                        <span className="text-xs font-medium text-violet-300">
                            The future of digital finance
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-5">
                        Your Digital Wallet
                        <br/>
                        <span className="bg-linear-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Reimagined
                        </span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                        Manage, earn, and transact virtual currency with ease. A secure and
                        lightning-fast platform built for the modern era.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <Link
                            to="/signup"
                            className="flex items-center gap-2 bg-linear-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all px-7 py-3 rounded-xl font-semibold text-base shadow-lg shadow-violet-500/25"
                        >
                            <IconWallet className="size-5" />
                            Create Your Wallet
                        </Link>

                        <Link
                            to="/signin"
                            className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 transition px-7 py-3 rounded-xl font-semibold text-base text-slate-300 hover:text-white"
                        >
                            Sign In
                            <IconArrowRight className="size-5" />
                        </Link>
                    </div>
                </div>

                {/* Hero Visual */}

                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-[420px]">

                        {/* Ambient glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-violet-600/15 rounded-full blur-[100px]" />
                        <div className="absolute top-1/3 left-1/3 w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[80px]" />

                        {/* Main hero image */}
                        <div className="relative z-[1]">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZT2biDBjCzXiw6RApUxSdemr7vvaxy-8cSsTxxjHM5YWj3PlmJIz2UkuPueQBMJM2jwLWvpzg7BxqYVrJR4DO888NZX7PsNk9p9N6V408xiK37YX8OIWNyUqkMH1tHqM6XkvX7yfVCciGzJnw0G1E2iBHfOnbdbV8baFjA10RPqynoLIencjIK8YKslGCI3cKIJ0jzKbHsrUYHOR5zhG18xO6O0fKZh7vo6-nr_LoZNIteQFwZrLYAWiUdZNBQ62_WugyXoFBOhI"
                                alt="MR Virtual Currency"
                                className="w-full h-auto object-contain rounded-2xl drop-shadow-[0_20px_60px_rgba(139,92,246,0.25)]"
                            />
                        </div>

                        {/* Floating widget — Status (top-right) */}
                        <div className="absolute top-4 -right-2 md:-right-6 z-[2] bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-xl px-4 py-2.5 shadow-xl shadow-black/40 animate-[float_3s_ease-in-out_infinite]">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span className="font-bold text-emerald-400 text-xs">Active</span>
                            </div>
                        </div>

                        {/* Floating widget — Timer (bottom-right) */}
                        <div className="absolute bottom-16 -right-3 md:-right-8 z-[2] bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-xl px-4 py-2.5 shadow-xl shadow-black/40 animate-[float_3s_ease-in-out_infinite_0.8s]">
                            <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-0.5">Next Cycle</p>
                            <div className="flex items-center gap-1.5">
                                <IconClock className="size-3.5 text-amber-400" />
                                <span className="font-mono font-bold text-amber-400 text-sm">{formatTime(secondsLeft)}</span>
                            </div>
                        </div>

                        {/* Floating widget — Balance (bottom-left) */}
                        <div className="absolute bottom-8 -left-3 md:-left-10 z-[2] bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-xl px-4 py-3 shadow-xl shadow-black/40 animate-[float_3s_ease-in-out_infinite_1.5s]">
                            <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-1">Balance</p>
                            <span className="text-lg font-bold bg-linear-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                {balance.toLocaleString()} VC
                            </span>
                            <div className="mt-1.5 h-1.5 w-32 bg-slate-700/50 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-linear-to-r from-violet-500 to-blue-500 rounded-full transition-all duration-1000 ease-linear"
                                    style={{ width: `${cycleProgress}%` }}
                                />
                            </div>
                        </div>

                        {/* Floating widget — Earned (top-left) */}
                        <div className="absolute top-12 -left-2 md:-left-8 z-[2] bg-slate-900/90 backdrop-blur-xl border border-violet-500/20 rounded-xl px-4 py-2.5 shadow-xl shadow-black/40 animate-[float_3s_ease-in-out_infinite_2.2s]">
                            <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-0.5">Earned</p>
                            <span className="text-sm font-bold text-violet-400">+{earned.current} VC</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="stats" className="px-6 md:px-12 py-8 border-y border-slate-800/60">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {statsList.map((stat, index) => (
                        <div key={index}>
                            <p className="text-3xl md:text-4xl font-bold bg-linear-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                {stat.value}
                            </p>
                            <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="features" className="px-6 md:px-12 py-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Everything You Need
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Powerful tools to manage your virtual currency portfolio, all in one place.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featureItems.map((feature) => (
                        <div
                            key={feature.title}
                            className={`group bg-slate-900/80 border border-slate-800 rounded-2xl p-7 ${feature.border} hover:bg-slate-900 transition-all duration-300`}
                        >
                            <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} ${feature.color} mb-5 ${feature.hoverBg} transition`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="how-it-works" className="px-6 md:px-12 py-12 border-t border-slate-800/60">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get Started in 3 Steps
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg">
                        From sign-up to your first transaction — it only takes minutes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {steps.map((item) => (
                        <div key={item.step} className="text-center p-6">
                            <div className="text-6xl font-black bg-linear-to-b from-slate-600 to-slate-800 bg-clip-text text-transparent mb-4">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-6 md:px-12 py-12">
                <div className="bg-linear-to-br from-violet-600/15 via-blue-600/10 to-cyan-600/15 border border-violet-500/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Decorative glow */}
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-violet-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                        Ready to Take Control?
                    </h2>
                    <p className="text-slate-300 max-w-xl mx-auto mb-8 text-lg relative">
                        Join thousands of users already managing their virtual currency on our platform.
                    </p>
                    <Link
                        to="/signup"
                        className="relative inline-flex items-center gap-2 bg-linear-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all px-8 py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-violet-500/25"
                    >
                        Get Started Free
                        <IconArrowRight className="size-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;