import Form from "./Form";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <div className="grid grid-cols-2">
      <div className="">
        {/* github */}
        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400 hover:border-gray-900 transition-all cursor-pointer hover:text-gray-900">
          <FaGithub className="w-8 h-8" />
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            GitHub
          </div>
        </div>
        {/* telegram */}
        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400 hover:border-gray-900 transition-all cursor-pointer hover:text-gray-900">
          <FaTelegram className="w-8 h-8" />
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            Telegram
          </div>
        </div>
        {/* email */}
        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400 hover:border-gray-900 transition-all cursor-pointer hover:text-gray-900">
          <HiOutlineMail className="w-8 h-8" />
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            Email
          </div>
        </div>
      </div>

      <div className="">
        <Form />
      </div>
    </div>
  );
}
