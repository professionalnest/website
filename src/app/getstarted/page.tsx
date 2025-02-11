"use client"

import Banner from '@/components/Banner';
import GetStartedForm from '@/components/GetStartedForm';

export default function SignUpForm() {
    return (
      <>
        <Banner />
        <section className="container mx-auto max-w-6xl px-4 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">Sign up to get discounts!</h1>
          <GetStartedForm />
        </section>
      </>
    );
}

