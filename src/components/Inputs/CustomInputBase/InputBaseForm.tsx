"use client";

import { InformationCircleIcon } from "../../../../node_modules/@heroicons/react/24/outline";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { CustomInputProps } from "./customInputProps";

type InputBaseFormProps = {
  customProps?: CustomInputProps;
  children?: React.ReactNode;
  title?: string;
  name?: string;
  disabled?: boolean;
  isCustomChildren?: boolean;
  isLongTextInput?: boolean;
};

export const InputBaseForm = ({
  customProps,
  children,
  name,
  title,
  disabled,
  isCustomChildren = false,
  isLongTextInput = false,
}: InputBaseFormProps) => {
  const { formState } = useFormContext();
  const error = formState.errors[name!];

  const [showHelperText, setShowHelperText] = useState(false);
  customProps = customProps ?? {};

  return (
    <div
      className={`relative ${customProps.maxWidth ? customProps.maxWidth : "max-w-full"
        } w-full flex flex-col gap-[10px] ${customProps.justify}`}
    >
      {title && (
        <div className="flex justify-start items-center gap-x-1">
          <label
            className={`${customProps.titleColor ??
              "text-medium-blue font-bold"
              } text-[12px] whitespace-nowrap leading-[18px]`
            }
            htmlFor={name}
          >
            {title}
            {customProps.isMandatory && "*"}
          </label>
          {customProps.helperText && (
            <InformationCircleIcon
              width={14}
              height={14}
              className="text-helper-purple"
              onMouseEnter={() => setShowHelperText(true)}
              onMouseLeave={() => setShowHelperText(false)}
            />
          )}
        </div>
      )}

      {customProps.subTitle && (
        <h2 className="text-dark-blue text-xs">{customProps.subTitle}</h2>
      )}

      <div className="relative flex flex-col w-full">
        {children}
        {customProps.disabledText && (
          <p className="absolute top-[7px] left-[21px] text-xs text-red-600">
            {customProps.disabledText}
          </p>
        )}
        {!isLongTextInput&&<div className="h-[15px] absolute top-[30px]">
          <p className="text-[10px] text-red-500 whitespace-nowrap">
            {error?.message?.toString()}
          </p>
        </div>}
        {!isCustomChildren&&<div className="h-[5px]"></div>}

        {showHelperText && (
          <div className="absolute z-50 top-4 -left-0 bg-white py-2 px-2 shadow-xl border rounded-xl max-w-[250px]">
            <p className="font-light text-[12px]">
              {customProps.helperText ? customProps.helperText : ""}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
