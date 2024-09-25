import "./burguer.css";
import { useState } from "react";
export default function HeaderBurguer() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    
    <div
      className="flex flex-col gap-2 items-center justify-center cursor-pointer lg:hidden z-[1000]"
      onClick={handleClick}
    >
      {Array(3)
        .fill()
        .map((_, index) => (
          <span
            key={index}
            className={"burgeblock h-[2px] border-2 rounded-xl "
            .concat( !open ? " bg-[#4A306D] border-[#4A306D]" : " bg-[#FFFFFF] border-[#FFFFFF] ")
              .concat(index === 1 ? " w-6 " : " w-8 ")
              .concat(` burguer_span_${index}`)
              .concat(open ? " open " : "")}

            style={{
                transform: open ? `rotate(${index === 0 ? 45 : index === 2 ? -45 : 0}deg) translate(${ index === 0 ? 8 : index === 2 ? 8 : 20}px, ${index === 0 ? 8 : index === 2 ? -8 : 0}px)` : "",
                opacity: open ? (index === 1 ? 0 : 1) : 1,
                transition: "all 0.3s",

            }}
          ></span>
        ))}
    </div>
    
  );
}
