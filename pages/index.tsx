import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })

// для заголовку h1 використано два класи, перший {`${styles.title} і другий беру готовий з
// https://developers.google.com/fonts/docs/getting_started з єфектом палання

// Для Image обовязково потрібно використовувати width={?} height={?}, або layout='fill',
// для останнього, батьківському елементу потрібно  position: relative; та objectPosition='center' і objectFit='cover' на свій розсуд 
// Так як у React і похідних не можна на одній сторінці використовувати декілька тегів поза межами загального, я обертаю всі теги у фрагмент <> </> 
export default function Home() {
return (
  <>
<Head>
  <title>Maryan Vyntu | 4petals </title>
  <meta name='title' content='Maryan Vyntu'/>
  <link rel="shortcut icon" href="/logoM8.png" type="image/png" />
</Head>

  <div className={styles.container}>    
  <h1 className={`${styles.title} font-effect-fire-animation`}>Maryan Vyntu</h1>
  <div className={styles.mainImage}>
    <Image src='/prayer.png' alt='prayer' width={400} height={400}/>
  </div>
  <p className={styles.text}>
  In 2003, I graduated from Lviv National Academy of Arts with a Master's
   degree and was actively involved in art until 2019. During that time,
    I created both commercial and artistic pieces, utilizing stained glass and wrought iron techniques.
     In the commercial sector,
      I earned a lot of income by creating stained glass pieces in classic and Tiffany styles,
       such as stained glass lamps, ceilings, souvenirs, tables, and chandeliers.
        I also worked with wrought iron to create metal banisters, staircases, balconies, exclusive beds,
         wrought iron lamps with stained glass, and various interior and exterior design elements.
          Since I have a well-developed sense of three-dimensional thinking,
   I created sculptures of various sizes, from small souvenirs to large art pieces.
      </p>
  <p className={styles.text}>
  In addition to sculpture, I also created three-dimensional art objects from various materials,
   but I always used glass and lighting to add magic to my works. Besides glass and light,
    I also incorporated metals such as wrought iron, bronze, aluminum,
     and copper, as well as wood and leather into my art pieces, which resembled illuminated sculptures.
   I participated in various exhibitions, including international ones.
      </p>

      <p className={styles.text}>With the onset of the coronavirus pandemic and isolation, I started learning front-end development.</p>
  <Link href='/burgers' className={styles.btn}>More works</Link>
  </div>
  </>
)
}
