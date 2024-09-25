import { Link } from "react-router-dom";
import CustomIcon from "./custom_icon";

export default function CustomButton({
  title = "Default",
  url,
  icon_name = "icon_go",
  fn = () => {},
}) {
  return (
    <div onClick={fn()} className="cursor-pointer">
      {url ? (
        <Link to={url}>{buildButton(icon_name, title)}</Link>
      ) : (
        buildButton(icon_name, title)
      )}
    </div>
  );
}

function buildButton(icon_name, title) {
  return (
    <button className=" text-[#4A306D] px-4 py-2 rounded-lg border-2 border-[#4A306D] flex gap-4 bg-[#FFFFFF]">
      <p>{title}</p>
      <CustomIcon nombre={icon_name} color="#4A306D" />
    </button>
  );
}
