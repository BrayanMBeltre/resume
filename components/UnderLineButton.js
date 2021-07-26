import { forwardRef } from "react";

const UnderLineButton = forwardRef(
  ({ onClick, href, className, text }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={`text-2xl border-b-2 hover:border-gray-900 border-gray-100 transition-all cursor-pointer ${className}`}
      >
        {text}
      </a>
    );
  }
);

UnderLineButton.displayName = "UnderLineButton";

export default UnderLineButton;
