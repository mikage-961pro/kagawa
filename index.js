document.addEventListener('DOMContentLoaded', async () => {
    const message_id = document.getElementById('message')

    // 位置情報取得対応かチェック
    if (navigator.geolocation) {
        // 現在位置をPromiseとして取得  - (1)
        const postion = await getCurrentPositionAsPromise().catch(error => {
            console.log(error)
            message_id.innerHTML = '現在位置を取得できませんでした'
        })
        // 逆ジオコーディングにかける - (2)
        const json = await getPrefecture(postion.coords.latitude, postion.coords.longitude).catch(error => {
            console.log(error)
            message_id.innerHTML = '都道府県を特定できませんでした'
        })
        const prefecuture = json.result.prefecture.pname
        // 香川県なら県のホームページへ
        if (prefecuture === '香川県') {
            location.href = 'https://www.pref.kagawa.lg.jp/'
        }
        else if (prefecuture === '千葉県') {
            location.href = 'https://www.chibanippo.co.jp'
        }
        else if (prefecuture === '大阪府') {
            location.href = 'http://www.yoshimoto.co.jp/ngk'
        }
         else {
            location.href = 'https://imastodon.net/about/more'
        }
    } else {
        message_id.innerHTML = '位置情報取得を許可してください'
    }
})

async function getCurrentPositionAsPromise() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

const API_URL = 'http://www.finds.jp/ws/rgeocode.php'

async function getPrefecture(latitude, longitude) {
    const response = await fetch(`${API_URL}?json&lat=${latitude}&lon=${longitude}`,{
        mode: 'cors'
    })
    if (response.ok) {
        return response.json()
    } else {
        throw new Error(`${response.status}: ${response.statusText}`)
    }
}