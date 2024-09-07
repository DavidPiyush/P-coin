import Button from "./Button";
import { socialMediaLink } from "../_utlis/socialMedia";
import Link from "next/link";

function SocialMediaLink() {
  return (
    <div className="mt-12  md:mx-0 flex items-center justify-center flex-col gap-8">
      {socialMediaLink.map((link) => (
        <div className="bg-red-200 shadow-lg p-4 rounded-md " key={link.id}>
          <article className="flex items-center gap-6 ">
            <Button className="  bg-red-600 hover:bg-red-500 md:w-[450px] w-[150px] px-0">
              <Link href={link.url}>{link.label}</Link>
            </Button>
            <p className="lg:text-base text-sunriseLight font-semibold text-sm">
              <strong>{link.point}</strong> Points
            </p>
          </article>
        </div>
      ))}
    </div>
  );
}

export default SocialMediaLink;
