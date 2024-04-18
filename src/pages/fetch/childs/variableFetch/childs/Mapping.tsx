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
export default MappingComponent;
