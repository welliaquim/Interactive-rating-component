export function Titulo(props) {
  console.log(props);
  return (
    <h1 className={props.cor}>
      {props.children} {props.gabriel}
    </h1>
  );
}
