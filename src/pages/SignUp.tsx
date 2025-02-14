// import { useForm, SubmitHandler } from "react-hook-form";

// type Inputs = {
//   email: string;
//   password: string;
// };

// export const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     console.log(data); // Process the form data
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="flex flex-col w-full max-w-md p-6 space-y-4 shadow-md rounded-lg mx-auto sm:p-8 bg-slate-300
//        dark:bg-gray-800 text-white z-50 transition-colors duration-300"
//     >
//       {/* Email Field */}
//       <div className="flex flex-col">
//         <label className="mb-1 font-medium dark:text-white">Email:</label>
//         <input
//           className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//           {...register("email", { required: "Email is required" })}
//           type="email"
//           placeholder="Enter your email"
//         />
//         {errors.email && (
//           <span className="text-red-500 text-sm mt-1">
//             {errors.email.message}
//           </span>
//         )}
//       </div>

//       {/* Password Field */}
//       <div className="flex flex-col">
//         <label className="mb-1 font-medium dark:text-white">Password:</label>
//         <input className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//           {...register("password", {
//             required: "Password is required",
//             minLength: {
//               value: 6,
//               message: "Password must be at least 6 characters",
//             },
//           })}
//           type="password"
//           placeholder="Enter your password"
//         />
//                 <label className="mb-1 font-medium dark:text-white">comfirm Password:</label>
//         <input className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//           {...register("password", {
//             required: "Password is required",
//             minLength: {
//               value: 6,
//               message: "Password must be at least 6 characters",
//             },
//           })}
//           type="password"
//           placeholder="Enter your password"
//         />
//         {errors.password && (
//           <span className="text-red-500 text-sm mt-1">
//             {errors.password.message}
//           </span>
//         )}
//       </div>

//       {/* Submit Button */}
//       <button
//         className="w-full px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-all duration-200"
//         type="submit"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };
// import React, { useState } from "react";

// interface SignUpForm {
//   name: string;
//   email: string;
//   password: string;
//   rePassword: string;
//   phone: string;
// }

// const SignUp: React.FC = () => {
//   const [formData, setFormData] = useState<SignUpForm>({
//     name: "",
//     email: "",
//     password: "",
//     rePassword: "",
//     phone: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (formData.password !== formData.rePassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     console.log("Submitted Data:", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-md shadow-md">
//       <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="p-2 border rounded" />
//       <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="p-2 border rounded" />
//       <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="p-2 border rounded" />
//       <input type="password" name="rePassword" placeholder="Confirm Password" value={formData.rePassword} onChange={handleChange} required className="p-2 border rounded" />
//       <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="p-2 border rounded" />
//       <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Sign Up</button>
//     </form>
//   );
// };

// export default SignUp;


import React, { useState } from "react";
import { Link } from "react-router-dom";


interface SignUpForm {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpForm>({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.rePassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-6 rounded-md shadow-lg w-96">
        <div className="flex justify-between mb-4">


        <Link to="/SignIn" className="w-full p-3 bg-gray-500 text-white rounded-md mt-4 hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 mr-2">SignIn</Link>
        <Link to="/SignIn" className="w-full p-3 bg-green-500 text-white rounded-md mt-4 hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400">Sign Up</Link>
        </div>
        <h2 className="text-center text-lg font-semibold mb-4">Sign Up for Free</h2>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded bg-gray-700 text-white mt-2" />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded bg-gray-700 text-white mt-2" />
        <input type="password" name="password" placeholder="Set A Password" value={formData.password} onChange={handleChange} required className="w-full p-2 border rounded bg-gray-700 text-white mt-2" />
        <input type="password" name="rePassword" placeholder="Confirm Password" value={formData.rePassword} onChange={handleChange} required className="w-full p-2 border rounded bg-gray-700 text-white mt-2" />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded bg-gray-700 text-white mt-2" />
        <button type="submit" className="w-full p-3 bg-green-500 text-white rounded-md mt-4 hover:bg-green-600">GET STARTED</button>
      </form>
    </div>
  );
};

export default SignUp;
