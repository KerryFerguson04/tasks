import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, checkAnswer] = useState<string>("");
    // const [correct, toggleCorrect] = useState<string>("❌");

    // This is the Control
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        checkAnswer(event.target.value);
    }

    return (
        <div>
            <p>Check Answer</p>
            <Form.Group controlId="formMovieName">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateName} />
                <span>
                    {" "}
                    {answer === expectedAnswer ? (
                        <div>✔️</div>
                    ) : (
                        <div>❌</div>
                    )}{" "}
                </span>
            </Form.Group>
        </div>
    );
}
