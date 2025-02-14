import { Linkedin } from "lucide-react";

const ContactUsInfo = () => {
    return (
        <div className="flex flex-row md:flex-col justify-around text-center">
            <div className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Email Us</h2>
                <a href="mailto:info@pronest.co.in">info@pronest.co.in</a>
            </div>

            <div>
                <h2 className="text-2xl  sm:text-3xl font-bold mb-2 sm:mb-4">Follow Us</h2>
                <a href="https://linkedin.com/company/professionalnest" className="flex flex-row w-fit mx-auto gap-1">
                    <Linkedin size={22} className="ml-3"/>
                    <span className="break-all">/professionalnest</span>
                </a>
            </div>
        </div>
    );
};

export default ContactUsInfo;