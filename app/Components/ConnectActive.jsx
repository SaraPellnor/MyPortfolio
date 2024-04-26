"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";
import { useState } from "react";

const ConnectActive = () => {
  const { register, handleSubmit, reset } = useForm();
const [messageSent, setMessageSent] = useState(false)
  function onSubmit(data) {
    sendEmail(data);
    reset();
    setMessageSent(true);
  }

  return (
    <div className='flex flex-col items-center justify-center p-15'>
<p className="text-xl py-2">{`I'll love to hear from you!`}</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-black"
        >
          Full Name:
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-black"
        >
         Your Email Address:
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Message:
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div>
        <button className="hover:shadow-form rounded-md bg-white py-3 px-8 text-base font-semibold text-green-600 hover:scale-125 duration-500 outline-none">
          Submit
        </button>
        {messageSent ? <p className="text-lg pt-2">Fun! Thanks!</p>:""}
      </div>
    </form>
    </div>
  );
};

export default ConnectActive;
