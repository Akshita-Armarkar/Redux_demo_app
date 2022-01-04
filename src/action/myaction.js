// user component action start here
export const Adduser = () => {
  var data = {
    type: "add",
    fullname: document.getElementById("fname").value,
  };
  return data;
};

export const Deleteuser = (index) => {
  var data = {
    type: "remove",
    userindex: index,
  };
  return data;
};
//item component action start here

export const Saveitem = () => {
  var data = {
    type: "additem",
    details: {
      name: document.getElementById("iname").value,
      price: document.getElementById("price").value,
      qty: document.getElementById("qty").value,
    },
  };
  document.getElementById("iname").value = "";
  document.getElementById("price").value = "";
  document.getElementById("qty").value = "";
  return data;
};

export const Deleteitem = (index) => {
  var data = {
    type: "deleteitem",
    itemindex: index,
  };
  return data;
};

//for api data handling
export const Addtostore = (arraydata) => {
  alert("Data sent to store");
  var data = {
    type: "adddata",
    alldata: arraydata,
  };
  return data;
};
