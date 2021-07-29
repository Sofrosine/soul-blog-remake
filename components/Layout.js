import Head from "next/head";
import { memo } from "react";
import Meta from "./Meta";
import Navbar from "./Navbar";
import Particles from "react-tsparticles";

const DivMemo = memo((props) => {
  return props.children;
});

const Layout = (props) => {
  return (
    <>
      <Particles
        style={{ position: "absolute", zIndex: 0 }}
        options={{
          background: {
            color: {
              value: "#fafafa",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detect_on: "window",
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onDiv: {
                selectors: [],
                enable: true,
                mode: "repulse",

                type: "circle",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#c0cad3",
            },
            links: {
              color: "#c0cad3",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              random: true,
              speed: 4,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
      <div className={`flex flex-col mx-auto bg-main min-h-screen z-50`}>
        <Meta
          title={props.metaTitle}
          keywords={"soultanid ,soultan albar, soultanma" + props.metaKeywords}
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
    </>
  );
};

export default Layout;
