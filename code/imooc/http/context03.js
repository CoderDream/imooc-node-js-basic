/**
 * Created by CoderDream on 2017/6/4.
 */
function Pet(words) {
    this.words = words;

    this.speak = function () {
        console.log(this.words);
        console.log(this);
    }
}

var cat = new Pet('Miao');
cat.speak();