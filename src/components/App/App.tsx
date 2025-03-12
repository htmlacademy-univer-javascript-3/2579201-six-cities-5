import { MainPage } from '../../pages/MainPage/MainPage';

type AppProps = {
  placeNumber: number;
}

const App = ({ placeNumber } : AppProps) : JSX.Element => (
  <MainPage placeNumber={placeNumber} />
);

export { App };
