import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

interface valueProperties {
    setDhValue: (newDhValue: number) => void;
    dhValue: number;
}

function Doubler({ setDhValue, dhValue }: valueProperties): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ setDhValue, dhValue }: valueProperties): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <p>Double Half</p>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>

            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
