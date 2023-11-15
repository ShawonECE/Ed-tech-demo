import React from 'react';

const Course = (props) => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Course title: <span className='text-primary'>{props.course.title}</span></h5>
                    <h6>Instructor: {props.course.instructor}</h6>
                    <h6>Course Duration: {props.course.duration}</h6>
                    <h6>Course Fee: {props.course.courseFee}</h6>
                    <button className="btn btn-primary" onClick={()=>props.addCourse(props.course)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Course;