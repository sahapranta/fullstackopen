const Total = ({ parts }) => {
  return (
    <p>Number of exercises {parts.reduce((ac, m) => (ac += m.exercises), 0)}</p>
  );
};

export default Total;
