'use client'
import style from './purchase.module.css'
import confirm from '../../../src/image/icons/check.png'
import x from '../../image/icons/delete.png'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import {data} from '../../app/data'

import { useDispatch } from 'react-redux'
import { addToCard } from '@/app/redux/reducer/cardReducer'
import Providers from '@/app/redux/reducer/providers'
export default function Purchase() {

  const id =useParams()
  const product = data.find((p)=>p.id==id.desc)
  const dispath=useDispatch()
  return (
      <Providers>
            <div className={style.purchase}>
    <h2 className={style.titlePruchles}>Confirm The Purchase</h2>
    <div className={style.choose}>
      <div
        className={style.icon}
        onClick={()=>{
          dispath(addToCard(product))}}
      >
          Add To Card
      </div>
    </div>
  </div>
      </Providers>
  )
}
