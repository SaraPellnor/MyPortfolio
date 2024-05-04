"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";
import { useState } from "react";
import { RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const ConnectActive = () => {
  const { register, handleSubmit, reset } = useForm();
  const [messageSent, setMessageSent] = useState(false);
  function onSubmit(data) {
    sendEmail(data);
    reset();
    setMessageSent(true);
  }

  return (
    // <div className=" h-full w-full">
      <div className=" md:flex justify-center items-center overflow-hidden overflow-y-scroll scrollbar-track-gray-200 scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-600 h-full w-full">
        <div className="flex flex-col justify-center-center gap-7 text-start bg-purple-900 md:w-1/2 m-5 p-7 rounded-xl text-white md:text-[60%]">
          <h1 className="p-3">
            If I were you I would love to contact me to offer me a jobb or
            something else.
          </h1>
          <div className="font-light text-2xl text-slate-400">
            <p>Brearedsvägen 228</p>
            <p>439 63 Frillesås</p>
            <p>Sweden</p>
            <a
              className="text-pink-300 hover:text-slate-400"
              href="mailto:sara.pellnor@gmail.com?subject=Your%20Subject&body=Your%20Message"
            >
              sara.pellnor@gmail.com
            </a>
          </div>
          <p>Fallow me on social medias</p>
          <div className=" text-5xl flex gap-5">
            <RiLinkedinLine className="hover:text-pink-300" />
            <FiGithub className="hover:text-pink-300" />
            <MdOutlineAlternateEmail className="hover:text-pink-300" />
          </div>
          <p className="text-2xl text-slate-400 font-thin">
            © 2024 Sara Pellnor
          </p>
        </div>
        <div className="md:w-1/2 p-5">
          <p className="text-purple-900 font-extrabold py-5 text-start">
            I would love to hear from you!
          </p>
          <form
            className="flex flex-col gap-7"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-none focus:shadow-md"
              {...register("name", { required: true })}
            />

            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-none focus:shadow-md"
              {...register("email", { required: true })}
            />
            <div className="mb-5">
              <textarea
                rows={4}
                placeholder="Enter your message"
                className="w-full resize-none border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-none focus:shadow-md"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div>
              <button className=" bg-purple-900 py-3 w-full text-base font-semibold text-white hover:scale-125 duration-500 outline-none">
                SEND
              </button>
            </div>
          </form>
        </div>
        {messageSent ? <p className="text-lg pt-2">Fun! Thanks!</p> : ""}
      </div>
    // </div>
  );
};

export default ConnectActive;
