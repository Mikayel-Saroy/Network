let rerenderEntireTree = () => {}
export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

const data = {
    profile: {
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
    },
    dialogs: {
        messagesDataCurrent: '',
        messagesData: [
            {
                id: 1,
                message: "Hi 50, how are you doing ?",
            },
            {
                id: 2,
                message: "Hey bro, I'm doin great, how bout you ?",
            },
            {
                id: 3,
                message: "Fine, how is your day ?",
            },
            {
                id: 4,
                message: "Thanks, my day is amazing.",
            },
            {
                id: 5,
                message: "That's great. See at the office at 7:00pm.",
            },
            {
                id: 6,
                message: "Sounds great."
            }
        ],
        dialogsData: [
            {
                id: 1,
                name: 'Curtis',
            },
            {
                id: 2,
                name: 'Benjamin',
            },
            {
                id: 3,
                name: 'Grant',
            },
            {
                id: 4,
                name: 'Dan',
            },
            {
                id: 5,
                name: 'Marcus',
            }
        ],
    },
};
export default data;

export const handleProfilePost = (e) => {
    data.profile.postsDataCurrent = e;
    rerenderEntireTree(data);
}
export const addProfilePost = () => {
    let newPost = {
        id: data.profile.postsData[0].id + 1,
        post: data.profile.postsDataCurrent,
        likes: 0,
    };
    data.profile.postsDataCurrent = '';
    data.profile.postsData = [newPost, ...data.profile.postsData];
    rerenderEntireTree(data);
}
export const addLike = (e) => {
    for (let i = 0; i < data.profile.postsData.length; i++) {
        if (data.profile.postsData[i].id === e) {
            data.profile.postsData[i].likes++
        }
    }
    rerenderEntireTree(data);
}

export const handleDialogsMessage = (e) => {
    data.dialogs.messagesDataCurrent = e;
    rerenderEntireTree(data);
}
export const addDialogsMessage = () => {
    let newMessage = {
        id: data.dialogs.messagesData.length + 1,
        message: data.dialogs.messagesDataCurrent,
    }
    data.dialogs.messagesDataCurrent = ''
    data.dialogs.messagesData.push(newMessage);
    rerenderEntireTree(data)
    console.log(data);
}

