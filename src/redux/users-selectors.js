/*
//Custom super selector
let resultGetUsersSelector = null;
let users = null;

const getUsers = state => {
  return state.usersPage.users
}

export const getUsersSelector = state => {
  if (!users) {
    users = getUsers(state);
    resultGetUsersSelector = users.filter(el => true);
    return resultGetUsersSelector;
  } else if (users !== getUsers(state)) {
    resultGetUsersSelector = users.filter(el => true);
    return resultGetUsersSelector;
  } else if (users === getUsers(state)) {
    if (!resultGetUsersSelector) {
     return resultGetUsersSelector = users.filter(el => true);
    } else {
      return resultGetUsersSelector;
    }
  }
} */

import { createSelector } from "reselect";

export const getUsersSelector = state => {
  return state.usersPage.users
}

// export const getUsersSelectorSuper = createSelector(getUsersSelector, (users) => {
//   return users.filter(el => true)
// });

export const getTotalPageCountSelector = state => {
  return state.usersPage.totalCount
}

export const getPageSizeSelector = state => {
  return state.usersPage.pageSize
}

export const getCurrentPageSelector = state => {
  return state.usersPage.page
}

export const getIsFetchingSelector = state => {
  return state.usersPage.isFetching
}

export const getFollowingInProgressSelector = state => {
  return state.usersPage.followingInProgress
}

export const getUsersPortionSize = state => {
  return state.usersPage.portionSize
}





