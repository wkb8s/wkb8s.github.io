/*
 * main.js : ターミナルを再現
 */
var terminal = null;					// ターミナル画面をtextareaタグで再現
var screenWidth, screenHeight;	// ターミナルの幅と高さ（ブラウザの幅と高さ取得用）
var operater = "Daiki-Wakabayashi-Website ~ % ";		// コマンド入力時のプロンプト文字
var value = "";							// ターミナル画面上の文字列取得用

/*
 * ターミナルのサイズをブラウザ画面いっぱいに設定する関数
 */
function setTerminal(){
	// ブラウザのウインドウサイズを取得
	let innerWidth =  window.innerWidth;
	let innerHeight = window.innerHeight;
	
	// textareaのサイズをウインドウにフィットさせる
	terminal.style.innerWidth  = innerWidth + "px";
	terminal.style.innerHeight = innerHeight + "px";
}

/*
 * 起動時の処理
 */
window.addEventListener("load", function(){
	// textareaのDOM取得
	terminal = document.getElementById("terminal");

	// ターミナルのサイズをブラウザ画面いっぱいに設定
	setTerminal();

	// ターミナルの初期状態（textareaタグの文字列にプロンプトを表示）
	terminal.value = operater;
	
	// ターミナル（textareaタグ）にフォーカス ==>カーソルが点滅する
	terminal.focus();
});

/*
 * ブラウザ画面をリサイズした際に再度ターミナルのサイズをブラウザ画面いっぱいにする関数
 */
window.addEventListener("resize", function(){
	setTerminal();
});


/*
 * ターミナル上（textareaタグ）でキー入力した際のイベント処理
 */
window.addEventListener("keyup", function(e){
	// キー番号を取得
	let key = e.keyCode;
	
	// Enterキーが押されたとき
	if(key == 13){
		value = terminal.value;	// textareaの文字列を取得
	
		if(value.match(/\n$/) == null){	// 漢字変換でEnterキーを押した場合
			return;										// 取得した文字の最後が改行文字ではないので何もしない
		}
		// 新しいプロンプトを追加表示
		terminal.value = value + operater;
		console.log("[" + value + "]");

		// フォーカスを常にtextareaにしておく
		terminal.focus();
	}
});
