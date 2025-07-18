"use client";

import Link from "next/link";
import React from "react";

const LoginForm = () => {
    const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
      <div className="p-10 border rounded-md w-full md:w-1/2">
        <h2 className="font-semibold text-3xl text-center">Sign Up</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="floating-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="email" className="floating-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your email"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="password" className="floating-label">
              Your Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Your password"
              className="input"
            />
          </div>

          <div>
            <button className="btn text-lg font-semibold btn-block bg-main">
              Sign Up
            </button>
          </div>

          <div className="divider">Or Sign Up With</div>
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p>Already have an account? <Link className="text-main" href='/login'>Login</Link></p>
        </form>
      </div>
    );
};

export default LoginForm;