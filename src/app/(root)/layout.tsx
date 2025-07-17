import { ReactNode } from "react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
