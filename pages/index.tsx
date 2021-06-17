import Head from 'next/head'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>My first DApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Hello world</main>
    </>
  )
}
