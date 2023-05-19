import './CalculatorInput.css';

const CalculatorInput = ({ text, result }) => {
    return (
        <div className='input__field'>
            <div className='result'>
                <h3>{result}</h3>
            </div>
            <div className='text'>
                <h4>{text}</h4>
            </div>
        </div>
    );
};

export default CalculatorInput;