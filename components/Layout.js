import Head from 'next/head';
import Navbar from './Navbar';

const Layout = props => {
  return (
    <div className={`flex flex-col mx-auto bg-gray-50`}>
      <Head>
        <title>
          {props.title !== 'soultanid' ? "Soul's " : null}
          {props.title}
        </title>
      </Head>
      <Navbar />
      {props.withTitle && <h1 className="self-center font-light text-blueGray-700 text-center text-6xl mt-8 mb-12">{props.title}</h1>}
      <div className={`flex ${props.className}`}>{props.children}</div>
    </div>
  );
};

export default Layout;
