import Copyright from "../components/Copyright";
import DailyClaim from "../components/DailyClaim";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialMediaLink from "../components/SocialMediaLink";

function page() {
  return (
    <div>
      <Header />
      <section className="mb-24">
        <div className="lg:max-w-7xl mx-auto md:max-w-2xl max-w-md md:items-center md:pb-8">
          <SocialMediaLink />
          <DailyClaim />
        </div>
      </section>
      <Footer />
      <Copyright />
    </div>
  );
}

export default page;
