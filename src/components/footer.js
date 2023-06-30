import SocialIcon from "./common/social-icon";


const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-black w-5/12">
          <div className="social-icons my-16 ml-32">
            <SocialIcon brand={'fa-facebook-f'} />
            <SocialIcon brand={'fa-github'} />
            <SocialIcon brand={'fa-twitter'} />
            <SocialIcon brand={'fa-linkedin-in'} />
          </div>

    </footer>
    )
}
      export default Footer;