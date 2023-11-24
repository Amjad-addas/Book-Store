'use client'
import style from './title.module.css'
import { useParams } from "next/navigation"

export default function Title() {
    const id = useParams()
    return (
    <div className={style.titleContainer}>
      <h1 className={style.titlePost}>{id=='none'?id.id:'Card'} </h1>
    </div>
  )
}
