import Copyright from "./components/Copyright";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Feature />
      <Roadmap />
      <Form />
      <Footer />
      <Copyright />
    </main>
  );
}
