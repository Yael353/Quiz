import "@/styles/globals.css";
import Navbar from "./components/header/Navbar";
import { QuizProvider } from "@/store";

export default function App({ Component, pageProps }) {
  return (
    <QuizProvider>
      <Navbar />
      <Component {...pageProps} />
    </QuizProvider>
  );
}
