import React from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";
export default function RichTextEditor({ setValue, configuration }) {
  const editor = useRef(null);
  return (
    <div>
      <JoditEditor
        className="transparent"
        ref={editor}
        onChange={(content) => setValue(content)}
        config={configuration}
      />
    </div>
  );
}
