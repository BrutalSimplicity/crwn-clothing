import React from 'react'
import './custom-button.styles.scss';

export default function CustomButton({ children, isGoogleSignIn, inverted, onClick, ...otherProps }) {
  return (
    <button 
      onClick={onClick}
      className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
