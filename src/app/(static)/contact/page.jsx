
import React from 'react'
import style from './contact.module.css'
import {developer} from './context'
import mail from '../../../image/icons/Group 14.png'
import phone from '../../../image/icons/Group 13.png'
import Link from 'next/link'
import Image from 'next/image'
function ContactUs() {
     
  return (
    <div className={style.container} >
        <h1 className={style.titleContact}> Contact Us</h1>
        <div className={style.contactDeve}>
        {
            developer.map(deve =>
                <div >
                    
                    <h2 className={style.deveName}>{deve.name}</h2>
                    <Link style={{display:'block'}} className={style.deveMail} href={deve.email}> <Image 
                    className={style.icon}
                    src={phone}
                    width={30}
                    height={30}
                    /> {deve.email}</Link>
                    <h3 className={style.deveMail}>
                     <Image 
                     className={style.icon}
                    src={mail}
                    width={30}
                    height={30}
                    />
                    {deve.phone}</h3>
                    
                </div>

            )
        }
        </div>
    </div>
  )
}

export default ContactUs