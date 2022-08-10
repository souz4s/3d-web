import Head from "next/head";
import Cursor from "../components/Cursor";
import NiclaVision from "../models/NiclaVision";
import Footer from "../components/Footer";
import RiveText from "../components/RiveText";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>3d-web</title>
      </Head>
      <Cursor />
      <RiveText />
      <NiclaVision />
      <Footer />
    </>
  );
};

export default Home;
