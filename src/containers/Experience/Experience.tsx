export const Experience = () => {
  const experiencias = [
    {
      empresa: "ATI",
      cargo: "Estagiária Desenvolvimento Web",
      periodo: "09/2021 - 10/2023",
      funcoes: ["Realizacao 1", "Realizacao 2", "Realizacao 3"],
    },
    {
      empresa: "Fixtell",
      cargo: "Estagiária Suporte N1",
      periodo: "05/2023 - 07/2023",
      funcoes: ["Realizacao 1", "Realizacao 2", "Realizacao 5"],
    },
  ];
  return (
    <div className="min-h-[80vh] h-auto text-zinc-200 flex flex-col items-center justify-start gap-4 p-2">
      <h1 className="font-rubik text-xl uppercase">My Experience</h1>

      <div className="w-full flex flex-col gap-2">
        {experiencias.map((experiencia, index) => (
          <div key={index} className="border p-2 font-poppins">
            <div className="flex justify-between">
              <h1>{experiencia.empresa}</h1>
              <p className="text-xs">{experiencia.periodo}</p>
            </div>
            <p className="text-sm">{experiencia.cargo}</p>
            <ul>
              {experiencia.funcoes.map((funcao, index) => (
                <li key={index} className="text-sm">
                  <i className="fa-regular fa-circle-check mr-2"></i>
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
