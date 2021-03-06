# 「ゲーム依存症対策条例案」対応を実装
香川県議会による「ネット・ゲーム依存症対策条例案」が話題になっています。
これは18歳以下の子どもがネット・ゲーム依存状態になることを防ぐ目的で、ゲームのプレイ時間を平日は60分(休日は90分)までに制限する項目が盛り込まれています。

問題は、ゲームソフトを提供する事業者等に対しても上記の条例に対して協力する義務を課せられる可能性があります。
可決されたら令和2年4月1日より施行されるため、開発者としては早急に今後必要な対策が気になるところです。

## 条例により課せられる制限と対応
### 総利用時間の制限

 18歳未満

通常: 1日60分まで

休日: 1日90分まで (学校等の休業日)

### 利用時間帯の制限

15歳以下: 21:00まで (義務教育修了前)

18歳未満: 22:00まで

ただし、これらはあくまで基準で「子どもの年齢や各家庭の実情等を考慮し、話し合いの上で使用に関するルールづくりをする」という旨の記載があります。正確に準拠するのなら各家庭の状況に応じて規制の強化・緩和を行えるべきかもしれませんが、今回は考慮していません。

実装としてはGPSなどを用いたリアルタイムの位置情報を利用することが好ましいかと思います。


## About Resource
index.js：ホームページに埋め込む識別方法です。

Unity：https://github.com/nkjzm/Udon のクローンになります。
