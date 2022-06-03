import Image from "next/image";
import * as FoterStyle from "../styles/footer";

const Footer: React.FC = () => {
  return (
    <>
      <FoterStyle.Logo>
        <Image
          className="logo"
          src="/images/logo-marca.svg"
          alt="logo marca"
          width={50}
          height={50}
        />
      </FoterStyle.Logo>
      <FoterStyle.Text>
        <p>EM BREVE</p>
      </FoterStyle.Text>
    </>
  );
};

export default Footer;
