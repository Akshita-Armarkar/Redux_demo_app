import React from 'react';
import { Saveitem, Deleteitem } from './action/myaction';
import { useSelector, useDispatch } from 'react-redux';
const Item = () =>{
    const dispatch = useDispatch();
    const allitem = useSelector(state =>state.ItemList);
    return(
        <div className="container mt-3">
            <div className="row">
                <div className='col-lg-3'>
                    <div className='p-4 bg-light rounded'>
                        <h4 className="text-center"> Add New Item </h4>
                        <div className="mb-3">
                            <label> Item Name </label>
                            <input type="text" className='form-control' id="iname"/>
                        </div>
                        <div className="mb-3">
                            <label> Price </label>
                            <input type="text" className='form-control' id="price"/>
                        </div>
                        <div className="mb-3">
                            <label> Quantity </label>
                            <input type="text" className='form-control' id="qty"/>
                        </div>
                        <div className='text-center'>
                            <button 
                                className='btn btn-primary'
                                onClick={()=> dispatch(Saveitem())}>
                                    Save Item
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-9'>
                    <h3 className='text-center text-primary'> 
                        {allitem.length} - Available Item in Store 
                    </h3>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr className='bg-light text-primary'>
                                <th>Item Index</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allitem.map((info , index)=>{
                                    return(
                                        <tr key={index}>
                                            <td> {index} </td>
                                            <td> {info.name} </td>
                                            <td> {info.price} </td>
                                            <td> {info.qty} </td>
                                            <td> 
                                                <button 
                                                    className='btn btn-danger btn-sm'
                                                    onClick={()=> dispatch(Deleteitem(index))}> 
                                                    Delete 
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Item;