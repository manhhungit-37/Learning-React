import UserInfo from "./UserInfo";
import Date from "./Date";
import Text from "./Text"

export default function Comment({ comment }) {

  return (
    <div className="Comment">
      <UserInfo author={comment.author} />
      <Text text={comment.text} />
      <Date date={comment.date} />
    </div>
  );
}
