// Imagens projetos
import projeto1 from "../../assets/create-goal.png";
import projeto2 from "../../assets/Captura de tela 2024-11-02 114113.png";
import projeto3 from "../../assets/coincraft.png";
import projeto4 from "../../assets/optimustech.gif";
import projeto5 from "../../assets/toDoListTask.png";

export const Projects = () => {
  const projetos = [
    {
      pathImg: projeto1,
      titulo: "Gerenciador de Metas",
      detalhes:
        "Aplicação full-stack para gerenciamento de metas, com Node.js, TypeScript, Fastify, DrizzleORM (PostgreSQL), Docker e Zod no back-end; e React, Vite, TailwindCSS e TanStack Query no front-end.",
      pathCodigo: "https://github.com/ElanyFS/nlw-web",
      pathUrl: "https://nlw-web.vercel.app/",
      tecnologias: [
        "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
        "https://www.svgrepo.com/show/374144/typescript.svg",
        "https://www.svgrepo.com/show/353729/fastify-icon.svg",
        "https://www.svgrepo.com/show/354200/postgresql.svg",
        "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
        "https://www.svgrepo.com/show/374167/vite.svg",
        "https://www.svgrepo.com/show/374118/tailwind.svg",
      ],
    },
    {
      pathImg: projeto2,
      titulo: "Cine Search",
      detalhes:
        "Aplicação front-end para busca e exibição de filmes e séries, desenvolvida com React e Vite, que utiliza uma API pública para retornar dados organizados por categorias. Estilizada com TailwindCSS, a interface usa TanStack Query para gerenciar eficientemente as requisições de dados.",
      pathCodigo: "https://github.com/ElanyFS/SearchMovies",
      pathUrl: "https://cine-moviee.vercel.app/",
      tecnologias: [
        "https://www.svgrepo.com/show/374144/typescript.svg",
        "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
        "https://www.svgrepo.com/show/374167/vite.svg",
        "https://www.svgrepo.com/show/374118/tailwind.svg",
      ],
    },
    {
      pathImg: projeto3,
      titulo: "Coin Craft",
      detalhes:
        "Jogo educativo que facilita o aprendizado financeiro, ajudando os jogadores a desenvolverem habilidades de orçamento e controle de gastos de forma divertida. A aplicação inclui uma landing page para cadastro de novos jogadores interessados em aprimorar sua educação financeira.",
      pathCodigo: "https://github.com/KelvynReis/coincraft-trilhas",
      pathUrl: "https://coincraft-trilhas.vercel.app/",
      tecnologias: [
        "https://www.svgrepo.com/show/374144/typescript.svg",
        "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
        "https://www.svgrepo.com/show/374167/vite.svg",
        "https://www.svgrepo.com/show/374118/tailwind.svg",
      ],
    },
    {
      pathImg: projeto4,
      titulo: "OptimusTech",
      detalhes:
        "Projeto desenvolvido para o desafio #7DaysOfCode, com o objetivo de criar uma página de carreiras para uma empresa de TI interessada em novas contratações. A página foi construída seguindo o layout fornecido no Figma, destacando vagas disponíveis e facilitando o processo de recrutamento.",
      pathCodigo: "https://github.com/ElanyFS/landing-page",
      pathUrl: "#",
      tecnologias: [
        "https://www.svgrepo.com/show/452228/html-5.svg",
        "https://www.svgrepo.com/show/452185/css-3.svg",
        "https://www.svgrepo.com/show/353925/javascript.svg",
      ],
    },
    {
      pathImg: projeto5,
      titulo: "To Do List",
      detalhes:
        "Aplicação de lista de tarefas projetada para ajudar usuários a organizar e acompanhar suas atividades diárias de forma prática e eficiente. Com um card dedicado para destacar tarefas atrasadas, o ToDoList facilita o gerenciamento de prioridades e mantém o usuário informado sobre pendências. A interface é responsiva e intuitiva, tornando o uso fácil em qualquer dispositivo.",
      pathCodigo: "https://github.com/ElanyFS/ToDoList/",
      pathUrl: "https://to-do-list-trilha.vercel.app/",
      tecnologias: [
        "https://www.svgrepo.com/show/374144/typescript.svg",
        "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
        "https://www.svgrepo.com/show/374167/vite.svg",
        "https://www.svgrepo.com/show/374118/tailwind.svg",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-[80vh] text-zinc-200 flex flex-col items-center gap-3 py-2 px-10"
    >
      <h1 className="font-rubik text-xl uppercase">
        Portfólio
        <i className="fa-solid fa-arrow-right fa-xl rotate-45 ml-3 text-secundaria "></i>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-10 flex-wrap px-10">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="bg-principal border-2 border-secundaria flex flex-col items-center justify-between p-2 relative "
          >
            <img src={projeto.pathImg} alt="" className="" />
            <div className="flex flex-col gap-2 items-center">
              <h1 className="font-poppins text-xl text-center">
                {projeto.titulo}
              </h1>

              <p className="text-justify text-[11px] font-poppins">
                {projeto.detalhes}
              </p>
              <ul className="flex items-center justify-center gap-2 flex-wrap">
                {projeto.tecnologias.map((tech) => (
                  <li key={tech}>
                    <img src={tech} alt="" className="w-7 mx-auto" />
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center gap-2">
                <a
                  className="border-secundaria border-2 px-2 py-1"
                  href={projeto.pathCodigo}
                >
                  Código
                </a>
                <a
                  className="border-secundaria border-2 px-2 py-1"
                  href={projeto.pathUrl}
                >
                  Acessar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
