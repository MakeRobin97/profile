import { Helmet } from 'react-helmet-async';

const Meta = () => {

  return (
    <Helmet>
      <meta property="og:type" content="website" data-react-helmet="true"/>
      <meta property="og:description" content="박인국 포트폴리오" data-react-helmet="true"/>
      <meta property="og:image" content="./images/박인국프로필.jpg" data-react-helmet="true"/>
    </Helmet>
  );
};

export default Meta;