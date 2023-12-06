import { CreateUserForm } from 'features/user/create-user'
import { useState } from 'react'
import { ReactComponent as SuccessImage } from './img/success-image.svg'
import './SignUp.scss'

export const SignUp = () => {
  const [userRegistered, setUserRegistered] = useState(false)
  const onComplete = () => {
    setUserRegistered(true)
  }

  return (
    <section className='section s-sign-up' id='sign-up'>
      <div className='container s-sign-up__container'>
        <h2 className='h2 section-title s-sign-up__title'>
          {userRegistered ? 'User successfully registered' : 'Working with POST request'}
        </h2>
        {userRegistered ? (
          <div className='s-sign-up__success-image'>
            <SuccessImage />
          </div>
        ) : (
          <CreateUserForm onComplete={onComplete} className='s-sign-up__form'></CreateUserForm>
        )}
      </div>
    </section>
  )
}
