import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingButton from './LoadingButton';

export default function Form() {
  const [isSending, setisSending] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const notiStyles = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: 'text-center',
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      nameRef.current.value &&
      emailRef.current.value &&
      messageRef.current.value
    ) {
      try {
        setisSending(true);
        await emailjs.sendForm(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          e.target,
          process.env.USER_ID
        );

        if (localStorage.getItem('isDarkmode') === 'true') {
          console.log(localStorage.getItem('isDarkmode'));
          toast('Email Sent!', notiStyles);
        } else {
          toast.dark('Email Sent!', notiStyles);
        }

        setisSending(false);
      } catch (error) {
        console.error(error);
        setisSending(false);
      }
    }

    // nameRef.current.value = null;
    // emailRef.current.value = null;
    // messageRef.current.value = null;
  };

  return (
    <form onSubmit={sendEmail} className="w-full">
      <ToastContainer />

      <div className="floating-input mb-5 relative ">
        <input
          type="text"
          id="name"
          name="from_name"
          ref={nameRef}
          required={true}
          className="dark:text-gray-50 bg-gray-100 dark:bg-gray-900 border-b-2 border-gray-600 dark:border-gray-50 focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 focus:shadow-sm w-full p-3 h-16"
          placeholder="name@example.com"
        />
        <label
          htmlFor="name"
          className="dark:text-gray-50 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >
          Name
        </label>
      </div>

      <div className="floating-input mb-5 relative">
        <input
          type="email"
          id="email"
          name="reply_to"
          ref={emailRef}
          required={true}
          className="dark:text-gray-50 bg-gray-100 dark:bg-gray-900 border-b-2 border-gray-600 dark:border-gray-50 focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 focus:shadow-sm w-full p-3 h-16"
          placeholder="name@example.com"
        />
        <label
          htmlFor="email"
          className="dark:text-gray-50 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
        >
          Email
        </label>
      </div>

      <div className="floating-textarea mb-5 relative">
        <textarea
          type="text"
          id="message"
          name="message"
          ref={messageRef}
          required={true}
          className="dark:text-gray-50 bg-gray-100 dark:bg-gray-900 border-b-2 border-gray-600 dark:border-gray-50 focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 focus:shadow-sm w-full p-3 h-32"
          placeholder="somthing something"
        />
        <label
          htmlFor="message"
          className="dark:text-gray-50 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
        >
          Message
        </label>
      </div>

      {!isSending ? (
        <button className="w-full border-2 border-gray-900 dark:border-gray-50 text-gray-900 dark:text-gray-50 hover:bg-gray-900 dark:hover:bg-gray-50  hover:text-gray-50 dark:hover:text-gray-900 p-3 rounded-md transition-all duration-100">
          Send
        </button>
      ) : (
        <LoadingButton />
      )}
    </form>
  );
}
