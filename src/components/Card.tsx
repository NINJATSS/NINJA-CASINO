import { GameBundle } from 'gamba/react-ui'
import React from 'react'
import { NavButton } from './Button'
import styles from './Card.module.css'

interface Props {
  game: GameBundle
}

export function Card({ game }: Props) {
  return (
    <>
      <NavButton
        className={styles.card}
        to={'/' + game.short_name}
        style={{ backgroundColor: game.theme_color, backgroundImage: `url(${game.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className={styles.background} />
      </NavButton>
    </>
  )
}
