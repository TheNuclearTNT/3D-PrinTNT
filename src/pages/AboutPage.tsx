import NavBar from "@/components/NavBar";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen pt-16">
        <About />
      </div>
    </>
  );
};

export default AboutPage;
