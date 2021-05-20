export default function Button({ type, onClick, value }) {
    return <button type={type} onClick={onClick}>{value}</button>
}