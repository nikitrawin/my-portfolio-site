import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import ProjectsPage from "./pages/ProjectsPage";


function App() {
  return (
<div>

    <Navbar />
    {/* <Home /> */}
    <ProjectsPage />
    <Footer />


</div>

  );
}

export default App;
