import SingleContactSocial from "./SingleContactSocial";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
  <SingleContactSocial link="https://linkedin.com/in/razaul-karim-4445b5275/" Icon={FaLinkedinIn} />
  <SingleContactSocial link="https://github.com/razaulkarim2410" Icon={FiGithub} />
  <SingleContactSocial link="https://facebook.com/share/1AGau4f9uP/" Icon={FaFacebookF} />
</div>
  );
};

export default ContactSocial;
