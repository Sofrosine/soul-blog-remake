import React from 'react';
import Image from 'next/image';
import ProgressBar from './ProgressBar';

const CardSkills = ({data}) => {
  return (
    <div className="flex flex-row my-auto w-3/4 mb-4 items-center">
      <img
        // src={`http://localhost:4000/${data.image}`}
        alt="skill-image"
        className="rounded-md w-10 h-10"
      />
      <div className="flex flex-col ml-4 w-full">
        <div className="flex justify-between items-center">
          <p className="text-base mb-1">{data.name}</p>
          <p className="text-xs mb-1">{data.percentage}%</p>
        </div>
        <ProgressBar percentage={data.percentage} />
        <p>
          <span className="font-semibold text-xs">{data.experience}</span>
          <span className="text-xs">{'\xa0of experience.'}</span>
        </p>
      </div>
    </div>
  );
};

export default CardSkills;
