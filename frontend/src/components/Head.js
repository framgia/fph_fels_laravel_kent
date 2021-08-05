import { Helmet, HelmetProvider } from 'react-helmet-async';
import { renderToString } from 'react-dom/server';

export default function Head(props) {

  const head = (
    <HelmetProvider>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
    </HelmetProvider>
  );

  const Head = renderToString(head);

  return Head;
};
