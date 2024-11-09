import "./home.css";
import Particles from "@/components/ui/particles";

export const Home = () => {
  return (
    <section id="home" className="home h-screen text-zinc-200 flex flex-col justify-center items-center text-center gap-12">
      <div className="flex flex-col gap-3">
        <h2 className="titulo_apresentacao">Olá! Eu sou</h2>
        <h1 className="titulo_name">Elany Souza</h1>
        <p className="titulo_descricao">
          Desenvolvedora <span></span>
        </p>
      </div>

      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        // color={color}
        refresh
      />
      <div className="flex flex-col gap-3">
        <ul className="flex gap-3">
          {/* <li className="item-icon border rounded-3xl px-2.5 py-1 hover:bg-white"> */}
            <a href="https://linkedin.com.br/in/ebsouzaa" >
              <i className="fa-brands fa-linkedin text-[#dedede] text-3xl hover:text-[#0073B2]"></i>
            </a>
          {/* </li> */}
          {/* <li className="item-icon border rounded-3xl px-2.5 py-1 hover:bg-white"> */}
            <a href="https://www.instagram.com/e.bsouzaa/">
              <i className="fa-brands fa-instagram text-[#dedede] text-3xl hover:text-[#FF378A]"></i>
            </a>
          {/* </li> */}
          {/* <li className="item-icon border rounded-3xl px-2.5 py-1 hover:bg-white"> */}
            <a href="https://github.com/ElanyFS/">
              <i className="fa-brands fa-github text-[#dedede] text-3xl"></i>
            </a>
          {/* </li> */}
        </ul>
        {/* <div>
          <a href="#main">
            <i className="fa-solid fa-chevron-up fa-rotate-180 text-[#dedede] text-xl"></i>
          </a>
        </div> */}
      </div>
    </section>
  );
};
