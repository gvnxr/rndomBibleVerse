const welcome_message = "The Bible Verse of the Day is:";
//When adding a Bible Verse Make Sure First Word is Chapter!!
const bible_verses = [`Exodus 14:14
"The Lord will fight for you; you need only to be still."`,`Exodus 33:14
"The Lord replied, “My Presence will go with you, and I will give you rest.”"`,`Genesis 15:6
"Abram believed the Lord, and he credited it to him as righteousness."
`,`Genesis 28:15
"I am with you and will watch over you wherever you go, and I will bring you back to this land. I will not leave you until I have done what I have promised you."`,`Leviticus 19:18
"Do not seek revenge or bear a grudge against anyone among your people, but love your neighbor as yourself. I am the Lord."
`,`Leviticus 20:7
"Consecrate yourselves and be holy, because I am the Lord your God."`,`Numbers 6:24–25
"The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you."`,`Numbers 23:19
"God is not human, that he should lie, not a human being, that he should change his mind. Does he speak and then not act? Does he promise and not fulfill?"`,`Deuteronomy 6:5
"Love the Lord your God with all your heart and with all your soul and with all your strength."
`,`Deuteronomy 31:6
"Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you."`,
`Joshua 1:9
"Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."`,
`Joshua 24:15
"But as for me and my household, we will serve the Lord."`,
`Judges 2:16
"Then the Lord raised up judges, who saved them out of the hands of these raiders."
`,`Judges 6:12
"When the angel of the Lord appeared to Gideon, he said, “The Lord is with you, mighty warrior.”"`,
`Ruth 1:16
"But Ruth replied, “Don’t urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.”"`,
`Ruth 2:12
"May the Lord repay you for what you have done. May you be richly rewarded by the Lord, the God of Israel, under whose wings you have come to take refuge."`,
`1 Samuel 16:7
"But the Lord said to Samuel, “Do not consider his appearance or his height, for I have rejected him. The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart.”"`,
`1 Samuel 12:24
"But be sure to fear the Lord and serve him faithfully with all your heart; consider what great things he has done for you."
`,
`2 Samuel 7:22
"How great you are, Sovereign Lord! There is no one like you, and there is no God but you, as we have heard with our own ears."`,
`2 Samuel 22:31
"As for God, his way is perfect: The Lord’s word is flawless; he shields all who take refuge in him."`,
`1 Kings 8:61
"And may your hearts be fully committed to the Lord our God, to live by his decrees and obey his commands, as at this time."`,
`1 Kings 3:9
"So give your servant a discerning heart to govern your people and to distinguish between right and wrong. For who is able to govern this great people of yours?"`,
`2 Kings 6:16
"“Don’t be afraid,” the prophet answered. “Those who are with us are more than those who are with them.”"`,
`1 Chronicles 16:11
"Look to the Lord and his strength; seek his face always."`,
`1 Chronicles 29:11
"Yours, Lord, is the greatness and the power and the glory and the majesty and the splendor, for everything in heaven and earth is yours."`,
`2 Chronicles 7:14
"If my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and will heal their land.
"`,
`2 Chronicles 15:7
"But as for you, be strong and do not give up, for your work will be rewarded."`,
`Ezra 7:10
"For Ezra had devoted himself to the study and observance of the Law of the Lord, and to teaching its decrees and laws in Israel."
`,
`Ezra 3:11
"With praise and thanksgiving they sang to the Lord: “He is good; his love toward Israel endures forever.”"`,
`Nehemiah 8:10
"Nehemiah said, “Go and enjoy choice food and sweet drinks, and send some to those who have nothing prepared. This day is holy to our Lord. Do not grieve, for the joy of the Lord is your strength.”"`,
`Nehemiah 1:5
"Then I said: “Lord, the God of heaven, the great and awesome God, who keeps his covenant of love with those who love him and keep his commandments…”"`,
`Esther 4:14
"And who knows but that you have come to your royal position for such a time as this?"`,
`Esther 2:17
"Now the king was attracted to Esther more than to any of the other women, and she won his favor and approval more than any of the other virgins."`,
`Job 1:21
"“The Lord gave and the Lord has taken away; may the name of the Lord be praised.”"`,
`Job 23:10
"But he knows the way that I take; when he has tested me, I will come forth as gold."`,
`Psalm 23:1
"The Lord is my shepherd, I lack nothing."`,
`Psalm 46:1
"God is our refuge and strength, an ever-present help in trouble."`,
`Proverbs 3:5–6
"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."`,
`Proverbs 18:10
"The name of the Lord is a fortified tower; the righteous run to it and are safe."`,
`Ecclesiastes 3:1
"There is a time for everything, and a season for every activity under the heavens."`,
`Ecclesiastes 7:14
"When times are good, be happy; but when times are bad, consider this: God has made the one as well as the other."`,
`Song of Solomon 2:4
"Let him lead me to the banquet hall, and let his banner over me be love."`,
`Song of Solomon 8:7
"Many waters cannot quench love; rivers cannot sweep it away. If one were to give all the wealth of one’s house for love, it would be utterly scorned."`,
`Isaiah 40:31
"But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."`,
`Isaiah 41:10
"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."`,
`Jeremiah 29:11
"“For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.”"`,
`Jeremiah 17:7
"But blessed is the one who trusts in the Lord, whose confidence is in him."`,
`Lamentations 3:22–23
"Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness."`,
`Lamentations 5:21
"Restore us to yourself, Lord, that we may return; renew our days as of old."`,
`Ezekiel 36:26
"I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh."`,
`Ezekiel 18:32
"For I take no pleasure in the death of anyone, declares the Sovereign Lord. Repent and live!"`,
`Daniel 3:17
"If we are thrown into the blazing furnace, the God we serve is able to deliver us from it, and he will deliver us from Your Majesty’s hand."`,
`Daniel 12:3
"Those who are wise will shine like the brightness of the heavens, and those who lead many to righteousness, like the stars for ever and ever."`,
`Hosea 6:6
"For I desire mercy, not sacrifice, and acknowledgment of God rather than burnt offerings."`,
`Hosea 14:9
"Who is wise? Let them realize these things. Who is discerning? Let them understand. The ways of the Lord are right; the righteous walk in them, but the rebellious stumble in them."`,
`Joel 2:13
"Rend your heart and not your garments. Return to the Lord your God, for he is gracious and compassionate, slow to anger and abounding in love, and he relents from sending calamity."`,
`Joel 2:28
"And afterward, I will pour out my Spirit on all people. Your sons and daughters will prophesy, your old men will dream dreams, your young men will see visions."`,
`Amos 5:24
"But let justice roll on like a river, righteousness like a never-failing stream!"`,
`Amos 3:7
"Surely the Sovereign Lord does nothing without revealing his plan to his servants the prophets."`,
`Obadiah 1:4
"Though you soar like the eagle and make your nest among the stars, from there I will bring you down,” declares the Lord."`,
`Obadiah 1:15
"The day of the Lord is near for all nations. As you have done, it will be done to you; your deeds will return upon your own head."`,
`Jonah 2:2
"He said: “In my distress I called to the Lord, and he answered me. From deep in the realm of the dead I called for help, and you listened to my cry.”"`,
`Jonah 4:2
"He prayed to the Lord, “Isn’t this what I said, Lord, when I was still at home? That is what I tried to forestall by fleeing to Tarshish. I knew that you are a gracious and compassionate God, slow to anger and abounding in love…”"`,
`Micah 6:8
"He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God."`,
`Micah 7:7
"But as for me, I watch in hope for the Lord, I wait for God my Savior; my God will hear me."`,
`Nahum 1:7
"The Lord is good, a refuge in times of trouble. He cares for those who trust in him."`,
`Nahum 1:3
"The Lord is slow to anger but great in power; the Lord will not leave the guilty unpunished."`,
`Habakkuk 2:4
"“See, the enemy is puffed up; his desires are not upright— but the righteous person will live by his faithfulness.”"`,
`Habakkuk 3:19
"The Sovereign Lord is my strength; he makes my feet like the feet of a deer, he enables me to tread on the heights."`,
`Zephaniah 3:17
"The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing."`,
`Zephaniah 2:3
"Seek the Lord, all you humble of the land, you who do what he commands. Seek righteousness, seek humility; perhaps you will be sheltered on the day of the Lord’s anger."`,
`Haggai 1:7
"This is what the Lord Almighty says: “Give careful thought to your ways.”"`,
`Haggai 2:9
"“The glory of this present house will be greater than the glory of the former house,” says the Lord Almighty. “And in this place I will grant peace,” declares the Lord Almighty."`,
`Zechariah 4:6
"“Not by might nor by power, but by my Spirit,” says the Lord Almighty."`,
`
Zechariah 2:5
"“And I myself will be a wall of fire around it,” declares the Lord, “and I will be its glory within.”"`,
`Malachi 1:11
"“My name will be great among the nations, from where the sun rises to where it sets. In every place incense and pure offerings will be brought to me, because my name will be great among the nations,” says the Lord Almighty."`,
`Malachi 3:6
"“I the Lord do not change. So you, the descendants of Jacob, are not destroyed.”"`
];
const randomizer = () => {
    //Chooses a random Verse
    const i = Math.floor(Math.random() * bible_verses.length);
    const chosenVerse = bible_verses[i];
    //Chooses First word of chosen Verse
    //write an if statement that chooses the 2nd word IF the 1st is a number
    let chosenVerseChapter;
    if (!isNaN(Number(bible_verses[i].split(" ")[0]))) {
        chosenVerseChapter = bible_verses[i].split(" ")[1];
    } else {
        chosenVerseChapter = bible_verses[i].split(" ")[0];
    }
    //const chosenVerseChapter =  bible_verses[i].split(" ")[0];
    //Did i return an object here?
    return {chosenVerse,
            chosenVerseChapter};
};
//Not too sure why I needed to save the function as a var to access what it returned? 
const result = randomizer();
console.log(`${welcome_message} ${result.chosenVerse}`);
console.log(`The verse can be found here: https://www.biblegateway.com/passage/?search=${result.chosenVerseChapter.toLowerCase()}`);


