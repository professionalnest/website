import { C2ASectionComponentLabels } from "@/models/UIInterfaces";
import C2AButton from "./C2AButton";

const C2ASection =  ({labels}: {labels:C2ASectionComponentLabels}) => {
    return (
        <section className="px-12 py-16 bg-color-primary-section text-center gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
                {labels.title}
            </h2>
            <C2AButton />
        </section>
    );
};

export default C2ASection;