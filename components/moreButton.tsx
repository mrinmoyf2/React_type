import React, { useState } from "react";

type User = {
    name: string,
    age: number
}

export default function More1Button() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("Click me moreee!")
    const [isPrimary, setIsPrimary] = useState(true)
    const [user, setUser] = useState<User | null>(null)

    const name = user?.name

    return <button onClick={(e) => console.log("Clicked!")}>Click me more</button>
}
