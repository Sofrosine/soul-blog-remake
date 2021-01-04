import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import CardSkills from '../components/CardSkills';

const skills = () => {
  return (
    <Layout
      title="Skills"
      className="flex flex-wrap mx-auto w-1/2 justify-around"
      withTitle
    >
      <CardSkills />
      <CardSkills />
      <CardSkills />
      <CardSkills />
      <CardSkills />
      <CardSkills />
    </Layout>
  );
};

export default skills;
