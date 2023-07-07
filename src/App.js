import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Marc",
    location: "Chisinau, Moldova",
    email: "marclupanc@gmail.com",
    availability: "Disponibil",
    brand:
      "Având experiența de aproximativ 5 ani am învățat să organizezez propriul volum de muncă în mod eficient și să prioritizez sarcinile.\n" +
        "Învățarea de noi tehnologii și urmărirea evoluțiilor pieței este unul din prioritățile mele principale. Sunt pasionat să ofer servicii de calitate înaltă clienților mei.\n" +
        "Capabil să lucrez în echipă.\n" +
        "Mă adaptez rapid, sunt dispus să învăț rapid noi tehnici și tehnologii. Am un pic de creativitate și imaginație :) .",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
