import BrandHighlights from "@/components/common/brandHighlights/BrandHighlights";
import JoinSection from "@/components/common/joinSection/JoinSection";
import MissionStatement from "@/components/common/MissionStatement";
import PassengerTypes from "@/components/cubiride/passengerTypes/PassengerTypes";
import SafetyPledge from "@/components/common/safetyPledge/SafetyPledge";
import StartingBlock1 from "@/components/common/startingBlocks/StartingBlock1";
import { safetyPledge } from "@/components/cubiride/safetyPledge";
import { highlights } from "@/components/cubiride/highlights";
import { FC, Fragment } from "react";

const MobileView: FC = () => {
  return (
    <Fragment>
      {/* Starting block of CubiRide Page */}
      <StartingBlock1
        bgImage={"https://ik.imagekit.io/a1fr3d10/mobile/cubiride/block1.png"}
        overlay={"#00000099"}
        titleFontSize={36}
        textDivider={50}
        subtitleFontSize={28}
        title={
          <span style={{ lineHeight: 1.3 }}>
            Ride with
            <br />
            CubiRide
          </span>
        }
        subtitle={<Fragment>safe and smooth</Fragment>}
      />

      {/* Mission Statement */}
      <MissionStatement>
        <span
          style={{ fontSize: 18, display: "inline-block", marginBottom: "5%" }}
        >
          With CubiRide
        </span>
        <br />
        We use analytics to make your
        <br />
        journeys safer, smoother,
        <br />
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

export default MobileView;
