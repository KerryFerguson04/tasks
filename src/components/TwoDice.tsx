import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, rollD1] = useState<number>(0);
    const [d2, rollD2] = useState<number>(6);
    return (
        <div>
            <Button onClick={() => rollD1(d6())}>Roll Left</Button>
            <Button onClick={() => rollD2(d6())}>Roll Right</Button>
            {d1 === 1 && d2 === 1 ? (
                <p>YOU LOSE!</p>
            ) : d1 === d2 ? (
                <p>YOU WIN!</p>
            ) : null}
            <span data-testid="left-die">
                <p>Left Die = </p> {d1}
            </span>
            <span data-testid="right-die">
                <p>Right Die = </p> {d2}
            </span>
        </div>
    );
}
