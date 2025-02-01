export default function WhyChose() {
    const whyChoose = [
        {
            id: "1",
            name: "No Platform lock-in",
            logo: "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/illustrations/rosa/people-working-in-a-informal-environment.svg",
        },
        {
            id: "2",
            name: "Instant Access",
            logo: "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/illustrations/rosa/people-chatting-around-the-office.svg",
        },
        {
            id: "3",
            name: "Transparent Pricing",
            logo: "https://assets.softr-files.com/applications/e9036e53-b096-4bc0-8e6c-d598c06d24be/assets/girl-with-laptop-F0F0F4.svg",
        },
    ];

    return (
        <section className="px-4 sm:px-12 py-8 sm:py-16 bg-white">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-black">
                Why choose ProNest?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {whyChoose.map((item) => (
                    <div key={item.id} className="flex flex-col items-center">
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                            <img
                                src={item.logo}
                                alt={`Feature illustration ${item.name}`}
                                width={256}
                                height={256}
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-center text-gray-800">
                            {item.name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
