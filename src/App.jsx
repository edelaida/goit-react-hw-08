import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import HomePages from "./pages/HomePages/HomePages";
import LoginPages from "./pages/LoginPages/LoginPages";
import RegisterPages from "./pages/RegisterPages/RegisterPages";
import NotFoundPages from "./pages/NotFoundPages/NotFoundPages";
import ContactsPages from "./pages/ContactsPages/ContactsPages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refresh } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";

const App = () => {
  // Коли людина заходить до нас в додаток, редакс виконує запит на сервер для отримання інформації про користувача
  // Це відбувається автоматично за допомогою useEffect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<ContactsPages />} redirectTo="/login" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              component={<LoginPages />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={<RegisterPages />}
              redirectTo="/contacts"
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPages />} />
    </Routes>
  );
};

export default App;
