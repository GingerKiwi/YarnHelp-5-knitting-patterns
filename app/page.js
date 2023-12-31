import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Knitting Patterns</h1>
       <p>These 15 patterns are designed for both beginning knitters, and for experienced knitters. Beginners can follow along in sequence as each pattern builds on many of the skills learned in the previous ones. Experienced knitters can use the patterns as basic recepies as a starting point to desin their own projects.</p>
    </main>
  )
}
