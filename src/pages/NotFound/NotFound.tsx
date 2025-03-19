import { Link } from 'react-router-dom';

const NotFound = () : JSX.Element => (
  <div
    style={{
      textAlign: 'center'
    }}
  >
    <h1>404 Not Found</h1>
    <span>
      <Link
        to={'/'}
        style={{
          color: 'blue',
          textDecoration: 'underline'
        }}
      >
        Main Page
      </Link>
    </span>
  </div>
);

export {NotFound};
