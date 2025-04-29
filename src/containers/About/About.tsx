import "./about.css";
import curriculo from "../../assets/Certificados/ELANY_CURRICULO__FRONT.pdf";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-[60vh] h-auto flex flex-col justify-center items-center gap-10 text-zinc-200"
    >
      <h1 className="font-rubik text-2xl uppercase">
        About Me
        <i className="fa-regular fa-user ml-3 text-secundaria"></i>
      </h1>

      <p className="w-5/6 lg:w-4/6 text-justify font-poppins">
        Formada em Engenharia de Computação pela Universidade Ceuma e, ao longo
        da minha trajetória, tenho focado em JavaScript, React, Tailwind CSS e
        HTML5. Tenho um olhar atento aos detalhes e busco sempre criar soluções
        que não apenas atendam às expectativas, mas que também proporcionem uma
        experiência de usuário intuitiva e eficiente. Acredito que a comunicação
        clara e eficaz é essencial, seja no trabalho em equipe, no atendimento
        ao cliente ou na resolução de desafios técnicos. Estou constantemente em
        busca de novos desafios e oportunidades para expandir meus conhecimentos
        e crescer profissionalmente. Valorizo a entrega de soluções que impactem
        positivamente o usuário e, em minhas experiências anteriores, busquei
        sempre manter um alto padrão de qualidade e colaboração, com foco no
        atendimento às necessidades e na gestão de problemas técnicos de forma
        eficaz.
      </p>

      <div className="flex justify-start items-center gap-3 font-poppins">
        <a
          className="btn border p-2 relative"
          href="https://www.linkedin.com/in/ebsouzaa/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i> Linkedin
        </a>
        <a className="btn border p-2 relative" href={curriculo} target="_blank">
          <i className="fa-solid fa-file-arrow-down"></i> Curriculum
        </a>
      </div>
    </section>
  );
};
