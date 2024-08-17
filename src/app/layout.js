import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FashionVilla | Find modern designs an essential accessories",
  description: "Welcome the FashionVilla shopping!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrapping the application via Store Provider to use Redux Store  */}
        <StoreProvider>
          <Header/>
        {children}
        <Footer/>
        <ToastContainer/>
        </StoreProvider>
        </body>
    </html>
  );
}
