import Head from "next/head";
import Cursor from "../components/Cursor";
import NiclaVision from "../models/NiclaVision";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>3d-web</title>
      </Head>
      <Cursor />
      <NiclaVision />
    </>
  );
};

export default Home;
