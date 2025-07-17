import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Main = () => {
    return (
        <section className="section grid grid-cols-1 lg:grid-cols-3">
            <LeftSection />
            <RightSection />
        </section>
    );
};

export default Main;