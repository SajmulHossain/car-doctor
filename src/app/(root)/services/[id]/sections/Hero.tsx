
const Hero = () => {
    const styles = {
        clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)"
    }
    return (
        <section className="section h-[40vh] relative bg-[url(/assets/images/banner/4.jpg)] bg-cover bg-center rounded-lg overflow-hidden">
            <div className="absolute bg-gradient-to-r from-black inset-0 z-0"></div>
            <div style={styles} className="w-60 absolute bottom-0 left-1/2 -translate-x-1/2 bg-main h-8 flex items-center justify-center">Home/Service Details</div>
            <h1 className="text-white font-black text-4xl z-50 absolute top-1/2 -translate-y-1/2 left-20">Service Details</h1>
        </section>
    );
};

export default Hero;