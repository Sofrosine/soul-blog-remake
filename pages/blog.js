import React from "react";
import Layout from "../components/Layout";
import OnProgress from "../components/OnProgress";

const blog = () => {
  return (
    <Layout className="flex justify-center" title="Blog" withTitle>
      <OnProgress />
    </Layout>
  );
};

export default blog;
