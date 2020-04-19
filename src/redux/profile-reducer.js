import { usersApi, profileApi } from "../api/Api";

const ADD_POST = 'ADD-POST';
const WATCH_STATE = 'WATCH-STATE';
const SET_STATUS = 'SET-STATUS'; //получения cтатуса
let initialState = {
    items: [
        {
            photos: {
                small: null,
                large: null
            },

        },
    ],
    match: {
        params: {}
    },
    posts: [
        { id: 1, massedge: 'Денис привет это первое сообщение', like: '21', img: "https://www.w3schools.com/howto/img_avatar.png", alt: "user name" },

    ],
    placeholder: 'Nova kraina',
    status: 'local state'
}
const profile = (state = initialState, action) => {
    switch (action.type) {
        //Создание нового объекта с новыми параметрамииз actiona
        case ADD_POST:
            // let text = state.placeholder;           
            return {
                ...state,
                posts: [...state.posts, // Пушим объект с права от запятой - конец масива
                {
                    id: 90, massedge: action.massedge,
                    img: "https://static6.depositphotos.com/1000422/567/i/450/depositphotos_5675738-stock-photo-emoticon.jpg",
                }]
            };
        case WATCH_STATE: {
            return {
                ...state,
                items: action.info,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state
        }
    }
}

export let add_nuw_post = (massedge) => ({ type: ADD_POST, massedge })
export let watch_state = (info) => ({ type: WATCH_STATE, info })
export let setUserStatus = (status) => ({ type: SET_STATUS, status })

export default profile;

export const is_watch_state = (user) => {
    return (distpath) => {
        usersApi.getProfile(user)
            .then((response) => {
                distpath(watch_state(response.data))
            })
    }
}
export const getUserStatus = (userId) => {
    return (distpath) => {

        profileApi.getStatus(userId).then(
            response => {

                distpath(setUserStatus(response.data))
            }
        )
    }
}
export const upStatus = (status) => {
    return (distpath) => {

        profileApi.upDateStatus(status).then(
            response => {

                if (response.data.resultCode === 0)

                    distpath(setUserStatus(status))
            }
        )
    }
} 