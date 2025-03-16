import { Main } from '../../pages/Main/Main';

type AppProps = {
  placeCount: number;
}

const App = ({ placeCount } : AppProps) : JSX.Element => (
  <Main placeCount={placeCount} />
);

export { App };
