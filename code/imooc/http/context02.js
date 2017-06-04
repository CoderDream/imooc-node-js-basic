/**
 * Created by CoderDream on 2017/6/4.
 */
function pet(words) {
    this.words = words;

    console.log(this.words);
    console.log(this === global);
    // console.log(this);
}

pet('...');