import { useState } from "react";

export default function (key:string, defaultValue: unknown) {
  const [value, setvalue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (err) {
      return String (defaultValue);
    }
  });
}