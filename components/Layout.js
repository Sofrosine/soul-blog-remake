import { memo } from "react";
import Particles from "react-tsparticles";
import ParticlesJSON from "../data/particles.json";
import Meta from "./Meta";
import Navbar from "./Navbar";

const DivMemo = memo((props) => {
  return props.children;
});

const Layout = (props) => {
  return (
    <div className={`flex flex-col relative mx-auto bg-main min-h-screen z-50`}>
      <Particles
        style={{ position: "absolute", zIndex: 0, flex: 2 }}
        options={ParticlesJSON}
      />
      <Meta
        title={props.metaTitle}
        keywords={"soultan muhammad albar , soultan, soultan albar, soultan id, soultan react native developer, soultanma" + props.metaKeywords}
        description={props.metaDescription}
      />
      <Navbar />
      {/* {props.withTitle && (
          <h1 className="z-50 self-center font-light text-blueGray-700 text-center text-4xl mt-8 mb-12">
            {props.title}
          </h1>
        )} */}
      <div className="page-in flex justify-center flex-1 flex-col">
        <DivMemo>
          <div className={`${props.className}`}>{props.children}</div>
        </DivMemo>
      </div>
    </div>
  );
};

export default Layout;
