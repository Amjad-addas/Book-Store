import Image from 'next/image'
import styles from './page.module.css'

import Link from 'next/link'
import Navbar from '@/components/navbar/Navbar'
export default function Home() {
  return (
    <>
    
    <div id='inner' className={ `${styles.container}`}>
    <Navbar id={1}/>
        <h1 className={styles.title}>booke & novels</h1>     
        <h2 className={styles.subTitle}> online <br /> shopping</h2>
        <p className={styles.graph}>Friday discount 30% for all books hurry up to shop</p>
        
    </div>

    </>
  )
}
