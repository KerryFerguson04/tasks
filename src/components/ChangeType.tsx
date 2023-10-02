import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const typeChange: Record<QuestionType, QuestionType> = {
    multiple_choice_question: "short_answer_question",
    short_answer_question: "multiple_choice_question"
};

export function ChangeType(): JSX.Element {
    const [currentType, changeType] = useState<QuestionType>(
        "short_answer_question"
    );
    return (
        <div>
            <Button
                onClick={() => {
                    const flippedType: QuestionType = typeChange[currentType];
                    changeType(flippedType);
                }}
            >
                Change Type
            </Button>
            <p>
                {currentType === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </p>
        </div>
    );
}
