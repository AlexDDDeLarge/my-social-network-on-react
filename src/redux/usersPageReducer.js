const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    {
      id: 1,
      fullName: "Leyla A",
      status: "I will return soon",
      location: {
        country: "Russia",
        city: "Moscow"
      },
      avatar: "some url",
      isFollowed: true
    },
    {
      id: 2,
      fullName: "Emil T",
      status: "I will return someday",
      location: {
        country: "Russia",
        city: "Moscow"
      },
      avatar: "some url",
      isFollowed: false
    }
  ]
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, isFollowed: true}
          } 
          return user;
        })
      };
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, isFollowed: false}
          } 
          return user;
        })
      };
    case SET_USERS: 
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
};

export const followAC = (userId) => {type: FOLLOW, userId};

export const unfollowAC = (userId) => {type: UNFOLLOW, userId};

export const setUsersAC = (users) => {type: SET_USERS, users};

export default usersPageReducer;