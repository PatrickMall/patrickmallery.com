
import NavBar from "./components/navbar";
import logo from './static/images/logo v1.png'
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
      <div className="h-screen w-full bg-[url('./static/images/Portfolio_3.png')] bg-center overflow-y-auto">
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
