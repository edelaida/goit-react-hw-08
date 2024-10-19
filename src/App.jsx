import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import HomePages from "./pages/HomePages/HomePages";
import LoginPages from "./pages/LoginPages/LoginPages";
import RegisterPages from "./pages/RegisterPages/RegisterPages";
import NotFoundPages from "./pages/NotFoundPages/NotFoundPages";
import ContactsPages from "./pages/ContactsPages/ContactsPages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
        <Route path="contacts" element={<ContactsPages />} />
        <Route path="login" element={<LoginPages />} />
        <Route path="register" element={<RegisterPages />} />
      </Route>
      <Route path="*" element={<NotFoundPages />} />
    </Routes>
  );
};

export default App;
