import Link from "next/link";

export default function DropdownHover({
  heading,
  element,
  isLoginButton = false,
}) {
  return (
    <div
      className={
        isLoginButton
          ? "flex flex-col group relative cursor-pointer"
          : "flex flex-col group relative cursor-pointer mx-5 max-xl:mx-3 mt-1 max-lg:mt-2"
      }
    >
      <div className="">{heading}</div>
      <div className="border absolute z-50 bg-white px-6 text-gray-800 shadow-md invisible group-hover:visible top-6 self-end">
        <ul>
          {element.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black hover:font-semibold w-8"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
