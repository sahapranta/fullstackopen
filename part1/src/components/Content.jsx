import Part from "./Part";

const Content = ({ parts }) => {
  return <>{parts && parts.map((part, i) => <Part part={part} key={i} />)}</>;
};
export default Content;
