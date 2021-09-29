import Head from "next/head";

// Components
import { Navbar } from "../components/Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto font-nunito flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Developer Junaid</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <Navbar />
      {children}
      <footer className="flex items-center justify-center mt-auto w-full h-24 border-t">
        Developer : Junaid
      </footer>
    </div>
  );
};
