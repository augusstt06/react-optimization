import React, { useEffect, useState } from 'react';

import { Ttodo } from '@/pages/fetch/types';

const VariableFetch = () => {
  console.log('VariableFetch Component is render!');
  const [isView, setIsView] = useState<boolean>(false);
  const prevIsViewRef = React.useRef<boolean>(isView);
  const [todos, setTodos] = useState<Ttodo[]>([]);

  useEffect(() => {
    if (!prevIsViewRef.current && isView) {
      console.log('Data Fetching...');
      const fetchData = async () => {
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/todos');
          const data = (await res.json()).slice(0, 5);
          console.log(data);
          setTodos(data);
        } catch (err) {
          console.log(err);
        }
      };
      void fetchData();
    }
    prevIsViewRef.current = isView;
  }, [isView]);

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
