import Button from "./Button";
import { useState } from "react";

export default function HookState() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>You clicked {count } times</h1>
            <Button type="button" onClick={() => setCount(count + 1)} value="Click" />
        </>
    )
}