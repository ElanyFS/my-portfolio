import { section } from "framer-motion/client";
import fotoPerfil from "../../assets/imgElany.jpg";
import "./about.css";

export const About = () => {
  return (
    // <section className="about h-screen flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-4 text-zinc-200">
    //   <div className="w-4/6 sm:w-2/6 lg:w-[25%]">
    //     <img src={fotoPerfil} alt="" className=""/>
    //   </div>

    //   <div className="w-5/6 sm:w-3/6 space-y-5">
    //     <h1 className="font-rubik text-xl uppercase">About Me</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum
    //       enim, quo at debitis perferendis iure quisquam, ea recusandae iusto
    //       eaque, beatae tempora magni ab eligendi quos natus aliquid eveniet!
    //     </p>

    //     <div className="flex justify-start items-center gap-3">
    //       <button className="border p-2">Hire Me</button>
    //       <button className="border p-2">Resume</button>
    //     </div>
    //   </div>
    // </section>
    <section id="about" className="min-h-[70vh] h-auto flex flex-col justify-center items-center gap-10 text-zinc-200">
      <h1 className="font-rubik text-2xl uppercase">
        About Me
        <i className="fa-regular fa-user ml-3 text-secundaria"></i>
      </h1>

      <p className="w-4/6 text-justify font-poppins">
        Desenvolvedora Front-end com foco em criar soluções inovadoras e
        funcionais usando tecnologias como React, Angular e TypeScript. Graduada
        em Engenharia da Computação e em preparação para uma pós-graduação em
        Engenharia de Software, tenho experiência em desenvolvimento web,
        criação de interfaces intuitivas e responsivas, e participação em
        projetos interativos. Com uma base sólida em HTML, CSS, JavaScript e
        ferramentas de versionamento como GitHub, busco constantemente aprimorar
        minhas habilidades e colaborar em projetos que gerem impacto positivo.
      </p>

      <div className="flex justify-start items-center gap-3 font-poppins">
        <button className="btn border p-2 relative"><i className="fa-brands fa-linkedin"></i> Linkedin</button>
        <button className="btn border p-2 relative"><i className="fa-solid fa-file-arrow-down"></i> Curriculum</button>
      </div>
    </section>
  );
};
