import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data); // Process the form data
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-md p-6 space-y-4 shadow-md rounded-lg mx-auto sm:p-8 bg-slate-300
       dark:bg-gray-800 text-white z-50 transition-colors duration-300"
    >
      {/* Email Field */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium dark:text-white">Email:</label>
        <input
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && (
          <span className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Password Field */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium dark:text-white">Password:</label>
        <input className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          type="password"
          placeholder="Enter your password"
        />
                <label className="mb-1 font-medium dark:text-white">comfirm Password:</label>
        <input className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          type="password"
          placeholder="Enter your password"
        />
        {errors.password && (
          <span className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        className="w-full px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-all duration-200"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
