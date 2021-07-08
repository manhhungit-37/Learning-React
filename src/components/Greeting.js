import { useEffect, useState } from "react";

export default function Greeting() {
  // 🐨 khởi tạo state từ localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const initialName = JSON.parse(localStorage.getItem('name'));
  const [name, setName] = useState(initialName || "");
  console.log(name);

  // 🐨 Bạn có thể sử dụng `React.useEffect`.
  // để lưu state name vào localStorage.
  // 💰 window.localStorage.setItem('name', name)
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  },[name])

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}
