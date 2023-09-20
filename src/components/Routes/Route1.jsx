import "./Route.css";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
const Route1 = () => {
  return (
    <div className="route">
      <h1>Route1</h1>
      <div>
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
};

export default Route1;
