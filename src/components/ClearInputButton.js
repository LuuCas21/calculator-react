import './ClearInputButton.css';

const ClearInputButton = ({ children, handleClick }) => {
    return (
        <div className='clear__input' onClick={() => handleClick()}>
            {children}
        </div>
    );
};

export default ClearInputButton;