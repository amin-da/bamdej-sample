import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>بام دژ طرح- مهندسین مشاور بام دژ طرح</title>
        <link rel="icon" href="/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" lang="fa" />
        <meta name="description" content="تربیت دانمند علوم داده" />
        <meta property="og:title" content="دانشمند علوم داده" key="ogtitle" />
        <meta
          property="og:description"
          content=" تربیت دانشمند علوم داده"
          key="ogdesc"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h2>مهندسین مشاور بام دژ طرح</h2>
        </div>
        <div className={styles.skeleton}></div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
