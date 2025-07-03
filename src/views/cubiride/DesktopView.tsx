import BrandHighlights from "@/components/common/brandHighlights/BrandHighlights";
import JoinSection from "@/components/common/joinSection/JoinSection";
import MissionStatement from "@/components/common/MissionStatement";
import PassengerTypes from "@/components/cubiride/passengerTypes/PassengerTypes";
import SafetyPledge from "@/components/common/safetyPledge/SafetyPledge";
import StartingBlock1 from "@/components/common/startingBlocks/StartingBlock1";
import { safetyPledge } from "@/components/cubiride/safetyPledge";
import { highlights } from "@/components/cubiride/highlights";
import { FC, Fragment } from "react";

const DesktopView: FC = () => {
  return (
    <Fragment>
      {/* Starting block of CubiRide Page */}
      <StartingBlock1
        bgImage={"https://ik.imagekit.io/a1fr3d10/desktop/cubiride/block1.png"}
        bgPosition={"center bottom"}
        title={<Fragment>Ride with CubiRide — safe and smooth.</Fragment>}
      />

      {/* Mission Statement */}
      <MissionStatement>
        With CubiRide, we use analytics to make your journeys safer, smoother,
        and more personalised.
      </MissionStatement>

      {/* Brand Highlights */}
      <BrandHighlights title={"Why choose CubiRide?"} items={highlights} />

      {/* Passenger Types */}
      <PassengerTypes />

      {/* Safety Pledge */}
      <SafetyPledge title={"CubiRide Safety Pledge"} items={safetyPledge} />

      {/* Join Section */}
      <JoinSection
        title={"Travel with CubiRide"}
        descr={
          "Dependable and secure transportation to take you wherever you need to be."
        }
        buttonText={"Book Now"}
      />
    </Fragment>
  );
};

export default DesktopView;
