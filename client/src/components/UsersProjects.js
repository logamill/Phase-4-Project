import React from "react";
import EachPost from "./EachPost";
import map from "lodash/map";
import range from "lodash/range";

export default function UsersProjects({ user }) {
  const mapPosts = user.posts.map((el) => {
    return <EachPost key={el.id} post={el} />;
  });

  return <div>{mapPosts}</div>;
}
