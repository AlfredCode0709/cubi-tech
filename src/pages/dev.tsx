import DevDefault from "@/views/dev/DevDefault";
import Head from "next/head";
import { FC, Fragment } from "react";

const Dev: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Developer Portal | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ik.imagekit.io/a1fr3d10/cubitech.ico" />
      </Head>
      <main>
        <DevDefault />
      </main>
    </Fragment>
  );
};

export default Dev;
