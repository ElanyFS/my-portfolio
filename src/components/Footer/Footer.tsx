import './footer.css';

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="text-zinc-200 flex flex-col items-center justify-around gap-4 py-2">
      <div className="w-5/6 flex flex-col sm:flex-row sm:justify-between items-start gap-2 font-poppins">
        <p>Elany Ferreira</p>
        <ul className="flex justify-between gap-4">
          <li className="link-footer cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
          <li className="link-footer cursor-pointer" onClick={() => scrollToSection("about")}>About</li>
          <li className="link-footer cursor-pointer" onClick={() => scrollToSection("projects")}>Projects</li>
          <li className="link-footer cursor-pointer" onClick={() => scrollToSection("skills")}>Skills</li>
          <li className="link-footer cursor-pointer" onClick={() => scrollToSection("certificates")}>Certificates</li>
          <li className="link-footer cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>

      <div>
        <p className="font-poppins text-sm">Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
