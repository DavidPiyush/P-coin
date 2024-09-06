import Link from "next/link";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

function Footer({ className }) {
  return (
    <footer className={`border-t-2 border-yellow-300${className}`}>
      <div className="lg:max-w-7xl md:max-w-2xl  md:mx-auto  grid justify-center md:block">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-8 md:grid-cols-3 ">
          <article>
            <ul className="space-y-6">
              <li>
                <Logo />
              </li>
              <li>
                <SocialMedia />
              </li>
            </ul>
          </article>

          <article>
            <span className="text-xl text-sunrise ">Audit</span>
            <ul className="mt-6 space-y-3">
              <li className="text-sunriseLight">
                <Link href="/"> Whitepaper</Link>
              </li>
              <li className="text-sunriseLight">
                <Link href="/">Audit Solidproof</Link>
              </li>
              <li className="text-sunriseLight">
                <Link href="/"> Audit coinuit</Link>
              </li>
              <li className="text-sunriseLight">
                <Link href="/"> FAQs</Link>
              </li>
            </ul>
          </article>
          <article>
            <span className="text-xl text-sunrise ">Disclaimer</span>
            <ul className="mt-6 space-y-3">
              <li className="text-sunriseLight">
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li className="text-sunriseLight">
                <Link href="/">Privacy & Cookie</Link>
              </li>
              <li className="text-sunriseLight">
                <Link href="/"> Pocliy</Link>
              </li>
              <li className="text-sunriseLight">
                <Link href="/"> RiskDisclaimer</Link>
              </li>
              <li className="text-sunriseLight">
                <Link href="/"> User Warranties</Link>
              </li>
            </ul>
          </article>
          <article>
            <span className="text-xl text-sunrise ">Resources</span>
            <ul className="mt-6 space-y-3">
              <li className="text-sunriseLight">
                <Link href="/">Delevloper</Link>
              </li>
              <li className="text-sunriseLight">
                <Link href="/">Support</Link>
              </li>
              <li className="text-sunriseLight">
                <Link href="/"> Blog</Link>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

//className="md:col-span-3 lg:col-span-1  md:justify-self-center"
