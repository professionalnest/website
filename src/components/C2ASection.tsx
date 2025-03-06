import { C2ALabels, C2ASectionComponentLabels } from "@/models/UIInterfaces";
import Link from "next/link";

const C2ASection =  ({labels, c2a}: {labels:C2ASectionComponentLabels, c2a: C2ALabels}) => {
    return (
        <section className="px-12 py-16 bg-color-primary-section text-center gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
                {labels.title}
            </h2>
            <div>
                <Link href="/getstarted" className="px-6 md:px-8 py-4 bg-color-primary rounded-lg font-extrabold">Get Started</Link>
            </div>
        </section>
    );
};

export default C2ASection;