import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className="navbar-containter">
            <p className="logo">
                <Link href='/'>FranxxStore</Link>
            </p>

            <button className="cart-icon">
                <AiOutlineShoppingCart />

            </button>
        </div>
    )
}

export default Navbar