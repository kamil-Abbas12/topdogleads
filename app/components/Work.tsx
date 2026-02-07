import React from "react";
import { Star } from "lucide-react";

const Work = () => {
  return (
    <section className="w-full h-full bg-white">
      <div className="flex flex-col px-50 py-20 justify-center items-center text-center space-y-2">
        <h2 className="text-xl text-gray-400 uppercase">How It Works</h2>

        <h1 className="text-4xl font-bold text-center text-gray-800">
          Don’t Pay for Clicks. Pay for
          <br />
          Customer Calls
        </h1>

        <p className="text-center xl:px-65 text-gray-600 mt-10">
          We offer a proven pay-per-call service where you only pay for customer
          calls. Join over 2000+ local businesses using TopDogLeads to grow their
          business with <b>$0 setup fee,</b> <b>$0 monthly service fee</b> and{" "}
          <b>$0 cancelation fee.</b>
        </p>
      </div>

      <div className="flex justify-start px-40 py-10">
        <h3 className="text-4xl font-bold">
          Check what our
          <br />
          Clients Say about us.
        </h3>
      </div>

     
    </section>
  );
};

export default Work;
