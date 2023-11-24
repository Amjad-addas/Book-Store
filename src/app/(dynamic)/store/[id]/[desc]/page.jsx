'use client'
import { useParams } from 'next/navigation'
import style from './desc.module.css'
import React from 'react'
import { data } from '../data'
import Products from '@/components/product/Products'

import Image from 'next/image'
import Purchase from '@/components/confirmPurchase/Purchase'
import Link from 'next/link'
import ToCard from '@/components/seeCard/ToCard'
import Providers from '@/app/redux/reducer/providers'
export default function page() {

 const id = useParams()
 function isBigEnough(value) {

  return value.id == id.desc;
}
const prod = data.filter(isBigEnough)
  return (
    <Providers>
          <div className={style.descrption}>
    <div className={style.container}>
        <div className={style.description}>
              <div>descrption : 
                <p>{prod[0].desc}</p></div>
        </div>
        <div className={style.product}>
            <Products ele={prod[0]} h2={prod[0].price}/>
        </div>

    </div>
      <Purchase/>
      <ToCard/>
    </div>
    </Providers>
  )
}
