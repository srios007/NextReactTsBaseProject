import { ClassAttributes, InputHTMLAttributes, ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { InputBaseForm } from "..";
import { getInputClassname } from "@/helper/inputClassname";
import { CustomInputProps } from "../CustomInputBase/customInputProps";

interface PropsInputItem {
  customProps?: CustomInputProps;
}

export const NumberInput = ({
  customProps = {},
  ...props
}: ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> &
  PropsInputItem): ReactElement => {
  const { register, control, formState } = useFormContext();
  const error = formState.errors[props.name!];

  return (
    <InputBaseForm {...props} customProps={customProps}>
      <div className="flex flex-col w-full items-end">
        <input
          type="number"
          min={0}
          className={`${getInputClassname(
            customProps,
            props,
            error?.message?.toString()
          )}`}
          {...props}
          {...register(props.name!)}
        />
        <span className="h-[15px]"></span>
      </div>
    </InputBaseForm>
  );
};
