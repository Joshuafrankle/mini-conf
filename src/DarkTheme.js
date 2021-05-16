import { setLocalTheme } from "./pages/theme";
import Button from "@material-ui/core/Button";
import { useState } from "react";

export default function Toggle() {
  const [btnImage, setBtnImage] = useState(
    localStorage.getItem("theme") === "theme-dark" ? "🌛" : "🌞"
  );

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
      <Button class="CustomButton" onClick={handleOnClick}>
        {btnImage}
      </Button>
    </>
  );
}
