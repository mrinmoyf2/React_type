import React, { useState } from "react";

import { type Color } from "@/lib/types";

type User = {
    name: string,
    age: number
}

// as const: 
//as const makes that readonly and only specified that options

const buttonTextOptions = [
    "Click me!",
    "Click me again!",
    "Click me one more time!"
] as const

//Omit Utility:

type Guest = Omit<User, 'name'>

//Generics:
    // generics define the relationship between the inputs and the outputs.

    // const convertToArray = <T,>(value: T): T[] => {
    //     return [value]
    // }

    // function convertToArray<T>(value: T): T[] {
    //     return [value]
    // }

    // convertToArray(4)
    // convertToArray("Hello")

//Generics in React:

// type ButtonProps<T> = {
//     countValue: T,
//     countHistory: T[]
// }

// import types 

type ButtonProps = {
    color: Color
    fontSize: number
}



export default function More1Button<T>(
    // {
    //     countValue,
    //     countHistory
    // }:ButtonProps<T>
) {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("Click me moreee!")
    const [isPrimary, setIsPrimary] = useState(true)
    const [user, setUser] = useState<User | null>(null)

    const name = user?.name

    // return <button onClick={(e) => console.log("Clicked!")}>Click me more</button>
    // return <button>{buttonTextOptions.map(option => {
    //     return option
    // })}</button>
    return <button>Click me!</button>
}
