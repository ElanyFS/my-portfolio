export const Experience = () => {
  const experiencias = [
    {
      empresa: "Startup de Estatísticas Esportivas | São Luís, MA",
      cargo: "Desenvolvedora",
      periodo: "06/2024 - ",
      funcoes: [
        "Desenvolvimento de interfaces interativas utilizando Angular, Node.js, HTML e CSS",
        "Consumo e otimização de APIs RESTful para garantir performance",
        "Integração com APIs para atualização de dados em tempo real",
        "Otimização de performance e aplicação de boas práticas de desenvolvimento",
        "Colaboração com designers e equipe back-end para aprimoramento da experiência do usuário",
        "Implementação de designs responsivos baseados em Figma",
      ],
    },
    {
      empresa: "Inova Maranhão – SECTI | São Luís, MA",
      cargo: "Desenvolvedora",
      periodo: "03/2024 - 08/2024",
      funcoes: [
        "Desenvolvimento de aplicações web com HTML, CSS, JavaScript e React",
        "Criação e implementação de novas funcionalidades",
        "Desenvolvimento de interfaces responsivas e otimizadas",
      ],
    },
    {
      empresa: "ATI | São Luís, MA",
      cargo: "Desenvolvedora",
      periodo: "09/2021 - 10/2023",
      funcoes: [
        "Desenvolvimento de aplicações web utilizando HTML, CSS, JavaScript, React, PHP e Laravel",
        "Criação de formulários interativos para otimização de processos internos",
        "Desenvolvimento de sistema interno para organização e gerenciamento das aplicações",
        "Correção de bugs, refatoração e otimização de código para melhor performance",
        "Atendimento a chamados e suporte técnico para estabilidade das aplicações",
      ],
    },
    {
      empresa: "Fixtell | São Luís, MA",
      cargo: "Suporte N1",
      periodo: "05/2023 - 07/2023",
      funcoes: [
        "Atendimento inicial aos usuários, registrando e triando problemas",
        "Solução autônoma de questões simples para garantir agilidade e satisfação dos clientes",
        "Encaminhamento de chamados complexos para equipes especializadas",
        "Atualização da base de conhecimento com informações e soluções para melhoria contínua do suporte",
      ],
    },
  ];

  return (
    <div className="min-h-[90vh] h-auto text-zinc-200 flex flex-col items-center justify-start gap-4 py-4 px-4">
      <h1 className="font-rubik text-xl uppercase">My Experience</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiencias.map((experiencia, index) => (
          <div
            key={index}
            className="border p-4 font-poppins shadow-lg space-y-3"
          >
            <div className="flex justify-between items-start">
              <h1>{experiencia.empresa}</h1>
              <p className="text-xs">{experiencia.periodo}</p>
            </div>
            <p className="text-sm">{experiencia.cargo}</p>
            <ul>
              {experiencia.funcoes.map((funcao, index) => (
                <li key={index} className="text-xs">
                  <i className="fa-regular fa-circle-check mr-2 text-green-600"></i>
                  {funcao}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
