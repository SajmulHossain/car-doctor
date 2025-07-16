import { ReactNode } from "react";
import Navbar from "./components/Navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default layout;
