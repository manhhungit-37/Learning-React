import { useEffect, useRef } from "react";

export default function MyDiv() {
  const myDivRef = useRef()

  useEffect(() => {
    const myDiv = myDivRef.current
    // myDiv là một DOM node!
    console.log(myDiv)
  }, [])

  return <div ref={myDivRef}>hi</div>
}