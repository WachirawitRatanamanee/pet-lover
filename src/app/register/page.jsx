"use client";

import ProfileForm from "@/components/auth/profile-form";
import Image from "next/image";
import blackDog from "/public/lovely-labrador-white.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const router = useRouter();
  const [error, setError] = useState({});

  const validateForm = (username, password) => {
    const errors = {};
    if (!username) {
      errors.username = "Username is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    setError(errors);
    return Object.keys(errors).length !== 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (validateForm(username, password)) return;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      alert(data.message);
      if (response.ok) router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[calc(100vh-46px)] max-lg:h-[calc(100vh-78px)] overflow-clip relative">
      <div className="absolute top-[15vh] left-[20vh] max-lg:left-[10vh] max-lg:top-[10vh] h-2/3">
        <div
          data-aos="fade-down"
          data-aos-easing="ease-out"
          data-aos-duration="1500"
          className="text-6xl tracking-widest"
        >
          Dog and Cat Lovers
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1500"
          className="absolute top-[10vh] w-[80%] h-[calc(100%-10vh)] left-[10%] shadow-2xl"
        >
          <ProfileForm handleSubmit={handleSubmit} error={error} />
        </div>
      </div>

      <div
        className="relative left-[60%]"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-out"
        data-aos-duration="1500"
      >
        <Image
          className="h-[100vh] w-auto scale-x-[-1]"
          src={blackDog}
          alt="Picture of a cat"
          height={4000}
        />
      </div>
    </div>
  );
};

export default Signup;
