import { Button } from 'shared/ui'
import logoImg from './img/logo.png'
import './Header.scss'

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-line'>
          <div className='header-line__logo logo'>
            <img src={logoImg} alt='' />
          </div>
          <div className='header-line__btn-group btn-group'>
            <Button to='#users' className='btn-group__item'>
              Users
            </Button>
            <Button to='#sign-up' className='btn-group__item'>
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
