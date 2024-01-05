# react-r3f-advanced004
React+TypeScript+R3Fのtutorial応用編4(glTFで3Dアニメーション(モデルとモーション別々ファイル読込み))

![](https://storage.googleapis.com/zenn-user-upload/b77b3c681d90-20240105.png)

# まとめ
## 1.アニメーションの使い方
```mermaid
graph TB
    A[useGLTFでモデル読込み\nnodes, materials] --> B(useGLTFでモーション読込み\nアニメーションクリップ生成\nnanimations)
    B --> C(アニメーションクリップから\nアニメーションアクション生成)
    C --> D(アニメーションアクション.play)
```

## 2.アニメーションアクションで設定する文字列の調べ方
```ts:App.tsx
    actions['Armature|mixamo.com|Layer0']!.play()
```
↑ここで設定する文字列('Armature|mixamo.com|Layer0')は、Blenderで開いて確認する。
![](https://storage.googleapis.com/zenn-user-upload/7fc722c82ff0-20240105.png)

