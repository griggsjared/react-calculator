import { useEffect, useState } from 'react';
import ScreenDisplay from 'components/ScreenDisplay';
import ButtonsGrid from 'components/ButtonsGrid';
import Button from 'components/Button';
import Wrapper from 'components/Wrapper';



const App = () => {
  const [screenDisplay, setScreenDisplay] = useState(0);
  const [register, setRegister] = useState({
    operation: null,
    firstNumber: 0,
    secondNumber: 0,
  });
  const [error, setError] = useState('');

  const buttons = [
    [
      { label: 'AC', value: 'clear', className: '!bg-gray-800', callback: () => {
        setRegister({
          operation: null,
          firstNumber: 0,
          secondNumber: 0,
        });
        setError('');
      } },
      { label: '+/-', value: 'sign', className: '!bg-gray-800', callback: () => {
        setRegister({...register, firstNumber: -register.firstNumber});
        setError('');
      } },
      { label: '%', value: 'percent', className: '!bg-gray-800' },
      { label: '÷', value: 'divide', className: '!bg-yellow'  },
    ],
    [
      { label: '7', value: 7 },
      { label: '8', value: 8},
      { label: '9', value: 9 },
      { label: '×', value: 'multiply', className: '!bg-yellow' },
    ],
    [
      { label: '4', value: 4 },
      { label: '5', value: 5 },
      { label: '6', value: 6 },
      { label: '-', value: 'subtract', className: '!bg-yellow' },
    ],
    [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '+', value: 'add', className: '!bg-yellow',  callback: () => {
        setRegister({...register, operation: 'add'});
        setError('');
      }},
    ],
    [
      { label: '0', value: 0, className: 'col-span-2' },
      { label: '.', value: 'decimal', callback: () => {
        if (register.toString().indexOf('.') === -1) {
          setRegister({...register, firstNumber: `${register.firstNumber}.`});
        }
        setError('');
      }},
      { label: '=', value: 'equals', className: '!bg-yellow' },
    ]
  ]

  const handleButtonClick = (button) => {
    typeof button.callback !== 'undefined'
      ? button.callback()
      : handleNumberClick(button.value);
  }

  const handleNumberClick = (number) => {
    if (register.toString().indexOf('.') === -1) {
      setRegister({...register, firstNumber: register.firstNumber * 10 + number});
    } else {
      setRegister({...register, firstNumber: register.firstNumber + number});
    }
    setError('');
  }
  useEffect(() => {
    if(error) {
      setScreenDisplay(error);
    } else {
      setScreenDisplay(register.firstNumber);
    }
  }, [register, error]);

  return (
    <div className="h-screen w-full p-8 bg-gray-100 flex flex-col justify-center items-center">
      <Wrapper>
        <ScreenDisplay output={screenDisplay} />
        <ButtonsGrid>
          {buttons.flat().map((button, i) => {
            return (
              <Button
                className={button.className}
                label={button.label}
                key={button.value}
                onClick={() => handleButtonClick(button)}
              />
            )
          })}
        </ButtonsGrid>
      </Wrapper>
    </div>
  );
}

export default App;
