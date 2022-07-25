import { Textfit } from "react-textfit";

const ScreenDisplay = ({ output }) => {
  return (
    <Textfit mode="single" max={70} className="bg-gray-900 text-white px-4 rounded-lg align-bottom leading-none h-24 flex justify-end items-center">
      {output}
    </Textfit>
  );
}

export default ScreenDisplay;
