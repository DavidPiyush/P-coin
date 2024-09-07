import { facebook, instagram, twitter, youtube } from "@/utlis/svg";

function SocialMedia() {
  return (
    <div className="flex gap-4 ">
      <span>{facebook}</span>
      <span>{instagram}</span>
      <span>{twitter}</span>
      <span>{youtube}</span>
    </div>
  );
}

export default SocialMedia;
