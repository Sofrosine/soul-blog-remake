import React, { useEffect, useState } from "react";
import CardSkills from "../components/CardSkills";
import Layout from "../components/Layout";
import OnProgress from "../components/OnProgress";

const Skills = ({ data }) => {
  return (
    <Layout title="Skills" withTitle>
      <OnProgress />
      {/* <div className="flex flex-col items-center shadow-xl w-full bg-main mx-8 py-8 rounded-md">
        {data && data.data.map((item, index) => (
          <CardSkills key={index} data={item} />
        ))}
      </div> */}
    </Layout>
  );
};

// export async function getStaticProps() {
//   // Call an external API endpoint to get data.
//   // You can use any data fetching library
//   const res = await fetch('http://localhost:4000/v1/skill');
//   const data = await res.json();

//   // By returning { props: data }, the Blog component
//   // will receive `data` as a prop at build time
//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Skills;
