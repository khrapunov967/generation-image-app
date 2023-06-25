import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RootLayout from "./components/RootLayout";
import ShowcasePage from "./pages/ShowcasePage";

const App: React.FC = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;