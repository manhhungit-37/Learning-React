export default function Date(props) {
    const date = props.date.getDate() + "/" + (props.date.getMonth()+1) + "/" + props.date.getFullYear();
    return <div>{date}</div>
}