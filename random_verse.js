const welcome_message = "The Bible Verse of the Day is: ";
//When adding a Bible Verse Make Sure First Word is Chapter!!
const bible_verses = [`Genesis 1:1 "In the beginning God created the heaven and the earth"`,"Revelations 5:10","John 2:1"];
const random_FirstWord = () => {
    const i = Math.floor(Math.random() * bible_verses.length);
    const chosenVerse = bible_verses[i];
    const chosenVerseChapter = bible_verses[i].split(" ")[0];
    return {chosenVerse,
            chosenVerseChapter};
};

const result = random_FirstWord();

console.log(`${welcome_message} ${result.chosenVerse}`);
console.log(result.chosenVerseChapter);


