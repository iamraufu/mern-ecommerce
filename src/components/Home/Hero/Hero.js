import React from 'react';
import camera from '../../../images/hero/camera.jpg';
import smartwatch from '../../../images/hero/smartwatch.jpg';
import earphone from '../../../images/hero/earphone.jpg';
// import products from '../../../data/products.json';

const Hero = () => {

    // let heroProducts = [];
    // for (let i = 0; i < 3; i++) {
    //     const number = Math.floor(Math.random() * products.length);
    //     if (!heroProducts.includes(products[number])) {
    //         heroProducts.push(products[number]);
    //     }
    //     else {
    //         i--;
    //     }
    // }

    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

            <div className="carousel-inner">
                {/* {
                    heroProducts.map(product =>
                        <div key={product.key} className="carousel-item" data-bs-interval="2000">
                            <h2 style={{ fontSize: '24px', color: '#212529', fontWeight: '700' }} className='text-center my-3'>{product.name}</h2>
                            <img src={product.image} width={200} className="d-block img-fluid mx-auto" alt="camera" />
                            <h3 style={{ fontSize: '18px', color: '#212529' }} className='text-center fw-bold my-3'>Price: {product.price} Taka</h3>
                        </div>
                    )

                } */}
                <div className="carousel-item active" data-bs-interval="1000">
                    <h2 style={{ fontSize: '24px', color: '#212529', fontWeight: '700' }} className='text-center my-3'>Polaroid Camera</h2>
                    <img src={camera} width={500} className="d-block img-fluid mx-auto" alt="camera" />
                    <h3 style={{ fontSize: '18px', color: '#212529' }} className='text-center fw-bold my-3'>Price: 22000 Taka</h3>
                </div>

                <div className="carousel-item" data-bs-interval="2000">
                    <h2 style={{ fontSize: '24px', color: '#212529', fontWeight: '700' }} className='text-center my-3'>Apple Watch</h2>
                    <img src={smartwatch} width={500} className="d-block img-fluid mx-auto" alt="earphone" />
                    <h3 style={{ fontSize: '18px', color: '#212529' }} className='text-center fw-bold my-3'>Price: 33000 Taka</h3>
                </div>

                <div className="carousel-item" data-bs-interval="2000">
                    <h2 style={{ fontSize: '24px', color: '#212529', fontWeight: '700' }} className='text-center my-3'>Apple Airpods Pro</h2>
                    <img src={earphone} width={500} className="d-block img-fluid mx-auto" alt="smartwatch" />
                    <h3 style={{ fontSize: '18px', color: '#212529' }} className='text-center fw-bold my-3'>Price: 16000 Taka</h3>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Hero;