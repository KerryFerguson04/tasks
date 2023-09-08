import React from "react";
import "./App.css";
import vulpix from "./vulpix.png";
import { Button, Col, Container, Row } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript, Kerry Ferguson
            </header>
            <h4>Task 3 header</h4>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <img src={vulpix} alt="A picture of two vulpixes" />
            <Container>
                Unordered List:
                <ul>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ul>
            </Container>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div className="rect"></div>
            <div>
                <Container>
                    <Row>
                        <Col>First column. Cats.</Col>
                        <Col>Second column. Dogs.</Col>
                    </Row>
                </Container>
            </div>
            ;
        </div>
    );
}

export default App;
