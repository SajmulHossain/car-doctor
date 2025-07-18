"use client";

import loginImg from "@/../public/assets/images/login/login.svg";
import Image from "next/image";
import LoginForm from "./components/LoginForm";
const page = () => {
  return (
    <section className="section flex justify-between gap-6 flex-col items-center md:flex-row">
      <div>
        <Image src={loginImg} alt="login image" />
      </div>
      <LoginForm />
    </section>
  );
};

export default page;
