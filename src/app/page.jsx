"use client";

import orangeCat from "/public/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface-removebg-preview.png";
import brownDog from "/public/brown-labrador-retriever-white-removebg-preview.png";
import editPen from "/public/edit-text.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Home() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const isAdmin = true;
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    AOS.init();

    //fetch from database
    setTopText(`เว็บไซต์
      ระบบจัดการบริการดูแลสัตว์เลี้ยงสุนัขและแมว
      จัดทำขึ้น เพื่อพัฒนาระบบบริการดูแลรักษาสุนัขและแมว
      เพื่อหาประสิทธิภาพของระบบจัดการบริการดูแลสัตว์เลี้ยง
      สุนัขและแมวที่พัฒนาขึ้น
      และเพื่อหาความพึงพอใจของผู้ใช้ระบบจัดการบริการดูแลสัตว์เลี้ยง
      สุนัขและแมวภายหลังการทดลองใช้ระบบที่พัฒนาขึ้น`);

    setBottomText(`อย่าพลาดที่จะติดตามกับเว็บไซต์ของเรา
      นอกจากหาบ้าน-หาคู่ผสมพันธ์ แล้ว
      เรายังมีสาระน่ารู้ต่างๆ ของสุนัขและแมว
      คลินิกหรือโรงพยาบาลสัตว์ต่างๆหากท่านคือคนที่กำลังจะหาสัตว์เลี้ยง
      หาคู่ผสมพันธ์ให้เหล่าน้องหมาน้องแมวต้องติดตามเว็บไซต์ของเรา
      ระบบจัดการบริการดูแลสัตว์เลี้ยงสุนัขและแมว`);
  }, []);

  const editerMode = () => {
    if (isEdit) {
      return (
        <div>
          <input
            type="text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />
          <input
            type="text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
        </div>
      );
    }
  };

  return (
    <div className="bg-[#F2DEB9] h-[calc(100vh-50px)] max-lg:h-[calc(100vh-78px)] overflow-clip relative">
      <div
        className="absolute text-6xl tracking-wide top-[10%] left-[5%] h-1/3 w-2/5 flex flex-col"
        data-aos="fade-right"
        data-aos-easing="ease-out"
        data-aos-duration="1000"
      >
        <span className="text-center">ยินดีต้อนรับ</span>
        <div className="text-xl tracking-wide mt-[4%]">{topText}</div>
      </div>
      <Image
        data-aos="fade-left"
        data-aos-easing="ease-out"
        data-aos-duration="1000"
        data-aos-delay="1000"
        className="h-[50%] w-auto absolute right-[10%] bg-[#E49647]/50 rounded-[100px] top-[2.5%]"
        src={orangeCat}
        alt="Picture of a cat"
        height={4000}
      />
      <Image
        data-aos="fade-right"
        data-aos-easing="ease-out"
        data-aos-duration="1000"
        data-aos-delay="2000"
        className="h-[50%] w-auto absolute left-[17.5%] bottom-[5%] bg-[#BB6B39] rounded-[100px]"
        src={brownDog}
        alt="Picture of a cat"
        height={4000}
      />
      <div
        data-aos="fade-left"
        data-aos-easing="ease-out"
        data-aos-duration="1000"
        data-aos-delay="3000"
        className="absolute bottom-[9%] right-[5%] flex flex-col h-1/3 w-2/5 text-xl tracking-wide"
      >
        {bottomText}
      </div>
      {isAdmin && !isEdit && (
        <button onClick={() => setIsEdit(!isEdit)}>
          <Image
            className="absolute bottom-[5%] right-[5%] bg-[#E49647] p-2 rounded-full h-[5%] w-auto"
            src={editPen}
            alt="pen for admin edit"
          />
        </button>
      )}
      {isAdmin && isEdit && (
        <div>
          <button
            className="absolute bottom-[5%] right-[5%] bg-red-500 p-2 rounded-full h-[5%] w-auto"
            onClick={() => setIsEdit(!isEdit)}
          >
            Cancel!
          </button>
          <button
            className="absolute bottom-[5%] right-[10%] bg-blue-500 p-2 rounded-full h-[5%] w-auto"
            onClick={() => setIsEdit(!isEdit)}
          >
            Save Change!
          </button>
        </div>
      )}
    </div>
  );
}
