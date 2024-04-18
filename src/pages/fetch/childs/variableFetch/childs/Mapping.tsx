/*
부모 컴포넌트에서 input field 입력으로 인한 리렌더링이 발생하는데 현재 컴포넌트는 input 값과 무관하다.
--> 따라서 React.memo 를 사용하여 컴포넌트를 memoization 하여 불필요한 리렌더링을 방지한다.
* */
import React from 'react';

import { Ttodo } from '@/pages/fetch/types';

const MappingComponent = (props: { todos: Ttodo[] }) => {
  const { todos } = props;
  console.log('Mapping Component is render!');
  return (
    <>
      {todos.map((data) => (
        <div key={data.id}>
          <span>{data.title}</span>
          <span>{data.completed ? '완료' : '미완료'}</span>
        </div>
      ))}
    </>
  );
};
const MemorizeMapping = React.memo(MappingComponent);
export default MemorizeMapping;
