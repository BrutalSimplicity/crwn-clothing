import React from 'react'
import { connect } from 'react-redux';
import { removeItem, clearItemFromCart, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CheckoutItem = ({ item, dispatch, cartItems }) => {
    const { name, quantity, imageUrl, price } = item;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => dispatch(removeItem(item))} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={() => dispatch(addItem(item))} className='arrow'>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div 
                onClick={() => dispatch(clearItemFromCart(item))}
                className="remove-button">&#10005;</div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CheckoutItem);
