
 const userJoin = (id, username, room) => {
    const user = {
        type: 'NEW_USER',
        id,
        username,
        room,

    }
    // users.push(user)

    return user;
}

export default userJoin;