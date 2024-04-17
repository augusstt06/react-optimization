import React, { useCallback, useState } from 'react';

import { Ttodo } from '@/pages/fetch/types';

const VariableFetch = () => {
  console.log('VariableFetch Component is render!');
  const [isView, setIsView] = useState<boolean>(false);
  const [todos, setTodos] = useState<Ttodo[]>([]);
  const fetchData = useCallback(async () => {
    try {
      console.log('Data Fetching...');
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      console.log(data);
      setTodos(data.slice(0, 5));
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (isView) void fetchData();
  return (
    <section>
      <h3>Fetch Data when data changed</h3>
      <button onClick={() => setIsView(!isView)}>{isView ? 'Close View' : 'View Data'}</button>
      {isView
        ? todos.map((data) => (
            <div key={data.id}>
              <span>{data.title}</span>
              <span>{data.completed ? '완료' : '미완료'}</span>
            </div>
          ))
        : null}
    </section>
  );
};
const MemorizeVariableFetch = React.memo(VariableFetch);
export default MemorizeVariableFetch;
