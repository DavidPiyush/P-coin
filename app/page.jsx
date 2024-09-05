import Feature from "./components/Feature";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Roadmap />
      <Form />
    </main>
  );
}
