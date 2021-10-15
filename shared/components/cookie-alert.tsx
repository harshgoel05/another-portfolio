import { useState } from 'react';

export default function CookieAlert(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleAcceptCookies = (): void => {};
  const handleCloseAlert = (): void => {
    setIsOpen(!isOpen);
  };
  return isOpen ? (
    <div
      className={`fixed
                  bottom-0 md:bottom-5
                  right-0 md:right-5
                  font-regular
                  max-w-sm
                  p-3
                  bg-pink
                  text-blue
                `}>
      <button
        type="button"
        className={`absolute top-2 right-2
                    border border-blue rounded
                    px-1 py-0
                    hover:bg-blue hover:text-pink
                    focus:outline-none
                  `}
        onClick={handleCloseAlert}>
        X
      </button>
      <h5 className="text-lg py-2">&#x1F36A; Do you like cookies?</h5>
      <p className="py-2">We use cookies to ensure you get the best experience on our website.</p>
      <div className="flex justify-end mt-2.5">
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
                      hover:bg-transparent hover:text-blue focus:outline-none
                    `}
          type="button"
          onClick={handleAcceptCookies}>
          Accept
        </button>
      </div>
    </div>
  ) : null;
}
