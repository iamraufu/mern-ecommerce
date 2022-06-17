import React from 'react';

const Review = () => {
    return (
        <section className='mt-5 py-5'>
            <h2 className='fs-4'>Reviews</h2>
            <div className="container">
                <div className="col-md-6">
                    <h3 className='fs-6'>Name</h3>
                    <h4 className='fs-6'>Date</h4>
                    <h5 className='fs-6'>Description</h5>
                    <hr />
                </div>
                <div className="">
                    <h2 className='fs-4'>Write a Customer Review</h2>
                </div>
            </div>
        </section>
    );
};

export default Review;