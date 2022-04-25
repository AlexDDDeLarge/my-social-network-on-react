export const getUsersSelector = state => {
  return state.usersPage.users
}

export const getTotalPageCountSelector = state => {
  return state.usersPage.totalCount
}

export const getPageSizeSelector = state => {
  return state.usersPage.count
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





