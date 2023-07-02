import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter(useEffect);
  useEffect(() => {
    router.push("/Home");
  }, []);
  return (
    <div>
      <Head>
        <title>Valiasr Programing department</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.cdnfonts.com/css/mulish"
          rel="stylesheet"
        ></link>
      </Head>
    </div>
  );
}
