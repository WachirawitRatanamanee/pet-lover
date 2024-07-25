import Link from "next/link";

const LoginForm = ({ handleSubmit, error = {} }) => {
  return (
    <form
      className="items-center justify-center flex flex-col"
      onSubmit={handleSubmit}
    >
      <input
        className="text-center focus:outline-none absolute font-medium  top-[20%] text-3xl border-b border-black pb-1 tracking-wide hover:placeholder:text-gray-500"
        type="text"
        placeholder="Enter your Username"
        id="username"
      />
      {error.username && (
        <label className="text-red-500  absolute top-[30%]" for="username">
          {error.username}
        </label>
      )}
      <input
        className="text-center focus:outline-none absolute font-medium  top-[45%] text-3xl border-b border-black pb-1 tracking-wide hover:placeholder:text-gray-500"
        type="password"
        placeholder="Password"
        id="password"
      />
      {error.password && (
        <label className="text-red-500  absolute top-[55%]" for="password">
          {error.password}
        </label>
      )}
      <div className="text-white font-semibold bg-gray-800 hover:bg-black rounded-full p-2 px-4 shadow-md absolute top-[70%] text-3xl tracking-widest">
        <button type="submit">Log in</button>
      </div>
      <Link
        href="/register"
        className="absolute font-semibold  top-[85%] text-2xl tracking-wide text-slate-500 hover:text-black"
      >
        Sign up
      </Link>
    </form>
  );
};

export default LoginForm;
