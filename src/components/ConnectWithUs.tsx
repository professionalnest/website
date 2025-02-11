import Link from "next/link";

const ConnectWithUs = () => {
    return (
        <section className="w-fit px-4 py-20 mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-20">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-black">Can't find what you are looking for?</h2>
                  <p className="text-gray-600 mb-6 md:mb-0 text-sm sm:text-base">
                      If you cannot find the answer to your question in our FAQ, you can always contact us.
                  </p>
              </div>
              <div><Link href="/contact" className="px-6 py-3 bg-color-primary rounded">Contact us</Link></div>
          </div>
      </section>
    );
};

export default ConnectWithUs;