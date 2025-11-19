import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0B0D10]">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(700px_circle_at_10%_10%,rgba(34,211,238,.14),transparent_40%),radial-gradient(700px_circle_at_90%_10%,rgba(167,139,250,.14),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/70">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#0B0D10] ring-1 ring-white/10 shadow-inner shadow-black/40">
            <span className="text-white text-xs">FF</span>
          </div>
          <div>
            <div className="text-white font-semibold">FlowForge AI</div>
            <div className="text-white/60">Automation Studio</div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Security</a>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
        </div>
      </div>
      <div className="relative px-6 pb-10 text-center text-xs text-white/50">© {new Date().getFullYear()} FlowForge AI. All rights reserved.</div>
    </footer>
  );
}
