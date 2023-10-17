
import Image from 'next/image'
import style from './id.module.css'

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)

 
  if (!res.ok) {

 
    return []
  }
 
  return res.json()
}
 
export default async function  Post({params}) {

  const product = await getData(params.id)
  
  
  return (
    <div className={style.container}>

<header className={style.header}>
  <div className={style.info}>
    <h1 className={style.title}>{product.title?product.title:'Error this page is note found'}</h1>
    <p className={style.desc}>
    {product.description}
    </p>
  </div>
  <div className={style.imageContainer}>
    <Image
    className={style.image}
    src={product.thumbnail}
    alt='product image'
    fill={true}
    />
    <span className={style.author}>{product.category}</span>
  </div>
</header>
<div className={style.content}>
  <div className={style.img}>
    {
      product.images?.map((img)=>(
        <Image
        src={img}
        width={200}
        height={200}
        />
      ))
    }
  </div>
<p className={style.text}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum obcaecati
   minima aut cupiditate possimus! Ea, animi, eius fugiat voluptatem consequuntur amet,
    voluptate placeat maiores corrupti aut laudantium odit ab veritatis voluptas. Iure explicabo 
    ea sunt enim dolore dolorum eveniet saepe numquam vero. Quibusdam sit exercitationem perspiciatis 
    expedita labore architecto.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, consequuntur incidunt aliquam magnam nostrum deleniti id dolorem alias! Magnam cupiditate laborum, ex assumenda corrupti vero praesentium veritatis in atque nobis.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore inventore nulla eos, eius expedita minima suscipit magnam, alias similique error adipisci, perspiciatis sapiente praesentium molestiae? Natus obcaecati nostrum corporis placeat!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit harum asperiores neque ab quidem, fuga distinctio rem iusto ea rerum tempore sequi a dolorem similique quam provident iure nobis hic.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem laboriosam assumenda enim, soluta ratione obcaecati totam nisi quos illo quas? Non expedita necessitatibus ducimus quos fuga, corporis numquam eum nisi.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum distinctio quod nisi dolores excepturi quaerat dolorum dolore eius. Quis eius aspernatur eveniet totam nobis amet beatae possimus sunt? Officiis, consequatur!

</p>
</div>

    </div>
  )
}
