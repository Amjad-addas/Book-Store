import Image from 'next/image'
import React from 'react'
import Gpay from '../../../image/icons/Mask Group 3.png'
import style from './about.module.css'
import paypal from '../../../image/icons/Mask Group 1.png'
import ContactUs from '@/components/contactUs/ContactUs'
import Navbar from '@/components/navbar/Navbar'
export default function page() {
  return (
    <>
    
    <div className={style.container}>
    <Navbar id={4}/>
    <div className={style.assest}>
    <h2 className={style.subTitle}> The store was build completely by:</h2>
      <ul className={style.developer}>
        <li>Programming : Amjad Addas </li>
        <li>UX / UI design : Ashraf Al Ahmad</li>
      </ul>
      <ContactUs/>
      <div className={style.content}>
        <p className={style.para}>The store allows you to buy <br /> and sell your eBooks in pdf format directly <br /> via PayPal or google pay account.</p>
        <div className={style.payment}>
          <Image alt=''
          src={Gpay}
          width={50}
          height={50}
          />
          <Image
           alt=''
          src={paypal}
          width={50}
          height={50}
          />
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

