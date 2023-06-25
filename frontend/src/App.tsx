import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RootLayout from "./components/RootLayout";

const App: React.FC = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;