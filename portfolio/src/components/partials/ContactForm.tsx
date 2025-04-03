"use client";

import { sendMessage } from "@/actions/sendMessage";
import { useActionState, useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [state, formAction, isLoading] = useActionState(sendMessage, {
    success: false,
    message: null,
  });

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (state.message) {
      Swal.fire({
        text: state.message,
        icon: state.success ? "success" : "error",
        toast: true,
        position: "top-right",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  }, [state.message]);

  if (!isMounted) {
    return (
      <div className="flex justify-center items-center h-[350px]">
        <div className="animate-spin h-12 w-12 border-4 border-t-transparent border-blue-500 rounded-full"></div>
      </div>
    );
  }

  return (
    <form className="flex flex-col space-y-6" action={formAction}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="border-b border-gray-600 bg-transparent p-2 focus:outline-none focus:border-blue-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="border-b border-gray-600 bg-transparent p-2 focus:outline-none focus:border-blue-400"
      />
      <textarea
        placeholder="Your Message"
        name="message"
        rows={4}
        className="border-b border-gray-600 bg-transparent p-2 focus:outline-none focus:border-blue-400"
      ></textarea>
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-red-500 text-white py-2 px-4 rounded-3xl hover:to-red-700 hover:from-blue-700 transition-transform active:scale-90 mt-5"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
