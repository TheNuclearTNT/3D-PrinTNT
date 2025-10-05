import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            3D Creative Studio
          </Link>
          <div className="flex space-x-8">
            <Link
              to="/designs"
              className="text-foreground hover:text-primary transition-colors"
            >
              Designs
            </Link>
            <Link
              to="/about-me"
              className="text-foreground hover:text-primary transition-colors"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
