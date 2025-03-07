import { WhyChooseComponentLabels } from "@/models/UIInterfaces";

const WhyChooseComponent = ({labels}: {labels:WhyChooseComponentLabels}) => {
    return (
        <section className="container mx-auto px-12 py-8 sm:py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
                {labels.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 sm:gap-12">
                {labels.reasons.map((item, index) => (
                    <div key={`reason_${index}`} className="flex flex-col items-center w-full p-4 gap-4">
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
                        <p className="text-center">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhyChooseComponent;