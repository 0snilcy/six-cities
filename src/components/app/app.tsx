import MainPage from '../main-page/main-page';

type AppPageProps = {
  offersCount: number;
};

function App({ offersCount }: AppPageProps) {
  return <MainPage offersCount={offersCount} />;
}

export default App;
