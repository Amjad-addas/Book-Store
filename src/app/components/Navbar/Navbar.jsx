
import Link from 'next/link'
import {links} from './data'
import style from './Navbar.module.css'
import Logout from '../elements/LogoutButton/Logout'
import NavToggel from '../elements/Toggel/NavToggel'
export default function Navbar() {
  return (
    <div className={style.container}>
      
      <Link className={style.logo} href='/' >HEXASHOP</Link>
      <div className={style.links}>
      <NavToggel/>
        {
          links.map(link=>
            <Link key={link.id} href={link.url}>{link.title}</Link>
            )
        }
      </div>
      <Logout/>
    </div>
  )
}
