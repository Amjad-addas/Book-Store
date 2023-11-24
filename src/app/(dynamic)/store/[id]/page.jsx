
import Title from '@/components/title/Title'
import React from 'react'
import style from './id.module.css'
import {data} from './data'
import Navbar from '@/components/navbar/Navbar'
import Products from '@/components/product/Products'
import ContactUs from '@/components/contactUs/ContactUs'
import Link from 'next/link'


export default function page() {


  return (
    <>
     <div className={style.container}>
     <Navbar/>
        <Title/>
        <div className={style.storePage}>
            {
              
              data.map(ele=>(
               <Link href={`/store/${ele.title}/${ele.id}`}>
                <Products ele={ele} h2={ele.price}  />
               </Link>
              ))

            }

        </div>
        <div className={style.contactStore}>
      <ContactUs/>
        </div>
      </div>
    </>
  )
}
