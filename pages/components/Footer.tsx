import Image from "next/image";
import { Logo, Text } from "../../styles/footer";

const Footer: React.FC = () => {
    return (
        <>
            <Logo>
                <Image className="logo" src="/images/logo-marca.svg" alt="logo marca" width={50} height={50} />
            </Logo>
            <Text>
                <p>EM BREVE</p>
            </Text>
        </>
    );
};

export default Footer;
