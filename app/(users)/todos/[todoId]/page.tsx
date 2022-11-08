import React from "react";
import { Todo } from "../../../../typings";
import { notFound } from "next/navigation";

// https://beta.nextjs.org/docs/api-reference/segment-config#dynamicparams
export const dynamicParams = true;
// dynamicParams
// Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
// true (default): Dynamic segments not included in generateStaticParams are generated on demand.
// false: Dynamic segments not included in generateStaticParams will return a 404.

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    // { cache: "force-cache" } // SSG // default value
    // { cache: "no-store" } // SSR
    { next: { revalidate: 60 } } // ISR
  );
  const todo: Todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);

  // jsonplaceholder todos API 長度為 200 ，超過 200 返回空對象
  // https://jsonplaceholder.typicode.com/todos/201 返回空對象
  // 所以 空對象.id === undefined 為 true 時返回並調用 notFound 函數並將頁面導向該層目錄底下的 not-found.tsx
  if (!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;

// generateStaticParams 類似 next.js 12 的 getStaticPaths 用於生成路徑
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  // for this DEMO, we are only prebuilding the first 10 pages to avoid being rate limited by the DEMO API
  const trimmedTodos = todos.splice(0, 10);

  // generateStaticParams() 必須返回一個陣列: [{ slug: string }, { slug: string }, ...] 。 key 指的是檔案的目錄名 [slug]， value 指的是 url 要導向的路徑，類型必須是字串
  // value 不是字串的話會報錯 Error: A required parameter (todoId) was not provided as a string in getStaticPaths for /todos/[todoId] 錯誤：todoId 不是字串類型
  // [{ todoId: '1'}, {todoId: '2'}, ...]
  return trimmedTodos.map((todo) => ({ todoId: todo.id.toString() }));
}
