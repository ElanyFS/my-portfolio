import { About } from "@/containers/About/About";
import { Home } from "../containers/Home/Home";
import "./layouts.css";
import { Skills } from "@/containers/Skills/Skills";
import { Certificates } from "@/containers/Certificates/Certificates";
import { Projects } from "@/containers/Projects/Projects";
import { Contact } from "@/containers/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export const Layout = () => {
  return (
    <main className="layout bg-principal min-h-screen h-auto" id="main">
      {/* <Home /> */}
      {/* <About /> */}
      <div className="min-h-[70vh] flex flex-col lg:flex-row justify-center sm:justify-around items-start gap-4 text-zinc-200 p-3">
        {/* <Skills /> */}
        {/* <Certificates /> */}
      </div>
      {/* <Experience /> */}

      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
};
