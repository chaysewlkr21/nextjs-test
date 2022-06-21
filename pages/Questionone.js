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
          Question 1
        </h1>
        <p className={styles.description}>
        <br>5 Highest</br>
        <br> 1.	Write and maintain support articles and docs pages </br>
        <br>2.	Analyze hundreds of support tickets to spot trends the product team can use </br>
        <br>3.	Help train and onboard new support teammates </br>
        <br>4.	Work with engineering teams during incidents and provide updates to internal and external stakeholders</br>
      5.	Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel 
      The reason for choosing the above prioritization levels is to maintain the integrity of the support engineers role. 
      The above list is focused on practices and processes that give the support team scalability.
      By documenting and maintaining a knowledge base, new hires plus existing staff can learn how to quickly adapt to issues that may be unknown. 
      This helps removes bottlenecks from the support process and creates a healthy relationship with the customer. Working with other engineering teams is essential as well. Good communication in a support role is the most overlooked skill. When not done correctly it can create a huge problem for engineers and customer expectations. 
      5 Lowest 
      1.	Help resolve billing issues for customers 
      2.	Manage a support team 
      3.	Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites 
      4.	Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems 
      5.	Work with people to figure out if Vercel is suitable for their use case 
      The above list seemed to be most remote to the support engineers role. 
      Billing issues, QA sessions and internal management are tasks that are easily done by other groups/members of an organization. 
      Though they are important they are not essential to the growth of a Support team. 
        </p>
    </main>
    </div>
  );
}