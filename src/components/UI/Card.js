import "./Card.css";
// umoznuje cistou kompozici

const Card = (props) => {
  const classes = "card " + props.className; // nastavime vsechny tridy prvkum

  return <div className={classes}>{props.children}</div>;
};
// props.children nam zajisti, aby se nam v ramci divu 'card' zobrazil i obsah, ktery mame nadefinovany jinde
export default Card;
