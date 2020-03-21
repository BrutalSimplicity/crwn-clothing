import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropdown = ({ cartItems, history, dispatch }) => {
    const dropdownRef = useRef(null);

    const handleLostFocus = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            dispatch(toggleCartHidden());
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleLostFocus)
        return () => {
            document.removeEventListener('mousedown', handleLostFocus);
        }
    });

    return (
        <div ref={dropdownRef} className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length > 0 ?
                        cartItems.map((item, id) => (
                            <CartItem key={id} item={item} />
                        ))
                        :
                        <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => { 
                dispatch(toggleCartHidden());
                history.push('/checkout');
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));