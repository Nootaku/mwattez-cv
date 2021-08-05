import SkillsetCard from "./skillset/skillsetCard";
import "./css/skillset.css";

// Stateless Functional Component
const Skillset = () => (
  <div className="row">
    <SkillsetCard title="Languages" type="languages" />
    <SkillsetCard title="Technical Stack" type="technical_stack" />
    <SkillsetCard title="Other IT-skills" type="other_it" />
    <SkillsetCard title="Softskills" type="softskills" />
  </div>
);

export default Skillset;
