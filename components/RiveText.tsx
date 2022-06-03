import Rive from "@rive-app/react-canvas";
import * as RiveTextStyle from "../styles/riveText";

const RiveText: React.FC = () => {
  return (
    <>
      <RiveTextStyle.Animation>
        <Rive src="/assets/text.riv" />
      </RiveTextStyle.Animation>
    </>
  );
};

export default RiveText;
