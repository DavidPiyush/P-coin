import Copyright from "../_components/Copyright";
import DailyClaim from "../_components/DailyClaim";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import SocialMediaLink from "../_components/SocialMediaLink";

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
