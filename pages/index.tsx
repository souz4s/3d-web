import Head from "next/head";
import Cursor from "./components/Cursor";
import NiclaVision from "../models/NiclaVision";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>seugap</title>
      </Head>
      <main>
        <Cursor />
        <NiclaVision />
      </main>
    </>
  );
};

export default Home
