import Head from "next/head";
import conectarDB from "../lib/dbConnect";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1>Movies</h1>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    await conectarDB();
  } catch (error) {
    console.log(error);
  }
}
