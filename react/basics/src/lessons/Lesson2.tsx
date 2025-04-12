import React from "react";

type Lesson2CompProps = { name: string };

function Lesson2Comp({ name }: Lesson2CompProps) {
    return <div>Hello {name} , this is react component with property passed</div>
}

function AnotherComp(props) {
    return (
    <>
        <p>This is another way to read property passed {props.someProp}</p>
        <ChildOfAnotherComp {...props}/>
    </>
    )
}

function ChildOfAnotherComp(props) {
    return <p>passing props downstream {props.a} - {props.b}</p>
}

function FCWithChildren(props) {
    return (
    <div>
        <p>props.children refer to component passed as children of this comp</p>
        {props.children}
    </div>
    )
}


export default function Lesson2() {
    return (
        <div>
            <Lesson2Comp name="Learner" />
            <AnotherComp someProp = "props is the first argument" a="A" b={125}/>
            <FCWithChildren>
                <span>This should be rendered under p</span>
            </FCWithChildren>
        </div>
    );
}
