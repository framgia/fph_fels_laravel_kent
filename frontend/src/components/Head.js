import { Helmet, HelmetProvider } from 'react-helmet-async';

function Head(props) {
  return(
    <div>
      <HelmetProvider>
        <Helmet>
          <html lang="en" />
          <title>{props.title}</title>
          <meta name="description" content="E-learning system" />
        </Helmet>
      </HelmetProvider>
    </div>
  );
}

export default Head; 