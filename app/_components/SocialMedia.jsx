import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/app/_utlis/svg";

function SocialMedia({className}) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <span>
        <FacebookIcon className="fill-blue-700 w-6 h-6 md:w-8 md:h-8" />
      </span>
      <span>
        <InstagramIcon className="fill-red-600 w-6 h-6 md:w-8 md:h-8" />
      </span>
      <span>
        <TwitterIcon className="fill-gray-300 w-6 h-6 md:w-8 md:h-8" />
      </span>
      <span>
        <YoutubeIcon className="fill-red-800 w-6 h-6 md:w-8 md:h-8" />
      </span>
    </div>
  );
}

export default SocialMedia;
