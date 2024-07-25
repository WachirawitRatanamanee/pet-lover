import Image from "next/image";
import logo from "/public/paws.png";
import Link from "next/link";
import DropdownHover from "./dropdown";

const Element = ({ isHome = false, isLoginPage = false }) => {
  const isLogin = false;

  const aboutObject = {
    heading: "เกี่ยวกับ",
    element: [
      { name: "สุนัข", path: "/about/dog" },
      { name: "แมว", path: "/about/cat" },
    ],
  };

  const partnerObject = {
    heading: "หาบ้าน-หาคู่ผสมพันธุ์",
    element: [
      { name: "สุนัข", path: "/partner/dog" },
      { name: "แมว", path: "/partner/cat" },
    ],
  };

  const accountObject = {
    heading: "บัญชีผู้ใช้งาน",
    element: [
      { name: "แก้ไขบัญชี", path: "/edit-profile" },
      { name: "ออกจากระบบ", path: "/" },
    ],
  };

  return (
    <nav
      className={
        isHome
          ? "bg-[#EAA664] border-b-2 border-[#B5775D]"
          : "bg-white border-b-2 border-[#808080]"
      }
    >
      <div className="flex flex-wrap items-center justify-between py-1.5 px-2 max-lg:flex-col">
        <Link href="/" className="flex items-center">
          <Image src={logo} className="h-8" alt="Logo" width={32} height={32} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap px-3">
            Dog and Cat Lovers
          </span>
        </Link>

        <div>
          <ul className="flex justify-center items-center">
            <DropdownHover
              heading={aboutObject.heading}
              element={aboutObject.element}
            />
            <DropdownHover
              heading={partnerObject.heading}
              element={partnerObject.element}
            />
            <div className="mx-5 max-xl:mx-3 mt-1 max-lg:mt-2 hover:font-bold">
              <li>
                <Link href="/knowledge" aria-current="page">
                  สาระน่ารู้
                </Link>
              </li>
            </div>
            <div
              className={
                isLoginPage
                  ? "mx-5 max-xl:mx-3 mt-1 max-lg:mt-2 mr-2 hover:font-bold"
                  : "mx-5 max-xl:mx-3 mt-1 max-lg:mt-2 hover:font-bold"
              }
            >
              <li>
                <Link href="/clinic" aria-current="page">
                  คลินิก-โรงพยาบาลสัตว์เลี้ยงใกล้เคียง
                </Link>
              </li>
            </div>

            <li>
              {!isLoginPage && (
                <div
                  className={
                    isHome
                      ? "text-black font-bold bg-white rounded-lg p-1.5 max-lg:absolute max-lg:top-2 max-lg:right-2 max-lg:mr-2 max-lg:mt-2 max-lg:p-3 shadow-lg hover:bg-gray-100"
                      : "text-white font-bold bg-gray-800 rounded-lg p-1.5 max-lg:absolute max-lg:top-2 max-lg:right-2 max-lg:mr-2 max-lg:mt-2 max-lg:p-3 shadow-lg hover:bg-black"
                  }
                >
                  {isLogin ? (
                    <DropdownHover
                      heading={accountObject.heading}
                      element={accountObject.element}
                      isLoginButton={isLogin}
                    />
                  ) : (
                    <Link href="/login" aria-current="page">
                      เข้าสู่ระบบ
                    </Link>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Element;
