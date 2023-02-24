import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import MenuSection from "../components/MenuSection";

function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <MenuSection />
      <p style={{ color: "white" }}>
        Construction sites are full of potential dangers, not just for workers
        but for the public, too. Our services will help you maintain
        productivity while complying with federal, state, and local regulatory
        guidelines
      </p>
      {/* <ProjectManagementSection /> */}
    </>
  );
}

export default Home;
