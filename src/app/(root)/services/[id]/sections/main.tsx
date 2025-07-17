import { IService } from "@/app/types/service.types";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Main = ({data}: {data: IService | null}) => {
    return (
        <section className="section grid grid-cols-1 lg:grid-cols-3 gap-4">
            <LeftSection data={data} />
            <RightSection />
        </section>
    );
};

export default Main;