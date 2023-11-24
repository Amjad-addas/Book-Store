'use client'
import Link from 'next/link'
import style from './contact.module.css'
export default function ContactUs() {


  return (
    <Link href='contact' className={style.contact}>Contact Us</Link>
  )
}
