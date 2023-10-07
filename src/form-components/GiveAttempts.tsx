import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, changeAttempts] = useState<number>(3);
    const [request, changeRequest] = useState<number>(NaN);

    function changeAttemptsRequested(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const intRequest = parseInt(event.target.value);
        Number.isNaN(intRequest) ? changeRequest(0) : changeRequest(intRequest);
    }
    return (
        <div>
            <p>Give Attempts</p>
            <div>Attempts Remaining: {attempts}</div>
            <div>
                <Form.Group>
                    <Form.Label>
                        Enter amount of attempts to request:
                    </Form.Label>
                    <Form.Control
                        type="number"
                        value={request.toString()}
                        onChange={changeAttemptsRequested}
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() => changeAttempts(attempts - 1)}
                    disabled={attempts === 0}
                >
                    Use Attempt
                </Button>
                <Button onClick={() => changeAttempts(attempts + request)}>
                    Gain Attempt
                </Button>
            </div>
        </div>
    );
}
