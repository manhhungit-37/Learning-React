import Avatar from "./Avatar";

export default function UserInfo({ author }) {
    return (
      <div className="UserInfo">
        <Avatar src={author.avatarUrl} />
        <div className="UserInfo-name">{author.name}</div>
      </div>
    )
}