import Die from "./Die";
import useRollDice from "./hooks/useRollDice";
import useToggle from "./hooks/useToggle";
import "./DieController.css";

const DieController = () => {
    const [dieOne, rollDieOne] = useRollDice("two");
    const [dieTwo, rollDieTwo] = useRollDice("five");
    const [state, toggle] = useToggle(false);

    const rollDices = () => {
        toggle(true);
        setTimeout(() => {
            toggle(false);
            rollDieOne();
            rollDieTwo();
        }, 2000);
    };

    return (
        <div className="DieController">
            <Die number={dieOne} isRolling={state} />
            <Die number={dieTwo} isRolling={state} />
            <br />
            <button onClick={rollDices} disabled={state}>
                {!state ? "Roll Dice" : "Rolling dice...."}
            </button>
        </div>
    );
};

export default DieController;
