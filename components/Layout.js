import Head from "next/head";
import { memo } from "react";
import Meta from "./Meta";
import Navbar from "./Navbar";

const DivMemo = memo((props) => {
  return props.children;
});

const Layout = (props) => {
  return (
    <div className={`flex flex-col mx-auto bg-main min-h-screen`}>
      <Meta keywords={props.metaKeywords} description={props.metaDescription} />
      {/* <Head>
        <title>
          {props.title !== 'soultanid' ? "Soul's " : null}
          {props.title}
        </title>
      </Head> */}
      <Navbar />
      {props.withTitle && (
        <h1 className="self-center font-light text-blueGray-700 text-center text-4xl mt-8 mb-12">
          {props.title}
        </h1>
      )}
      <div className="page-in flex justify-center flex-1 flex-col">
        <DivMemo>
          <div className={`${props.className}`}>{props.children}</div>
        </DivMemo>
      </div>
    </div>
  );
};

export default Layout;
