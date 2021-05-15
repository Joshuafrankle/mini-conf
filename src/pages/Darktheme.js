import { useEffect } from "react";
import { setLocalTheme, checkTheme } from "./theme";
import Button from "@material-ui/core/Button";

export default function Toggle() {
  useEffect(() => {
    checkTheme();
  });

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-light") {
      setLocalTheme("theme-dark");
    } else if (localStorage.getItem("theme") === "theme-dark") {
      setLocalTheme("theme-light");
    } else {
      setLocalTheme("theme-light");
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOnClick}>
        Currently under Construction
      </Button>
    </>
  );
}
