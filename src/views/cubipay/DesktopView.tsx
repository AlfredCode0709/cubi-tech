import BrandHighlights from "@/components/common/brandHighlights/BrandHighlights";
import CubiPayUsage from "@/components/cubipay/cubiPayUsage/CubiPayUsage";
import JoinSection from "@/components/common/joinSection/JoinSection";
import MissionStatement from "@/components/common/MissionStatement";
import SafetyPledge from "@/components/common/safetyPledge/SafetyPledge";
import StartingBlock1 from "@/components/common/startingBlocks/StartingBlock1";
import { safetyPledge } from "@/components/cubipay/safetyPledge";
import { highlights } from "@/components/cubipay/highlights";
import { FC, Fragment } from "react";

const DesktopView: FC = () => {
  return (
    <Fragment>
      {/* Starting block of CubiPay Page */}
      <StartingBlock1
        bgImage={"https://ik.imagekit.io/a1fr3d10/desktop/cubipay/block1.png"}
        bgPosition={"center bottom"}
        title={<Fragment>Spend Smart, Reap Rewards!</Fragment>}
      />

      {/* Mission Statement */}
      <MissionStatement>
        Enjoy secure, rewarding payments for bills, rides, and shopping with
        CubiPay Wallet — your cashless journey starts here!
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
          <Fragment>Swipe to pay effortlessly and earn CubiPerk points for exclusive discounts<br />on Cubitech and partner rewards.</Fragment>
        }
        buttonText={"Start Using CubiPay"}
      />
    </Fragment>
  );
};

export default DesktopView;
