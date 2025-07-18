import Image from "next/image";
import SignUpForm from "./components/SignUpForm";
import loginImg from "@/../public/assets/images/login/login.svg";

const page = () => {
    return (
      <section className="section flex justify-between gap-6 flex-col items-center md:flex-row">
        <div>
          <Image src={loginImg} alt="login image" />
        </div>
        <SignUpForm />
      </section>
    );
};

export default page;