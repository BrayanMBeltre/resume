import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`${
        isVisible ? ' opacity-100' : ' opacity-0'
      } border-2 hover:border-gray-900 dark:hover:border-gray-50 border-gray-100 dark:border-gray-900 p-2 transition-all cursor-pointer`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="w-6 h-6 dark:text-gray-50" />
    </div>
  );
}
