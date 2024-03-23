import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { LoadingComponent } from "./loadingComponent";
import { Url } from "next/dist/shared/lib/router/router";
import { variants } from "@/utils/index";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 rounded-[35px] text-sm font-bold transition-colors focus:outline-none disabled:bg-dark-gray disabled:text-gray-text disabled:pointer-events-none duration-200",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-700",
        blue: "bg-medium-blue text-white hover:bg-blue-700",
        purple: "bg-dark-purple text-white hover:bg-indigo-700",
      },

      size: {
        default: "h-10 py-2 px-4",
        xs: "h-[22px] w-[41px] text-[9px]",
        sm: "h-[22px] w-[63px] text-[9px]",
        lg: "h-10 w-40 text-xs",
        xl: "h-12 w-60",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: Url;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      icon,
      iconPosition = "left",
      href,
      variant,
      size,
      isLoading,
      ...props
    },
    ref
  ) => {
    return href ? (
      <Link
        href={props.disabled ? {} : href}
        className="inline-flex items-center justify-center gap-3"
      >
        <button
          className={variants(buttonVariants({ variant, size, className }))}
          ref={ref}
          disabled={props.disabled}
          onClick={undefined}
        >
          {iconPosition == "left" && icon}
          {children}
          {iconPosition == "right" && icon}
        </button>
      </Link>
    ) : (
      <button
        className={variants(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        onClick={isLoading ? undefined : props.onClick}
      >
        {iconPosition == "left" && (isLoading ? <LoadingComponent /> : icon)}
        {children}
        {iconPosition == "right" && icon}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
