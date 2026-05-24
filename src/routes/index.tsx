import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { BackgroundFX } from "@/components/portfolio/BackgroundFX";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abinaya A — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Abinaya A — B.Tech Information Technology student, React enthusiast, and full stack developer building modern, accessible web experiences.",
      },
      { property: "og:title", content: "Abinaya A — Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content:
          "B.Tech IT student crafting modern, accessible, and user-friendly web experiences with React, Java, and clean UI design.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Abinaya A — Developer Portfolio" },
      {
        name: "twitter:description",
        content: "React, Java, and modern UI projects by Abinaya A.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abinaya A",
          jobTitle: "Full Stack Developer",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "R.M.D Engineering College",
          },
          email: "mailto:abinaya7906@gmail.com",
          url: "/",
          sameAs: [
            "https://github.com/abinaya-79",
            "https://www.linkedin.com/in/abinaya-a-b87062332",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </>
  );
}
