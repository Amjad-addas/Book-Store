'use client'
import style from './dens.module.css'
import dens from '../../image/icons/density_medium_FILL0_wght400_GRAD0_opsz24.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
export default function Dens() {
    const [open ,Setopen]=useState(false)

  return (
    <Image onClick={()=>{
        Setopen(!open)
        if(open==true){
            const dens= document.getElementById('link')?document.getElementById('link'):''
            dens.classList.remove('inactive')
            dens.classList.add('active')
        }else{
           const dens= document.getElementById('link')?document.getElementById('link'):''
           dens.classList.remove('active')
           dens.classList.add('inactive')
        }
        const link= document.getElementById('link')?document.getElementById('link'):''
        link.style.display='flex'
        link.classList.add('dens')
        const navlink= document.getElementById('link')?document.querySelectorAll('a'):''
        for(let i=0;i<4;i++){
            navlink[i].classList.add('navlink')
        }
 
       
    }} className={style.dens}
    src={dens}
    width={30}
    height={30}
    alt=''
    />
  )
}
