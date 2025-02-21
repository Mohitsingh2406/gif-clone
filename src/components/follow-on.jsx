import {FaAmilia, FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/mohit-singh-tomar-679438246/">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://www.instagram.com/mohitttt.10">
          <FaInstagram size={20} />
        </a>
        <a href="https://x.com/belikeemohit">
          <FaXTwitter size={20} />
        </a>
        <a href="https://github.com/Mohitsingh2406">
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;