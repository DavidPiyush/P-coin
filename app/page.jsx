import Copyright from "./_components/Copyright";
import Feature from "./_components/Feature";
import Footer from "./_components/Footer";
import Form from "./_components/Form";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Roadmap from "./_components/Roadmap";

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
