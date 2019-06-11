import React from 'react';
import Img from 'react-image';
// themes
import Images from '../my-image/images';

export default (props) => {
  const loader = <img src={Images.imgLoader} className="img-product" alt="loader" />;
  const unloader = <img src={Images.imgFailed} className="img-product" alt="failed" />;
  return (<Img
    {...props}
    loader={loader}
    unloader={unloader} />
  );
};
