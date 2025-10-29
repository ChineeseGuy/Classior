import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";

function Controls({ targetId, titleId, initialAlign, initialText }) {
  const [align, setAlign] = useState(initialAlign || "left");
  const [text, setText] = useState(initialText || "");

  // Apply alignment class to the Flask paragraph without re-rendering it
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.classList.remove("align-left","align-center","align-right");
    el.classList.add(`align-${align}`);
  }, [align, targetId]);

  // Update text content of the Flask paragraph/title
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) el.textContent = text;
  }, [text, targetId]);

  return (
    <div>
      <strong>Layout controls (React):</strong>
      <div style={{ display: "inline-flex", gap: 8, marginLeft: 8 }}>
        <button onClick={() => setAlign("left")}>Left</button>
        <button onClick={() => setAlign("center")}>Center</button>
        <button onClick={() => setAlign("right")}>Right</button>
      </div>

      <div style={{ marginTop: 8 }}>
        <label>
          Edit text:&nbsp;
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type new content..."
          />
        </label>
      </div>

      <div style={{ marginTop: 8 }}>
        <button onClick={() => {
          const t = document.getElementById(titleId);
          if (t) t.textContent = "Title changed by React";
        }}>
          Change Title
        </button>
      </div>
    </div>
  );
}

// Read initial props injected by Flask
const dataTag = document.getElementById("initial-props");
const props = dataTag ? JSON.parse(dataTag.textContent) : {};

// Mount only into the control slot; we don't re-render Flask content
const mount = document.getElementById("layout-controls");
if (mount) {
  createRoot(mount).render(
    <Controls
      targetId={props.targetId}
      titleId={props.titleId}
      initialAlign={props.initialAlign}
      initialText={props.initialText}
    />
  );
}
