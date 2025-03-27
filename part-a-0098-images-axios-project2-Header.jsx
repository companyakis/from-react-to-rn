import React from 'react'

function Header() {
  return (
    <div className='header-area'>

        <form className='header-form'>
            <label className='header-label'>Search item:</label>
            <input className='header-input' type="text" />
        </form>
     
    </div>
  )
}

export default Header
