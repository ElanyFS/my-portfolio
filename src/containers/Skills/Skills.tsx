import IconCloud from "@/components/ui/icon-cloud";

export const Skills = () => {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "mysql",
    "postgresql",
    "php",
    "vercel",
    "testinglibrary",
    "laravel",
    "jest",
    "git",
    "github",
    // "gitlab",
    "visualstudiocode",
    "figma",
  ];
  return (
    <section id="skills" className="h-auto text-center w-full lg:w-2/6 p-2">
      <h1 className="font-rubik text-2xl uppercase">
        My Skills
        {/* <i className="fa-solid fa-arrow-down fa-xl rotate-45 ml-1 text-secundaria "></i> */}
        <i className="fa-solid fa-screwdriver-wrench ml-3 text-secundaria"></i>
      </h1>
      <IconCloud iconSlugs={slugs} />
    </section>
  );
};
