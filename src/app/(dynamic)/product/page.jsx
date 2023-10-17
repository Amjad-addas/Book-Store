import Image from 'next/image'
import style from './blog.module.css'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://dummyjson.com/products')

 
  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 



export default async function Blog() {
  const data = await getData()
  const products = data.products
  return (
    <div className={style.container}>
    {
    products.map((prod)=>(
      <Link key={prod.id} href={`/blog/${prod.id}`} className={style.row}>
        <Image
        className={style.blogImage}
        src={prod.thumbnail}
        alt='image '
        width={250}
        height={250}
        />
        <div className={style.content}>
          <h1 className={style.title}>{prod.title}</h1>
          <p className={style.postDesc}>{prod.description}</p>
        </div>
      </Link>
    ))
    }
    </div>
  )
}
