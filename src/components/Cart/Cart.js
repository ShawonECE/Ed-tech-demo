import React from 'react';

const Cart = (props) => {
    let totalPrice = 0;
    props.cart.map(element => totalPrice += element.courseFee);
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-success">Order Summary</h5>
                    <h6>Course Added to Cart: {props.cart.length}</h6>
                    <h6>Price: {totalPrice}</h6>
                    <button className="btn btn-success">Proceed</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;