import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import useSnippet from "../Hooks/useSnippet";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Snippats = () => {
  const [snippets] = useSnippet();

  return (
    <section className="p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {snippets.map((snippet) => (
          <div key={snippet.title} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{snippet.title}</h2>
              <p className="text-gray-500 mb-4">{snippet.date}</p>
              <div className="mb-4">
                <button className="bg-violet-500 text-white px-4 py-1 rounded-sm text-sm">
                  {snippet.category}
                </button>
              </div>
              <p className="text-gray-700 mb-4">{snippet.description}</p>
              <div className="code-editor">
                <SyntaxHighlighter language={snippet.language || 'javascript'} style={docco}>
                  {snippet.code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Snippats;
