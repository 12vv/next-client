import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    // borderRadius: 15,
    marginBottom: "30px",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    background: "rgba(1,1,1, 0.7)",
    justifyContent: "space-between",
  },
  dialog: {
    padding: "50px",
  },
  heading: {
    // color: "rgba(0,0,0, 1)",
    color: "white",
    fontWeight: "bold",
    fontSize: "30px",
  },
  image: {
    marginLeft: "15px",
  },
}));
