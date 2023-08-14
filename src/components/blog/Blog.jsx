import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Blog1 from '../../assets/blog1.jpg';
import Blog2 from '../../assets/blog2.jpg';
import Blog3 from '../../assets/blog3.jpg';
import shapeOne from '../../assets/shape-1.png';
import './blog.css';

const Blog = () => {
    return (
        <section className="blog section" id="blog">
            <h2 className="section__title text-cs">Latest Blog</h2>
            <p className="section__subtitle">
                My <span>Articles and Advice</span>
            </p>

            <div className="blog__container container grid">
                <div className="blog__item card card_two">
                    <span className="blog__date text-cs">OCTOBER 31, 2023</span>
                    <h3 className="blog__title">Blog-1 - To be Updated soon</h3>
                    <p className="blog__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum praesentium odio recusandae deleniti nisi id dolor itaque minima nemo error?
                    </p>

                    <a href="" className="link">
                        Read more
                        <FaArrowRight className='link__icon'></FaArrowRight>
                    </a>

                    <img src={Blog1} alt="" className="blog__img" />
                </div>

                <div className="blog__item card card_two">
                    <span className="blog__date text-cs">November 31, 2023</span>
                    <h3 className="blog__title">Blog-2 - To be Updated soon</h3>
                    <p className="blog__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit doloribus tempore ab numquam odio cumque earum minus est nesciunt consequuntur?
                    </p>

                    <a href="" className="link">
                        Read more
                        <FaArrowRight className='link__icon'></FaArrowRight>
                    </a>

                    <img src={Blog2} alt="" className="blog__img" />
                </div>

                <div className="blog__item card card_two">
                    <span className="blog__date text-cs">December 31, 2023</span>
                    <h3 className="blog__title">Blog-3 - To be Updated soon</h3>
                    <p className="blog__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea soluta modi cumque sapiente repellendus ipsum tempora minima dignissimos ut ipsum explicabo?
                    </p>

                    <a href="" className="link">
                        Read more
                        <FaArrowRight className='link__icon'></FaArrowRight>
                    </a>

                    <img src={Blog3} alt="" className="blog__img" />
                </div>
            </div>

            <div className="deco deco__left">
                <img src={shapeOne} alt="" className="shape" />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title">Blogs</span>
            </div>
        </section>
    )
}

export default Blog
