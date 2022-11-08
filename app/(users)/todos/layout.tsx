import React from "react";
import TodosList from "./TodosList";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <div>
        {/* next13 還沒有定義 server component 的 type ，所以先用 @ts-ignore 註解來抑制 ts 的警告 */}
        {/* @ts-ignore */}
        <TodosList />
      </div>

      <div className="flex-1">{children}</div>
    </main>
  );
}

export default RootLayout;
