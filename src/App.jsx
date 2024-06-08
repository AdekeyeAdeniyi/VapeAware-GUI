import AppProviders from "./hooks/AppContent";

import DefaultPage from "./pages/DefaultPage";

const App = () => {
  return (
    <AppProviders>
      <DefaultPage />
    </AppProviders>
  );
};

export default App;
