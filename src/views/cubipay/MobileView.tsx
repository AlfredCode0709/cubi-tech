import BrandHighlights from "@/components/common/brandHighlights/BrandHighlights";
import CubiPayUsage from "@/components/cubipay/cubiPayUsage/CubiPayUsage";
import JoinSection from "@/components/common/joinSection/JoinSection";
import MissionStatement from "@/components/common/MissionStatement";
import SafetyPledge from "@/components/common/safetyPledge/SafetyPledge";
import StartingBlock1 from "@/components/common/startingBlocks/StartingBlock1";
import { safetyPledge } from "@/components/cubipay/safetyPledge";
import { highlights } from "@/components/cubipay/highlights";
import { FC, Fragment } from "react";

const MobileView: FC = () => {
  return (
    <Fragment>
      {/* Starting block of CubiPay Page */}
      <StartingBlock1
        bgImage={"https://ik.imagekit.io/a1fr3d10/mobile/cubiride/block1.png"}
        overlay={"#00000099"}
        titleFontSize={36}
        textDivider={50}
        subtitleFontSize={32}
        title={<Fragment>Spend Smart,</Fragment>}
        subtitle={<Fragment>Reap Rewards!</Fragment>}
      />

      {/* Mission Statement */}
      <MissionStatement>
        Enjoy secure, rewarding payments
        <br />
        for bills, rides, and shopping
        <br />
        with CubiPay Wallet —
        <br />
        your cashless journey starts here!
      </MissionStatement>

      {/* Brand Highlights */}
      <BrandHighlights title={"Why pay with CubiPay?"} items={highlights} />

      {/* CubiPay Usage */}
      <CubiPayUsage />

      {/* Safety Pledge */}
      <SafetyPledge title={"CubiRide Safety Pledge"} items={safetyPledge} />

      {/* Join Section */}
      <JoinSection
        title={"Pay with CubiPay"}
        descr={
          "Swipe to pay effortlessly and earn CubiPerk points for exclusive discounts on Cubitech and partner rewards."
        }
        buttonText={"Start Using CubiPay"}
      />
    </Fragment>
  );
};

export default MobileView;
