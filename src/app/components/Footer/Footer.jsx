import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'
import FaceBook from '../../../image/icons/facebook.png'
import YouTube from '../../../image/icons/youtube.png'
import LinkedIn from '../../../image/icons/linkedin.png'
export default function Footer() {
  return (
    <div className={styles.container}>
    <div>Copyright © 2010-2024 HexaShope All rights reserved</div>
    <div className={styles.socialMedia}>
      <Image
      className={styles.icon}
      src={FaceBook}
      width={30}
      height={30}
      alt='facebook link'
      />
      <Image
      className={styles.icon}
      src={YouTube}
      width={30}
      height={3+0}
      alt='you tube link'
      />

    </div>
    </div>
  )
}
