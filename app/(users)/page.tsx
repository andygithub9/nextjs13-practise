import React, { Suspense } from "react";
import TodosList from "./todos/TodosList";

function Home() {
  return (
    <div>
      {/* react 的 Suspense 組件類似 loading 的效果，在 fetch data 完成之前會顯示 fallback props 指向的組件或 jsx 對象，fetch data 完成之後顯示 Suspense 組件包裹的 jsx (children) */}
      <Suspense fallback={<p className="text-red-500">Loading the Todos...</p>}>
        <h1>Loding Todos</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p className="text-blue-500">Loading the Shoping Trolley...</p>}>
        <h1>Loading Shopping Trolley</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
