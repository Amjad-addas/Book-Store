import React from 'react'
import style from './store.module.css'
import Navbar from '@/components/navbar/Navbar'
import {data,left ,right} from './data'
import Image from 'next/image'
import Link from 'next/link'
import ContactUs from '@/components/contactUs/ContactUs'
import Products from '@/components/product/Products'
export default function Store() {
  return (
    <>

    <div className={style.store}>
    



    </div>
    <div className={style.overlay}>
    <Navbar id={2}/>
    <div className={style.container}>

    {

        data.map(ele=>(
         <Link key={ele.id} href={`store/${ele.title}`}>
          <Products ele={ele} h2={ele.title} hie={270}/>
         </Link>
        ))
    }
    </div>
    <Link  className={style.left} href={`store/${left[0].title}`}>

        <Image
        src={left[0].image}
        width={250}
        height={300}
        />
        <h2 className={style.titleStore}>
        {left[0].title}
      </h2>
    </Link>
    <Link  className={style.right} href={`store/${right[0].title}`}>
                <Image
                src={right[0].image}
                width={250}
                height={300}
                />
                              <h2 className={style.titleStore}>
                {right[0].title}
              </h2>
    </Link>
    </div>
    <div className={style.contactStore}>
      <ContactUs/>
    </div>
  </>
  )
}

