import { Link } from "react-router-dom";
import {
    IconBrandGithub,
    IconBrandTwitter,
    IconMail,
} from "@tabler/icons-react";
import logo from "@/assets/Gemini_Generated_Image_5x0pfd5x0pfd5x0p.png";

export default function Footer() {
    return (
        <footer className="px-6 md:px-12 pt-10 pb-6 border-t border-slate-800/60">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="md:col-span-1">
                    <Link to="/" className="flex items-center gap-2 mb-3">
                        <img src={logo} alt="MR Virtual Currency" className="size-6 rounded-md object-cover" />
                        <span className="text-base font-bold">MR Virtual Currency</span>
                    </Link>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Secure, fast, and modern virtual currency management for everyone.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold mb-3">Product</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><a href="#features" className="hover:text-slate-300 transition">Features</a></li>
                        <li><a href="#how-it-works" className="hover:text-slate-300 transition">How It Works</a></li>
                        <li><a href="#stats" className="hover:text-slate-300 transition">Stats</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold mb-3">Legal</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-slate-300 transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-slate-300 transition">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-slate-300 transition">Cookie Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold mb-3">Connect</h4>
                    <div className="flex items-center gap-3">
                        <a href="#" className="text-slate-500 hover:text-violet-400 transition">
                            <IconBrandTwitter className="size-5" />
                        </a>
                        <a href="#" className="text-slate-500 hover:text-violet-400 transition">
                            <IconBrandGithub className="size-5" />
                        </a>
                        <a href="#" className="text-slate-500 hover:text-violet-400 transition">
                            <IconMail className="size-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800/60 pt-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-600">
                <p>&copy; 2026 MR Virtual Currency. All rights reserved.</p>
                <p>Built with React & Tailwind CSS</p>
            </div>
        </footer>
    );
}
