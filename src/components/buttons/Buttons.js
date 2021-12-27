import './Buttons.css'


const Buttons = ({rollDice, data, disabled}) => {

    return (
        <div className="buttons">
            <button
                data-testid="btn"
                disabled={disabled}
                onClick={rollDice}
            >
                {!data && 'Roll'}
                {data && 'Roll again'}
            </button>
        </div>
    );
}

export default Buttons;
