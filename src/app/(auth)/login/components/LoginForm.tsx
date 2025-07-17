"use client";

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
            <button className="btn bg-main text-lg font-semibold w-full">Sign Up</button>
          </div>

          <div className="divider">Or Sign Up With</div>
        </form>
      </div>
    );
};

export default LoginForm;