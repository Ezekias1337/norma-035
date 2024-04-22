// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
import Examen from "../components/page-specific/tomar-examen/Examen";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
//import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
// CSS
import "../css/page-specific/tomar-examen.scss";

const TomarExamen = () => {
  return (
    <div className="tomar-examen">
      <NavBar />

      <div className="tomar-examen-wrapper padding-left-and-right">
        <PageHeader title="Tomar Examen" />
        <Examen />
      </div>

      <Footer />
    </div>
  );
};

export default TomarExamen;
