import React from "react";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1000"
      className="hero bg-[#E0F4DB] p-12 md:p-20 rounded mb-16"
    >
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-duration="1500"
        className="hero-content flex-col lg:flex-row-reverse gap-8"
      >
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-4 font-semibold">
            For the last couple of years we have noticed that many people tries
            to buy some motor toys and they want to collect various amount of
            cars or bikes for their childrens,
          </p>
          <p className="py-4 font-semibold">
            Even not only for childrens, but the adult peoples also looks for
            some motor toys to beautify their house.
          </p>
          <p className="py-4 font-semibold">
            So that's why we have decided to store all type of motor toys for
            the people, so they can collect all type of motor toys from a single
            place, and so we created the website.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="1500"
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <figure className="max-h-96">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/8jkw0cr/man-potrain.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jason Thomas</h2>
            <p>CEO - MotorToys</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
