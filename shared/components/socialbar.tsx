export default function SocialBar(): JSX.Element {
  return (
    <div className="fixed left-3 md:left-5 bottom-0">
      <div className="flex flex-col  justify-center items-center  ">
        <a href="tel:+91-7519472787">
          <img
            src="/images/icons/call.svg"
            alt="Call"
            className="w-6 md:w-8 mb-2 hover:text-green-700"
          />
        </a>
        <a href="mailto:harshgoel05@gmail.com">
          <img src="/images/icons/mail.svg" alt="Email" className="w-6 md:w-8 mb-2" />
        </a>
        <a href="https://www.instagram.com/_d_specialist/">
          <img src="/images/icons/instagram.svg" alt="Instagram" className="w-6 md:w-8 mb-2" />
        </a>
        <a href="https://facebook.com/harshgoel05">
          <img src="/images/icons/facebook.svg" alt="Facebook" className="w-6 md:w-8 mb-2" />
        </a>
        <a href="https://github.com/harshgoel05">
          <img src="/images/icons/github.svg" alt="Github" className="w-6 md:w-8 mb-2" />
        </a>
        <a href="https://linkedin.com/in/harshgoel05">
          <img src="/images/icons/linkedin.svg" alt="Linkedin" className="w-6 md:w-8 mb-2" />
        </a>
        <div className="h-20 md:h-32 mt-2 w-1/12 bg-violet" />
      </div>
    </div>
  );
}
