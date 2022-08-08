import { useEffect, useState } from 'react';
import ScreenDisplay from 'components/ScreenDisplay';
import ButtonsGrid from 'components/ButtonsGrid';
import Button from 'components/Button';
import Wrapper from 'components/Wrapper';
import DebugDisplay from 'components/DebugDisplay';
import Calculator from 'components/Calculator';
import math from 'utils/math';

const App = () => {
  const [screenDisplay, setScreenDisplay] = useState(0);
  const [register, setRegister] = useState({
    operation: '',
    firstNumber: 0,
    secondNumber: 0,
    rememberNumber: 0,
  });
  const [error, setError] = useState('');

  const buttons = [
    [
      { label: 'AC', value: 'clear', className: '!bg-gray-800', callback: () => {
        setRegister({
          operation: '',
          firstNumber: 0,
          secondNumber: 0,
          rememberNumber: 0,
        });
        setError('');
      } },
      { label: '+/-', value: 'sign', className: '!bg-gray-800', callback: () => {
        setRegister({
          ...register,
          firstNumber: register.firstNumber ? register.firstNumber *-1 : register.firstNumber,
          secondNumber: register.firstNumber ? register.secondNumber : register.secondNumber *-1
        });
        setError('');
      } },
      { label: '%', value: 'percent', className: '!bg-gray-800', callback: () => {
        setRegister({
          ...register,
          firstNumber: register.firstNumber ? register.firstNumber / 100 : register.firstNumber,
          secondNumber: register.firstNumber ? register.secondNumber : register.secondNumber / 100
        });
        setError('');
      }},
      { label: '÷', value: 'divide', className: '!bg-primary', callback: () => handleOperationClick('divide')},
    ],
    [
      { label: '7', value: '7' },
      { label: '8', value: '8' },
      { label: '9', value: '9' },
      { label: '×', value: 'multiply', className: '!bg-primary', callback: () => handleOperationClick('multiply')},
    ],
    [
      { label: '4', value: '4' },
      { label: '5', value: '5' },
      { label: '6', value: '6' },
      { label: '-', value: 'subtract', className: '!bg-primary', callback: () => handleOperationClick('subtract')},
    ],
    [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '+', value: 'add', className: '!bg-primary', callback: () => handleOperationClick('add')},
    ],
    [
      { label: '0', value: '0', className: 'col-span-2' },
      { label: '.', value: 'decimal', callback: () => {
        setRegister({
          ...register,
          firstNumber: !register.firstNumber.toString().includes(".") ? register.firstNumber + '.' : register.firstNumber
        });
        setError('');
      }},
      { label: '=', value: 'equals', className: '!bg-primary', callback: () => handleEvaluate()}
    ]
  ]

  const handleButtonClick = button => {
    typeof button.callback !== 'undefined'
      ? button.callback()
      : handleNumberClick(button.value);
  }

  const handleOperationClick = op => {

    //TODO: evalute if the register is full before perfoming the operation.

    setRegister({
      ...register,
      operation: op,
      secondNumber: !register.secondNumber && register.firstNumber ? register.firstNumber : register.secondNumber,
      firstNumber: 0,
      rememberNumber: 0,
    });
    setError('');
  }

  const handleNumberClick = number => {
    let firstNumber;
    if(register.firstNumber === 0 && number === "0") {
      firstNumber =  "0";
    } else if(register.firstNumber % 1 === 0) {
      firstNumber = Number(register.firstNumber + number);
    } else {
      firstNumber = register.firstNumber + number;
    }

    setRegister({
      ...register,
      firstNumber: firstNumber,
      secondNumber: register.operation === '' ? 0 : register.secondNumber,
    });
    setError('');
  }

  const handleEvaluate = () => {

    if(register.operation === null) {
      return;
    }

    if(register.operation === 'divide' && (register.rememberNumber !== 0 ? register.rememberNumber : register.firstNumber) === 0) {
      setError('Cannot divide by 0');
      return;
    }

    setRegister({
      ...register,
      secondNumber: math(
        Number(register.secondNumber),
        Number(register.rememberNumber !== 0 ? register.rememberNumber : register.firstNumber),
        register.operation
      ),
      firstNumber: 0,
      rememberNumber: register.rememberNumber !== 0 ? register.rememberNumber : register.firstNumber,
    });
    setError('');
  }

  useEffect(() => {
    if(error) {
      setScreenDisplay(error);
    } else {
      setScreenDisplay(register.firstNumber ? register.firstNumber : register.secondNumber);
    }
  }, [register, error]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-8 bg-gray-100">
      <Wrapper>
        <Calculator>
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
        </Calculator>
        <DebugDisplay register={register} />
      </Wrapper>
    </div>
  );
}

export default App;
