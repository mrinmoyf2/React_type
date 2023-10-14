import React, { useEffect } from "react";


// We will fetch the data from the Api. we don't know the type/shape of the data.
// for this case we use the 'unknown' type.
// And then validate the data type with our schema (ex.- zod)

// Alternative ts-reset library

export default function Button(){
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((data: unknown) => {
                //run it through Zod
                // const todo = todoSchema.parse(data)

                // do something with the data
            })
    }, [])
}