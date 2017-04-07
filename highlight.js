var elements = document.getElementsByTagName('*');
words = "あの いま今 えいご がくせい 〜ご〜語 こうこう ごご午後 ごぜん 〜さい 〜さん 〜じ〜時 〜じん せんせい せんもん そうです だいがく でんわ ともだち なまえ なん／なに にほん 〜ねんせい はい はん半 ばんごう りゅうがくせい わたし アメリカ イギリス オーストラリア かんこく スウェーデン ちゅうごく かがく科学 アジアけんき こくさいかんけ コンピューター じんるいがく せいじ ビジネス ぶんがく れきし しごと仕事 いしゃ医者 かいしゃいん こうこうせい しゅふ主婦 だいがくいん だいがくせい べんごし おかあさん おとうさん おねえさん おにいさん いもうと おとうと"
console.log("dasdasdasdasdas")
$("body").unmark({
  done: function() {
    $("body").mark(words);
  }
});
// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];

//     for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j];

//         if (node.nodeType === 3) {
//             var text = node.nodeValue;
//             var replacedText = text.replace(/the/gi, '[new word or phrase]');

//             if (replacedText !== text) {
//                 element.replaceChild(document.createTextNode(replacedText), node);
//             }
//         }
//     }
// }

