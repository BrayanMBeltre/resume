import { forwardRef } from "react";

const UnderLineButton = forwardRef(
  ({ onClick, href, className, children }, ref) => {
    return (
      <div className="group relative cursor-pointer">
        <div href={href} onClick={onClick} ref={ref} className={`${className}`}>
          {children}
        </div>
        <span className="absolute left-0 w-0 group-hover:w-full transition-all h-0.5 bg-gray-900"></span>
      </div>
    );
  }
);

UnderLineButton.displayName = "UnderLineButton";

export default UnderLineButton;
