import Head from "next/head";
import styles from "../styles/Home.module.css";
function secret() {
  return (
    <div className={styles.secretPage}>
      <Head>
        <title>Authenticate With NextAuth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello mr.</h1>
      <p>You are authorized to see this page</p>

      <button>Sign Out</button>
    </div>
  );
}

export default secret;