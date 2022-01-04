import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Adduser, Deleteuser} from './action/myaction';

const User = () =>{
    const dispatch = useDispatch();
    const UserList = useSelector(state =>state.UserList); 
                    // list of user from store
    return(
        <div className="container">
            <div className='row'>
                <div className="col-lg-12 text-center">
                    <h3> User Management , Total Users : {UserList.length} </h3>
                    <p className="mt-3">
                        Enter Full Name : <input type="text" id="fname"/>
                        <button 
                            className="btn btn-primary m-3"
                            onClick={ ()=> dispatch(Adduser()) }>
                            Save User
                        </button>
                    </p>
                </div>
                {
                    UserList.map((name ,index)=>{
                        return(
                            <div className='col-lg-3 mb-3 text-center' key={index}>
                                <div className="bg-light p-3">
                                    <p> {name} </p>
                                    <button 
                                        className='btn btn-danger btn-sm'
                                        onClick={()=> dispatch(Deleteuser(index))}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default User;