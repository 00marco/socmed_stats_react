import {useEffect, useState} from 'react';

function App() {
  interface Tree {
    id: number;
    site: string;
    handle: string;
  }

  const [trees, setTrees] = useState<Tree[]>([]);
  const fetchTrees = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/followTarget');
    const data = await response.json();
    setTrees(data);
  };

  useEffect(() => {
    fetchTrees();

  }, []);

  return (
      <>
        <div>List of trees</div>
        {trees.map((trees:Tree) => (
          <div key={trees.id}>
            <div>{trees.site}</div>
            <div>{trees.handle}</div>
          </div>
        ))}
      </>
  )
}

export default App;

