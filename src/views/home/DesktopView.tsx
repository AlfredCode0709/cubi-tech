import CubitechServices from "@/components/home/cubitechServices/CubitechServices";
import CubiPerkIntro from "@/components/home/cubiPerkIntro/CubiPerkIntro";
import CubiRideIntro from "@/components/home/cubiRideIntro/CubiRideIntro";
import JoinSection from "@/components/common/joinSection/JoinSection";
import PeekView from "@/components/home/peekView/PeekView";
import Promotions from "@/components/common/promotions/Promotions";
import StartingBlock1 from "@/components/common/startingBlocks/StartingBlock1";
import { FC, Fragment } from "react";

const DesktopView: FC = () => {
  return (
    <Fragment>
      {/* Starting block of Home Page */}
      <StartingBlock1
        bgImage={"https://ik.imagekit.io/a1fr3d10/desktop/home/block1.png"}
        title={
          <Fragment>
            Cubitech: Beyond Fintech,
            <br />
            Infinite Possibilities for Your Life!
          </Fragment>
        }
      />

      {/* Cubitech Services */}
      <CubitechServices />

      {/* Promotions */}
      <Promotions
        header={"Weekly Promotions"}
        title={"Promotion Name"}
        descr={"Description"}
        bgColor={"var(--primary-main)"}
        color={"var(--white)"}
        image={"https://ik.imagekit.io/a1fr3d10/cubitech_light.svg"}
      />

      {/* CUBIFood Peek View */}
      <PeekView title={"CUBIFood"} totalItems={18} />

      {/* CUBIMart Peek View */}
      <PeekView title={"CUBIMart"} totalItems={18} />

      {/* CUBIRide Intro */}
      <CubiRideIntro />

      {/* CUBIPerk Intro */}
      <CubiPerkIntro />

      {/* Join Section */}
      <JoinSection
        title={"Join Cubitech Today"}
        descr={
          "Join us for exclusive promotions and the latest updates on events!"
        }
        buttonText={"Register Now"}
      />
    </Fragment>
  );
};

export default DesktopView;
