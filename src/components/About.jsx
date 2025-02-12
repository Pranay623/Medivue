import React, { useState } from "react";

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const features = [
    {
      title: "Experience and Expertise",
      description:
        "With years of experience in the education sector, our team possesses the knowledge and expertise to provide reliable and accurate information.",
    },
    {
      title: "Student-Centered Approach",
      description:
        "We prioritize the needs of students, ensuring our services are tailored to enhance their educational journey.",
    },
    {
      title: "Global Network",
      description:
        "Our extensive global network connects students with opportunities worldwide, fostering growth and learning.",
    },
    {
      title: "Commitment to Excellence",
      description:
        "We are dedicated to maintaining high standards and delivering exceptional services to our students.",
    },
  ];

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between p-8">
//       {/* Left Section */}
//       <div className="bg-orange-500 text-white rounded-3xl p-6 w-[40vw] md:w-1/2 space-y-4">
//         <h1 className="text-3xl font-bold text-center">Why Choose Us</h1>
//         <div className="space-y-4">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white text-orange-500 rounded-lg p-4 cursor-pointer shadow-md w-[30vw]"
//               onClick={() => toggleExpand(index)}
//             >
//               <div className="flex justify-between items-center">
//                 <h2 className="text-lg font-semibold">{feature.title}</h2>
//                 <span className="text-xl font-bold">
//                   {expandedIndex === index ? "-" : "+"}
//                 </span>
//               </div>
//               {expandedIndex === index && (
//                 <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="bg-orange-50 rounded-xl p-6 w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
//         <h2 className="text-orange-500 text-sm font-bold">ABOUT US</h2>
//         <h1 className="text-2xl font-bold text-gray-800 mt-2">About Us</h1>
//         <p className="text-gray-700 mt-4 leading-relaxed">
//           Welcome to Logos Study Abroad, your trusted partner in exploring global education opportunities! Our mission is to empower students by providing them with the tools, information, and support they need to embark on a life-changing study abroad experience.
//         </p>
//         <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-orange-600 transition-colors duration-300">
//           Discover More
//         </button>
//       </div>
//     </div>
//   );

return(
    <>
        <div className="flex">
            <div className="border border-black w-[50%] h-full" >
                <h1>Hello</h1>
            </div>
            <div className="border border-black w-[50%] h-[50%]" ></div>
        </div>
        
    </>
)
};

export default About;
