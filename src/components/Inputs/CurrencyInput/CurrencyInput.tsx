"use client";

import { ClassAttributes, InputHTMLAttributes, ReactElement, useEffect } from "react";
import { InputBaseForm } from "..";
import { Controller, useFormContext } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { getInputClassname } from "@/helper/inputClassname";
import { CustomInputProps } from "../CustomInputBase/customInputProps";

interface PropsInputItem {
  customProps?: CustomInputProps;
  errorBottom?: boolean;
}

export const CurrencyInput = ({
  customProps = {},
  errorBottom = false,
  ...props
}: ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> &
  PropsInputItem): ReactElement => {
  const { formState, control, setValue, getValues } = useFormContext();

  props.maxLength = props.maxLength ?? 50;
  props.minLength = props.minLength ?? 2;
  const error = formState.errors[props.name!];

  return (
    <InputBaseForm 
    {...props}
     customProps={customProps}>
      <div className="flex w-full relative">
        <h2 className={`absolute left-[10px] top-[8px] font-normal ${props.disabled ? "text-dark-gray" : "text-dark-blue"} text-xs`}>
          $
        </h2>
        <Controller
          control={control}
          name={props.name!}
          render={() => (
            <NumericFormat
              className={`${getInputClassname(customProps, props, error?.message?.toString())} pl-5`}
              onValueChange={(target) => setValue(props.name!, target.floatValue)}
              thousandSeparator="."
              decimalSeparator=","
              prefix={props.prefix}
              value={getValues(props.name!)}
              placeholder={props.placeholder}
              decimalScale={2}
              minLength={1}
              maxLength={props.maxLength}
              disabled={props.disabled}
            />
          )}
        />
      </div>
      <span className="h-[15px]"></span>
    </InputBaseForm>
  );
};
