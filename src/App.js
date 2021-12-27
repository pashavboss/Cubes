import './App.css';
import Result from "./components/result/Result";
import Buttons from "./components/buttons/Buttons";
import Cubs from "./components/cubs/Cubs";
import roll from "./shared/helpers/api";
import {useEffect, useState} from "react";


function App() {
    const [diceData, setDiceData] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoad(false), 500)
    }, [])

    const rollDice = async () => {
        setLoad(true)
        const result = await roll();
        setTimeout(() => {
            setDiceData(result.dice);
        }, 1200)

        setTimeout(() => {
            setLoad(false)
        }, 3800)
    }

    return (
        <div className="App d-flex flex-colum content-around">
            <Result show={load} data={diceData}/>
            <Cubs
                data={diceData}
                load={load}
            />
            <Buttons disabled={load} data={diceData} rollDice={rollDice}/>
        </div>
    );
}

export default App;
