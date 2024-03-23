import { ClassAttributes, InputHTMLAttributes, ReactElement } from "react";
import { InputBaseForm } from "..";
import { useFormContext } from "react-hook-form";
import { getInputClassname } from "@/helper/inputClassname";
import { CustomInputProps } from "../CustomInputBase/customInputProps";

interface PropsInputItem {
  customProps?: CustomInputProps;
  icon?: ReactElement;
}

export const DateInput = ({
  customProps = {},
  icon,
  ...props
}: ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> &
  PropsInputItem): ReactElement => {
  const { register, formState } = useFormContext();
  const error = formState.errors[props.name!];
  return (
    <InputBaseForm
      name={props.name}
      title={props.title}
      customProps={customProps}
    >
      <div className="flex flex-col w-full items-end relative">
        <input
          type="date"
          className={`${getInputClassname(
            customProps,
            props,
            error?.message?.toString()
          )}`}
          {...props}
          {...register(props.name!)}
        />

        <span className="h-[15px]"></span>

        {icon && (
          <div className="absolute bottom-[22px] right-2 flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
    </InputBaseForm>
  );
};
