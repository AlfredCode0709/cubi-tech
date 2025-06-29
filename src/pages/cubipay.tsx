import CubiPayDefault from "@/views/cubipay/CubiPayDefault";
import Head from "next/head";
import { FC, Fragment } from "react";

const CubiPay: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>CubiPay | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ik.imagekit.io/a1fr3d10/CubiPay.ico" />
      </Head>
      <main>
        <CubiPayDefault />
      </main>
    </Fragment>
  );
};

export default CubiPay;
