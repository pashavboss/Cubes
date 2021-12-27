import Cub from "./cub/Cub";
import './Cubs.css'
import {useEffect, useState} from "react";

const Cubs = ({data, load}) => {

    const [firstCubeValue, setFirstCubeValue] = useState(0)
    const [secondCubeValue, setSecondCubeValue] = useState(0)
    const [thirdCubeValue, setThirdCubeValue] = useState(0)

    useEffect(() => {
        if (data) {
            setFirstCubeValue(data[0].value)
            setSecondCubeValue(data[1].value)
            setThirdCubeValue(data[2].value)
        }
    }, [data])

    useEffect(() => {
        if (load) {
            setFirstCubeValue(0)
            setSecondCubeValue(0)
            setThirdCubeValue(0)
        }
    }, [load])

    return (
        <div className="cubs d-flex content-around gap-4">
            <Cub value={firstCubeValue} />
            <Cub value={secondCubeValue}/>
            <Cub value={thirdCubeValue}/>
        </div>
    );
}

export default Cubs;
