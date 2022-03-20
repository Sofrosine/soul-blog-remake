import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import ParticlesJSON from "../data/particles.json";
import Meta from "./Meta";
import Navbar from "./Navbar";

const Layout = (props) => {
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`flex flex-col relative mx-auto transition-colors duration-700 bg-white dark:bg-blueGray min-h-screen z-40`}
      >
        <Particles
          style={{
            position: "absolute",
            zIndex: 0,
          }}
          options={{
            ...ParticlesJSON,
            background: {
              opacity: 0,
            },
          }}
        />
        <Meta
          title={props.metaTitle}
          keywords={
            "soultan muhammad albar , soultan, soultan albar, soultan id, soultan react native developer, soultanma" +
            props.metaKeywords
          }
          description={props.metaDescription}
        />
        <Navbar />
        <div className="page-in flex justify-center flex-1 flex-col">
          <div className={`${props.className}`}>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
