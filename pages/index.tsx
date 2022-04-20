import Head from "next/head";
import Background from "./components/Background";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>seugap</title>
      </Head>
      <main>
        <Background />
      </main>
    </>
  );
};

export default Home
