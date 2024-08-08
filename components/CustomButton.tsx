"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";
// to make is reuesable is to use prop otherwhise is will be a fix
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        // if right i con exist than 
        <div className="relative w-6 h-6"> 
        <Image 
          src={rightIcon}
          alt="right icon"
          fill
          className="object-contain"
        />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
