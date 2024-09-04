import { useEffect, useState } from "react";

const useSnippet = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await fetch("/snippet.json");
        const data = await response.json();
        const localStorageSnippets = JSON.parse(localStorage.getItem('snippets')) || [];
        const allSnippets = [...data, ...localStorageSnippets];
        setSnippets(allSnippets);
      } catch (error) {
        console.error("Error fetching snippets:", error);
      }
    };

    fetchSnippets();
  }, []);

  return [snippets];
};

export default useSnippet;
