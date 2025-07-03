import CubiRideDefault from "@/views/cubiride/CubiRideDefault";
import Head from "next/head";
import { FC, Fragment } from "react";

const CubiRide: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>CubiRide | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ik.imagekit.io/a1fr3d10/cubiride.ico" />
      </Head>
      <main>
        <CubiRideDefault />
      </main>
    </Fragment>
  );
};

export default CubiRide;
