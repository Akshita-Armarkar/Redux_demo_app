import React, { useState, useEffect } from "react";
import { Addtostore } from "./action/myaction";
import { useDispatch } from "react-redux";
const Myapi = () => {
  const dispatch = useDispatch();
  const [comments, updateComments] = useState([]);
  const getComment = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((commentArray) => {
        updateComments(commentArray);
      });
  };

  useEffect(() => {
    getComment();
  }, [true]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12 text-center">
          <button
            className="btn btn-danger btn-lg"
            onClick={() => dispatch(Addtostore(comments))}
          >
            Send Data To Redux Store
          </button>

          <h3 className="text-center text-primary">
            Total Comments Are : {comments.length}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Myapi;
