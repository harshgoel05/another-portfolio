import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CookiePreferences {
  acceptedCookies: boolean;
  askAgainDate: number | null;
}

export default function CookieAlert(): JSX.Element {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleCookiesAlert = (accepted: boolean): void => {
    setShowAlert(false);
    const cookiePreferencesObj: CookiePreferences = {
      acceptedCookies: accepted,
      askAgainDate: accepted
        ? null // user accepted cookies, no need to ask again
        : new Date().getTime() + 1000 * 60 * 60 * 24 * 5 // current time + 5 days
    };
    localStorage.setItem('cookieObject', JSON.stringify(cookiePreferencesObj));
  };

  useEffect(() => {
    const cookieObjJson = localStorage.getItem('cookieObject');
    if (cookieObjJson) {
      const { acceptedCookies, askAgainDate } = JSON.parse(cookieObjJson);
      if (!acceptedCookies && new Date().getTime() > askAgainDate) {
        setShowAlert(true);
      }
    } else {
      setShowAlert(true);
    }
  }, []);

  return (
    <motion.div
      key="cookieAlertComponent"
      className={`fixed
                  bottom-0 sm:bottom-5
                  right-0 sm:right-5
                  z-40
                  font-regular
                  w-full sm:max-w-sm
                  p-3
                  bg-pink
                  text-blue
                `}
      initial={{ y: '150%' }}
      animate={{
        y: showAlert ? 0 : '150%',
        transitionEnd: { display: showAlert ? 'block' : 'none' }
      }}
      transition={{ delay: 0.8, duration: 0.5 }}>
      <h4 className="text-xl py-2">&#x1F36A; Do you like cookies?</h4>
      <p className="text-base py-2">
        We use cookies to ensure you get the best experience on our website.
      </p>
      <div className="flex justify-between mt-2.5">
        <button
          type="button"
          className={`px-1 py-0
                      hover:underline
                      focus:outline-none
                    `}
          onClick={() => handleCookiesAlert(false)}>
          Dismiss
        </button>
        <div>
          <a
            className="px-4 py-3 hover:underline"
            href="https://www.cookiesandyou.com/"
            target="_blank"
            rel="noreferrer noopener">
            Learn More
          </a>
          <button
            className={`px-6 py-2
                        bg-blue text-pink
                        border-2 border-blue rounded
                        hover:bg-transparent hover:text-blue
                        focus:outline-none
                      `}
            type="button"
            onClick={() => handleCookiesAlert(true)}>
            Accept
          </button>
        </div>
      </div>
    </motion.div>
  );
}
