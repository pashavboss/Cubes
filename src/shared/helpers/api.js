import axios from "axios";

const rollDiceURL = 'http://roll.diceapi.com/json/3d6'


export default function roll() {
    return axios
        .get(rollDiceURL)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.warn(err)
        });
}


