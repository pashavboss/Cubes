import './Cub.css'
import '../../../index.css'
import {useEffect, useState} from "react";

const Cub = ({value}) => {

    const [angels, setAngels] = useState({
        x: 0,
        y: 0,
        z: 0
    })

    useEffect(() => {
        switch (value) {
            case 0:
                setAngels({x: -12032, y: -12032, z: -12032})
                break
            case 1:
                setAngels({x: 365, y: -8645, z: 0})
                break
            case 2:
                setAngels({x: 1805, y: -6215, z: 0})
                break
            case 3:
                setAngels({x: 275, y: 8640, z: 5})
                break
            case 4:
                setAngels({x: -1705, y: -10080, z: 5})
                break
            case 5:
                setAngels({x: -2155, y: 9805, z: 0})
                break
            case 6:
                setAngels({x: 1085, y: -10985, z: 0})
                break
            default:
                break;
        }
    }, [value])


    return (
        <div className="cub-wrapper">
            <div
                style={{
                    transform: `rotateX(${angels.x}deg) rotateY(${angels.y}deg) rotateZ(${angels.z}deg)`
                }}
                className="cub"
            >
                <div className="face face-1 d-flex content-center items-center">
                    <div className="dot"/>
                </div>
                <div className="face face-2 d-flex content-around">
                    <div className="dot mt-1"/>
                    <div className="dot self-end mb-1"/>
                </div>
                <div className="face face-3 d-flex content-between">
                    <div className="dot m-1"/>
                    <div className="dot self-center"/>
                    <div className="dot self-end m-1"/>
                </div>
                <div className="face face-4 d-flex flex-colum content-around">
                    <div className="d-flex content-around">
                        <div className="dot"/>
                        <div className="dot"/>
                    </div>
                   <div className="d-flex content-around">
                       <div className="dot"/>
                       <div className="dot"/>
                   </div>

                </div>
                <div className="face face-5 d-flex flex-colum content-around">
                    <div className="d-flex content-around">
                        <div className="dot"/>
                        <div className="dot"/>
                    </div>
                    <div className="d-flex content-center">
                        <div className="dot"/>
                    </div>
                    <div className="d-flex content-around">
                        <div className="dot"/>
                        <div className="dot"/>
                    </div>

                </div>
                <div className="face face-6 d-flex content-around gap-1">
                    <div className="d-flex flex-colum content-around">
                        <div className="dot"/>
                        <div className="dot"/>
                        <div className="dot"/>
                    </div>
                    <div className="d-flex flex-colum content-around">
                        <div className="dot"/>
                        <div className="dot"/>
                        <div className="dot"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cub;
