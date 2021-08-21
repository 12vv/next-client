import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Dialog,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import Posts from "../components/Posts/Posts";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
import { getPosts } from "../actions/posts";
import useStyles from "../styles";
import header from "../images/header.jpg";
import * as api from "../api/index.js";

const App = ({ posts }) => {
  // console.log(posts);
  const [currentId, setCurrentId] = useState(0);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Postery
        </Typography>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Create a Post
        </Button>

        {/* <img className={classes.image} src={header} alt="icon" height="60" /> */}
      </AppBar>
      <Dialog
        className={classes.dialog}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Form
          currentId={currentId}
          setCurrentId={setCurrentId}
          dialogOpen={open}
          setOpen={setOpen}
        />
      </Dialog>
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={1}
            >
              <Grid item xs={12} sm={12} spacing={5}>
                <Posts setCurrentId={setCurrentId} posts={posts} />
              </Grid>
              {/* <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid> */}
            </Grid>
          </Container>
        </Grow>
      </Container>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await api.fetchPosts();
  console.log(data.length);

  return {
    props: {
      posts: data || null,
    },
  };
}

export default App;
