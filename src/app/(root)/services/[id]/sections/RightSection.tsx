import { ArrowRight } from "lucide-react";

const RightSection = () => {
    const services = [
        "Full Car Repairs", "Engine Repair", "Automatic Services", "Engine Oil Change", "Battery Change"
    ]
    return (
      <div>
        <div className="rounded bg-black/10 dark:bg-white/20 p-6">
          <h2 className="font-bold text-xl mb-2">Services</h2>
          <ul className="space-y-4">
            {services.map((data, index) => (
              <li
                className="flex items-center justify-between bg-white text-black dark:bg-gray-500 px-4 py-2 text-sm"
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
      </div>
    );
};

export default RightSection;