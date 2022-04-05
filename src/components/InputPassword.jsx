import { useState } from "react";

export default function InputPassword() {
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");

  const settingTemp = (e) => {
    setPassword(password + e.target.value[e.target.value.length - 1]);

    setValue(
      e.target.value
        .split("")
        .map((elm) => "•")
        .join("")
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="password"
          id="passowrd"
          value={value}
          placeholder="Password"
          onChange={(e) => settingTemp(e)}
        />
        <button
          onClick={ () => {
              value.includes("•")
              ? setValue(password)
              : setValue(password.split("").map((elm) => "•").join(""))
          }
          }
        >
          See
        </button>
      </div>
    </>
  );
}
