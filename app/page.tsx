"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8faf7] text-[#13251c]">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-[#dfe8dc] bg-[#f8faf7]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5c9f2f] text-sm font-bold text-white">
              K
            </div>

            <span className="text-lg font-bold tracking-tight">
              Kavya Labs
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-[#647269] hover:text-[#13251c]"
            >
              Features
            </a>

            <a
              href="#product"
              className="text-sm font-medium text-[#647269] hover:text-[#13251c]"
            >
              Product
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-[#647269] hover:text-[#13251c]"
            >
              About
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#cfdcc9] px-5 py-2.5 text-sm font-semibold hover:bg-white"
            >
              Get started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-[#dfe8dc] px-3 py-2 md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-[#dfe8dc] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#features">Features</a>
              <a href="#product">Product</a>
              <a href="#about">About</a>
              <a
                href="#contact"
                className="rounded-full bg-[#5c9f2f] px-5 py-3 text-center font-semibold text-white"
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">

          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Hero copy */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d7e5d1] bg-white px-4 py-2 text-sm font-medium text-[#4e7438]">
                <span className="h-2 w-2 rounded-full bg-[#5c9f2f]" />
                Building the next generation of software
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Build smarter.
                <span className="block text-[#5c9f2f]">
                  Move faster.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#647269]">
                Kavya Labs creates intelligent software experiences that help
                modern teams turn ambitious ideas into products people love.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-[#0ced80] px-7 py-3.5 text-center text-sm font-bold text-white hover:-translate-y-0.5 hover:bg-[#253d2f]"
                >
                  Start building
                </a>

                <a
                  href="#product"
                  className="rounded-full border border-[#cfdcc9] bg-white px-7 py-3.5 text-center text-sm font-bold hover:-translate-y-0.5 hover:border-[#9eb594]"
                >
                  Explore Kavya Labs →
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#718077]">
                <span>● AI-first</span>
                <span>● Developer-focused</span>
                <span>● Built to scale</span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#dcefd2] blur-3xl" />

              <div className="relative rounded-[2rem] border border-[#dfe8dc] bg-white p-5 shadow-[0_25px_80px_rgba(37,61,47,0.10)]">

                <div className="rounded-[1.5rem] bg-[#13251c] p-6 text-white">

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9fb29f]">
                        Kavya Labs
                      </p>

                      <p className="mt-2 text-xl font-semibold">
                        Product intelligence
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5c9f2f] font-bold">
                      K
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-[#9fb29f]">
                        Active projects
                      </p>
                      <p className="mt-2 text-3xl font-bold">24</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-[#9fb29f]">
                        Efficiency
                      </p>
                      <p className="mt-2 text-3xl font-bold">+38%</p>
                    </div>

                  </div>

                  <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm text-[#c8d3c8]">
                        Growth overview
                      </span>

                      <span className="rounded-full bg-[#5c9f2f]/20 px-3 py-1 text-xs text-[#b8e39d]">
                        +18.4%
                      </span>
                    </div>

                    <div className="flex h-28 items-end gap-2">
                      {[35, 48, 42, 63, 58, 78, 70, 92].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-md bg-[#5c9f2f]"
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO / TRUST STRIP */}
      <section className="border-y border-[#dfe8dc] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#829087]">
            Built for teams creating what comes next
          </p>

          <div className="flex flex-wrap gap-7 text-sm font-semibold text-[#9aa59e]">
            <span>PRODUCT</span>
            <span>ENGINEERING</span>
            <span>DATA</span>
            <span>AI</span>
            <span>DESIGN</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5c9f2f]">
            Why Kavya Labs
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            Software designed around momentum.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#647269]">
            From the first idea to a product used at scale, Kavya Labs focuses
            on removing friction from the way modern teams build.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {/* Feature 1 */}
          <div className="group rounded-[1.5rem] border border-[#dfe8dc] bg-white p-7 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,61,47,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7e8] text-xl">
              ✦
            </div>

            <h3 className="mt-7 text-xl font-bold">
              AI-first thinking
            </h3>

            <p className="mt-3 leading-7 text-[#647269]">
              Practical intelligence built into the product experience, not
              added as an afterthought.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group rounded-[1.5rem] border border-[#dfe8dc] bg-white p-7 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,61,47,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7e8] text-xl">
              ↗
            </div>

            <h3 className="mt-7 text-xl font-bold">
              Built to scale
            </h3>

            <p className="mt-3 leading-7 text-[#647269]">
              Clean foundations and thoughtful architecture help products grow
              without slowing teams down.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group rounded-[1.5rem] border border-[#dfe8dc] bg-white p-7 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,61,47,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7e8] text-xl">
              ◌
            </div>

            <h3 className="mt-7 text-xl font-bold">
              Human-centered
            </h3>

            <p className="mt-3 leading-7 text-[#647269]">
              Technology should feel simple. We turn complex capabilities into
              intuitive experiences.
            </p>
          </div>

        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" className="bg-[#13251c] text-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9ed17f]">
                The platform
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
                One place to turn ideas into momentum.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#b5c2b8]">
                Kavya Labs brings product workflows, intelligent insights and
                team visibility together in one focused experience.
              </p>

              <div className="mt-9 space-y-5">

                <div className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5c9f2f] text-xs font-bold">
                    1
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Connect your workflow
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#9fac9f]">
                      Bring the work your team already does into one
                      streamlined workspace.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5c9f2f] text-xs font-bold">
                    2
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Surface useful insights
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#9fac9f]">
                      Turn scattered information into signals your team can
                      actually act on.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5c9f2f] text-xs font-bold">
                    3
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Move from insight to action
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#9fac9f]">
                      Make decisions faster and keep your team moving forward.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Dashboard visual */}
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4">
              <div className="rounded-[1.5rem] bg-[#f8faf7] p-5 text-[#13251c]">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#647269]">
                      WORKSPACE
                    </p>

                    <h3 className="mt-1 text-lg font-bold">
                      Overview
                    </h3>
                  </div>

                  <div className="rounded-full bg-[#edf7e8] px-3 py-1 text-xs font-semibold text-[#4f7e35]">
                    Live
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">

                  <div className="rounded-xl border border-[#dfe8dc] bg-white p-3">
                    <p className="text-[10px] text-[#718077]">
                      Projects
                    </p>
                    <p className="mt-1 text-xl font-bold">24</p>
                  </div>

                  <div className="rounded-xl border border-[#dfe8dc] bg-white p-3">
                    <p className="text-[10px] text-[#718077]">
                      Tasks
                    </p>
                    <p className="mt-1 text-xl font-bold">186</p>
                  </div>

                  <div className="rounded-xl border border-[#dfe8dc] bg-white p-3">
                    <p className="text-[10px] text-[#718077]">
                      Progress
                    </p>
                    <p className="mt-1 text-xl font-bold">78%</p>
                  </div>

                </div>

                <div className="mt-3 rounded-xl border border-[#dfe8dc] bg-white p-4">

                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold">
                      Project progress
                    </p>

                    <p className="text-xs text-[#647269]">
                      This month
                    </p>
                  </div>

                  <div className="mt-5 flex h-32 items-end gap-2">
                    {[42, 55, 48, 67, 59, 78, 71, 88, 82, 94].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t bg-[#8bbd6d]"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="rounded-[2rem] border border-[#dfe8dc] bg-[#edf7e8] px-7 py-12 sm:px-12 lg:px-16">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5c9f2f]">
              About Kavya Labs
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              Small team. Ambitious ideas.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#52645a]">
              We are building software for teams that want to move quickly
              without sacrificing quality. Kavya Labs combines thoughtful
              engineering, intelligent systems and simple design to create
              products that make difficult work feel easier.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

        <div className="rounded-[2rem] bg-[#5c9f2f] px-7 py-14 text-center text-white sm:px-12">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d9f0ca]">
            Ready to build?
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            Let's turn your next idea into something real.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#e6f4de]">
            Explore what Kavya Labs can help you build.
          </p>

          <a
          href="mailto:hello@kavyalabs.example"
          className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-bold hover:-translate-y-0.5"
          style={{ color: "#31591f" }}
          >
          Talk to Kavya Labs →
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#dfe8dc] bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5c9f2f] text-xs font-bold text-white">
                K
              </div>

              <span className="font-bold">
                Kavya Labs
              </span>
            </div>

            <p className="mt-3 text-sm text-[#718077]">
              Building smarter software for ambitious teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-[#647269]">
            <a href="#features" className="hover:text-[#13251c]">
              Features
            </a>

            <a href="#product" className="hover:text-[#13251c]">
              Product
            </a>

            <a href="#about" className="hover:text-[#13251c]">
              About
            </a>

            <a href="#contact" className="hover:text-[#13251c]">
              Contact
            </a>
          </div>

          <p className="text-sm text-[#89948d]">
            © 2026 Kavya Labs
          </p>

        </div>
      </footer>

    </main>
  );
}