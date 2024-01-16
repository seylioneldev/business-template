import s from "./style.module.css";

export function Logo({onClick, title}) {
  return (
    <>
          <div onClick={onClick}>{title} </div>

    </>
  );
}
