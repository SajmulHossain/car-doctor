import { IService } from "@/app/types/service.types";
import Image from "next/image";

const LeftSection = async ({ data }: { data: IService | null }) => {
  if (!data) {
    return <div>Somethig went wrong</div>;
  }

  const { img, title, description, facility, price } = data || {};
  console.log(facility);

  return (
    <div className="lg:col-span-2 space-y-5 lg:space-y-8">
      <div>
        <Image
          src={img}
          height={400}
          width={400}
          className="w-full object-cover h-[400px] rounded-lg"
          alt="oikire"
        />
      </div>

      <h3 className="font-bold text-2xl">{title}</h3>

      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {
            facility.map((data,index:number) => <div key={index} className="rounded-lg border-t-2 border-main p-4 lg:p-6 bg-gray-100 dark:bg-gray-800">
                <h2 className="font-semibold mb-2">{data.name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">{data.details}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default LeftSection;
