const Apidata = (state=[], action) =>{
    var oldnewdata = Object.assign([],  state);

    if(action.type === "adddata"){
        oldnewdata = oldnewdata.concat(action.alldata);
    }

    return oldnewdata;
}

export default Apidata;