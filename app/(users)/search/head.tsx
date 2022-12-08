import React from "react";

function Head() {
  return (
    // head.tsx 影響該層和該層以下的目錄的 head tag 中的 tags, 但如果子層或子層以下的目錄也有 head.tsx 則相同的 tags 會被覆蓋 
    <>
      <title>The Search Page</title>
    </>
  );
}

export default Head;
