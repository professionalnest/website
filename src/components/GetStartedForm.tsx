import { getStartedSubmissionAction } from '@/actions/appActions'
import { useRef, useState } from 'react';

const GetStartedForm = () => {
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [successMsg, setSuccessMsg] = useState<string>("");
    const formRef = useRef<HTMLFormElement>(null);
  
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
  
      setSuccessMsg('');
      setErrorMsg('');
      const result = await getStartedSubmissionAction(formData);
      if (result && result.status === true) {
        setSuccessMsg('Thank you! We\'ll get in touch with you shortly.');
        if (formRef.current) {
            formRef.current.reset();
        }
      } else if (result && result.status === false) {
        switch(result.errorCode) {
          case "EMAIL_SEND_ERROR": {
            setErrorMsg('We hit a snag! Please try again later.');
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
          case "PHONE_VALIDATION_FAILURE": {
            setErrorMsg('Please check your phone.');
            break;
          }
        }
      }
    }

  return (
    <>
      <form onSubmit={handleFormSubmit} ref={formRef} className="space-y-6 max-w-2xl mx-auto px-4 py-12">
     
        <div>
          <label htmlFor="fullName" className="block text-gray-600 mb-2">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>

      
        <div>
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-600 mb-2">
            Phone
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number (Optional)"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-fit py-3 px-6 bg-maincolor text-black font-semibold rounded-lg bg-color-primary "
          >
            Sign Up
          </button>
        </div>
      </form>

      {/* ERROR MESSAGE */}
      {errorMsg && <div className="pb-2 rounded-lg text-red-500 text-center italic">{errorMsg}</div>}

      {/* SUCCESS MESSAGE */}
      {successMsg && <div className="pb-2 rounded-lg text-green-500 text-center italic">{successMsg}</div>}
    </>
  )
}

export default GetStartedForm;