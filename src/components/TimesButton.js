import './TimesButton.css';

const TimesButton = ({ children, handleClick, symbol }) => {
    return (
        <div className='times' onClick={() => handleClick(symbol)}>{children}</div>
    );
};

export default TimesButton;