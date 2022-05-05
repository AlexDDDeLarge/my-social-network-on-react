import profilePageReducer, { addPost, deletePost } from "./profilePageReducer";
import React from "react";
import ReactDOM from "react-dom";

// initial data
let state = {
  posts: [
    {id: "p1", likeCount: 12, text: "Медитация - круто."},
    {id: "p2", likeCount: 500, text: "Наруто - это круто."}
  ]
}

/* //basic tests of reducer

it('post length should be incremented', () => {
  //action
  let newState =  profilePageReducer(state, addPost("hey hey"));

  // expectation
  expect(newState.posts.length).toBe(3); 
})

it('new post message should be correct', () => {
  // initial data
  let postText = "hey hey";

  //action
  let newState =  profilePageReducer(state, addPost(postText));

  // expectation
  expect(newState.posts[0].text).toBe(postText); 
}) */

// tdd tests of reducers

it('length of after deleting should be decrement', () => {
  let actinon = deletePost("p1")

  let newState = profilePageReducer(state, actinon);

  expect(newState.posts.length).toBe(state.posts.length - 1)
})

it('after deleting should not be decrement if incorrect id', () => {
  let actinon = deletePost("1000")

  let newState = profilePageReducer(state, actinon);

  expect(newState.posts.length).toBe(state.posts.length)
})


