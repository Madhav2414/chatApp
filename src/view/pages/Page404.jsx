import React from 'react'
import errorAnima from '../../assets/404.json'
import { useLottie } from "lottie-react";

const Page404= () => {
  const options = {
    animationData: errorAnima,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Page404;

