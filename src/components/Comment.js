import UserInfo from "./UserInfo";
import Date from "./Date";
import Text from "./Text"

export default function Comment(props) {

  return (
    <div className="Comment">
      <UserInfo author={props.comment.author} />
      <Text text={props.comment.text} />
      <Date date={props.comment.date} />
    </div>
  );
}
