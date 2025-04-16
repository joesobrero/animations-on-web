import CodeSnippet from "../../_components/display/code-snippet";
import "../../../styles/simple-transform.css";

export default function SimpleTransform() {
  return (
    <div className="flex flex-col gap-12">
      <h1>Simple Transform</h1>
      <div className="w-14 h-14 bg-teal-600 rounded-full box-mine" />
      <CodeSnippet>
        {`
.box-mine {
  transition: transform 0.2s ease;
}
.box-mine:hover {
  transform: translate(0, -20%);
}
        `}
      </CodeSnippet>
      <div className="box-solution">
        <div className="box-solution-inner" />
      </div>
      <CodeSnippet>
        {`
        .box-solution:hover .box-solution-inner {
  transform: translateY(-20%);
}
.box-solution-inner {
  /* ... */
  transition: transform 200ms ease;
}`}
      </CodeSnippet>
    </div>
  );
}
