import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Hulu Clone built using Next.js and Tailwind CSS"
        />
        <title>Hulu Clone</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>

      <Header />
      <Nav />
      <Main />
    </div>
  );
}
