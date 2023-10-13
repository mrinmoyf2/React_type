import React from "react";

let url : string = "https://www.google.com"

function convertCurrency(amount: number, currency: string) {
    // return aomunt * 0.012
}
convertCurrency(100, "Inr")

//const ExampleComponent: React.FC<{message: string}> = ({message}) => {}

type Color = "red" | "blue" | "green" | "yellow" | "purple"


// React Css Properties

// type ButtonProps = {
//     backgroundColor: Color,
//     textColor: Color,
//     fontSize: number,
//     pillShape: boolean,
//     padding: [number, number, number, number]
// }

type ButtonProps = {
    // style: {
    //     backgroundColor: string;
    //     fontSize: number;
    //     textColor: string;
    // }
    // children: React.ReactNode  
    setCount: React.Dispatch<React.SetStateAction<number>>;

}
//ComponentProps : WithRef or WithoutRef

type ButtonPropsSecond = React.ComponentProps<"button"> & {
    variant?: "primary" | "secondary"
}
//Extending :
interface ButtonPropsThird {
    type: "button" | "submit" | "reset",
    color: "red" | "blue" | "green" 
}

interface SuperButtonProps extends ButtonPropsThird {
    size: "md" | "lg"
}

// Intersection(&) :
type ButtonPropsForth = {
    type: "button" | "submit" | "reset",
    color: "red" | "blue" | "green" 
}

type SuperButtonPropsSecond = ButtonPropsThird  & {
    size: "md" | "lg"
}

export default function Button({
    type,
    autoFocus,
    ...props
    // setCount
    // children
    // style
    // backgroundColor ,
    // textColor,
    // fontSize,
    // pillShape, 
    // padding
 }:
    //ButtonProps
    ButtonPropsSecond ) {
    //setCount(1);
    return(
        // <button style={style}>
        //     Click me
        // </button>   
        //ReactNode:
        <button
        type={type}
        autoFocus={autoFocus}
        {...props}
        >
        Click me! 
        </button>   
    )
}


