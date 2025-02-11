import Link from "next/link";

const BrowseDirectoryC2A = () => {
    return (
        <section className="px-12 py-16 bg-color-primary-section text-center gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
                Browse our awesome AI discounts today!
            </h2>
            <div>
                <Link href="/getstarted" className="px-6 md:px-8 py-4 bg-color-primary rounded-lg font-extrabold">Get Started</Link>
            </div>
        </section>
    );
};

export default BrowseDirectoryC2A;