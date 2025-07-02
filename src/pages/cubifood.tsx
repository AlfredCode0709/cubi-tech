import CubiFoodDefault from "@/views/cubifood/CubiFoodDefault";
import Head from "next/head";
import { FC, Fragment } from "react";

const CubiFood: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>CubiFood | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://ik.imagekit.io/a1fr3d10/cubifood.ico"
        />
      </Head>
      <main>
        <CubiFoodDefault />
      </main>
    </Fragment>
  );
};

export default CubiFood;
