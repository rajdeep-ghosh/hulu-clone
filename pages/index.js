import Head from "next/head";
import Header from "../components/Header";
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
      </Head>

      <Header />
      <Nav />
    </div>
  );
}
