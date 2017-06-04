/**
 * Created by CoderDream on 2017/6/4.
 */
var pet = {
    words:'...',
    speak: function () {
        console.log(this.words);
        console.log(this === pet);
    }
}

pet.speak()