import { setLocalTheme } from "./theme";
import Button from "@material-ui/core/Button";
import { useState } from "react";

export default function Toggle() {
  const [btnImage, setBtnImage] = useState("");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-light") {
      setLocalTheme("theme-dark");
      setBtnImage("🌛");
    } else {
      setLocalTheme("theme-light");
      setBtnImage("🌞");
    }
  };

  return (
    <>
      <Button class="buttonColor" onClick={handleOnClick}>
        {btnImage}
      </Button>
    </>
  );
}
