import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const course = "Half Stack application development";
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10
    };
    const part2 = {
        name: "Using props to pass data",
        exercises: 7
    };
    const part3 = {
        name: "State of a component",
        exercises: 14
    };

    return (
        <>
            <Header course={course} />
            <Content
                part1={part1.name}
                exercise1={part1.exercises}
                part2={part2.name}
                exercise2={part2.exercises}
                part3={part3.name}
                exercise3={part3.exercises}
            />
            <Total
                exercises={part1.exercises + part2.exercises + part3.exercises}
            />
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
