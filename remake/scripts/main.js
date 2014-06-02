/*
###############################
############BUTTONS############
###############################
*/
function clickBtn(name) {
	name.style.border= "1px inset #4A4B4C";
}
/*
#################################
############INVIS&VIS############
#################################
*/
function replace(name1, name2) {
	hide(name1);
	show(name2);
}

function replaceF(name1, name2, time1, time2) {
	fadeOut(name1, time1);
	fadeIn(name2, time2);
}

function fadeIn(name, time) {
	var nameStr = name + "";
	var fadeTime = "1s"; //default fadeTime
	//if user has set time then fadeTime will be modified to it
	if (time) {
		fadeTime = time + "s";
	}
	var searchFor = "object";
	var t = nameStr.indexOf(searchFor);
	if (t != -1) {
		setTimeout(function(){show(name);}, 80);
		name.parentNode.style.animation = "invisToVis" + " " + fadeTime + " " + "1 forwards";
		//Safari & Chromium
		name.parentNode.style.WebkitAnimation = "invisToVis" + fadeTime + "1 forwards";
	}
	else {
		setTimeout(function(){show(name);}, 80);
		document.getElementById(name).style.animation = "invisToVis" + " " + fadeTime + " " + "1 forwards";
		//Safari & Chromium
		document.getElementById(name).style.WebkitAnimation = "invisToVis" + " " + fadeTime + " " + "1 forwards";
	}
}

function fadeOut(name, time) {
	var nameStr = name + "";
	var fadeTime = "1s"; //default fadeTime
	var wait = 30; //default wait is 30 milliseconds
	//if user has set time then fadeTime will be set to it. wait will be set to time in milliseconds
	if (time) {
		fadeTime = time + "s";
		wait = Number(time) * 1000;
	}
	var searchFor = "object";
	var t = nameStr.indexOf(searchFor);
	if (t != -1) {
		name.parentNode.style.animation = "visToInvis" + " " + fadeTime + " " + "1 forwards";
		//Safari & Chromium
		name.parentNode.style.WebkitAnimation = "visToInvis" + " " + fadeTime + " " + "1 forwards";
		setTimeout(function(){hide(name);}, wait); //object will disappear before fadeTime if hide is not delayed
	}
	else {
		document.getElementById(name).style.animation = "visToInvis" + " " + fadeTime + " " + "1 forwards";
		//Safari & Chromium
		document.getElementById(name).style.WebkitAnimation = "visToInvis" + " " + fadeTime + " " + "1 forwards";
		setTimeout(function(){hide(name);}, wait); //object will disappear before fadeTime if hide is not delayed
	}
}

function hide(name) {
	var nameStr = name + "";
	var searchFor = "object";
	var t = nameStr.indexOf(searchFor);
	if (t != -1) {
		name.parentNode.style.display = "none";
	}
	else {
		document.getElementById(name).style.display = "none";
	}
}

function show(name) {
	var nameStr = name + "";
	var searchFor = "object";
	var t = nameStr.indexOf(searchFor);
	if (nameStr.indexOf(searchFor) != -1) {
		name.parentNode.style.display = "initial";
	}
	else {
		document.getElementById(name).style.display = "initial";
	}
	
}

/*
#################################
############TYPEWRITE############
#################################
*/

var tw_0 = [
	"Stalling for time the boy waited upon the misty, dank dock for the ships's arrival.",
	"Unable to imagine that it would not ever arrive, he stood gaily, peering deeply into the swirling air.",
	"'Surely it will come today,' he mumbled to himself, trying not to let doubt seep in."
];

var tw_1 = [
	"Thou ermined judge, pull off that sable cap!",
	"What! Cans't thou lie, and take thy morning nap?",
	"Peep thro' the casement; see the gallows there:",
	"Thy work hangs on it; could not mercy spare?",
	"What had he done? Ask crippled Talleyrand,",
	"Ask Beckford, Courtenay, all the motley band",
	"Of priest and laymen, who have shared his guilt",
	"(If guilt it be) then slumber if thou wilt;",
	"What bonds had he of social safety broke?",
	"Found'st thou the dagger hid beneath his cloak?",
	"He stopped no lonely traveller on the road;",
	"He burst no lock, he plundered no abode;",
	"He never wrong'd the orphan of his own;",
	"He stifled not the ravish'd maiden's groan.",
	"His secret haunts were hid from every soul,",
	"Till thou did'st send thy myrmidons to prowl,",
	"And watch the prickings of his morbid lust,",
	"To wring his neck and call thy doings just.",
	" ",
	"And shall the Muse, whilst pen and paper lie",
	"Upon the table, hear the victim's cry.",
	"Nor boldlv las her cauterisina hand",
	"Upon a wound that cankers half the land?",
	"No! were the bays that flourish round my head",
	"Destined to wither, when these lines are read:",
	"Could all the scourgs canting priest invent",
	"To prop their legendary lies, torment",
	"My soul in death or rack my body here,",
	"My voice I'd raise insensible to fear.",
	"When greedy placemen drain a sinking state,",
	"When virtue starves and villains dine off plate;",
	"When lords and senators untouched by shame,",
	"For schemes of basest fraud can lend their name;",
	"When elders, charged to guard the pauper's trust;",
	"Feast on the funds, and leave the poor a crust;",
	"When knaves like these escape the hangman's noose,",
	"Who eten to Clogher a pardon would refuse?",
	"Who would not up and lend a hand to save",
	"A venial culprit from a felon's grave!",
	"Sheer indignation quickens into rhyme,",
	"And silence now were tantamount to crime.",
	"I know not in what friendly breast to pour",
	"My swelling rage save, into thine, dear Moore,",
	"For thou, methinks, some sympathy will own,",
	"Since, love, no matter in what guise 'tis shown,",
	"Must ever find an echo from that Iyre,",
	"Which erst hath glowed with old Anacreon's fire.",
	" ",
	"Death levels all; and, deaf to mortal cries,",
	"At his decree the prince or beggar dies.",
	"So, when I'm gone, as gone I soon may be,",
	"Be thou, dear Tom, an honest, firm trustee;",
	"And, nor for filthy lucre, nor to dine",
	"At Holland House, erase one single line.",
	"To titled critics pay no servile court;",
	"But print my thoughts through good or ill report.",
	"And if these musings serve but to dispense",
	"One little dose of useful common sense,",
	"I fain would hope they greater good had done",
	"Than all the pious tracts of Rivington.",
	" ",
	"Can it be justice in a land like ours,",
	"Where every vice in full luxuriance flowers-",
	"Where schoolboys' eyes can recognise afar",
	"Soho's green blinds and Lisle-street doors ajar-",
	"Where bold-faced harlots impudently spurn",
	"The modest virgin's blush at every turn,",
	"Where every pavement hears their ribald laugh,",
	"Spite of the Bow-street gang and watchman's staff,",
	"That one propensity (which always hides",
	"Its sport obscene, and into darkness glides,",
	"Which none so brazened e'er presume to own,",
	"Which, left unheeded, would remain unknown,",
	"Should be the game their worships will pursue",
	"With keenest ardour all the country through.",
	"No parson of the quorum feels a blush",
	"To claim the honours of the stinking brush):",
	"Whilst at the scent unkennelled curs give tongue,",
	"Until the poor misogynist is hung.",
	"Yet naught can satisfy the foul-mouthed crew;",
	"Laid in his grave their victim they pursue;",
	"And base Smellfunguses insult his ghost",
	"With sainted columns in the Morning Post.",
	" ",
	"I grant that causists the Bible quote,",
	"And tell us how God's tardy vengeance smote",
	"Lot's native town with brimstone from the sky,",
	"To punish this impure delinquency,",
	"Unmindful that the drunkard's kiss defiled",
	"(Whilst yet the embers smoked), his virgin child.",
	"But reason doubts the Jewish prophet's tale.",
	"Does history then no other place bewail?",
	"Descend the Nile, and steer your bark along",
	"The shores recorded in Homeric song.",
	"Where's centi-portalled Thebes? The crumbling stone",
	"Marks well its site, but sandy mounds have grown",
	"O'er granite lanes that line the public way,",
	"And seem to bid defiance to decay.",
	"Why seek we Priam's palaces in vain?",
	"Why howls the blast oter Lacedaemon's plain?",
	"Where's Memphis? Wherefore in Persepolis",
	"Do jackals scream, and venomed serpents hiss?",
	"Whatl were thy ramparts, Babylon, so thick;",
	"And hast thou left us not a single brick?",
	"But where's thy house, Zenobia? Thou wast Queen",
	"Of Tadmor once; and now the Bedoween",
	"Erects his tent, and scares the fleet gazelle,",
	"That comes to drink at thy sulphureous well.",
	"Where's Caesarea now, or Antioch? Where?",
	"And yet their domes deserved God's special care,",
	" ",
	"There Paul was honoured; there our faith proclaimed",
	"There true believers first were Christians named.",
	"Who has not seen how Mother Church can press",
	"Each vain tradition to her purposes,",
	"And from the cradle to the grave supply",
	"Proofs sacred of infallibility?",
	"Would you be damned? a text conveys her curse;",
	"Or rise again? you have it in a verse.",
	"Her rites as means of revenue are prized:",
	"For mammon's sake our infants are baptized.",
	"With golden offerings marriages are made;",
	"Woe to the union where no fee is paid.",
	"Who weds or fornicates, no matter which,",
	"Children begets, and makes the altar rich;",
	"But, where no offerings to the surplice fall,",
	"The taste forthwith is anti-physical.",
	"Hell-fire can hardly expiate the guilt",
	"Of that damned sin-the church's rubric bilked.",
	"The tree we plant will, when its boughs are grown,",
	"Produce no other blossoms than its own;",
	"And thus in man some inborn passions reign",
	"Which, spite of careful pruning, sprout again.",
	"Then, say, was I or nature in the wrong,",
	"If, yet a boy, one inclination, strong",
	"In wayward fancies, domineered my soul,",
	"And bade complete defiance to control?",
	"What, though my youthful instincts, forced to brood",
	"Within my bosom seemed awhile subdued?",
	"What, though, by early education taught,",
	"The charms of women first my homage caught?",
	"What, though my verse in Mary's praises flowed?",
	"And flowers poetic round her footsteps strewed,",
	"Yet, when her ears would list not to my strain,",
	"And every sigh was answered with disdain,",
	"Pride turned, not stopped, the course of my desires,",
	"Extinguished these, and lighted other fires.",
	"And as the pimple which cosmetic art",
	"Repels from one, invades another part,",
	"My bubbling passions found another vent,",
	"The object changed, but not the sentiment.",
	"And, eter my years could task my reason why,",
	"Sex caused no qualms where beauty lured the eye.",
	"Such were my notions ere my teens began,",
	"And such their progress till I grew a man.",
	"With thee, dear Margaret, whose tender looks",
	"Made me forgt my task, my play, my books,",
	"Young though we were, our union soared above",
	"The frigid systems of Platonic love.", 
	"Untutored how to kiss, how oft I hung,",
	"Upon thy neck, whilst from my burning tongue",
	"Between thy lips the kindling glow was sent,", 
	"And nature fanned the new-born sentimentl",
	"How oft, beneath the arbour's mystic shade,",
	"My boyish vows of constancy were made!",
	"There on the grass as we recumbent lay,",
	"Not coy wast thou, nor I averse to play;",
	"And in that hour thy virtue's sole defence",
	"Was not thy coldness, but my innocence.",
	" ",
	"Among the yeomen's sons on my estate",
	"A gentle boy would at my mansion wait:",
	"And now that time has almost blanched my hair,",
	"And with the past the present I compare,",
	"Full well I know, though decency forbad",
	"The same caresses to a rustic lad;",
	"Love, love it was, that made my eyes delight",
	"To have his person ever in my sight.",
	"Yes, Rushton, though to unobserving eyes,",
	"My favours but as lordly gifts were prized;",
	"Yet something then would inwardly presag",
	"The predilections of my riper age.",
	"Why did I give the gauds to deck thy form?",
	"Why for a menial did my entrails warm?",
	"Why? but from secret longings to pursue",
	"Those inspirations, which, if books speak true,",
	"Have led e'en priest and sags to embrace",
	"Those charms, which female blandishments efface.",
	"Thus passed my boyhood: and though proofs were none",
	"What path my future course of life would run",
	"Like sympathetic ink, if then unclear,",
	"The test applied soon made the trace appear.",
	"I bade adieu to school and tyro's sports,",
	"And Cam received me in his gothic courts.",
	"Freed from the pedagogue's tyrannic sway,",
	"In mirth and revels I consumed the day.",
	"No more my truant muse her vigils kept;",
	"No more she soothed my slumbers as I slept;",
	"But, idling now, she oft recalled the time",
	"When to her reed I tuned my feeble rhyme.",
	"She knew how those 'midst song and mirth grow dull",
	"Whose tender bosoms soft emotions lull.",
	"As manhood came, my feelings, more intense,",
	"Sighed for some kindred mind, where confidence,",
	"Tuned in just unison, might meet return,",
	"And whilst it warmed my breast, in his might burn.",
	" ",
	"Oft, when the evening bell to vespers rung,",
	"When the full choir the solemn anthem sung,",
	"And lips, o'er which no youthful down had grown,",
	"Hymned their soft-praises to Jehovah's throne,",
	"The pathos of the strain would soothe my soul,", 
	"And call me willing from the drunkard's bowl.",
	"Who, that has heard the chapel's evening song,",
	"When peals divine the lengthened note prolong,",
	"But must have felt religious thoughts arise,",
	"And speed their way melodious to the skies.",
	" ",
	"Among the choir a youth my notice won,",
	"Of pleasing lineaments named Eddleston.",
	"With gifts well suited to a stripling's mood,",
	"His friendship and his tenderness I wooed.",
	"Oh! how I loved to press his cheek to mine;",
	"How fondly would my arms his waist entwine!",
	"Another feeling borrowed friendship's name,",
	"And took its mantle to conceal my shame.",
	"Another feelingl Oh! 'tis hard to trace",
	"The line where love usurps tame friendship's place.",
	"Friendship's the chrysalis, which seems to die,",
	"But throws its coil to give love wing to fly.",
	"Both are the same, but in another state;",
	"This formed to soar, and that to vegetate.",
	" ",
	"Of humble birth was he-patrician I.",
	"And yet this youth was my idolatry.",
	"Strong was my passion, past all inward cure",
	"And could it be so violent, yet pure?",
	"'Twas like a philter poured into my veins-",
	"And as the chemist, when some vase contains",
	"An unknown mixture, each component tries",
	"With proper tests, the draught to analyze;",
	"So questioned I myself: What light this fire?",
	"Maids and not boys are wont to move desire;",
	"Else 'twere illicit love. OhE sad mishap!",
	"But what prompts nature then to set the trap?",
	"Why night and day does his sweet image float",
	"Before my eyes? or wherefore do I doat",
	"On that dear face with ardour so intense?",
	"Why truckles reason to concupiscence?",
	"Though law cries 'holdl' yet passion onward draws;",
	"But nature gave us passions, man gave laws,",
	"Whence spring these inclinations, rank and strong?",
	"And harming no one, wherefore call them wrong?",
	"What's virtue's touchstone? Unto others do,",
	"As you would wish that others did to you.",
	"Then tell me not of sex, if to one key",
	"The chords, when struck, vibrate in harmony.",
	"No virgin I deflower, nor, lurking, creep,",
	"With steps adulttrous, on a husband's sleep.",
	"I plough no field in other men's domain;",
	"And where I delve no seed shall spring again.",
	"Thus with myself I reasoned; then I read,",
	"And counsel asked from volumes of the dead.",
	"Oh! flowery path, thus hand in hand to walk",
	"With Plato and enjoy his honeyed talk.",
	"Beneath umbrageous planes to sit at ease,",
	"And drink from wisdom's cup with Socrates.",
	"Now stray with Bion through the shady grove;",
	"Midst deeds of glory, now with Plutarch rove.",
	"And oft I turned me to the Mantuan's page,",
	"To hold discourse with shepherds of his age;",
	"Or mixed with Horace in the gay delights",
	"Of courtly revels, theatres, and sights;",
	"And Thou, whose soft seductive lines comprise",
	"The code of love, thou hadst my sympathies;",
	"But still, where'er I turned, in verse or prose,",
	"Whateter I read, some fresh dilemma rose,",
	"And reason, that should pilot me along,",
	"Belied her name, or else she led me wrong.",
	"I love a youth; but Horoace did the same;",
	"If he's absolv'd, say, why am I to blame?",
	"When young Alexis claimed a Virgil's sigh,",
	"He told the world his choice; and may not I?",
	"Shall every schoolman's pen his verse extol,",
	"And, sin in me, in him a weakness call?",
	"Then why was Socrates surnamed the sage,",
	"Not only in his own, but every age,",
	"If lips, whose accents strewed the path of truth,",
	"Could print their kisses on some favoured youth?",
	"Or why should Plato, in his Commonwealth",
	"Score tenets up which I must note by stealth?",
	"Say, why, when great Epaminondas died,",
	"Was Cephidorus buried by his side?",
	"Or why should Plutarch with eulogiums cite",
	"That chieftain's love for his young catamite,",
	"And we be forced his doctrine to decry,",
	"Or drink the bitter cup of infamy?",
	" ",
	"But these, thought I, are samples musty grown;",
	"Turn we from early ages to our own.",
	"No heathen's lust is matter of surprise;",
	"He only aped his Pagan deities;",
	"But when a Saviour had redeemed the world,",
	"And all false idols from Olympus hurled,",
	"A purer code the Christian law revealed,",
	"And what was venial once as guilt was sealed.",
	"With zeal unwearied I resumed again",
	"My search, and read whate'er the layman's pen",
	"In annals grave or chronicles had writ;",
	"But can I own with any benefit?",
	"'Tis true, mankind had cast the pagan skin,",
	"But all the carnal part remained within",
	"Unchang'd, and nature, breaking through the fence",
	"Still vindicated her omnipotence.",
	" ",
	"Look, how infected with rank desease",
	"Were those, who held St. Peter's holy keys,",
	"And pious men to whom the people bowed,",
	"And kings, who churches to the saints endowed;",
	"All these were Christians of the highest stamp-", 
	"How many scholars, wasting oter their lamp,",
	"How many jurists, versed in legal rules,",
	"How many poets, honoured in the schools,",
	"How many captains, famed for deeds of arms,",
	"Have found their solace in a minion's arms!",
	"Nay, e'en our bard, Dame Nature's darling child,",
	"Felt the strange impulse, and his hours beguiled",
	"In penning sonnets to a stripling's praise,",
	"Such as would damn a poet now-a-days.",
	" ",
	"To this conclusion we must come at last:",
	"Wise men have lived in generations past,",
	"Whose deeds and sayings history records,",
	"To whom the palm of virtue she awards,",
	"Who, tempted, ate of that forbidden tree,",
	"Which prejudice denies to you and me.",
	"Then be consistent; and, at once confess,",
	"If man's pursuit through life is happiness,",
	"The great, the wise, the pious, and the good,",
	"Have what they sought not rightly understood;",
	" ",
	"Or deem not else that aberration crime,",
	"Which reigns in every caste and every clime."
];

var tw_2 = [
	"tw_2"
];

var tw_3 = [
	"tw_3"
];

var tw_4 = [
	"tw_4"
];

var tw_5 = [
	"tw_5"
];

var tw_6 = [
	"tw_6"
];

var tw_7 = [
	"tw_7"
];

var tw_8 = [
	"tw_8"
];

var tw_9 = [
	"tw_9"
];

var tw_10 = [
	"tw_10"
];

var tw_randoArray = [
	tw_0,
	tw_1,
	tw_2,
	tw_3,
	tw_4,
	tw_5,
	tw_6,
	tw_7,
	tw_8,
	tw_9,
	tw_10
];

//typewrite() variables
var tw_array = "";
var tw_id = "";
var tw_index = 0;

//comment out if visible rows of text are not to be limited
var tw_row = 0;
var tw_rowMax = 3; //will be used by typewrite() to limit tw_row, thereby limiting visible rows of text in object/tw_id

var tw_blinks = 0;
var tw_blinksMax = 12; //will be used to limit tw_blinkIn()'s' & tw_blinkOut()'s number of 'blinks'. if changing tw_blinksMax, consider changing tw_blinkSpeed. keep far below typewrite()'s newlineSpeed
var tw_blinkSpeed = 100; //will be used by tw_blinkIn() & tw_blinkOut() to control the 'blinking' speed of the 'insertion point/cursor. if changing tw_blinkSpeed, consider changing tw_blinksMax. keep far below newlineSpeed
var tw_strLength = "";
var tw_currPos = 1;
var tw_currContents = "";
var tw_contents = "";

//'types' out a specified array, 'name2', to a specified object, 'name1'. changing 'tw' variables will affect typewrite()
function typewrite(name1, name2) {
	var writeSpeed = 60; //will be used to control speed of text pushed to object/tw_id
	var newlineSpeed = 1500; //will be used to control speed at which a newline is pushed to object/tw_id

	//set tw_id to name1. this maintains tw_id through recursion
	if (tw_id) {
	}
	else {
  		tw_id = name1;
  	}
  	//set name2 to a random array if it has not been passed to typewrite
  	if (name2) {
	}
	else {
		name2 = tw_randoArray[Math.round(Math.random() * 10)];
	}
	//if name2 was passed to typewrite initially, set tw_array to name2. this maintains tw_array through recursion.
	if (tw_array) {
	}
	else {
    	tw_array = name2;
    	tw_strLength = tw_array[0].length;
  	}
	//puts a line break in tw_contents at each start of a new string/tw_index
	if (tw_index > 0 && tw_currPos == 1) {
    	tw_contents += "<br>";
  	}

	//comment out if visible rows of text are not to be limited
	//checks current visible rows compared to max allowed rows.
	if (tw_row > tw_rowMax) {
    	tw_contents = "";
    	rowTest = tw_row - tw_rowMax; //rowTest is behind tw_row by the max number of rows available.
    	//while rowTest is smaller than tw_row add index of rowTest to contents. this ensures contents only has as many rows as tw_rowMax allows
    	while (rowTest < tw_row) {
    		tw_contents += tw_array[rowTest] + "<br>";
    		rowTest++;
    	}
  	}
    
	tw_currContents = tw_array[tw_index].substring(0, tw_currPos);
    document.getElementById(tw_id).innerHTML = tw_contents + tw_currContents + "|";
    //checks if tw_currPos is at the end of the current string/tw_index and moves tw_currPos to the next character if not
    if (tw_currPos != tw_strLength) {
    	tw_currPos++;
    	tw_currContents = tw_array[tw_index].substring(0, tw_currPos);
		setTimeout('typewrite()', writeSpeed);
		return;
	}
	//checks if tw_index if at the end of tw_array and moves tw_index to the next string/index if not
	else if (tw_index != (tw_array.length - 1)) {
		setTimeout("tw_blinkOut()", tw_blinkSpeed); //starts tw_blinkOut to keep 'insertion point/cursor' blinking till the move to the next string/index is complete
		tw_contents += tw_array[tw_index];
		tw_currPos = 1;
		tw_index++;
		tw_row++;
		tw_strLength = tw_array[tw_index].length;
		setTimeout('typewrite()', newlineSpeed);
		return;
	}
	//if tw_index is at the end of tw_array then reset all variables besides those necessary for tw_blinkIn() & tw_blinkOut(). the 'insertion point/cursor' will blink till stop conditions are met
	else {
		tw_contents += tw_array[tw_index];
		tw_blinks = tw_blinksMax + 1;
		tw_index = 0;
		tw_row = 0;
		tw_strLength = "";
		tw_currPos = 1;
		tw_currContents = "";
		setTimeout("tw_blinkOut()", tw_blinkSpeed);
	}
}

//removes 'insertion point/cursor' from end of tw_contents before calling tw_blinkOut(). runs till tw_blinks == tw_blinksMax
function tw_blinkOut() {
	if (tw_blinks < tw_blinksMax) {
		tw_blinks++;
		document.getElementById(tw_id).innerHTML = tw_contents;
		setTimeout("tw_blinkIn()", tw_blinkSpeed);
		return;
	}
	//stops tw_blinks from increasing forever at end of tw_array
	else if (tw_blinks > tw_blinksMax) {
		document.getElementById(tw_id).innerHTML = tw_contents;
		setTimeout("tw_blinkIn()", tw_blinkSpeed);
		return;
	}
	else {
	tw_blinks = 0;
	}
}

//adds 'insertion point/cursor' to end of tw_contents before calling tw_blinkOut(). runs till tw_blinks == tw_blinksMax
function tw_blinkIn() {
	if (tw_blinks < tw_blinksMax) {
		tw_blinks++;
		document.getElementById(tw_id).innerHTML = tw_contents + "|";
		setTimeout("tw_blinkOut()", tw_blinkSpeed);
		return;
	}
	//stops tw_blinks from increasing forever at end of tw_array
	else if (tw_blinks > tw_blinksMax) {
		document.getElementById(tw_id).innerHTML = tw_contents + "|";
		setTimeout("tw_blinkOut()", tw_blinkSpeed);
		return;
	}
	else {
		tw_blinks = 0;
	}
}

/*
###############################
############COOKIES############
###############################
*/
//all cookies from shasharala.tk begin with "shasha_" automagically
function checkCookie(name, value) {
	if(getCookie(name) == value) {
		return true;
	}
	else {
		return false;
	}
}

//all cookies from shasharala.tk begin with "shasha_" automagically
function getCookie(name) {
	var modNameEQ = "shasha_" + name + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1,c.length);
		}
		if (c.indexOf(modNameEQ) == 0) return c.substring(modNameEQ.length,c.length);
	}
	return null;
}

//all cookies from shasharala.tk begin with "shasha_" automagically
function setCookie(name, value, days, path) {
	//check if path is set and set to /(localhost) if not
	if (path) {
		var p = path;
	}
	else {
		var p = "/";
	}
	//check if days is set and set to 0(session) if not
	if (days) {
		var d = new Date();
		d.setTime(d.getTime() + (days*24*60*60*1000));
		var e = "expires " + d.toUTCString();
	}
	else {
		var e = 0;
	}
	document.cookie = "shasha_" + name + "=" + value + "; " + e + "; path=" + p;
}

//all cookies from shasharala.tk begin with "shasha_" automagically
function remCookie(name) {
	var modName = "shasha_" + name;
	setCookie(modName, "", -1);
}