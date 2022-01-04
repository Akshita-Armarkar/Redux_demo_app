const ItemList = (state=[], action) =>{
    var oldnewitem = Object.assign([],  state);

    if(action.type==="additem"){
        oldnewitem = oldnewitem.concat(action.details);
    }

    if(action.type==="deleteitem"){
        oldnewitem.splice(action.itemindex , 1);
    }

    return oldnewitem;
}

export default ItemList;