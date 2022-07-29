import TextFit from 'components/TextFit';

const ScreenDisplay = ({ output }) => {
  return (
    <TextFit className="flex items-center justify-end h-24 px-4 leading-none text-white align-bottom bg-gray-900 rounded-lg">
      {output}
    </TextFit>
  );
}

export default ScreenDisplay;
