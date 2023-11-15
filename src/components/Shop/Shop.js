import React, {useState} from 'react';
import Course from '../Courses/Course';
import courses from '../../fakeData/fakeData';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const addCourse = (currentCourse) => {
        console.log('Course added', currentCourse);
        let newCart = [...cart, currentCourse];
        setCart(newCart);
    };
    return (
        <div className="container">
            <div className='row'>
            <div className="col-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        courses.map(singleCourse => <Course addCourse={addCourse} course={singleCourse}></Course>)
                    }
                </div>    
            </div>
            <div className="col-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;