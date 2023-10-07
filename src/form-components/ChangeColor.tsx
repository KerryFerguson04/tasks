import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <p>Change Color</p>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="Color-red"
                label="red"
                style={{ backgroundColor: "red" }}
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="Color-orange"
                label="orange"
                style={{ backgroundColor: "orange" }}
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="Color-yellow"
                label="yellow"
                style={{ backgroundColor: "yellow" }}
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="Color-green"
                label="green"
                style={{ backgroundColor: "green" }}
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="Color-blue"
                label="blue"
                style={{ backgroundColor: "blue" }}
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="Color-indigo"
                label="indigo"
                style={{ backgroundColor: "indigo" }}
                value="indigo"
                checked={color === "indigo"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="Color-purple"
                label="purple"
                style={{ backgroundColor: "purple" }}
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="Color-black"
                label="black"
                style={{ backgroundColor: "black" }}
                value="black"
                checked={color === "black"}
            />
            <div>
                You have chosen:
                <span
                    data-testid="colored-box"
                    style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: color
                    }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
