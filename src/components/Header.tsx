import React from 'react';
import { NavButton } from './Button';
import styles from './Header.module.css';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

export const Header: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <NavButton variant="ghost" className={styles.logo} to="/">
            <img src="/logo.png" height="20px" alt="Logo" />
            <span className={styles.title}>NINJA TURTLE CASINO</span>
          </NavButton>
          <div className={styles.iconContainer}>
            <a href="https://t.co/ELETrTpKee" target="_blank" rel="noreferrer" className={styles.icon}>
              <FaDiscord />
            </a>
            <a href="https://twitter.com/NINJA_TSS" target="_blank" rel="noreferrer" className={styles.icon}>
              <FaTwitter />
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
