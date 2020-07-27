import React from 'react'
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import Button from '../Button'
// import ButtonLink from './components/ButtonLink'

const Menu = () => {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={Logo} alt="BrunoFlix" />
      </a>

      <Button as='a' className='ButtonLink' href="/">
        Novo Video
      </Button>
    </nav>
  )
}

export default Menu