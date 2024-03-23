import { ClassAttributes, InputHTMLAttributes, ReactElement } from "react";
import { InputBaseForm } from "../index";
import { useFormContext } from "react-hook-form";
import { CustomInputProps } from "../CustomInputBase/customInputProps";

interface PropsInputItem {
  customProps?: CustomInputProps;
  optionList: { value: string; label?: string }[];
  inverseOrder?: boolean;
  itemColor?: string;
  errorBottom?: boolean;

}

export const RadioInput = ({
  customProps,
  optionList,
  inverseOrder,
  itemColor,
  errorBottom = false,
  ...props
}: ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> &
  PropsInputItem): ReactElement => {
  customProps = customProps ?? {};
  const { register, formState } = useFormContext();
  const error = formState.errors[props.name!];

  return (
    <InputBaseForm 
    {...props} 
    customProps={customProps}
    isLongTextInput>
      <div className={`${props.className} h-[30px] mb-[15px]`}>
        {optionList.map((option) => (
          <div
            key={option.value}
            className={`${inverseOrder && "flex-row-reverse"
              } flex items-center gap-2`}
          >
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              type="radio"
              id={option.value}
              value={option.value}
              {...props}
              {...register(props.name!)}
            />
            <label
              htmlFor={option.value}
              className={`text-xs font-bold  w-full ${props.disabled ? 'text-dark-gray' : `${itemColor ? itemColor : "text-medium-blue"
                }`}`}
            >
              {option.label ?? option.value}
            </label>
          </div>
        ))}
          <p className="text-[10px] text-red-500 whitespace-nowrap">
            {error?.message?.toString()}
          </p>
      </div>
    </InputBaseForm>
  );
};
