
import NavBar from "./components/navbar";
import logo from './static/images/Patrick-Mallery-Monogram.png'
import Footer from "./components/footer";

import AnimatedRoutes from "./components/animated-routes";
const App = () => {

  console.log(`
  ╔═╦╗────╔╗╔╗─────────╔╗────────────╔╗───╔╗───╔══╗
  ║╔╣╚╦═╦═╣╠╬╬═╦╦═╗╔═╦╦╣╚╗╔══╦╦╗╔═╦═╦╝╠═╗─║╚╦═╦╬╦╗║
  ║╚╣║║╩╣═╣═╣║║║║╬║║╬║║║╔╣║║║║║║║═╣╬║╬║╩╬╗║║║╩╣║╠╔╝
  ╚═╩╩╩═╩═╩╩╩╩╩═╬╗║╚═╩═╩═╝╚╩╩╬╗║╚═╩═╩═╩═╩╣╚╩╩═╬╗╠╣
  ──────────────╚═╝──────────╚═╝─────────╝────╚═╩╝`)
  return (
    <div className="">
      <div className="h-screen w-full lg:bg-[url('./static/images/Portfolio_3.png')] bg-center overflow-y-auto md:bg-[url('./static/images/bg-md.png')] bg-[url('./static/images/bg-sm.png')]">
        <div>
        <NavBar logo={logo} />
          <AnimatedRoutes />
          </div>
      <Footer />
      </div>
      </div>
  );
}

export default App;
