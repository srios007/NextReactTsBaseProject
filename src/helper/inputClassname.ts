import { CustomInputProps } from "@/components/Inputs/CustomInputBase/customInputProps";
import { ClassAttributes, InputHTMLAttributes } from "react";


export function getInputClassname(
  customProps: CustomInputProps,
  inputProps: ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement>,
  error?: string,
  needDesabled?: boolean
) {
  return `outline-none items-center justify-center w-full px-3      
   ${
     needDesabled === false
       ? "text-dark-blue"
       : `${inputProps.disabled ? "text-dark-gray" : "text-dark-blue"}`
   }
    ${customProps.icon ? "pl-10" : ""}
    ${inputProps.title ? "mt-0" : ""} 
    ${customProps.centerText ? "text-center" : ""}
    ${customProps.textColor ? customProps.textColor : "text-dark-blue"}
    ${customProps.bgcolor ? customProps.bgcolor : "bg-white"}
    ${
      customProps.heightAndTextSize
        ? customProps.heightAndTextSize
        : " h-[30px] text-[10px] font-normal "
    }
    ${
      customProps.border
        ? customProps.border
        : "border-[0.5px] border-medium-blue border-opacity-50"
    }
    ${customProps.rounded ? customProps.rounded : "rounded-[10px]"} 
    ${error ? "border-red-error" : "border-blue-004"}
    `;
}
