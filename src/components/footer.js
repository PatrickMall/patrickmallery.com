import SocialIcon from "./common/social-icon";


const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-black lg:w-5/12 w-full md:px-16 lg:px-0 px-4">
          <div className="social-icons lg:my-8 lg:ml-32 md:mt-8 md:mb-8 mt-8 mb-8">
            <SocialIcon brand={'fa-github'} url={'https://github.com/PatrickMall'} />
            <SocialIcon brand={'fa-linkedin-in'} url={'https://www.linkedin.com/in/patrick-mallery/'} />
          </div>

    </footer>
    )
}
      export default Footer;