import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="razaulkarim2410@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+8801912278356" Image={FiPhone} />
      <SingleInfo text="Netrakona, Dhaka, Bangladesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
