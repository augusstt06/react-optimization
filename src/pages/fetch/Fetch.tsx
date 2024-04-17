/*
api 호출 로직의 최적화
1. 페이지 렌더링시 호출
2. 특정 변수에 반응하여 호출
* */
import InitialFetch from '@/pages/fetch/childs/InitialFetch.tsx';
// import MemorizeVariableFetch from '@/pages/fetch/childs/VariableFetch.tsx';
// import { lazy } from 'react';
// const InitialFetch = lazy(() => import('./childs/InitialFetch.tsx'));

const Fetch = () => {
  console.log('Parent Component is render!');
  return (
    <section>
      <h3>Fetch Optimization</h3>
      {/*<MemorizeVariableFetch />*/}
      <br />
      <InitialFetch />
    </section>
  );
};
export default Fetch;
