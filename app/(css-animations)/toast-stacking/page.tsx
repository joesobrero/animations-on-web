import CodeSnippet from "../../_components/display/code-snippet";
import { Toast } from "../../_components/display/toast";
import "../../../styles/toast-stack.css";

export default function ToastStacking() {
  const LENGTH = 3;

  return (
    <div className="p-16 flex-col gap-16 flex">
      <div className="grid grid-cols-1 grid-rows-1">
        <Toast
          title="Toast"
          description="This is a toast"
          variant="success"
          style={{
            transform: "translate(0, -20%) scale(0.9)",
          }}
        />
        <Toast
          title="Toast"
          description="This is a toast"
          variant="success"
          style={{
            transform: "translate(0, -10%) scale(0.95)",
          }}
        />
        <Toast
          title="Toast"
          description="This is a toast"
          variant="success"
          style={{
            transform: "translate(0, 0px) scale(1)",
          }}
        />
      </div>
      <CodeSnippet>
        {`
/* my solution */
.toast-stack-card {
  transform: "translate(0, 0%) scale(1)", 
}
.toast-stack-card:nth-child(1) {
  transform: "translate(0, -10%) scale(0.95)";
}
.toast-stack-card:nth-child(2) {
  transform: "translate(0, -20%) scale(0.9)";
}
        `}
      </CodeSnippet>
      <div className="grid">
        {new Array(LENGTH).fill(0).map((_, i) => (
          <div
            className="toast-stack-card bg-base-100"
            key={i}
            style={{ "--index": LENGTH - 1 - i } as React.CSSProperties}
          />
        ))}
      </div>
      <CodeSnippet>
        {`
/* the solution */
.toast-stack-card {
  --scale-increment: 0.05;
  --translate-increment: -13%;
  transform: scale(calc(1 - var(--index) * var(--scale-increment)))
        translateY(calc(var(--index) * var(--translate-increment)));
}
        `}
      </CodeSnippet>
    </div>
  );
}
