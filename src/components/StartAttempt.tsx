import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, changeAttempts] = useState<number>(4);
    const [progress, changeProgress] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    changeProgress(true);
                    changeAttempts(attempt - 1);
                }}
                disabled={progress || attempt === 0}
            >
                Start Quiz
            </Button>

            <Button
                onClick={() => {
                    changeProgress(false);
                }}
                disabled={!progress}
            >
                Stop Quiz
            </Button>

            <Button
                onClick={() => {
                    changeAttempts(attempt + 1);
                }}
                disabled={progress}
            >
                Mulligan
            </Button>
            <p>{attempt}</p>
        </div>
    );
}
