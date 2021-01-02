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
      <div className={`flex justify-center align-middle ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
