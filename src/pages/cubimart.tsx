import CubiMartDefault from "@/views/cubimart/CubiMartDefault";
import Head from "next/head";
import { FC, Fragment } from "react";

const CubiMart: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>CubiMart | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ik.imagekit.io/a1fr3d10/cubimart.ico" />
      </Head>
      <main>
        <CubiMartDefault />
      </main>
    </Fragment>
  );
};

export default CubiMart;
