import React from 'react'
import image from './logo.png'

export default {
  name: 'Flip',
  short_name: 'flip',
  description: `
    Pick Heads or Tails. Double your money or go broke. Simple as.
  `,
  creator: '399KgE5gpzFvBB8arZLxA2bes3n4FY7rTMmzifHohPzx',
  image,
  theme_color: 'rgb(255 218 121)',
  app: React.lazy(() => import('./App')),
}
