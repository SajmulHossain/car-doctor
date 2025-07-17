import { serviceCollection } from "@/app/libs/dbConnect";
import Hero from "./sections/Hero";
import Main from "./sections/main";
import { ObjectId } from "mongodb";
import { IService } from "@/app/types/service.types";

const SingleServicePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const service = await serviceCollection.findOne<IService>({
    _id: new ObjectId(id),
  });
  return (
    <>
      <Hero />
      <Main data={service} />
    </>
  );
};

export default SingleServicePage;
