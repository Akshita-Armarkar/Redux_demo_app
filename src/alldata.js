import React from "react";
import { useSelector } from "react-redux";
const Allstoredata = () => {
  const allitem = useSelector((state) => state.ItemList);
  const UserList = useSelector((state) => state.UserList);
  const Apidata = useSelector((state) => state.Apidata);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-3">
          <h3> Users from Store </h3>
          {UserList.map((name, index) => {
            return (
              <p key={index}>
                {" "}
                {index + 1} . {name}{" "}
              </p>
            );
          })}
        </div>
        <div className="col-lg-9">
          <h3 className="text-center text-primary">
            {allitem.length} - Available Item in Store
          </h3>
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="bg-light text-primary">
                <th>Item Index</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {allitem.map((info, index) => {
                return (
                  <tr key={index}>
                    <td> {index + 1} </td>
                    <td> {info.name} </td>
                    <td> {info.price} </td>
                    <td> {info.qty} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="row">
            <h4 className="text-center">Data from store {Apidata.length}</h4>
            {Apidata.map((data, index) => {
              return (
                <div className="col-lg-12" key={index}>
                  <p className="p-4 bg-light">
                    {data.id}. Name = {data.name}, Username= {data.username},
                    Email = {data.email}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Allstoredata;
