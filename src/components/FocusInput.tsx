import { useRef } from "react";

export default function FocusInput() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={() => input.current!.focus()}>Focus Input</button>
    </div>
  );
}
