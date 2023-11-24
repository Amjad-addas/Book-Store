
import React from 'react'
import style from './product.module.css'
import Image from 'next/image'

export default function Products(ele) {
    const element=ele.ele

    return (
    <div  className={style.element} >
    <Image
    src={element.image}
    width={250}
    height={ele.hie}
    alt=';'
    />
  <h2 className={style.titleStore}>
  {ele.h2}
  </h2>
    </div>
  )
}
