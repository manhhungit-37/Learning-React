import Button from "./Button";

export default function GuestGreeting({ header, name, handleLogin }) {
    return (
        <>
            <h1>{header}</h1>
            <Button type="button" onClick={handleLogin} value="Login" />
        </>
    )
}