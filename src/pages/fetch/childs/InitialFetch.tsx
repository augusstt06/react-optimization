import { useEffect, useState } from 'react';

import { Ttodo } from '@/pages/fetch/types';

const InitialFetch = () => {
  console.log('Initial Fetch Component is render!');

  const [todos, setTodos] = useState<Ttodo[]>([]);
  const fetchData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = (await res.json()).slice(0, 5);
      setTodos(data);
      return;
    } catch (err) {
      console.log(err);
      return;
    }
  };

  useEffect(() => {
    void fetchData();
  }, []);

  return (
    <section>
      <h3> Fetch Data when Component rendering</h3>
      {todos.map((data) => (
        <div key={data.id}>
          <span>{data.title}</span>
          <span>{data.completed ? '완료' : '미완료'}</span>
        </div>
      ))}
    </section>
  );
};
export default InitialFetch;
