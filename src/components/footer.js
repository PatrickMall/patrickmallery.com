import SocialIcon from "./common/social-icon";


const Footer = () => {
  return (
    <footer className="fixed bottom-0">
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