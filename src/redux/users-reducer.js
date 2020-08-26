let initialState = {
    usersData: [
        {
            id: 1,
            marginLeft: '5px',
            isFollow: true,
            followText: 'Unfollow',
            name: 'David',
            location: {country: 'United State of America', city: 'New York'}
        },
        {
            id: 2,
            marginLeft: '13px',
            isFollow: false,
            followText: 'Follow',
            name: 'Mark',
            location: {country: 'England', city: 'London'}
        },
        {
            id: 3,
            marginLeft: '5px',
            isFollow: true,
            followText: 'Unfollow',
            name: 'Benjamin',
            location: {country: 'Italy', city: 'Rome'}
        },
        {
            id: 4,
            marginLeft: '5px',
            isFollow: true,
            followText: 'Unfollow',
            name: 'Mike',
            location: {country: 'Spain', city: 'Madrid'}
        },
        {
            id: 5,
            marginLeft: '13px',
            isFollow: false,
            followText: 'Follow',
            name: 'Ann',
            location: {country: 'Switzerland', city: 'Bern'}
        },
        {
            id: 6,
            marginLeft: '13px',
            isFollow: false,
            followText: 'Follow',
            name: 'Maria',
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            id: 7,
            marginLeft: '5px',
            isFollow: true,
            followText: 'Unfollow',
            name: 'Tony',
            location: {country: 'Cuba', city: 'Havana'}
        },
        {
            id: 8,
            marginLeft: '13px',
            isFollow: false,
            followText: 'Follow',
            name: 'Olivia',
            location: {country: 'Sweden', city: 'Stockholm'}
        },
        {
            id: 9,
            marginLeft: '13px',
            isFollow: false,
            followText: 'Follow',
            name: 'James',
            location: {country: 'China', city: 'Beijing'}
        },
        {
            id: 0,
            marginLeft: '5px',
            isFollow: true,
            followText: 'Unfollow',
            name: 'Adam',
            location: {country: 'Israel', city: 'Jerusalem'}
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case 'FOLLOW-USERS': {
            stateCopy = {
                ...state,
                usersData: [...state.usersData],
            }
            for (let i = 0; i < state.usersData.length; i++) {
                if (action.id === state.usersData[i].id) {
                    if (state.usersData[i].isFollow === true) {
                        stateCopy.usersData[i].isFollow = false;
                        stateCopy.usersData[i].followText = 'Follow';
                        stateCopy.usersData[i].marginLeft = '13px';
                    } else {
                        stateCopy.usersData[i].isFollow = true;
                        stateCopy.usersData[i].followText = 'Unfollow';
                        stateCopy.usersData[i].marginLeft = '5px';
                    }
                }
            }
            return stateCopy;
        }
        default: {
            return state;
        }
    }
};

export default usersReducer;

export const followUsersActionCreator = (id) => {
    return {
        type: 'FOLLOW-USERS',
        id: id,
    }
};