import Head from "next/head";
import MainBody from "@/components/Main";
import MeetStart from "@/components/MeetStart";


export default function Home() {
  return (
    <>
      <Head>
        <title>Google Meet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <MeetStart/>
      </main>
    </>
  );
}

