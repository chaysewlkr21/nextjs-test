import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Question 2
        </h1>
        <p>I want to learn new software technologies and processes that are proven to be effective. 
            I would like to do more work with product and back-end engineering teams to help improve 
            the business processes and teach our clients about best practices so they can get the most out of the product.</p>
      </main>
    </div>
  );
}