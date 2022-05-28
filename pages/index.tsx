import Head from "next/head";
import Cursor from "./components/Cursor";
import NiclaVision from "../models/NiclaVision";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>seugap</title>
      </Head>
      <main>
        <Cursor />
        <Footer />
        <NiclaVision />
      </main>
    </>
  );
};

export default Home
