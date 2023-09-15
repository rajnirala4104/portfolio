import React, { Fragment, Suspense } from "react";

export const AboutSection = () => {
   return (
      <Fragment>
         <Suspense fallback="loading...">
            <div className="px-3">
               <h2 className="text-2xl text-gray-900 px-2 z-20 sticky top-0 bg-gray-300 ">
                  <strong>About Me</strong>
               </h2>
               <div
                  className="aboutContent"
                  data-aos="fade-up"
                  data-aos-duration="1000"
               >
                  <p className="text-gray-600 my-2 text-justify">
                     Hey there! 👋 I'm a full-stack developer with expertise in
                     multiple languages and frameworks.
                     <strong>
                        {" "}
                        I specialized in JavaScript, Python and little bit in C,
                        Java, and Php. I'm also experienced in working with
                        popular frameworks like Flask, React.js, Express.js, and
                        Node.js for backend.
                     </strong>{" "}
                     When it comes to databases, I'm well-versed in MongoDB. As
                     a <strong>MERN developer </strong>, I love creating dynamic
                     and interactive web applications. Can't wait to showcase my
                     skills on my portfolio website! and one more thing i'll
                     tell you,
                     <strong>
                        {" "}
                        I am confident that I can contribute to the growth and
                        development of any organization.
                     </strong>{" "}
                  </p>
               </div>
            </div>
         </Suspense>
      </Fragment>
   );
};
