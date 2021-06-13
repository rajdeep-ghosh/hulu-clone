import Head from "next/head";
import Header from "../components/Header";

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
    </div>
  );
}
