import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../image/icons/undraw_online_test_re_kyfx.svg'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col + styles.colImage}>
        <h1 className={styles.title}>
          Your Best Online Shop destination!
        </h1>
        <p className={styles.dec}>
          Discover a world endless shopping possibilities at our  online store. Browse,choose, and order yout favorite products from the confort of your home
        </p>
          <button  className={styles.btn}>
          <Link href='/product'>
          Shope Now
          </Link>
          </button>
      </div>
      <div className={styles.col}>
        <Image
        className={styles.img}
        src={Hero}
        alt='Hero Image'
        />
      </div>
    </div>
  )
}
