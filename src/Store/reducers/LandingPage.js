import * as actionTypes from '../actions/actionTypes';



const initialState = {
    posts:[],
    profile_user :{},
    company:{},
    address:{},
    navigatePosts: false,
    navigateGallery: false,
    navigateToDo: false,
    geo:{},

}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_USERS: return {
            ...state,
            posts:action.users,
           
        }

        case actionTypes.PROFILE_USERS:return{
            ...state,
            // profile_user :  action.posts[action.id]
            profile_user: state.posts[action.id],
            company: {...state.posts[action.id].company},
            address: {...state.posts[action.id].address},
            geo:{...state.posts[action.id].address.geo}
        }

        case actionTypes.POSTCOMP: return{
            ...state,
            navigatePosts: true
        }
        default:
            return state;
    }


}



export default reducer;