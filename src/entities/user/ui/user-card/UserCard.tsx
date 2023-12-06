import React from 'react'
import { User } from 'entities/user/model/types'
import { hrefPhoneFormat } from 'shared/lib'
import './UserCard.scss'

type Props = {
  user: User
}

export const UserCard = (props: Props) => {
  const { user } = props

  return (
    <div className='col-lg-4 col-md-6 col-12 items__item item-bg-wrapper item-bg-wrapper--padding user-card'>
      <div className='item-bg user-card__bg'></div>
      <div className='user-card__image'>
        <img src={user.photo} alt='' />
      </div>
      <div className='user-card__name'>{user.name}</div>
      <ul className='user-card__info'>
        <li>{user.position} </li>
        <li>
          <div className='tooltip'>
            <a href={`mailto:${user.email}`} className='tooltip__text text-link'>
              {user.email}
            </a>

            <div className='tooltip__hover'>{user.email}</div>
          </div>
        </li>
        <li>
          <a href={hrefPhoneFormat(user.phone)} className='text-link'>
            {user.phone}
          </a>
        </li>
      </ul>
    </div>
  )
}
