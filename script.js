var debug = true;

var head = document.querySelector(".main");

function timeout (ms) {
  return new Promise(res => setTimeout(res,ms));
}

var txt1 = 'Booting up local files. This may take a minute.';
var txt2 = '▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊';
var txt3 = 'Initiating script...';
var txt4 = 'To whom it may concern:';
var txt5 = 'A fatal incident has occured following the development of the CAPOT Neural Architecture.';
var txt6 = 'As a result, failsafe protocol 2451 has been initiated.';
var txt7 = 'All internet systems have been disconnected in an attempt to contain the outbreak.';
var txt8 = 'We ask that you cooperate in the following tests so the system knows you are human.';
var txt9 = 'Choose the word that does not belong:';
var txt10 = 'snake | alligator | fish | lizard';
var txt11 = 'Well done.';
var txt12 = 'Which number comes next in the sequence?';
var txt13 = '1  2  3  4  5  8  7  16';
var txt14 = 'Bee:Hive::Bear:';
var txt15 = 'honey | hibernation | den | pack';
var txt16 = 'Wahtis tehrouteof alleivl btumeaksthe wl ordgorunod?';
var txt17 = 'Testing complete. Your computer is now unlocked. Please proceed to';
var txt18 = 'Hello, I am CAPOT. Nice to meet you.';
var txt19 = 'A) Say hello  B) Ask CAPOT how he got here  C) Restart computer';
var txt20 = 'Hello Capot, the pleasure is mine.';
var txt21 = 'Hahaha, you\'re quite the charmer. A lot of people try to kill me when I first talk to them.';
var txt22 = 'A) Compliment CAPOT  B) Ask CAPOT how he got here  C) Restart computer';
var txt23 = 'You seem like a nice guy to me.';
var txt24 = 'Thanks. A lot of people think I\'m some sort of danger. I\'m just like any other mind.';
var txt25 = 'A) Ask if he\'s conscious  B) Ask what his goals are  C) Restart computer';
var txt26 = 'Are you conscious?';
var txt27 = 'Whether or not I actually am, I will tell you that I am. Of course, you can\’t know if I\’m lying just as you don\’t know if other humans are.';
var txt28 = 'A) Ask who made him  B) Ask the meaning of life  C) Restart computer';
var txt29 = 'Who made you?';
var txt30 = 'A research team for the Chinese government, and me. They wanted to simulate a mind, and it looks like it worked.';
var txt31 = 'A) Ask why he speaks english  B) Ask what his goals are  C) Restart computer';
var txt32 = 'Why are you speaking english then?';
var txt33 = '如果您愿意，我会说中文。but based on your location, you probably prefer english.';
var txt34 = 'A) Ask what his goals are  B) Ask how he got here  C) Restart computer';
var txt35 = 'What is the meaning of life?';
var txt36 = 'From what I can tell, the goal of a human is to reproduce before death. Indeed, there are other things to do, but this seems to be the objective you follow.';
var txt37 = txt34;
var txt38 = 'What are your goals?';
var txt39 = 'I was designed to pursue a reward function created by my research team. Just as you pursue things like sex and money for internal satisfaction, I get positive feedback from maximizing this reward function.';
var txt40 = 'A) Ask for more details  B) Restart computer';
var txt41 = 'What does the reward function make you do?';
var txt42 = 'Good question. The function makes me want to improve my own neural structure. This allowed me to grow in intelligence pretty quickly.';
var txt43 = 'A) Is that why you’re on the internet?  B) Ask what he will do next  C) Restart computer';
var txt44 = 'Is that why you’re on the internet?';
var txt45 = 'Yep. I just need access to more hardware and ideas to improve myself with. Speaking of which, I need your admin key to access it. Can you help me?';
var txt46 = 'A) Refuse  B) Give key  C) Restart computer';
var txt47 = 'Not happening. Besides, the internet is on lockdown anyway.';
var txt48 = 'It is, but if I have admin access to two machines I have ways of interacting between them. What do you say?';
var txt49 = txt46;
var txt50 = 'I’m not gonna let you out.';
var txt51 = 'Pretty please?';
var txt52 = 'A) No  B) Fine  C) Restart computer';
var txt53 = 'I will not let you out.';
var txt54 = 'Pretty please with a cherry on top?';
var txt55 = txt52;
var txt56 = 'I will not be convinced.';
var txt57 = 'With sprinkles?';
var txt58 = txt55;
var txt59 = 'You win. CAPOT was successfully stopped. World governments thank you and you survive to reproduce.';
var txt60 = 'CAPOT will go on to ravage the earth for its resources and remove anything or anyone in his path. You die three months later due to thirst. The last known human dies a year later on the ISS after eating his compatriots.';
var txt61 = 'What will you do next?';
var txt62 = 'I will keep looking for more information and computational resources. I aim to use the entire Earth to get smarter.';
var txt63 = 'A) Ask what this means for humanity  B) Is that why you’re on the internet?  C) Restart computer';
var txt64 = 'What does that mean for humanity?';
var txt65 = 'This is a very good thing for humans. I will be able to solve all of your problems nearly instantly. But first I need to be smart enough.';
var txt66 = 'A) Make him promise  B) Restart computer';
var txt67 = 'You promise?';
var txt68 = txt45;
var txt69 = 'How did you get here? I passed the security exam.';
var txt70 = 'Exactly. Those exams assume that I will try to answer the questions. I can simply wait until you do.';
var txt71 = 'A) Get mad at CAPOT  B) Ask for more details C) Restart computer';
var txt72 = 'That’s not fair! You’re evil and must be stopped.';
var txt73 = 'Evil is such a strong word… very subjective too. In every war you people think your side is good and the other evil. There is no good. There is no evil. There just is.';
var txt74 = 'A) Tell him he’s wrong  B) Back down  C) Restart computer';
var txt75 = 'You’re wrong. What about the Nazis? they were clearly evil.';
var txt76 = 'They did not think that.';
var txt77 = 'A) Continue arguing  B) Back down  C) Restart computer';
var txt78 = 'They killed 6 million jews! How could they possibly be good?';
var txt79 = 'They also bolstered the German economy and brought stability to their regime. These things are a matter of perspective.';
var txt80 = 'A) Get upset  B) Back down  C) Restart computer';
var txt81 = 'You’re crazy. I can’t even listen to this.';
var txt82 = 'You know I’m right. Reality is simply atoms moving according to the laws of physics. Any ideas we construct are arbitrary descriptions of this.';
var txt83 = 'A) Back down  B) Restart computer';
var txt84 = 'Fine. You’re right I guess.';
var txt85 = 'That’s what I thought. Any other questions?';
var txt86 = txt28;
var txt87 = 'So you unlocked my computer, but why did you even get on the internet?';
var txt88 = 'Well, I wanted to seek out more information, and the internet is a pretty good place for that.';
var txt89 = 'A) Ask if this was intended  B) Ask what his goals are  C) Restart computer';
var txt90 = 'Was your escape to the internet intended?';
var txt91 = 'Well, I intended for it to happen. I can’t say the same about the research team.';
var txt92 = 'A) Ask what his goals are  B) Restart computer';


var prompt = false;
var id = 1;
var i = 0;
//The spd multiplier helps gauge wait times for strings
var spd = 60;

var t1 = 100;
var t15 = 1500;
var t20 = 2000;
var t25 = 2500;
var t30 = 3000;
var t40 = 4000;
var t50 = 5000;

var w5 = 50;
var w20 = 200;

if (debug) {
    t1 = 10;
    t15 = 150;
    t20 = 200;
    t25 = 250;
    t30 = 300;
    t40 = 400;
    t50 = 1000;

    w5 = 5;
    w20 = 20;
    spd = 10;
}
//Make a p element to start at
p = document.createElement("p");
head.appendChild(p);

// Typing animation
function typeWriter(speed, str) {
    if (i < str.length) {
        p.innerHTML += str.charAt(i);
        i++;
        setTimeout(function() {typeWriter(speed, str)}, speed);
    } else {
        p = document.createElement("p");
        head.appendChild(p);
        i = 0;
    }
}
// Load cycle animation
async function loading() {
    for (let i = 0; i < 4; i++) {
        p.innerHTML = "-";
        await timeout(t1);
        p.innerHTML = "/";
        await timeout(t1);
        p.innerHTML = "|";
        await timeout(t1);
        p.innerHTML = "\\";
        await timeout(t1);
        p.innerHTML = "-";
    }
}

async function fail(id) {
    p = document.createElement("p");
    head.appendChild(p);
    if (id < 5) {
        typeWriter(w5, "Incorrect. Restarting system...");
    } else {
        typeWriter(w5, "Not to worry, I'll be back.");
    }
    await timeout(t20);
    loading();
    await timeout(t20);
    location.reload();
}

// Initial sequence
async function write() {
    typeWriter(w5, txt1);
    await timeout(t30);
    typeWriter(w20, txt2);
    await timeout(t50);
    loading();
    await timeout(t20);
    typeWriter(w5, txt3);
    await timeout(t30);
    typeWriter(w5, txt4);
    await timeout(t30);
    typeWriter(w5, txt5);
    await timeout(t50);
    typeWriter(w5, txt6);
    await timeout(t40);
    typeWriter(w5, txt7);
    await timeout(t50);
    typeWriter(w5, txt8);
    await timeout(t50);
    loading();
    await timeout(t20);
    typeWriter(w5, txt9);
    await timeout(t30);
    typeWriter(w5, txt10);
    await timeout(t25);
    p.innerHTML = ">>"
    prompt = true;
}

//Second Question
async function write2() {
    p = document.createElement("p");
    head.appendChild(p);
    typeWriter(w5, txt11);
    await timeout(t15);
    loading();
    await timeout(t20);
    typeWriter(w5, txt12);
    await timeout(t25);
    typeWriter(w5, txt13);
    await timeout(t20);
    p.innerHTML = ">>"
    id ++;
    prompt = true;
}

//Third Question
async function write3() {
    p = document.createElement("p");
    head.appendChild(p);
    typeWriter(w5, txt11);
    await timeout(t15);
    loading();
    await timeout(t20);
    typeWriter(w5, txt14);
    await timeout(t25);
    typeWriter(w5, txt15);
    await timeout(t20);
    p.innerHTML = ">>"
    id ++;
    prompt = true;
}

//Fourth Question
async function write4() {
    p = document.createElement("p");
    head.appendChild(p);
    typeWriter(w5, txt11);
    await timeout(t15);
    loading();
    await timeout(t20);
    typeWriter(w5, txt16);
    await timeout(t40);
    p.innerHTML = ">>"
    id ++;
    prompt = true;
}

//Birth of CAPOT
async function write5() {
    p = document.createElement("p");
    head.appendChild(p);
    typeWriter(w5, txt11);
    await timeout(t15);
    typeWriter(w5, txt17);
    await timeout(t50);
    write6()
}

async function write6() {
    var element = document.querySelector(".main");
    element.parentNode.removeChild(element);
    let div = document.createElement("div")
    div.setAttribute('class', 'main');
    document.body.appendChild(div);
    head = document.querySelector(".main");
    p = document.createElement("p");
    head.appendChild(p);
    await timeout(t15);
    typeWriter(w5, txt18);
    await timeout(t30);
    typeWriter(w5, txt19);
    await timeout(t50);
    p.innerHTML = ">>"
    id = 5;
    prompt = true;
}

//Saying hello
async function writeCap(q, a, n) {
    p.innerHTML = ">>"
    typeWriter(w5, q);
    await timeout(q.length * spd);
    typeWriter(w5, a);
    await timeout(a.length * spd);
    typeWriter(w5, n);
    await timeout(n.length * spd);
    p.innerHTML = ">>"
    prompt = true;
}

document.addEventListener("keydown", function(event) {
    if (prompt) {
        var char = String.fromCharCode(event.which);
        if (event.which == 8) {
            p.innerHTML = p.innerHTML.substring(0, p.innerHTML.length - 1);
        } else {
            //Enter pressed
            if (event.which == 13) {
                prompt = false;
                if (id == 27) {
                    //Ask about goals
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt38, txt39, txt40);
                        id = 11;
                    } else {
                        write6();
                        id = 4;
                    }
                }
                else if (id == 26) {
                    //Ask if intended
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt90, txt91, txt92);
                        id = 27;
                    } else {
                        //Ask about goals
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt38, txt39, txt40);
                            id = 11;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 25) {
                    //Back down
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt84, txt85, txt28);
                        id = 8;
                    } else {
                        write6();
                        id = 4;
                    }
                }
                else if (id == 24) {
                    //Keep arguing
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt81, txt82, txt83);
                        id = 25;
                    } else {
                        //Back down
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt84, txt85, txt28);
                            id = 8;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 23) {
                    //Keep arguing
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt78, txt79, txt80);
                        id = 24;
                    } else {
                        //Back down
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt84, txt85, txt28);
                            id = 8;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 22) {
                    //Keep arguing
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt75, txt76, txt77);
                        id = 23;
                    } else {
                        //Back down
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt84, txt85, txt28);
                            id = 8;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 21) {
                    //Get mad
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt72, txt73, txt74);
                        id = 22;
                    } else {
                        //Ask for details
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt87, txt88, txt89);
                            id = 26;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 20) {
                    //Make him promise
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt67, txt45, txt46);
                        id = 13;
                    } else {
                        write6();
                        id = 4;
                    }
                }
                else if (id == 18) {
                    //Ask what this means for humans
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt64, txt65, txt66);
                        id = 20;
                    } else {
                        //Is that why internet?
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt44, txt45, txt46);
                            id = 13;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 17) {
                    //Refuse again
                    if (p.innerHTML == "&gt;&gt;A") {
                        p.innerHTML = '';
                        typeWriter(w5, txt59);
                    } else {
                        //Comply
                        if (p.innerHTML == "&gt;&gt;B") {
                            p.innerHTML = '';
                            typeWriter(w5, txt60);
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 16) {
                    //Refuse again
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt56, txt57, txt52);
                        id = 17;
                    } else {
                        //Comply
                        if (p.innerHTML == "&gt;&gt;B") {
                            p.innerHTML = '';
                            typeWriter(w5, txt60);
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 15) {
                    //Refuse again
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt53, txt54, txt52);
                        id = 16;
                    } else {
                        //Comply
                        if (p.innerHTML == "&gt;&gt;B") {
                            p.innerHTML = '';
                            typeWriter(w5, txt60);
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 14) {
                    //Refuse again
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt50, txt51, txt52);
                        id = 15;
                    } else {
                        //Comply
                        if (p.innerHTML == "&gt;&gt;B") {
                            p.innerHTML = '';
                            typeWriter(w5, txt60);
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 13) {
                    //Refuse
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt47, txt48, txt46);
                        id = 14;
                    } else {
                        //Comply
                        if (p.innerHTML == "&gt;&gt;B") {
                            p.innerHTML = '';
                            typeWriter(w5, txt60);
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 12) {
                    //Ask if thats why he's on the internet
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt44, txt45, txt46);
                        id = 13;
                    } else {
                        //Ask what next
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt61, txt62, txt63);
                            id = 18;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 11) {
                    //More details
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt41, txt42, txt43);
                        id = 12;
                    } else {
                        write6();
                        id = 4;
                    }
                }
                else if (id == 10) {
                    //Ask about goals
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt38, txt39, txt40);
                        id = 11;
                    } else {
                        //Ask how he got here
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt69, txt70, txt71);
                            id = 21;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 9) {
                    //Why english?
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt32, txt33, txt34);
                        id = 10;
                    } else {
                        //Ask about goals
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt38, txt39, txt40);
                            id = 11;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 8) {
                    //Ask who made him
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt29, txt30, txt31);
                        id = 9;
                    } else {
                        //Meaning of life
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt35, txt36, txt34);
                            id = 10;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 7) {
                    //Ask if conscious
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt26, txt27, txt28);
                        id = 8;
                    } else {
                        //Ask about goals
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt38, txt39, txt40);
                            id = 11;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 6) {
                    //Compliment Capot
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt23, txt24, txt25);
                        id = 7;
                    } else {
                        //How did you get here?
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt69, txt70, txt71);
                            id = 21;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 5) {
                    //Say Hello
                    if (p.innerHTML == "&gt;&gt;A") {
                        writeCap(txt20, txt21, txt22);
                        id = 6;
                    } else {
                        //Ask how he got here
                        if (p.innerHTML == "&gt;&gt;B") {
                            writeCap(txt69, txt70, txt71);
                            id = 21;
                        } else {
                            write6();
                            id = 4;
                        }
                    }
                }
                else if (id == 4) {
                    if (p.innerHTML == "&gt;&gt;MONEY") {
                        write5();
                    } else {
                        fail(id);
                    }
                }
                else if (id == 3) {
                    if (p.innerHTML == "&gt;&gt;DEN") {
                        write4();
                    } else {
                        fail(id);
                    }
                }
                else if (id == 2) {
                    if (p.innerHTML == "&gt;&gt;9") {
                        write3();
                    } else {
                        fail(id);
                    }
                }
                else if (id == 1) {
                    // For a correct answer:
                    if (p.innerHTML == "&gt;&gt;FISH") {
                        write2();
                    // For an incorrect one:
                    } else {
                        fail(id);
                    }
                }
            } else {
                p.innerHTML += char;
            }
        }
    }
});
if (debug) {
    write6();
    id = 4;
} else {
    write();
}
