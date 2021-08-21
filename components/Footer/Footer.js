import useStyles from "./styles";

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <p>
        Design by{" "}
        <a
          className={classes.link}
          href="https://jay-ye.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Jay
        </a>
      </p>
    </div>
  );
}

export default Footer;
