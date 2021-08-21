import { makeStyles } from "@material-ui/core/styles";
import { FullscreenExit } from "@material-ui/icons";

export default makeStyles({
  footer: {
    height: "100px",
    background: "rgba(1, 1, 1, 0.5)",
    backgroundBlendMode: "darken",
    color: "grey",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
});
