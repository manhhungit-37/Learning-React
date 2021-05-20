import Button from "./components/Button";
import Input from "./components/Input";
import Text from "./components/Text";

export default function ReactBoxes() {
    function handleButton() {
        console.log("Hung");
    }

    return (
        <>
            <Input type="text" placeholder="Enter your name!" />
            <Button type="button" onClick={handleButton} value="Click"/>
            <Text text="Hung dep trai" color="red" />
        </>
    )
}