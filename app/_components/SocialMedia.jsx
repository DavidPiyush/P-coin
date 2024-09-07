import {
  facebook,
  FacebookIcon,
  instagram,
  InstagramIcon,
  twitter,
  TwitterIcon,
  YoutubeIcon,
} from "@/app/_utlis/svg";

function SocialMedia({className}) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <span>
        <FacebookIcon className="fill-blue-700" />
      </span>
      <span>
        <InstagramIcon className="fill-red-600" />
      </span>
      <span>
        <TwitterIcon className="fill-gray-300" />
      </span>
      <span>
        <YoutubeIcon className="fill-red-800" />
      </span>
    </div>
  );
}

export default SocialMedia;
