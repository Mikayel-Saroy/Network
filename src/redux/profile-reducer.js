let initialState = {
    postsDataCurrent: '',
    postsData: [
        {
            id: 3,
            post: "If you have any questions or suggestions, please don't hesitate to contact me.",
            likes: 33,
        },
        {
            id: 2,
            post: "I am a creator of this social network.",
            likes: 32,
        },
        {
            id: 1,
            post: "Congratulations for joining to our website.",
            likes: 21,
        },
    ],
};

const profileReducer = (state = initialState, action) => {
    if (action.type === 'HANDLE-PROFILE-POST') {
        state.postsDataCurrent = action.e;
    } else if (action.type === 'ADD-PROFILE-POST') {
        let newPost = {
            id: state.postsData[0].id + 1,
            post: state.postsDataCurrent,
            likes: 0,
        };
        state.postsDataCurrent = '';
        state.postsData = [newPost, ...state.postsData];
    } else if (action.type === 'ADD-LIKE') {
        for (let i = 0; i < state.postsData.length; i++) {
            if (state.postsData[i].id === action.e) {
                state.postsData[i].likes++
            }
        }
    }
    return state;
}

export default profileReducer;

export const handleProfilePostActionCreator = (elem) => {
    return {
        type: 'HANDLE-PROFILE-POST',
        e: elem,
    }
};
export const addProfilePostActionCreator = () => {
    return {
        type: 'ADD-PROFILE-POST',
    }
};
export const addLikeActionCreator = (id) => {
    return {
        type: 'ADD-LIKE',
        e: id,
    }
};