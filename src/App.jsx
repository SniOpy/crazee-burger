    import { Route, Routes } from "react-router-dom";
    import LoginPage from "./components/pages/login/LoginPage";
    import ErrorPage from "./components/pages/error/ErrorPage";
    import OrderPage from "./components/pages/order/OrderPage";

    export default function App() {

            return (
            <Routes>
              <Route path="/" element={<LoginPage/>}></Route>
              <Route path="/order/:username" element={<OrderPage/>}></Route>
              <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
            )
  }

