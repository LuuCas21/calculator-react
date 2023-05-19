import { useState } from 'react'; 
import * as math from 'mathjs';
import { FaTimes, FaBackspace } from 'react-icons/fa';
import CalculatorButton from './components/CalculatorButton';
import CalculatorInput from './components/CalculatorInput';
import TimesButton from './components/TimesButton';
import ClearInputButton from './components/ClearInputButton';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (val) => {
    setText((text) => [...text, val]);
  };

  const calculateInput = () => {
    const textInput = text.join('');
    setResult(math.evaluate(textInput));
  };

  const clearInput = () => {
    //setText('');
    setText(text.slice(0, -1)); // it'll remove number by number
    setResult('');
  };

  const clearAll = () => {
    setText('');
    setResult('');
  };

  const iconStyles = [
    {
      color: '#F0F2F8',
      fontSize: '12px'
    },

    {
      fontSize: '17px'
    }
  ];

  return (
    <div className="app">
      <div className='calculator__wrapper'>
           <CalculatorInput text={text} result={result}/>
          <div className='calculator__row'>
           <CalculatorButton handleClick={clearAll} symbol='C' operatorColor='#873645'/>
           <CalculatorButton symbol='(' /*maxWidth='41%'*/ handleClick={handleClick}/>
           <CalculatorButton symbol=')' /*maxWidth='41%'*/ handleClick={handleClick}/>
           <CalculatorButton symbol='/' handleClick={handleClick} operatorColor='#F69710'/>
        </div>
        <div className='calculator__row'>
           <CalculatorButton symbol='7' handleClick={handleClick}/>
           <CalculatorButton symbol='8' handleClick={handleClick}/>
           <CalculatorButton symbol='9' handleClick={handleClick}/>
           <TimesButton symbol='*' handleClick={handleClick}>
            <FaTimes style={iconStyles[0]}/>
           </TimesButton>
        </div>
        <div className='calculator__row'>
           <CalculatorButton symbol='4' handleClick={handleClick}/>
           <CalculatorButton symbol='5' handleClick={handleClick}/>
           <CalculatorButton symbol='6' handleClick={handleClick}/>
           <CalculatorButton symbol='+' handleClick={handleClick} operatorColor='#F69710'/>

        </div>
        <div className='calculator__row'>
           <CalculatorButton symbol='1' handleClick={handleClick}/>
           <CalculatorButton symbol='2' handleClick={handleClick}/>
           <CalculatorButton symbol='3' handleClick={handleClick}/>
           <CalculatorButton symbol='-' handleClick={handleClick} operatorColor='#F69710'/>
        </div>
        <div className='calculator__row'>
           <CalculatorButton symbol='0' handleClick={handleClick}/>
           <CalculatorButton symbol='.' handleClick={handleClick}/>
           <ClearInputButton handleClick={clearInput}>
            <FaBackspace style={iconStyles[1]} />
           </ClearInputButton>
           <CalculatorButton symbol='=' handleClick={calculateInput} operatorColor='#2dc974'/>
        </div>
           
      </div>
    </div>
  );
}

export default App;

//<CalculatorButton symbol='*' handleClick={handleClick} operatorColor='#F69710'/>
//<FaTimes onClick={handleClick} style={iconStyle}/>
//<CalculatorButton handleClick={clearInput} symbol='C' maxWidth='100%' operatorColor='#873645'/>