import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Blogs = () => {
  document.title = "MotorToys | Blogs";
  const { user } = useContext(AuthContext);
  return (
    <div className="my-16 md:mt-8 p-12 max-w-7xl mx-auto md:px-36 md:pb-12">
      <h1 className="mb-10 text-3xl md:text-5xl text-center font-bold text-gray-900">
        Our Blogs
      </h1>
      <div
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        className="bg-base-200 rounded p-8 mb-5"
      >
        <h4 className="text-gray-700 font-semibold text-lg mb-3">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h4>
        <p className="mb-5">
          The access token and the refresh tokens are 2 type of tokens, so when
          we are authenticated by any authentication system like jwt then it
          provides 2 tokens to us, 1 is the access token, another is the refresh
          token, and if the access token gets expired then we can renew that by
          using the refresh token, and if the refresh token gets expired then we
          will have login again, and we can store them on 2 places in client
          side 1 is the local storage, and another is http cookies only, and the
          2nd option is more safe then the 1st one.{" "}
        </p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-duration="1000"
        className="bg-base-100 rounded p-8 mb-5"
      >
        <h4 className="text-gray-700 font-semibold text-lg mb-3">
          Compare SQL and NoSQL databases?
        </h4>
        <p className="mb-5">
          SQL databases are table based, well structured and easy to find the
          data in SQL database and NoSQL databases are document based, and the
          data field are key value paired and it's perfect for JS{" "}
        </p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-duration="1000"
        className="bg-base-200 rounded p-8 mb-5"
      >
        <h4 className="text-gray-700 font-semibold text-lg mb-3">
          What is express js? What is Nest JS?
        </h4>
        <p className="mb-5">
          Express js and Node js both are very popular frameworks of Node js,
          and we can use both of them to build our applications, the benefits of
          express js is: it has a large community, lightweight, and the next js
          supports some extra features like typescript etc.{" "}
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        className="bg-base-100 rounded p-8 mb-5"
      >
        <h4 className="text-gray-700 font-semibold text-lg mb-3">
          What is MongoDB aggregate and how does it work?
        </h4>
        <p className="mb-5">
          The mongodb aggregation is a method of processing a large number of
          documents in a collection by means of passing them through different
          stages. that means we can get some specified data from a large
          colleciton by using aggregation like filter, sort, group etc. and the
          whole process calls a pipeline
        </p>
      </div>
    </div>
  );
};

export default Blogs;
