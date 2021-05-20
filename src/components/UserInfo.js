import Avatar from "./Avatar";

export default function UserInfo(props) {
    return (
        <div className="UserInfo">
        <Avatar src={props.author.avatarUrl} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
    )
}