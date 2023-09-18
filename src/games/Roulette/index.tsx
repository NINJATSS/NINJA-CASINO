import React from 'react'
import image from './logo.png'

export default {
  name: 'Roulette',
  short_name: 'roulette',
  description: `
    A miniature version of Roulette. WYSIWYG!
  `,
  creator: '399KgE5gpzFvBB8arZLxA2bes3n4FY7rTMmzifHohPzx',
  image,
  theme_color: 'rgb(29 232 126)',
  app: React.lazy(() => import('./App')),
}
