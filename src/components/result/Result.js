import {useEffect, useState} from "react";

const Result = ({data, load}) => {

    const [value, setValue] = useState()

    useEffect(() => {
        if (data) {
            setValue(
                data.reduce((acm, el) => acm += el.value, 0)
            )
        }
    }, [data])

    return (
        <div className="result">
            {!load && value && <h1>SUM: <span data-testid="value" className="value">
                    {value}
                </span>
            </h1>}
        </div>
    );
}

export default Result;
