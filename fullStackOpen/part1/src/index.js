import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <>
            <Header course={course} />
            <Content
                part1={part1}
                exercise1={exercises1}
                part2={part2}
                exercise2={exercises2}
                part3={part3}
                exercise3={exercises3}
            />
            <Total exercises={exercises1 + exercises2 + exercises3} />
        </>
    );
};

const Header = props => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    );
};

const Content = props => {
    return (
        <div>
            <Part partt1={props.part1} exercisee1={props.exercise1} />
            <Part partt1={props.part2} exercisee1={props.exercise2} />
            <Part partt1={props.part3} exercisee1={props.exercise3} />
        </div>
    );
};

const Part = props => {
    return (
        <div>
            <p>
                {props.partt1} {props.exercisee1}
            </p>
        </div>
    );
};
const Total = props => {
    return (
        <div>
            <p>Number of exercises {props.exercises}</p>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));
