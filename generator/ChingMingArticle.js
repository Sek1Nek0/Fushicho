let ChingMingArticleFisrtParagraphSentence = [
    '清明节是我国一年一度的节日，还是我国的传统节日，我们怀着沉痛的心情，怀念那些死去的革命烈士。',
    '“清明时节雨纷纷，路上行人欲断魂。借问酒家何处有，牧童遥指杏花村。”',
    '又一个清明节，又一个缅怀先烈的日子。',
    '清明节是我国中华民族的传统节日，清明节也叫寒食节。',
    '一个清明节，又一个缅怀先烈的日子。是革命先烈们为了民族独立和国家尊严献出了宝贵的生命。',
    '在这片富有光荣革命传统的土地上，涌现出一大批甘洒热血，为报效祖国而英勇献身的革命先烈，他们以大无畏的精神，投身于革命事业。',

];
let ChingMingArticleFirstParagraphSentences = [
    '虽然今天没有下雨，但每个人的心就像被雨淋湿了一样，冰冷冰冷的。',
    '每年的清明都是伴着蒙蒙细雨而至，它给人的感觉总是忧愁的。',
    '我们又来祭奠长眠的先烈的英灵。',
    '我们心潮起伏，思绪万千。',
    '先烈的鲜血染红了鲜艳的五星红旗，我们今天的幸福生活是无数鲜血和生命换来的。',
    '今年的清明节，似乎又多了一丝肃穆的气氛。',
    '革命先烈们为了今天的幸福生活，牺牲了自己宝贵的生命，所以我们要珍惜今天的幸福生活。',

];

let ChingMingArticleMainParagraphSentences = [
    '热血铸丰碑，英魂垂青史。我们今天的美好幸福的生活都是这些革命先烈们用他们的鲜血、生命换来的啊。',
    '我们秉承先烈遗志，在爱国主义的伟大旗帜下立志、立德、立言、立行，为建设更加繁荣、平安、文明、和谐的祖国作出更大的贡献。',
    '我的心里想着：原来革命战争时期，有无数位革命烈士都为了革命事业都冲锋陷阵，与敌人进行战斗。',
    '那些烈士，有的手持冲锋枪，向敌人发起猛烈的进攻；有的扑在沙袋后面，用冲锋枪向敌人发射仇恨的子弹；有的冲了上去，与敌人展开了殊死的搏斗。',
    '烈士，这是一个多么神圣的称谓啊，是他们，用鲜血染成了五星红旗；是他们，把小日本儿赶出中原；又是他们，使一个社会主义国家屹立在东方！',
    '对于烈士那种宁死不屈、视死如归，为了祖国不怕牺牲的精神，我充满了敬意!我想我们也要学习先烈的精神，多多磨练自己的意志，让自己也成为一个坚强勇敢的人！',
    '虽然他们都牺牲了，但们的精神永远像士兵一样为我们的祖国值班站岗。',
    '我们应该努力学习，珍惜时间，珍惜今天的美好生活。',
];

let ChingMingArticleEndingParagraph = [
    '思，在清明节，面对着烈士们的网上陵墓，“清明时节雨纷纷，路上行人欲断魂……”这首流芳百世的诗，在我耳边久久回荡……',
    '我们要珍惜今天的好时光。让我们永远的记住，没有革命先烈的英勇献身，就没有新中国。没有革命先烈的前赴后继，就没有我们今天的幸福生活。忘记了过去，就意味着背叛。忘记了先辈们的丰功伟绩，也同样是背叛。',
    '我的思绪久久不能平静，我想这些英雄是为了解放和建设安康而牺牲的，在这来之不易的美好生活中，我要好好学习，将来一定把安康建设得更美好，把我们的祖国建设得更强大。',
    '我庄严宣誓：发扬革命传统，继承英雄业绩，牢记人民期望，立志报效祖国。我们要在实践中学习真知，锻炼意志，培养品德，全面发展，成为继往开来、大有作为的新一代！',
    '清明节，我们缅怀先辈——留恋、悲叹、振奋!当英雄们入土为安之时，他们的人生就告一段落了，而他们的故事，会世代流传，留给人们无尽的怀念……',
];

/**
 * @return {string}
 */
function ChingMingArticleGenerateFirstParagraph() {
    let usedRandomNumber = [randomNumber(ChingMingArticleFirstParagraphSentences.length)][0];
    //console.log(usedRandomNumber);
    //console.log(firstParagraph);
    return ChingMingArticleFisrtParagraphSentence[randomNumber(ChingMingArticleFisrtParagraphSentence.length)[0]] + ChingMingArticleFirstParagraphSentences[usedRandomNumber[0]] + ChingMingArticleFirstParagraphSentences[usedRandomNumber[1]];
}

/**
 * @return {string}
 */
function ChingMingArticleGenerateMainParagraph() {
    let usedRandomNumber = [randomNumber(ChingMingArticleMainParagraphSentences.length)][0];
    //console.log(usedRandomNumber);
    //console.log(main);
    return ChingMingArticleMainParagraphSentences[usedRandomNumber[0]] + ChingMingArticleMainParagraphSentences[usedRandomNumber[1]] + ChingMingArticleMainParagraphSentences[usedRandomNumber[2]] + ChingMingArticleMainParagraphSentences[usedRandomNumber[3]];
}

function ChingMingArticleGenerateChingMingArticleEndingParagraph() {
    let usedRandomNumber = [randomNumber(ChingMingArticleEndingParagraph.length)][0];
    //console.log(usedRandomNumber);
    //console.log(ending);
    return ChingMingArticleEndingParagraph[usedRandomNumber[0]];
}

/**
 * @return {string}
 */
function ChingMingArticleGenerate() {
    return ChingMingArticleGenerateFirstParagraph() + '\n' + ChingMingArticleGenerateMainParagraph() + '\n' + ChingMingArticleGenerateChingMingArticleEndingParagraph();
}

function ChingMingArticleGenerated() {
    document.getElementById("generatedContent").value = ChingMingArticleGenerate();
}

function randomNumber(num) {
    const ary = [];					//创建一个空数组用来保存随机数组
    for (let i = 0; i < num; i++) {			//按照正常排序填充数组
        ary[i] = i;
    }
    ary.sort(function () {
        return 0.5 - Math.random();		//返回随机正负值
    });
    return ary;					//返回数组
}