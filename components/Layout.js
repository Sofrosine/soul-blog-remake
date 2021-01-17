import Head from 'next/head';
import {memo} from 'react';
import Navbar from './Navbar';

const DivMemo = memo(props => {
  return props.children;
});

const Layout = props => {
  return (
    <div className={`flex flex-col mx-auto bg-main min-h-screen`}>
      <Head>
        <title>
          {props.title !== 'soultanid' ? "Soul's " : null}
          {props.title}
        </title>
      </Head>
      <Navbar />
      <div className="page-in">
        {props.withTitle && (
          <h1 className="self-center font-light text-blueGray-700 text-center text-6xl mt-8 mb-12">
            {props.title}
          </h1>
        )}
        <DivMemo>
          <div className={`${props.className}`}>{props.children}</div>
        </DivMemo>
      </div>
    </div>
  );
};

export default Layout;
