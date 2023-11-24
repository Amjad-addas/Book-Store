'use client'

import style from './navbar.module.css'
import Ellipse from '../../image/icons/Ellipse 2.png'
import Group from '../../image/icons/Group 68.png'
import Link from 'next/link'
import {links} from './context'
import Image from 'next/image'
import Dens from '../dens/Dens'

export default function Navbar(props) {
  return (

    <div   className={style.container}>
      <Dens/>
     <div id='link' className={style.links}>
       
        {
           links.map(link=>
              props.id===link.id?<Link  style={{color:'#FF61EE'}} key={link.id} href={link.path}>{link.inner}</Link>
           :  <Link key={link.id} href={link.path}>{link.inner}</Link> )
        }
       
      </div>
      <div className={style.subLink}>
      <Image 
      alt=''
        src={Group}
        width={30}
        height={30}
        style={{cursor:'pointer'}}
        />
        <Link href='/card'>
        <Image 
        href='/card'
        alt=''
        src={Ellipse}
        width={30}
        height={30}
        style={{cursor:'pointer'}}
        />
        </Link>
      </div>
    </div>

  )
}
