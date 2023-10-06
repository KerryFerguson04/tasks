import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colorProperties {
    colorIndex: number;
    setColorIndex: (colorIndex: number) => void;
}

function ChangeColor({
    colorIndex,
    setColorIndex
}: colorProperties): JSX.Element {
    // const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ currentColor }: { currentColor: string }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: currentColor,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <p>Colored Box</p>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                ></ChangeColor>
                <ColorPreview currentColor={COLORS[colorIndex]}></ColorPreview>
            </div>
        </div>
    );
}
