import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
    const convertMarkdown = async () => {
      try {
        const response = await axios.post("http://localhost:3001/convert", {
          markdown,
        });
        setHtml(response.data.html);
      } catch (error) {
        console.error("Error converting markdown to HTML:", error);
      }
    };

    if (markdown) {
      convertMarkdown();
    } else {
      setHtml("");
    }
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Editor</h1>
      </header>
      <div className="container">
        <textarea className="editor" value={markdown} onChange={handleChange} />
        <div className="preview" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export default App;
