import { userInfo } from "os";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);
    return (
        <div>
            <div>
                <Form.Check
                    id="edit-switch"
                    type="switch"
                    label="Edit Mode?"
                    checked={editMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEditMode(event.target.checked)
                    }
                />
            </div>
            <div>
                {editMode ? (
                    <Form.Group>
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Form.Group>
                ) : (
                    <span></span>
                )}
            </div>
            <div>
                {editMode ? (
                    <Form.Check
                        id="student-check"
                        type="checkbox"
                        label="Student?"
                        checked={student}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setStudent(event.target.checked)}
                    />
                ) : (
                    <span></span>
                )}
            </div>
            <div>
                {!editMode && student ? (
                    <span>{name} is a Student.</span>
                ) : !editMode && !student ? (
                    <span>{name} is not a Student.</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
