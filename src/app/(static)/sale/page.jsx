
import React from 'react'
import style from './sale.module.css'
import Image from 'next/image'
import paypal from '../../../image/icons/Mask Group 1.png'
import Gpay from '../../../image/icons/Mask Group 3.png'
import upload from '../../../image/icons/Component 19 – 1.png'
import Navbar from '@/components/navbar/Navbar'
export default function Sale() {

   
  return (
    <>

    <div className={style.sale}>
  </div>

  <div className={style.overlay}>
  <Navbar id={3}/>
         <div className={style.container}>
            <div className={style.addImage}>
                <h2 className={style.explain}>Please include a clear picture of the book</h2>
                <div className={style.bookImage}>

                </div>
            </div>
            <hr className={style.column} />
            <form className={style.formAddBook} action="post">
                <div className={style.price}>
                    <h3 className={style.Title}>Please set the price of the book</h3>
                    <div style={{position:'relative'}}>
                    <input maxLength={4} className={style.priceInput}/>
                            <span className={style.sign}>$</span>
                    </div>
                   
                </div>
                <div className={style.payWay}>
                    <h3 className={style.Title} >Enter your PayPal or Google Pay account</h3>
                    <div className={style.formImage}>
                            <Image
                            src={Gpay}
                            width={50}
                            height={50}
                            />
                            <Image
                            src={paypal}
                            width={50}
                            height={50}
                            />
                    </div>
                </div>
                <div className={style.fileType}> <span className={style.Title}>choose :</span> <input className={style.fileInput} type="text" placeholder='Book Type' /> </div>
                <div className={style.Pdf}> Upload your book as pdf <span><Image 
                src={upload}
                width={30}
                height={30}
                /></span> </div>
                <p className={style.formPara}>NOTE : please let us know when the quantity of the product is finished in order to be removed</p>
                <button className={style.btn}>Publish</button>
            </form>
            <div>

            </div>
            
        </div>
    </div>
  </>
  )
}
