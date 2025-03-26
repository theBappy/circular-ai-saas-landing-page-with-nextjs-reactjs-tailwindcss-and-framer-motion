import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const SectionContent = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "container overflow-hidden lg:py-48 py-24 md:py-36",
        className
      )}
      {...otherProps}
    />
  );
};
