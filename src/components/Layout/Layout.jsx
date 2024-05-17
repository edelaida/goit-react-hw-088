//import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
//import Loader from "../Loader/Loader";
import css from "./Layout.module.css";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

//export default Layout;
//<Suspense fallback={<Loader />}>{children}</Suspense>
