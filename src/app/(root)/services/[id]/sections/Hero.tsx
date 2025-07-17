
const Hero = () => {
    const styles = {
        clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)"
    }
    return (
        <section className="section h-[40vh] relative bg-[url(/assets/images/banner/4.jpg)] bg-cover bg-center rounded-lg">
            <div style={styles} className="w-60 absolute bottom-0 left-1/2 -translate-x-1/2 bg-main h-8 flex items-center justify-center">Home/Service Details</div>
        </section>
    );
};

export default Hero;