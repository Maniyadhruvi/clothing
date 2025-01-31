import React from 'react'
import '../../Componenets/Category-item/category-item-style.scss';

const Categoryitem = ({ category }) => {
    const { imgUrl, title } = category;

    return (

        <div className='category-container'>
            <div className='background-img' style={{ backgroundImage: `url(${imgUrl})` }} />
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}
export default Categoryitem;
