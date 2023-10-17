"use client"
import { useContext } from 'react'
import styles from './NavToggel.module.css'
import { ThemeContext } from '@/context/ThemeContext'

export default function NavToggel() {

  const {mode ,toggel}= useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={
    toggel
    }>
        <div className={styles.lightIcon}> ★</div>
        <div className={styles.darkIcon}> ☀</div>
        <div className={styles.switcher}
        style={
          mode==='dark'?{left:"2px"}:{right:'2px'}
          
        }
        />

    </div>
  )
}
