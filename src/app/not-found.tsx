"use client";
import errorImage from "@/assets/error-404.png";
import Image from "next/image";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="bg-[#0f1115] min-h-screen">
      <div className="  py-15 flex flex-col justify-center items-center container mx-auto px-4 overflow-hidden">
        <div className="text-center">
          <div className="mx-auto">
            <Image
              src={errorImage}
              className="w-full max-w-87.5 h-auto mx-auto"
              alt="Not-Found Image"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-white text-4xl font-bold">
              OOPS!! PAGE NOT FOUND
            </h1>

            <p className="text-[#627382b8] text-base">
              The Page you are requesting is not found on our system. Please try
              another page.
            </p>

            <Link
              href="/"
              className="inline-block bg-[#C2F10D] text-[#000000] px-8 py-2 rounded font-semibold"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
