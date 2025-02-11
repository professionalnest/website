const WhyChooseComponent = () => {
    const whyChoose = [
        {
            id: "1",
            name: "No Platform lock-in",
            image: "/illustrations/people-working-in-a-informal-environment.svg",
        },
        {
            id: "2",
            name: "Instant Access",
            image: "/illustrations/people-chatting-around-the-office.svg",
        },
        {
            id: "3",
            name: "Transparent Pricing",
            image: "/illustrations/girl-with-laptop-F0F0F4.svg",
        },
    ];

    return (
        <section className="px-4 sm:px-12 py-8 sm:py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
                Why choose ProNest?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 sm:gap-12">
                {whyChoose.map((item) => (
                    <div key={item.id} className="flex flex-col items-center w-full p-4">
                        <div className="">
                            <img
                                src={item.image}
                                alt={`Illustration for ${item.name}`}
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-center text-gray-800">
                            {item.name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhyChooseComponent;