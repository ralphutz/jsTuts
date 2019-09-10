import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const course = "Half Stack application development";
    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10
        },
        {
            name: "Using props to pass data",
            exercises: 7
        },
        {
            name: "State of a component",
            exercises: 14
        }
    ];

    return (
        <>
            <Header course={course} />
            <Content
                part1={parts[0].name}
                exercise1={parts[0].exercises}
                part2={parts[1].name}
                exercise2={parts[1].exercises}
                part3={parts[2].name}
                exercise3={parts[2].exercises}
            />
            <Total
                exercises={
                    parts[0].exercises + parts[1].exercises + parts[2].exercises
                }
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
