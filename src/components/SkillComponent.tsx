import Image from "next/image";
import React from "react";

const SkillComponent = ({ icon, name }: any) => {
  return (
    <div
      title={name}
      className="w-[100px] h-[100px] bg-[rgba(255,255,255,0.05)] border flex justify-center items-center rounded-lg border-gray-500 hover:border-2 hover:scale-110 transition-all  my-5 mx-[1.5rem] md:mx-0"
    >
      <Image src={icon} alt="logo" height={80} width={80} className="" />
    </div>
  );
};

export default SkillComponent;
