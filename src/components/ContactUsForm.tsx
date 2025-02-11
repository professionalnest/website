import { contactUsSubmissionAction } from '@/actions/appActions'
import { useRef, useState } from 'react';

const ContactUsForm = () => {
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [successMsg, setSuccessMsg] = useState<string>("");
    const formRef = useRef<HTMLFormElement>(null);
  
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
  
      setSuccessMsg('');
      setErrorMsg('');
      const result = await contactUsSubmissionAction(formData);
      if (result && result.status === true) {
        setSuccessMsg('Thank you for reaching out! We\'ll get in touch with you shortly.');
        if (formRef.current) {
            formRef.current.reset();
        }
      } else if (result && result.status === false) {
        switch(result.errorCode) {
          case "EMAIL_SEND_ERROR": {
            setErrorMsg('Error sending email. Please try again later.');
            break;
          }
          case "FULL_NAME_VALIDATION_FAILURE": {
            setErrorMsg('Please check your full name. It must be at least 2 characters long.');
            break;
          }
          case "EMAIL_VALIDATION_FAILURE": {
            setErrorMsg('Please check your email address.');
            break;
          }
          case "MESSAGE_VALIDATION_FAILURE": {
            setErrorMsg('Please check your message. It must be at least 10 characters');
            break;
          }
        }
      }
    }

    return (
        <div className="w-full">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Send us a message</h1>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Have questions about pricing, plans, or our Awesome Product? Fill out the form and we will be in touch shortly
            </p>
            <form onSubmit={handleFormSubmit} ref={formRef} className="space-y-4 sm:space-y-6">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="Your name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Your email"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Your message for us"
                        rows={6}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-[#F5C06B] text-black rounded hover:bg-[#f3b44d] transition-colors font-medium text-sm sm:text-base"
                >
                    Submit
                </button>
            </form>

            {/* ERROR MESSAGE */}
            {errorMsg && <div className="pb-2 rounded-lg text-red-500 text-center italic">{errorMsg}</div>}

            {/* SUCCESS MESSAGE */}
            {successMsg && <div className="pb-2 rounded-lg text-green-500 text-center italic">{successMsg}</div>}
        </div>
    );
};

export default ContactUsForm;