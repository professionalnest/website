import { ValueProposition } from "@/models/UIInterfaces";

const ValuePropositions = ({title, valuePropositions}: {title:string, valuePropositions:ValueProposition[]}) => {
    return (
        <section className="px-12 py-8 sm:py-16 bg-color-primary-section">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
                {title}
            </h2>
            {valuePropositions.map((valueProposition, index) => (
                <div key={`valueprop_${index}`} className={`flex items-center w-full p-4 gap-4 container mx-auto ${index%2 === 1 && 'flex-row-reverse'}`}>
                    <div className="w-1/2">
                        <img
                            src={valueProposition.image}
                            alt={`Illustration for ${valueProposition.title}`}
                            className="object-contain w-3/4 h-3/4 m-auto"
                        />
                    </div>
                    <div className={`flex flex-col gap-2 w-1/2 ${index%2 === 1 && 'text-right'}`}>
                        <h6 className="text-sm text-gray-500">For {valueProposition.userType}</h6>
                        <h3 className="text-2xl font-semibold text-gray-800">
                            {valueProposition.title}
                        </h3>
                        <p className={`max-w-md ${index%2 === 1 && 'mr-0 ml-auto'}`}>
                            {valueProposition.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default ValuePropositions;