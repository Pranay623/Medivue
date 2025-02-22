import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only alphabetic characters"),
  email: z
    .string()
    .email("Invalid email address")
    .regex(/@.*\.com$/, "Email must contain '@' and end with '.com'"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  country: z
    .string()
    .min(2, "Country preference is required")
    .regex(/^[a-zA-Z\s]+$/, "Country must contain only alphabetic characters"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Thank you for applying! Our team will contact you within 24 hours.");
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-around md:mt-[-10rem] space-y-6 md:space-y-0">
      {/* Contact Information */}
      <div className="flex w-full relative px-4 md:px-0">
        <div className="bg-orange-100 w-full p-[3vw] rounded-r-4xl shadow-md border border-orange-300">
          <h1 className="text-lg md:text-xl font-bold mb-8 text-orange-600">
            Contact Us
          </h1>
          <h1 className="text-xl md:text-3xl font-bold text-black mb-2">
            Get In Touch
          </h1>
          <h3 className="font-bold mb-4 text-orange-600">
            Corporate Office (New Delhi)
          </h3>
          <h3 className="text-black">
            Indirapuram, Ghaziabad, DELHI/NCR-201014
          </h3>
          <h3 className="text-black">
            <span className="font-bold">Phone :</span> +91742XXX895
          </h3>
          <h3 className="text-black mb-4">
            <span className="font-bold">Email :</span> delhi@XXX.org
          </h3>
          <span>
            <hr className="border-gray-300" />
          </span>
          <h3 className="font-bold mt-8 mb-4 text-orange-600">
            Regional Office (Cochin)
          </h3>
          <h3 className="text-black">
            Mather Building, Ernakulam North, Ernakulam, Cochin, Kerala, India.
          </h3>
          <h3 className="text-black">
            <span className="font-bold">Phone :</span> +91701XXXX661, 808XXXX804
          </h3>
          <h3 className="text-black mb-4">
            <span className="font-bold">Email :</span> info@XXX.org
          </h3>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white rounded-2xl shadow-lg w-[90vw] md:w-[50%] md:-ml-20 md:-mt-25 relative z-10 p-[3vw] border border-amber-600">
        <h1 className="text-lg md:text-2xl font-bold text-orange-600 text-center mb-4">
          Application Form
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextInput
            label="Name"
            placeholder="Enter Your Name"
            register={register("name")}
            error={errors.name}
          />
          <TextInput
            label="Email"
            placeholder="Enter Email Address"
            register={register("email")}
            error={errors.email}
          />
          <TextInput
            label="Phone"
            placeholder="Enter Your Phone Number"
            register={register("phone")}
            error={errors.phone}
          />
          <TextInput
            label="Country"
            placeholder="Enter Your Country Preference"
            register={register("country")}
            error={errors.country}
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const TextInput = ({ label, placeholder, register, error }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      {...register}
      className={`w-full px-4 py-2 border rounded-lg ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-sm">{error.message}</p>}
  </div>
);

export default Form;
