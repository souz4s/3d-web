import Rive from "@rive-app/react-canvas";
import { Animation } from "../../styles/riveText";

const RiveText: React.FC = () => {
    return (
        <>
            <Animation>
                <Rive src="/assets/text.riv" />
            </Animation>
        </>
    );
};

export default RiveText;
