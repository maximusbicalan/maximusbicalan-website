import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
const App: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'https://via.placeholder.com/300',
      description: "This is a detailed description of Project 1.",
    },
    {
      title: 'Project 2',
      image: 'https://via.placeholder.com/300',
      description: "This is a detailed description of Project 2.",
    },
    {
      title: 'Project 3',
      image: 'https://via.placeholder.com/300',
      description: "This is a detailed description of Project 3.",
    },
    {
      title: 'Project 4',
      image: 'https://via.placeholder.com/300',
      description: "This is a detailed description of Project 4.",
    },
    {
      title: 'Project 5',
      image: 'https://via.placeholder.com/300',
      description: "This is a detailed description of Project 5.",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for the fixed navbar */}
        <Hero />

        <About />
        <Projects projects={projects} />
        <Skills />
        <Footer />
      </main>
    </>
  );
};

export default App;