import * as actionTypes from './actionTypes';
import axios from 'axios';


export const setUsers= ( users) =>{
    return {
        type: actionTypes.SET_USERS,
        users: users
    };
}
export const  initUsers =() =>{
    return dispatch =>{
        axios.get('https://panorbit.in/api/users.json')
        .then(response =>{
            dispatch(setUsers(response.data.users));
        })
    }
}

export const profileUser =(id) =>{
    return {
        type:actionTypes.PROFILE_USERS,
        id:id-1,
  
    }
}

export const postComp =() =>{
    return{
        type: actionTypes.POSTCOMP
    }
}