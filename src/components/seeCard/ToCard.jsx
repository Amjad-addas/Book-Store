import style from './tocard.module.css'
import card from '../../image/icons/Ellipse 2.png'
import Link from 'next/link'
import Image from 'next/image'
export default function ToCard() {
  return (
    <div className={style.cardPurchase}>
    <Link className={style.linkToCard} href='/card'>
    you will find your purchase in your card <Image
    src={card}
    width={50}
    height={50}
    alt=''
    />
    </Link>
  </div>
  )
}
