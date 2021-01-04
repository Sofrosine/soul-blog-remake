import React from 'react';
import Image from 'next/image';

const CardSkills = () => {
  return (
    <div className="card bg-white shadow-xl break-all text-center mb-2 rounded-lg px-5 py-5 w-72 flex flex-col w- items-center">
      <Image
        src="/facebook.png"
        width={70}
        height={70}
        className="rounded-md"
      />
      <p className="mt-4 mb-2 text-xl">React</p>
      <p>
        <span className="font-semibold">3 months</span>
        {'\xa0of experience.'}
      </p>
    </div>
  );
};

export default CardSkills;
