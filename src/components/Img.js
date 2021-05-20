export default function Img(props) {
    return (
      <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
  }
  