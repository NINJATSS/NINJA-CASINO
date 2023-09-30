import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          NINJA TURTLE
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          A on-chain, provably -fair casino 🎰 So come play have some fun & if you hold 4+ NINJA NFTs theirs the added bonus of revenue rewards. So don't delay come & play it's the Ninja way 🥷🐢
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          
        </div>
      </Section>
    </div>
  )
}
