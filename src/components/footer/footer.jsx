import style from './footer.module.css'
export default function Footer() {
  return (
    <div className={style.footer}>
        <h1 className={style.copy}>Copyright © 2023 </h1>
        <div>
        <h1 className={style.mj}>Amjad Addas</h1>
        <h1 className={style.mj}>Ashraf Al Ahmad</h1>
        </div>
    </div>
  )
}
