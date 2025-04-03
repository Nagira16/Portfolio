import ContactForm from "@/components/partials/ContactForm";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { JSX } from "react";

const ContactPage = (): JSX.Element => {
  return (
    <div className="relative z-20 min-h-screen grid place-content-center text-center p-20">
      <section className="container flex flex-col items-center space-y-10">
        <article>
          <h3 className="text-5xl font-semibold text-white ">Contact Me</h3>
        </article>

        <div className="flex justify-center items-center">
          <Card className="text-white bg-gray-900 shadow-lg border-gray-600 rounded-2xl p-10 md:w-2xl lg:w-4xl">
            <section className="flex flex-col sm:flex-row">
              {/* Form Section */}
              <article className="flex-1 border-b border-r-0 sm:border-b-0 sm:border-r border-gray-700 pb-5 sm:pr-6">
                <ContactForm />
              </article>

              {/* Contact Info Section */}
              <article className="flex-1 flex flex-col justify-center items-center pt-10 sm:pt-0 sm:pl-6 ">
                <div className="flex flex-col items-start space-y-10">
                  <p className="flex items-center text-lg gap-3">
                    <Mail size={20} />
                    <Link
                      href="https://mail.google.com/mail/?view=cm&to=Tsuji0032@gmail.com&su=Job%20Inquiry&body=Hello,%20I'm%20interested%20in%20your%20services."
                      className="hover:underline text-gray-300"
                    >
                      Tsuji0032@gmail.com
                    </Link>
                  </p>
                  <p className="flex items-center text-lg gap-3">
                    <Phone size={20} />
                    <span className="text-gray-300">+1 (785)-491-9552</span>
                  </p>
                  <div className="w-full flex justify-center items-center">
                    <Link
                      href="https://github.com/Nagira16"
                      target="_blank"
                      className="hover:opacity-75 transition"
                    >
                      <Image
                        src="/github-logo.svg"
                        alt="Github Logo"
                        width={35}
                        height={35}
                        className="invert"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </section>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
