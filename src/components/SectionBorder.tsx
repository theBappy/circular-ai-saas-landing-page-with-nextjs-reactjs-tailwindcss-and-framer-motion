import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const SectionBorder = (
  props: { borderTop?: boolean } & HTMLAttributes<HTMLDivElement>
) => {
  const { className, children, borderTop, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "border-l border-r border-[var(--color-border)] relative",
        borderTop && "border-t",
        className
      )}
      {...otherProps}
    >
      {borderTop && (
        <>
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-20" />
          </div>
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-20" />
          </div>
        </>
      )}
      {children}
    </div>
  );
};
