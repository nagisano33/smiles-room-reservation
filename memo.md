# メモ
- パッケージの復元  
  `npm install` (そのまま)
- ワークスペースを指定してパッケージを追加  
  `npm install {package-name} --workspace={workspace-name}`
- 共通コンポーネントに tailwind css を適用
  1. パッケージに tailwind css を追加
  2. `/dist` に css を吐く
  3. package.json で吐き出した css を export
  4. 使用側 (NextJS) の package.json の dependencies に追加
  5. layout.tsx で吐き出した css を import