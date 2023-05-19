import './CalculatorButton.css';

const CalculatorButton = ({ symbol, operatorColor, maxWidth, handleClick }) => {
    return (
        <div className='buttons' onClick={() => handleClick(symbol)} style={{backgroundColor: operatorColor, width: maxWidth}}>{symbol}</div>
    );
};

export default CalculatorButton;