import React from 'react'
import ContentLoader from 'react-content-loader'
import { COLORS } from 'shared/const'

export const UserCardLoader = () => {
  return (
    <div className='col-lg-4 col-md-6 col-12 items__item item-bg-wrapper item-bg-wrapper--padding get-request__item'>
      <div className='item-bg get-request__bg'></div>
      <ContentLoader
        speed={2}
        width='100%'
        height='296'
        viewBox='0 0 100 296'
        backgroundColor={COLORS.loaderBackground}
        foregroundColor={COLORS.loaderForeground}
        preserveAspectRatio='none'
        style={{
          borderRadius: '16px',
          boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.05), 0px 4px 6px -2px rgba(16, 24, 40, 0.025)',
        }}
      >
        <rect x='0' y='0' rx='0' ry='0' width='100%' height='300' />
      </ContentLoader>
    </div>
  )
}
