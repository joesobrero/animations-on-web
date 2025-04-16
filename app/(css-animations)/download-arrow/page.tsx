import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/download-arrow.css";
import CodeSnippet from "@/app/_components/display/code-snippet";

export default function DownloadArrow() {
  return (
    <div className="flex flex-col gap-12">
      <button className="cursor-pointer download-button border-base-300 border">
        <div className="grid place-items-center w-10 h-10 arrow-one">
          <FontAwesomeIcon icon={faArrowDown} className="w-4 h-4" />
        </div>
        <div className="grid place-items-center w-10 h-10 arrow-two ">
          <FontAwesomeIcon icon={faArrowDown} className="w-4 h-4" />
        </div>
      </button>
      <CodeSnippet language="css">
        {`
.arrow-one, .arrow-two {
  transition: transform 0.2s ease-in-out;
}

.arrow-one {
  transform: translateY(0%);
}
.arrow-two {
  transform: translateY(-200%);
}

.download-button:hover {
  .arrow-one {
    transform: translateY(100%);
  }
  .arrow-two {
    transform: translateY(-100%);
  }
}
        `}
      </CodeSnippet>
    </div>
  );
}
