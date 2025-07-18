import { serviceCollection } from "@/app/libs/dbConnect";
import { IService } from "@/app/types/service.types";
import Heading from "../components/Heading";
import Service from "../components/Service";

const Services = async () => {
  const services = await serviceCollection.find<IService>({}).toArray();
  return (
    <section className="section">
      <Heading
        text="Service"
        heading="Our Service Area"
        paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} data={service} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="btn btn-outline font-semibold text-main rounded-md text-center">
          More Stories
        </button>
      </div>
    </section>
  );
};

export default Services;
