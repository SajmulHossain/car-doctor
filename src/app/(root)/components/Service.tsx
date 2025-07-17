import { IService } from "@/app/types/service.types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Service = ({ data }: { data: IService }) => {
  const { _id, img, price, title } = data || {};
  
  return (
    <div className="p-3 border rounded-md border-base-300">
      <div>
        <Image
          src={img}
          className="w-full object-cover h-[220px] rounded-md"
          width={400}
          height={208}
          alt={`${title}'s image`}
        />
      </div>
      <h3 className="font-semibold text-lg mt-4">{title}</h3>
      <div className="font-medium text-main flex items-center justify-between mt-4">
        <p>Price: ${price}</p>
        <Link href={`/services/${_id}`}>
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Service;
