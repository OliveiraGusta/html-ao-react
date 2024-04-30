export default function Section(props) {
  return (
    <section>
      <div>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <ul class={props.className}>{props.children}</ul>
      </div>
    </section>
  );
}
