import { ClassAttributes, InputHTMLAttributes, ReactElement } from "react";

import { InputBaseForm } from "..";
import { useFormContext } from "react-hook-form";
import { getInputClassname } from "@/helper/inputClassname";
import { CustomInputProps } from '@/components/Inputs/CustomInputBase/customInputProps';

interface PropsInputItem {
  customProps?: CustomInputProps;
  icon?: ReactElement;
  needDisabled?: boolean;
  errorBottom?: boolean;
}

export const ShortTextInput = ({
  customProps = {},
  icon,
  needDisabled,
  errorBottom = false,

  ...props
}: ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> &
  PropsInputItem): ReactElement => {
  const { register, watch, formState } = useFormContext();
  const error = formState.errors[props.name!];

  props.maxLength = props.maxLength ?? 50;
  props.minLength = props.minLength ?? 2;
  const length = watch(props.name!) ? watch(props.name!).length : 0;
  props.placeholder = customProps.disabledText ? "" : props.placeholder;

  return (
    <InputBaseForm
      {...props}
      name={props.name}
      title={props.title}
      customProps={customProps}
    >
      <div className="flex flex-col w-full items-end relative">
        <input
          type="text"
          className={`${getInputClassname(
            customProps,
            props,
            error?.message?.toString(),
            needDisabled ?? true
          )}`}
          {...props}
          {...register(props.name!)}
        />

        {!props.disabled && customProps.showLength != false ? (
          <span className="text-[10px] text-gray-400 ">
            {length}/{props.maxLength}
          </span>
        ) : (
          <span className="h-[15px]"></span>
        )}
        {icon && (
          <div className="absolute bottom-[22px] right-2 flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
    </InputBaseForm>
  );
};
