import React from 'react';
import { Github, FileCode, CheckCircle, Smartphone, TerminalSquare } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans p-6 selection:bg-rose-500/30">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-neutral-800 pb-8 pt-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-tr from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-500/20">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white">YTMusicUltimate</h1>
          </div>
          <p className="text-lg text-neutral-400 max-w-2xl">
            An iOS Tweak Project for YouTube Music. Built for rootless jailbreaks, rootful environments, and seamless sideloading via IPA injection.
          </p>
        </header>

        {/* Notice Card */}
        <div className="bg-rose-950/20 border border-rose-900/50 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start">
          <div className="p-3 bg-rose-500/10 rounded-lg text-rose-400">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div className="space-y-2 text-sm text-rose-200/80">
            <h3 className="text-rose-100 font-semibold text-base">Project Generated Successfully</h3>
            <p>
              This is a native iOS tweak project (Objective-C/Logos). Because this environment runs web applications, the project won't "run" functionally inside this browser preview. 
            </p>
            <p className="pt-2">
              To use this tweak, <strong>export the project to GitHub</strong> using the options in AI Studio, then follow the instructions in the <code className="bg-black/30 px-1.5 py-0.5 rounded text-rose-300">README.md</code>.
            </p>
          </div>
        </div>

        {/* Directory Structure preview */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Repository Contents</h2>
          <div className="grid gap-4 md:grid-cols-2">
            
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-3 mb-3 text-white">
                <TerminalSquare className="w-5 h-5 text-blue-400" />
                <h3 className="font-medium">Theos Configuration</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-3">Build targets, tweak details, and dependencies.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-neutral-950 text-neutral-300 px-2.5 py-1 rounded-md font-mono border border-neutral-800">Makefile</span>
                <span className="text-xs bg-neutral-950 text-neutral-300 px-2.5 py-1 rounded-md font-mono border border-neutral-800">control</span>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-3 mb-3 text-white">
                <FileCode className="w-5 h-5 text-emerald-400" />
                <h3 className="font-medium">Tweak Source (Logos)</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-3">The Objective-C hooks targeting YouTube Music headers.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-neutral-950 text-emerald-400/80 px-2.5 py-1 rounded-md font-mono border border-neutral-800">Tweak.xm</span>
                <span className="text-xs bg-neutral-950 text-neutral-300 px-2.5 py-1 rounded-md font-mono border border-neutral-800">YTMusicUltimate.plist</span>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors md:col-span-2 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Github className="w-5 h-5 text-neutral-300" />
                <h3 className="font-medium">GitHub CI/CD Automation</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-3 max-w-2xl">
                Automatically builds rootless/rootful `.deb` files and utilizes continuous integration to perform an Azule IPA injection without requiring a macOS machine.
              </p>
              <div className="bg-neutral-950 rounded-lg p-3 border border-neutral-800 font-mono text-xs overflow-x-auto text-neutral-300">
                .github/workflows/build.yml
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
