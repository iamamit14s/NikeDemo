import React from "react";
import Button from "../Components/Button";
import { offer } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section
      className="flex justify wrap items-center
     max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        ></img>
      </div>
      <div
        className="flex flex-1
      flex-col"
      >
        <h2
          className="font-palanquin text-4xl capitalize
        font-bold lg:max-w-lg"
        >
          We Provide You
          <span className="text-coral-red"></span>
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover Stylish Nike Arrivals, quality comfort, innovation for your
          active life.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4 w-1/2">
          <Button label="View details" />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
