import React from "react";

const Underline = ({
  mobileWidth = 100,
  width = 200,
  height = 4,
  className = "",
}) => {
  return (
    <div
      style={{
        "--w": `${Number(mobileWidth)}px`,
        "--wMd": `${Number(width)}px`,
        "--h": `${Number(height)}px`,
      }}
      className={`
        w-[var(--w)]
        md:w-[var(--wMd)]
        h-[var(--h)]
        bg-accent
        reveal-underline
        ${className}
      `}
    />
  );
};

export default Underline;