import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";
import * as api from "../../api/index.js";

const Posts = ({ setCurrentId, posts }) => {
  // const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      item
      className={classes.container}
      alignItems="stretch"
      spacing={5}
    >
      {posts.map((post) => (
        <Grid container key={post._id} item xs={12} sm={6} md={4}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
