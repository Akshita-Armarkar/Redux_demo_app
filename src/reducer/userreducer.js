const UserList = (state=[], action) =>{
    var oldnewuser = Object.assign([],  state);

    if(action.type==="add"){
        oldnewuser.unshift(action.fullname);
    }

    if(action.type==="remove"){
        oldnewuser.splice(action.userindex , 1);
    }

    return oldnewuser;
}

export default UserList;