import fileLogo from "@/../public/file.svg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const RightSection = ({ data }: { data: string | undefined }) => {
  const services = [
    "Full Car Repairs",
    "Engine Repair",
    "Automatic Services",
    "Engine Oil Change",
    "Battery Change",
  ];
  return (
    <div className="space-y-7">
      <div className="rounded bg-black/10 dark:bg-white/20 p-8">
        <h2 className="font-bold text-xl mb-2">Services</h2>
        <ul className="space-y-4">
          {services.map((data, index) => (
            <li
              className="flex items-center justify-between text-white bg-gray-700 px-4 py-2 text-sm rounded-md"
              key={index}
            >
              {data}
              <span>
                <ArrowRight className="text-main" />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-black p-8 rounded-xl">
        <h2 className="font-bold text-2xl mb-6">Download</h2>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src={fileLogo} className="size-10" alt="file logo" />
            <div>
              <h3 className="font-semibold text-lg">Our Brochure</h3>
              <p className="text-sm text-gray-400">Download</p>
            </div>
          </div>
          <button className="bg-main rounded-md p-2">
            <ArrowRight size={30} strokeWidth={1} />
          </button>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-4">
            <Image src={fileLogo} className="size-10" alt="file logo" />
            <div>
              <h3 className="font-semibold text-lg">Company Details</h3>
              <p className="text-sm text-gray-400">Download</p>
            </div>
          </div>
          <button className="bg-main rounded-md p-2">
            <ArrowRight size={30} strokeWidth={1} />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="font-bold text-3xl">Price ${data}</h2>
        <div>
          <button className="btn w-full bg-main font-semibold rounded-md">
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
