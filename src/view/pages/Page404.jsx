import React from 'react'
import errorAnima from '../../assets/404.json'
import { useLottie } from "lottie-react";
import CustomFillBtn from '../../components/CustomFillBtn/CustomFillBtn';
import { Link } from 'react-router-dom';

const Page404 = () => {
  const options = {
    style: { width: "100%", height: "100vh" },
    animationData: errorAnima,
    loop: true
  };

  const { View } = useLottie(options);

  return <>
    <div className='h-screen w-screen relative' >
      {View}

      <div className='w-52 absolute b-0'>
        <Link to={"/"}>
        <CustomFillBtn btntext={"Go to home"} variant={"gradient"} className="" />

        </Link>
      </div>
    </div>


  </>;
};

export default Page404;

