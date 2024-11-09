export const Certificates = () => {
  const certificados = [
    {
      titulo: "Programa Trilha Inova - Front End",
      info: "Realizado pelo Programa Inova Maranhão - SECTI",
      data: "XX/XX à XX/XX",
      link: "",
    },
    {
      titulo: "NLW Pocket: Javascript - Full-stack Intermediário",
      info: "Evento Rocketseat",
      data: "XX/XX à XX/XX",
      link: "",
    },
    {
      titulo: "NLW Pocket: Javascript - Full-stack Intermediário",
      info: "Evento Rocketseat",
      data: "XX/XX à XX/XX",
      link: "",
    },
  ];
  return (
    <section id="certificates" className="min-h-[70vh] text-zinc-200 w-5/6 sm:w-3/6 space-y-3 p-2">
      <h1 className="font-rubik text-2xl uppercase text-center">
        Main Certificates
        <i className="fa-solid fa-award ml-3 text-secundaria"></i>
        {/* <i className="fa-solid fa-arrow-right fa-xl rotate-45 ml-1 text-secundaria "></i> */}
      </h1>

      <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2">
        {certificados.map((certificado, index) => (
          <div
            key={index}
            className="border-l p-3 w-full flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-rubik uppercase text-xs">
                {certificado.titulo}
              </h2>
              <span className="font-poppins text-[10px] text-right">
                {certificado.data}
              </span>
            </div>
            <p className="font-poppins text-xs">{certificado.info}</p>
            <a
              href={certificado.link}
              className="font-poppins text-[10px] underline underline-offset-4 hover:text-secundaria"
            >
              VER CERTIFICADO
              <i className="fa-solid fa-arrow-up ml-1 rotate-45"></i>
              {/* <i className="fa-solid fa-angle-down ml-1"></i>
              <i className="fa-solid fa-angle-up ml-1"></i> */}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
