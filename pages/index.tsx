import Head from "next/head";
import NiclaVision from "../models/NiclaVision";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>seugap</title>
      </Head>
      <main>
        <NiclaVision />
      </main>
    </>
  );
};

export default Home
