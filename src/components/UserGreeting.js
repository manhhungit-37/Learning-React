import Button from "./Button";

export default function UserGreeting({ header, name, handleLogout }) {
    return (
        <>
            <h1>{header} {name}</h1>
            <Button type="button" onClick={handleLogout} value="Logout" />
        </>
    )
}