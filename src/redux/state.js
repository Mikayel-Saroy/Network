import {rerenderEntireTree} from "../render";

const data = {
    profile: {
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

export const addProfilePost = (post) => {
    let newPost = {
        id: data.profile.postsData[0].id + 1,
        post: post,
        likes: 0,
    };
    data.profile.postsData = [newPost, ...data.profile.postsData];
    rerenderEntireTree(data);
}

export default data;