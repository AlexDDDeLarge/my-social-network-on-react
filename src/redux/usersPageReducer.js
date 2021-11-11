const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    // {id: 1, protoUrl: "", followed: true, fullName: "Dmitry P", status: "sdgg", location: {city: "Yampil", country: "Ukraine"}},
    // {id: 2, protoUrl: "", followed: false, fullName: "Dmitry H", status: "dsgfdg", location: {city: "Odessa", country: "Ukraine"}},
    // {id: 3, protoUrl: "", followed: true, fullName: "Anastasia F", status: "sdsgsgsgg", location: {city: "Moscow", country: "Russia"}},
    // {id: 4, protoUrl: "", followed: false, fullName: "Angelina A", status: "fdgg", location: {city: "Moscow", country: "Russia"}}
  ]
}

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: 
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true}
          } 
          return user;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false}
          } 
          return user;
        })
      }
    case SET_USERS: 
      return { ...state, users: [...state.users, ...action.users] }
    default: 
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});

export default usersPageReducer;