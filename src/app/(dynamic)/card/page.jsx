'use client'
import Title from '@/components/title/Title'
import  style from './card.module.css'
import paypal from '../../../image/icons/Mask Group 1.png'
import Gpay from '../../../image/icons/Mask Group 3.png'
import Image from 'next/image'
import Products from '@/components/product/Products'
import { useDispatch, useSelector } from 'react-redux'
import Providers from '@/app/redux/reducer/providers'
import { removeFromCard } from '@/app/redux/reducer/cardReducer'
export default function page() {


  const card=useSelector((state)=>state.card.card)
  const price=useSelector((state)=>state.card.price)
  const dispatch=useDispatch()
  return (

        <div className={style.container}>
       <Title/>
       <div className={style.flexContainer}>
     <div className={style.def}>
    
     <h3 className={style.totalPrice}>Your Total Price</h3>
     <h5 className={style.price}>{price} <span className={style.priceSymbl}>$</span></h5>
     <h3 className={style.payWay}>how you would like to bay</h3>
       <div className={style.formImage}>
        <Image
        src={Gpay}
        width={50}
        height={50}
        alt=''
        />
        <Image
        src={paypal}
        width={50}
        height={50}
        alt=''
        />
      </div>
      <p className={style.cardParagraph}>
      When you register your account, the price of the books will be deducted and the books will start downloading to your device directly
      </p>
     </div>
     <hr className={style.culomn}/>
     <div className={style.cardContent}>
        {
          card.map(prod=>(
            <div key={prod.id} className={style.card} >
            
            <Products ele={prod} h2={prod.price}/>
            <div

            className={style.remove}
            onClick={()=>dispatch(removeFromCard(
              {
                id:prod.id,
                price:prod.price
              }
            ))}
            >Remove Product</div>
            </div>
          ))
        }
        </div>

     </div>
    </div>
  )
}
