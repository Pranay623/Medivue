import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    id: 1,
    title: "Step 1",
    description: "Choose your preferred country and university.",
  },
  {
    id: 2,
    title: "Step 2",
    description: "Submit your academic documents (10+2).",
  },
  {
    id: 3,
    title: "Step 3",
    description: "Fill out the application form and pay the fees.",
  },
  {
    id: 4,
    title: "Step 4",
    description: "Receive your admission letter and visa assistance.",
  },
  {
    id: 5,
    title: "Step 5",
    description: "Fly and start your medical journey.",
  },
];

const Process = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden"); 
      }
    }, [controls, inView]);
  return (
    <div className="p-6 flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          <span className="text-orange-500">How to Get Started</span>
        </h1>
        <p className="text-gray-600 mt-3 text-xl">
          Follow these steps to begin your MBBS journey.
        </p>
      </div>
      <div className="relative w-full max-w-2xl p-6 bg-white rounded-lg">
  {steps.map((step, index) => (
    <motion.div
      key={step.id}
      ref={ref}
      className="flex items-center gap-6 mb-8"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { delay: index * 0.3 } },
      }}
    >
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full border-4 ${
          inView ? "bg-orange-500 border-orange-500" : "border-gray-300"
        }`}
      >
        {inView && (
          <motion.span
            className="w-5 h-5 bg-white rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold text-gray-800">
          {step.title}
        </h3>
        <p className="text-lg text-gray-600 mt-2 leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>

    </div>
  );
};

export default Process;
