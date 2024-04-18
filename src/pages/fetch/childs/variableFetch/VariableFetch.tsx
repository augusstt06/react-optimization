import React, { useEffect, useRef, useState } from 'react';

import MemorizeInput from '@/components/CustomInput.tsx';
import MemorizeMapping from '@/pages/fetch/childs/variableFetch/childs/Mapping.tsx';
import { Ttodo } from '@/pages/fetch/types';

const VariableFetch = () => {
  console.log('VariableFetch Component is render!');
  const [isView, setIsView] = useState<boolean>(false);
  const prevIsViewRef = useRef<boolean>(isView);
  const [todos, setTodos] = useState<Ttodo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

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
      {isView ? <MemorizeMapping todos={todos} /> : null}
      <h3>{inputValue}</h3>
      <MemorizeInput type='text' setValue={setInputValue} placeholder='write value' />
    </section>
  );
};
const MemorizeVariableFetch = React.memo(VariableFetch);
export default MemorizeVariableFetch;
