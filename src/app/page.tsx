'use client'

import { sendEmailAction } from "@/actions/sendEmailAction";

export default function RootPage() {

  return (
    <div className="w-screen h-screen flex flex-col justify-center align-center">
      <h1 className="font-extrabold text-4xl text-center my-5">Welcome to Pronest!</h1>
      <br/>
      <form action={sendEmailAction} className="gap-2 p-8 flex justify-center">
        <input type="text" name="toAddress" placeholder="To Adrress" className="p-2 border-2 rounded-md flex-grow"/>
        <button type="submit" className="bg-blue-700 text-white p-2 rounded-md">Send Test Email</button>
      </form>
      <br/>
    </div>
  );
}