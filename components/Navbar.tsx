import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href='/'>FranxxStore</Link>
            </p>

            <button type='button' className="cart-icon">
                <AiOutlineShoppingCart />
                <span className="cart-item-qty">1</span>

            </button>
        </div>
    )
}

export default Navbar