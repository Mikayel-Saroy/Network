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
    let stateCopy = {...state};
    if (action.type === 'HANDLE-PROFILE-POST') {
        stateCopy.postsDataCurrent = action.e;
        return stateCopy;
    } else if (action.type === 'ADD-PROFILE-POST') {
        stateCopy.postsData = [...state.postsData];
        let newPost = {
            id: state.postsData[0].id + 1,
            post: state.postsDataCurrent,
            likes: 0,
        };
        stateCopy.postsDataCurrent = '';
        stateCopy.postsData = [newPost, ...state.postsData];
        return stateCopy;
    } else if (action.type === 'ADD-LIKE') {
        stateCopy.postsData = [...state.postsData];
        for (let i = 0; i < state.postsData.length; i++) {
            if (state.postsData[i].id === action.e) {
                stateCopy.postsData[i].likes++
            }
        }
        return stateCopy;
    } else {
        return stateCopy;
    }
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