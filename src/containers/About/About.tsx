import "./about.css";
import curriculo from "../../assets/Certificados/CurrículoProfissionalFullWebFrontJunior.pdf";

export const About = () => {
  return (
    <section id="about" className="min-h-[60vh] h-auto flex flex-col justify-center items-center gap-10 text-zinc-200">
      <h1 className="font-rubik text-2xl uppercase">
        About Me
        <i className="fa-regular fa-user ml-3 text-secundaria"></i>
      </h1>

      <p className="w-5/6 lg:w-4/6 text-justify font-poppins">
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
        <a className="btn border p-2 relative" href="https://www.linkedin.com/in/ebsouzaa/" target="_blank"><i className="fa-brands fa-linkedin"></i> Linkedin</a>
        <a className="btn border p-2 relative" href={curriculo} target="_blank"><i className="fa-solid fa-file-arrow-down"></i> Curriculum</a>
      </div>
    </section>
  );
};
