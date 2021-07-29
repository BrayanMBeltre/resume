import { FaGithub, FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Form from "./Form";
import UnderLineButton from "./UnderLineButton";

export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 items-center">
      <div className="text-xl mb-8">
        {/* github */}

        <div className="flex items-center mb-8">
          <FaGithub className="w-8 h-8 mr-4" />
          <UnderLineButton className="tracking-wide font-semibold">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/BrayanMBeltre"
            >
              github.com/brayanMBeltre
            </a>
          </UnderLineButton>
        </div>

        {/* telegram */}

        <div className="flex items-center mb-8">
          <FaTelegram className="w-8 h-8 mr-4" />
          <UnderLineButton className="tracking-wide font-semibold">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://t.me/BrayanMBeltre"
            >
              t.me/BrayanMBeltre
            </a>
          </UnderLineButton>
        </div>

        {/* email */}
        <div className="flex items-center mb-8">
          <HiOutlineMail className="w-8 h-8 mr-4" />
          <UnderLineButton className="tracking-wide font-semibold">
            <a
              to="#"
              onClick={(e) => {
                window.location = "mailto:brayanmbeltre@gmail.com";
                e.preventDefault();
              }}
            >
              brayanmb07@gmail.com
            </a>
          </UnderLineButton>
        </div>
      </div>

      <div className="">
        <h3 className="text-3xl mb-4">Send me an Email</h3>
        <Form />
      </div>
    </div>
  );
}
