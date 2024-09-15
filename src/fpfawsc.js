//////////// *!* Basics Head: Started *!* \\\\\\\\\\\\


/*////////// *!* Version 1.19 WholeScript (Source: manitainJS v1.19) *!* \\\\\\\\\\\\

Change Log:

Version 2.00
Cliup
https://ampleupdates.com/

Version 1.19
Cliup
https://ampleupdates.com/

Version 1.18
Tatose
https://tatose.etsy.com/

Sourch path: Source path: D:\03.Windows Installations\21. OSCP Lab\12. JavaScript Compile\Version 3.00 [Current]\Main JavaScript [manitainJS v1.19]

This is the source script for all projects

License ID (BlogID) of this script is 7653833357105072713
Blog url: https://fervow.blogspot.com/

Scipts List (All the basics + the following)

00 Remove Empty Sections
00 9 Column Responsive Grid
01 Static Image Cropping 
02 Static Image Cropping: Intersection Observer
03 Fullpost Image srcset
04 Left over static height image cropping
05 Related. (Asynchronous callback script placement)
06 Related. Suggested Randomly
07 Pagelist Menu: Ellipsis
08 Pagelist Menu: Open/Close
09 Label Menu: Ellipsis
10 Label Menu: Open/Close
11 Full Post Inside Middle-Top Ad
12 Full Post Inside Middle-Middle Ad
13 Full Post Inside Middle-Bottom Ad
14 Comment OpenClose: To Bottom
15 Enable search submit after entered the search query
16 Search Reset
17 Search OpenClose
18 Search Open/Close: Right to Left
19 ContactForm Textarea Expand
20 Ripple Effect
21 Scroll-up Show Menu
22 Go To Bottom || Go to Top
23 Menu Open Close: Left to Right
24 Moving Status message from Blog1 to section after header
25 ContactForm: Move to inside blog article
26 If no content, left side container look same height
27 Simple Scroll Reveal
28 If current post is featured post, remove its parent 'section' or 'widget' wrapper
29 If popular posts does not have any article, remove the widget
30 Setting height same as width (for self promoting ad)
31 on-click: copy text to clipboard
32 Intersection Observer video loading
33 Intersection Observer YouTube Video Play Pause
34 If no content, left side container look same as right container height
35 Remove Comment Anchor Link
00 YouTube Video Loading
36 Copyright Year Update
37 Show Domain Name Only
38 Onclick change the current theme mode
39 rfser: reload from server (Reload)
40 clsar: clear localStorage and reload
41 Full Screen
42 Reload when orientation change
43 Instant Page v5.2.0


Pagelist Menu


////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\*/


//u for [u]defined
//e for [e]mpty
//l for htm[l]
//d for hea[d]
//y for bod[y]
//p for String [p]rototype

//w is a custom method to remove HTML // [Before 2024-04-20 w. After 2024-04-20 hw]
//l is a custom method to remove HTML // [Before 2024-04-20 l. After 2024-04-20 wl]

//d is a custom method to remove head // [Before 2024-04-20 d. After 2024-04-20 hx]
//h is a custom method to remove head // [Before 2024-04-20 h. After 2024-04-20 yh]

//y is a custom method to remove body // [Before 2024-04-20 y. After 2024-04-20 zr]
//b is a custom method to remove body // [Before 2024-04-20 b. After 2024-04-20 zb]

const $ = "Willfulness"; //Remove after compiled by terser.
const _ = "Vigor"; //Remove after compiled by terser.
const A = "Venturesomeness"; //Remove after compiled by terser.
const B = "Valorousness"; //Remove after compiled by terser.
const C = "Valor"; //Remove after compiled by terser.
const D = "Valiancy"; //Remove after compiled by terser.
const E = "Tenacity"; //Remove after compiled by terser.
const F = "Stoutheartedness"; //Remove after compiled by terser.
const G = "Spunk"; //Remove after compiled by terser.
const H = "Spirit"; //Remove after compiled by terser.
const I = "Resolution"; //Remove after compiled by terser.
const J = "Resoluteness"; //Remove after compiled by terser.
const K = "Pluck"; //Remove after compiled by terser.
const L = "Nerviness"; //Remove after compiled by terser.
const M = "Manfulness"; //Remove after compiled by terser.
const N = "Intrepidness"; //Remove after compiled by terser.
const O = "Intrepidity"; //Remove after compiled by terser.
const P = "Heroism"; //Remove after compiled by terser.
const Q = "Heart"; //Remove after compiled by terser.
const R = "Hardihood"; //Remove after compiled by terser.
const S = "Guts"; //Remove after compiled by terser.
const T = "Grit"; //Remove after compiled by terser.
const U = "Gameness"; //Remove after compiled by terser.
const V = "Gallantry"; //Remove after compiled by terser.
const W = "Fearlessness"; //Remove after compiled by terser.
const X = "Enthusiasm"; //Remove after compiled by terser.
const Y = "Enterprise"; //Remove after compiled by terser.
const Z = "Doughtiness"; //Remove after compiled by terser.
//$+_+A+B+C+D+E+F+G+H+I+J+K+L+M+N+O+P+Q+R+S+T+U+V+W+X+Y+Z

const a = "Determination"; //Remove after compiled by terser.
const b = "Dash"; //Remove after compiled by terser.
const c = "Daringness"; //Remove after compiled by terser.
const forD = "Confidence"; //Remove after compiled by terser.
const forE = "Challenge"; //Remove after compiled by terser.
//const = "d"; for hea[d];
//const = "e"; for [e]mpty;
const f = "Braveness"; //Remove after compiled by terser.
const g = "Audaciousness"; //Remove after compiled by terser.
const h = "Audacity"; //Remove after compiled by terser.
const i = "Animus"; //Remove after compiled by terser.
const j = "Fierceness"; //Remove after compiled by terser.
const k = "Undertaking"; //Remove after compiled by terser.
const forL = "Backbonefulness"; //Remove after compiled by terser.
//const = "l"; for htm[l];
const m = "Valorization"; //Remove after compiled by terser.
const n = "Bravura"; //Remove after compiled by terser.
const o = "Potence"; //Remove after compiled by terser.
const forP = "Forcefulness"; //Remove after compiled by terser.
//const = "p"; for String [p]rototype;
const q = "Staunchness"; //Remove after compiled by terser.
const r = "Strength"; //Remove after compiled by terser.
const s = "Potency"; //Remove after compiled by terser.
const t = "Stalwartness"; //Remove after compiled by terser.
const forU = "Chivalry"; //Remove after compiled by terser.
//const = "u"; for [u]defined;
const v = "Venturesomeness"; //Remove after compiled by terser.
const w = "Adventurousness"; //Remove after compiled by terser.
const x = "Indomitability"; //Remove after compiled by terser.
const forY = "Gallantness"; //Remove after compiled by terser.
//const = "y"; for bod[y];
const z = "Manfulness"; //Remove after compiled by terser.
const az = "Firmness"; //Remove after compiled by terser.
const bz = "Pluckiness"; //Remove after compiled by terser.
const cz = "Brazenness"; //Remove after compiled by terser.
const dz = "Spine"; //Remove after compiled by terser.
const ez = "Audaciousness"; //Remove after compiled by terser.
const fz = "Hardihood"; //Remove after compiled by terser.

//lv: (l)eftover (v)ariables
const lv = ["--s: 0; --o: 1;","--t: 1; --o: 0; --d: ","; --x:",";","; --y:"];
//all basic strings //Do not change the order
//console.log([].slice.call(lv)); //To find out the all elements in the array.
//console.log([].slice.call(lv)[3]); //To find out a single element in the array.
//console.log(lv[2]); //To find out a single element in the array.

//cl: (c)onst htm(l)
//Eva: (E)nter (va)riable
//Rva: (R)eserved (va)riable
const cl = "document;itswc;Rva;sfszf;lqapo;in;itshc;ifsoc;img;lamo;dark;=;display;iosnc;sqalq;?;click;http:;^;prefetch;high;srcset;scin;pcsch;=s;.;www;-;pomo;<;sirco;!;important;touchstart;,;https:;&;surmo;+;link;\;, ;%;stde;feeds;:;redne;-rw ;@;light;debugger;*;data-id;block;mouseover;~;ssde;losic;';kmin;-rw;_;hade;srpco;{;rel;F8;/;style;rloce;(;href;rfser;reamo;];Ch;service;);bsde;script;>;mouseout;click;noscript;#;/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7;change;src;[;inline;};staic;F12;`;clsar;post;$;ontouchstart;600px;|;closest;mousedown;j;link;daoli;w;if;url;n;ro;revert;seinp;L;pso;s;isol;9;auto;W;msdn-o;me;i;data-src;index;2g;C;ifsic;ibdbi;msdn;K;top;flex;json;7;dc;Z;g;right;keyup;T;z;Sh;unset;8;prefers;u;siwiv;D;inherit;O;ioclc;undefined;R0lGODlhAQABAIAAAAAAAP/;c;color;callback;4;disabled;S;op;l;isol-t;M;64;scheme;d;relative;-nu;Q;rw;q;initial;position;R;-w;1;font;P;seres;6;dark;t;x;3;alt;b;-no;B;o;-h;;textarea;F;child;px;5;m;data; ;size;V;A;2;issic;Form;I;v;-p;93%;H;svg;f;image;posts;p;J;style;r;N;opacity;left;X;k;-k;E;display_related_posts;y;Contact;gif;octbb;G;a;bottom;cocts;Y;visibility;base;0;srado;U;span;background;e;Rva;octba;visible;h;nth;Rva;alternate;default".split(lv[3]);
//all basic strings //Do not change the order
//console.log([].slice.call(cl)); //To find out the all elements in the array.
//console.log([].slice.call(cl)[1]); //To find out a single element in the array.
//console.log(cl[5]); //To find out a single element in the array.

//cl[198] === (Single white space) [197 is data. 197 is size.]
//cl[190] === (blank) blank means dual double quote "" without a single character or white space [189 is -h. 191 is textarea.]
//cl[151] === undefined [150 is ioclc. 152 is R0lGODlhAQABAIAAAAAAAP/.]


/*

//Instant Page Script Reference

//Instant Page Variables
//high closest mouseout click issic http: https: ifsic auto link prefetch document iosnc itswc sqalq ifsoc itshc lqapo msdn msdn-o isol isol-t 2g mousedown touchstart mouseover


//Default value "<body data-instant-intensity='viewport-all'>" changed into "<body data-lqapo='isol-t'>"
//Default value "instantIntensity" changed into "lqapo": load quick as soon as possible
//Default value "viewport" changed into "isol": inter section observer load
//Default value "viewport-all" changed into "isol-t": inter section observer load this

//Default value "<body data-instant-allow-query-string=''>" changed into "<body data-sqalq='sqalq'>"
//Default value "instantAllowQueryString" changed into "sqalq": skip query and load quick

//Default value "mousedown" changed into "msdn".
//Default value "mousedown-only" changed into "msdn-o
//Default value "instantVaryAccept" changed into "iosnc: instant o string n change [on: first two characters of one]
//Default value "instantMousedownShortcut" changed into "itswc: instant t string w change
//Default value "instantWhitelist" changed into "itshc: instant t string h change
//Default value "instantAllowExternalLinks" changed into "ifsoc: instant f string o change
//Default value "noInstant" changed into "ifsic: instant f string i change
//Default value "instant" changed into "issic: instant s string i change

*/


//This is for Terser compiler to get single digit variable
//Enable it when performing Terser compiler
//const cy = "Eva;Eva;.urocc;Rva;sumac;Eva;.ipamt;urcac;.totip;December;Rva;async;Eva;<ul class=';.ipamb;October;.homp #blog-pager>a;reico;tecop;September;Rva;beforebegin;urbac;.homp .blfhp;.ipamm;.avlfr;June;.no-items.section;Rva;.buprc>*:not(.etele);May;August;li;.widget;April;.PopularPosts div[role=feed];Rva;.reoco;March;.ocrlb;srado;November;.rmwsu;[data-src];February;srera etele clbef claft'/>;.sfszf;July;ocrla;poccr;January;.lembu;#;pocca;.oclrb;class;pemop;data-href;oclra;.laerm>nav>ul>li; p>span;.spabt;emope;</span></span>;dmvbu;.seinp;ptobn;Contact;ocdsc;pemli;.sorpl;.cocts;.seres;.fpina;.pocct;prohi;Form1 ;.pembn;pelbn;</a></h3></div>;.csmco;lemli;:nth-child;<img class='etele rorpi' alt=';locca;<li><a aria-label='More' class='lbdac lembu tiifo' href='#!'></a><ul class='lemco'><li class='lmeli'><a aria-label='Close button' class='lbwac lembu tiifo' href='#!'></a></li></ul></li>;' height=';(1);textarea;>svg;.section;beforeend;<figure class='rospi lsics losic'>;mchls;.rmwsu;li.pemli;.amsfb;.paerm>nav>ul>li;.octbb;fsmac;300px;'></figure><div class='phpti'><;(2);scroll;afterbegin;' class=';.tofsm;mozfullscreenchange;vlaba;li.lemli;.mtiba;' loading=';[class*=;fullscreenchange;h3 class='rosat etele'><a aria-label=';.sttbc;.lemco;' width=';octba;class*=ent-co] a;href=';MSFullscreenChange;lazy' src=';.itind;<li><a aria-label='More' class='lbdac pembn tiifo' href='#!'></a><ul class='pocct'><li class='pmeli'><a aria-label='Close button' class='lbdac pembn tiifo' href='#!'></a></li></ul></li>;lbrte athlw' ;gotob;'><span><span>;locco;nt-he] a, [;webkitfullscreenchange;Eva;gotot".split(lv[3]);



///// 0 to 9 alternative variables \\\\\
const jW = cl[237]; //[After terser compiled, the changed character of "jW" should be 0]
const kX = cl[175]; //[After terser compiled, the changed character of "kX" should be 1]
const lY = cl[202]; //[After terser compiled, the changed character of "lY" should be 2]
const mZ = cl[183]; //[After terser compiled, the changed character of "mZ" should be 3]
const nA = cl[156]; //[After terser compiled, the changed character of "nA" should be 4]
const oB = cl[195]; //[After terser compiled, the changed character of "oB" should be 5]
const pC = cl[179]; //[After terser compiled, the changed character of "pC" should be 6]
const qD = cl[133]; //[After terser compiled, the changed character of "qD" should be 7]
const rE = cl[143]; //[After terser compiled, the changed character of "rE" should be 8]
const sF = cl[116]; //[After terser compiled, the changed character of "sF" should be 9]

//jW+kX+lY+mZ+nA+oB+pC+qD+rE+sF
//console.log(cl[237]+cl[175]+cl[202]+cl[183]+cl[156]+cl[195]+cl[179]+cl[133]+cl[143]+cl[116]); //0123456789 [Verified on 2023-10-31 10:59 PM]
//console.log(jW+kX+lY+mZ+nA+oB+pC+qD+rE+sF); //0123456789 [Verified on 2023-10-31 11:01 PM]


///// Small letters 2 digit alternative variables \\\\\
const gT = cl[231];
const uC = cl[185];
const vD = cl[153];
const hE = cl[165];
const iU = cl[242];
const mM = cl[211];
const nH = cl[136];
const tR = cl[246];
const jS = cl[121];
const bX = cl[102];
const aY = cl[222];
const dZ = cl[160];
const cV = cl[196];
const kO = cl[108];
const eN = cl[188];
const fI = cl[214];
const lA = cl[170];
const oW = cl[217];
const pB = cl[114];
const qF = cl[181];
const rG = cl[145];
const wJ = cl[206];
const xK = cl[105];
const yQ = cl[182];
const zL = cl[226];
const sP = cl[140];

//console.log(cl[231]+cl[185]+cl[153]+cl[165]+cl[242]+cl[211]+cl[136]+cl[246]+cl[121]+cl[102]+cl[222]+cl[160]+cl[196]+cl[108]+cl[188]+cl[214]+cl[170]+cl[217]+cl[114]+cl[181]+cl[145]+cl[206]+cl[105]+cl[182]+cl[226]+cl[140]); //abcdefghijklmnopqrstuvwxyz [Verified on 2023-10-31 11:04 PM]

//console.log(gT+uC+vD+hE+iU+mM+nH+tR+jS+bX+aY+dZ+cV+kO+eN+fI+lA+oW+pB+qF+rG+wJ+xK+yQ+zL+sP); //abcdefghijklmnopqrstuvwxyz [Verified on 2023-10-31 11:05 PM]

//cl[231]==a
//cl[185]==b
//cl[153]==c
//cl[165]==d
//cl[242]==e
//cl[211]==f
//cl[136]==g
//cl[246]==h
//cl[121]==i
//cl[102]==j
//cl[222]==k
//cl[160]==l
//cl[196]==m
//cl[108]==n
//cl[188]==o
//cl[214]==p
//cl[170]==q
//cl[217]==r
//cl[114]==s
//cl[181]==t
//cl[145]==u
//cl[206]==v
//cl[105]==w
//cl[182]==x
//cl[226]==y
//cl[140]==z

//console.log(cl[35]+cl[67]+cl[67]+cl[181]+cl[231]+cl[181]+cl[188]+cl[114]+cl[242]+cl[25]+cl[242]+cl[181]+cl[114]+cl[226]+cl[25]+cl[153]+cl[188]+cl[196]);

//console.log(cl[35]+cl[67]+cl[67]+cl[181]+cl[231]+cl[181]+cl[188]+cl[114]+ cl[242]+cl[25]+cl[242]+cl[181]+cl[114]+cl[226]+cl[25]+cl[153]+cl[188]+cl[196]);

//console.log(cl[35]+cl[67]+cl[67]);//https://
//console.log(cl[181]+cl[231]+cl[181]+cl[188]+cl[114]+cl[242]); //tatose
//console.log(cl[25]+cl[242]+cl[181]+cl[114]+cl[226]+cl[25]+cl[153]+cl[188]+cl[196]); //.etsy.com
//console.log(cl[25]+cl[153]+cl[188]+cl[196]); //.com

//console.log(cl[231]+cl[196]+cl[214]+cl[160]+cl[242]+cl[145]+cl[214]+cl[165]+cl[231]+cl[181]+cl[242]+cl[114]); //ampleupdates

//console.log(cl[153]+cl[160]+cl[121]+cl[145]+cl[214]);//cliup
//console.log(cl[125]+cl[160]+cl[121]+cl[145]+cl[214]);//Cliup

//console.log(cl[35]+cl[67]+cl[67]+cl[231]+cl[196]+cl[214]+cl[160]+cl[242]+cl[145]+cl[214]+cl[165]+cl[231]+cl[181]+cl[242]+cl[114]+cl[25]+cl[153]+cl[188]+cl[196]); //https://ampleupdates.com/

//console.log(cl[35]+cl[67]+cl[67]+cl[153]+cl[160]+cl[121]+cl[145]+cl[214]+cl[25]+cl[242]+cl[181]+cl[114]+cl[226]+cl[25]+cl[153]+cl[188]+cl[196]);//https://cliup.etsy.com

///// Capital letters 2 digit alternative variables \\\\\
const hC = cl[201];
const bD = cl[187];
const cU = cl[125];
const wX = cl[147];
const xE = cl[224];
const yL = cl[192];
const lM = cl[230];
const iF = cl[209];
const aQ = cl[205];
const jR = cl[215];
const nS = cl[129];
const oI = cl[112];
const tJ = cl[162];
const pK = cl[218];
const qB = cl[149];
const kG = cl[177];
const zN = cl[168];
const mO = cl[173];
const rP = cl[158];
const sA = cl[139];
const uH = cl[239];
const vY = cl[200];
const dT = cl[118];
const gV = cl[221];
const fW = cl[234];
const eZ = cl[135];

//console.log(cl[201]+cl[187]+cl[125]+cl[147]+cl[224]+cl[192]+cl[230]+cl[209]+cl[205]+cl[215]+cl[129]+cl[112]+cl[162]+cl[218]+cl[149]+cl[177]+cl[168]+cl[173]+cl[158]+cl[139]+cl[239]+cl[200]+cl[118]+cl[221]+cl[234]+cl[135]); //ABCDEFGHIJKLMNOPQRSTUVWXYZ [Verified on 2023-10-31 11:08 PM]

//console.log(hC+bD+cU+wX+xE+yL+lM+iF+aQ+jR+nS+oI+tJ+pK+qB+kG+zN+mO+rP+sA+uH+vY+dT+gV+fW+eZ); //ABCDEFGHIJKLMNOPQRSTUVWXYZ [Verified on 2023-10-31 11:09 PM]

//cl[201]==A;
//cl[187]==B;
//cl[125]==C;
//cl[147]==D;
//cl[224]==E;
//cl[192]==F;
//cl[230]==G;
//cl[209]==H;
//cl[205]==I;
//cl[215]==J;
//cl[129]==K;
//cl[112]==L;
//cl[162]==M;
//cl[218]==N;
//cl[149]==O;
//cl[177]==P;
//cl[168]==Q;
//cl[173]==R;
//cl[158]==S;
//cl[139]==T;
//cl[239]==U;
//cl[200]==V;
//cl[118]==W;
//cl[221]==X;
//cl[234]==Y;
//cl[135]==Z;

//console.log(cl[93]+cl[55]+cl[31]+cl[48]+cl[84]+cl[96]+cl[42]+cl[18]+cl[36]+cl[51]+cl[70]+cl[77]+cl[61]+cl[38]+cl[27]+cl[11]+cl[45]+cl[58]+cl[99]+cl[88]+cl[74]+cl[64]+cl[90]+cl[34]+cl[25]+cl[67]+cl[29]+cl[80]+cl[15]); //`~!@#$%^&*()_+-=:'|[]{},./<>? [Verified on 2023-10-31 11:13 PM]
//`~!@#$%^&*()_+-=:'|[]{},./<>?

//////////////////// Slicing Variables \\\\\\\\\\\\\\\\\\\\
const defaultColorScheme = cl[70]+cl[144]+cl[27]+cl[154]+cl[27]+cl[164]+cl[45]+cl[10]+cl[77]; //Done
const transparentImage = cl[197]+cl[45]+cl[212]+cl[67]+cl[228]+lv[3]+cl[236]+cl[163]+cl[34]+cl[152]+cl[67]+cl[85]; //Done
const imageCroppingSeclector = cl[25]+cl[91]+cl[80]+cl[51]+cl[88]+cl[122]+cl[74]; //Done
const imageIntersectionObserverSeclector = cl[25]+cl[146]+cl[80]+cl[51]+cl[88]+cl[122]+cl[74]; //Done
const Chrome = cl[75]+cl[109]+cl[120]+cl[67]; //Done
const Shopify = cl[141]+cl[159]+cl[106]+cl[226]; //Done
//const defaultColorScheme = (+prefers+-+color+-+scheme+:+dark+); //[(prefers-color-scheme:dark)] [Combine it as a pre-built variable]
//const transparentImage = data+:+image+/+gif+;+base+64+,+R0lGODlhAQABAIAAAAAAAP/+/+/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7; //[data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7] [Combine it as a pre-built variable]
//const imageCroppingSeclector = .+staic+>+*+[+data-src+]; //[.staic>*[data-src]] [Combine it as a pre-built variable]
//const imageIntersectionObserverSeclector = .+siwiv+>+*+[+data-src+]; //[.siwiv>*[data-src]] [Combine it as a pre-built variable]
//const Chrome = Ch+ro+me+/; //[Chrome/] [Combine it as a pre-built variable]
//const Shopify = Sh+op+if+y; //[Shopify] [Combine it as a pre-built variable]


//////////////////// Manually entering license digits \\\\\\\\\\\\\\\\\\\\
//Fervow BlogID: 7653833357105072713 [19 digits]	  
//Build combination: 33 digits. BlogID digits + random remaining digits upto 33.	  
//This project: 7653833357105072713 + 65739014259785 (Remaining digits) 	  

//0 === jW || cl[237]
//1 === kX || cl[175]
//2 === lY || cl[202]
//3 === mZ || cl[183]
//4 === nA || cl[156]
//5 === oB || cl[195]
//6 === pC || cl[179]
//7 === qD || cl[133]
//8 === rE || cl[143]
//9 === sF || cl[116]

//Required 19 Digits: 7653833357105072713
const hld01 = cl[133]; //7
const hld02 = cl[179]; //6
const hld03 = cl[195]; //5
const hld04 = cl[183]; //3
const hld05 = cl[143]; //8
const hld06 = cl[183]; //3
const hld07 = cl[183]; //3
const hld08 = cl[183]; //3
const hld09 = cl[195]; //5
const hld10 = cl[133]; //7
const hld11 = cl[175]; //1
const hld12 = cl[237]; //0
const hld13 = cl[195]; //5
const hld14 = cl[237]; //0
const hld15 = cl[133]; //7
const hld16 = cl[202]; //2
const hld17 = cl[133]; //7
const hld18 = cl[175]; //1
const hld19 = cl[183]; //3

//Remaining digits
const hld20 = cl[179]; //6
const hld21 = cl[195]; //5
const hld22 = cl[133]; //7
const hld23 = cl[183]; //3


const hld24 = cl[116]; //9
const hld25 = cl[237]; //0
const hld26 = cl[175]; //1
const hld27 = cl[156]; //4
const hld28 = cl[202]; //2
const hld29 = cl[195]; //5
const hld30 = cl[116]; //9
const hld31 = cl[133]; //7
const hld32 = cl[143]; //8
const hld33 = cl[195]; //5


//cl: (c)onst htm(l)
//const l = document.documentElement; //htm(l)
//l === html || String.prototype.l=()=>{return document.documentElement.remove()};
//const d = document.head; //hea(d)
//d === head || String.prototype.d=()=>{return document.head.remove()};
//const y = document.body; //bod(y)
//y === body || String.prototype.y=()=>{return document.body.remove()};
//lc = l.classList (document.documentElement.classList)
//yc = y.classList (document.body.classList)
//yf = y.firstElementChild (document.body.firstElementChild)


//if cl variable defined, localStorage.getItem(cl[13])
//const rt = "undefined" != typeof cl && localStorage.getItem("pcsch"); //const rt = localStorage.getItem("pcsch"); //(remember the previously used) theme
//(ReadableBasic)//const rt = "undefined" != typeof cl && localStorage.getItem("pcsch"); //(remember the previously used) theme
//const rt = "undefined" != typeof cl && localStorage.getItem("pcsch"); //(remember the previously used) theme
////veryveryBasic
const rt = "undefined" != typeof cl && localStorage.getItem(cl[23]); //(remember the previously used) theme
////veryBasic
//[undefined] == head variable  cl[151]
//[pcsch] == head variable  cl[23]
//console.log();


//undefined     ===   undefined     (equal or true) (both are same words)
//undefined     ===   defined       (not equal or false)
//If variable is not defined, it gives "undefined" as a value
//If variable is defined, it gives its value.
//"undefined" and "defined" strings are not equal.
//Like the above statement "undefined" and declared variable are not equal.
//So, "undefined" != typeof cl is true. Because cl is delared and it has its value.

//console.log(rt);

//if rt variable defined, u = cl[151]
//const u = "undefined" != typeof rt && "undefined"; //const u = undefined;
//(ReadableBasic)//const u = "undefined" != typeof rt && "undefined"; //const u = undefined;
//const u = "undefined" != typeof rt && "undefined"; //const u = undefined;
////veryveryBasic
const u = cl[151] != typeof rt && cl[151]; //const u = undefined;
//console.log(u);
////veryBasic
//[undefined] == head variable  cl[151]
//console.log();


//if u variable defined, l = document.documentElement
//const l = u == "undefined" && document.documentElement; //const l = document.documentElement;
//(ReadableBasic)//const l = u == "undefined" && document.documentElement; //const l = document.documentElement;
//const l = u == "undefined" && document.documentElement; //const l = document.documentElement;
////veryveryBasic
const l = u == cl[151] && document.documentElement; //const l = document.documentElement;
//console.log(l);
////veryBasic
//[undefined] == head variable  cl[151]
//console.log();


//if l variable defined, p = String.prototype
//const p = "undefined" != typeof l && String.prototype; //const p = String.prototype;
const p = u != typeof l && String.prototype; //const p = String.prototype;
//console.log(p);

//if p variable defined, e = cl[190]
//const e = "undefined" != typeof p && cl[190];//const e = "";
//const e = u != typeof p && "";//it's for empty string //cl[190] assigned as empty //const e = "";
////veryveryBasic
const e = u != typeof p && cl[190];//it's for empty string //cl[190] assigned as empty //const e = "";
////veryBasic
//[""] == head variable  cl[190]
//console.log();

//If any of these variables are not available, remove the html
u!=typeof l&&u!=typeof p&&u!=typeof e||document.documentElement.remove();

//String.prototype.l=()=>{return l.remove()}
//String.prototype.l=()=>{return document.documentElement.remove()}
p.l=()=>{return l.remove()} //l() is a custom string method. When using this, declare a string and use this method. Eg: "string".l() OR "".l() OR e.l() OR cl[any number between 0 to 250].l(). "" dual double quote without a single white space consider as an empty string.

//const lc = u != typeof e && l.classList; //const lc = document.documentElement.classList;
//const lc = "undefined" != typeof e && document.documentElement.classList; //const lc = document.documentElement.classList;
const lc = u != typeof e && l.classList; //const lc = document.documentElement.classList;

//if lc variable defined, assign document.head unless remove html
//const d = "undefined" != typeof document.documentElement.classList ? document.head : "anyString".l(); //const d = document.head;
//const d = u != typeof lc ? document.head : "anyString".l(); //const d = document.head;
const d = u != typeof lc ? document.head : gT.l(); //const d = document.head;
//console.log(d);

//if lc and d variables undefined or not available, remove html
//if("undefined" !=typeof lc || "undefined" !=typeof d) { "anyString".l(); }
//if(u != typeof lc || u !=typeof d) { "anyString".l(); }
//u!=typeof lc&&u!=typeof d||"anyString".l();
u!=typeof lc&&u!=typeof d||uC.l();


//////////// *!* Remove Head Method *!* \\\\\\\\\\\\
//String.prototype.d=()=>{return d.remove()}
//String.prototype.d=()=>{return document.head.remove()}
p.d=()=>{return d.remove()} //d() is a custom string method. When using this, declare a string and use this method. Eg: "string".d() OR "".d() OR e.d() OR cl[any number between 0 to 250].d(). "" dual double quote without a single white space consider as an empty string.


//////////// *!* Hand Device | Stand Device *!* \\\\\\\\\\\\
const hos=/\b(Android|iPhone|iPad|iPod|Windows Phone|IEMobile|webOS|Fire OS|Symbian|Kindle|Tizen|BlackBerry|BlackBerry 10|Opera Mini)\b/i.test(navigator.userAgent);
//hos: hand or stand


//////////// *!* To keep the preferred color theme before manually changing the theme *!* \\\\\\\\\\\\
/*window.matchMedia("(prefers-color-scheme:dark)").matches ? document.documentElement.classList.add("reamo") : document.documentElement.classList.add("surmo");*/
//(ReadableBasic)//window.matchMedia(defaultColorScheme).matches?document.documentElement.classList.add("reamo"):document.documentElement.classList.add("surmo");
//window.matchMedia(defaultColorScheme).matches?document.documentElement.classList.add("reamo"):document.documentElement.classList.add("surmo");
////veryveryBasic
window.matchMedia(defaultColorScheme).matches?document.documentElement.classList.add(cl[73]):document.documentElement.classList.add(cl[37]);
////veryBasic
//[reamo] == head variable  cl[73]
//[surmo] == head variable  cl[37]
//console.log();


//////////// *!* Remove HTML (Additional Method) *!* \\\\\\\\\\\\
//String.prototype.w=()=>{return l.remove()}
//String.prototype.w=()=>{return document.documentElement.remove()}
p.w=()=>{return l.remove()} //w() is a custom string method. When using this, declare a string and use this method. Eg: "string".w() OR "".w() OR e.w() OR cl[any number between 0 to 250].w(). "" dual double quote without a single white space consider as an empty string.


//////////// *!* To keep the manually changed theme *!* \\\\\\\\\\\\
/*"dark" == localStorage.getItem("pcsch") ? (document.documentElement.classList.add("reamo"), document.documentElement.classList.remove("surmo")) : "light" == localStorage.getItem("pcsch") && (document.documentElement.classList.add("surmo"), document.documentElement.classList.remove("reamo"));*/
//(ReadableBasic)//"dark"==localStorage.getItem("pcsch")?(document.documentElement.classList.add("reamo"),document.documentElement.classList.remove("surmo")):"light"==localStorage.getItem("pcsch")&&(document.documentElement.classList.add("surmo"),document.documentElement.classList.remove("reamo"));
//"dark"==localStorage.getItem("pcsch")?(document.documentElement.classList.add("reamo"),document.documentElement.classList.remove("surmo")):"light"==localStorage.getItem("pcsch")&&(document.documentElement.classList.add("surmo"),document.documentElement.classList.remove("reamo"));
////veryveryBasic
cl[180]==localStorage.getItem(cl[23])?(document.documentElement.classList.add(cl[73]),document.documentElement.classList.remove(cl[37])):cl[49]==localStorage.getItem(cl[23])&&(document.documentElement.classList.add(cl[37]),document.documentElement.classList.remove(cl[73]));
////veryBasic
//[dark] == head variable  cl[180]
//[pcsch] == head variable  cl[23]
//[reamo] == head variable  cl[73]
//[surmo] == head variable  cl[37]
//[light] == head variable  cl[49]
//console.log();


//////////// *!* Remove Head (Additional Method) *!* \\\\\\\\\\\\
//String.prototype.h=()=>{return d.remove()}
//String.prototype.h=()=>{return document.head.remove()}
p.h=()=>{return d.remove()} //h() is a custom string method. When using this, declare a string and use this method. Eg: "string".h() OR "".h() OR e.h() OR cl[any number between 0 to 250].h(). "" dual double quote without a single white space consider as an empty string.


//////////////////// License RegEx \\\\\\\\\\\\\\\\\\\\
const citlh = /\d/; //citlh: Check if the link has number.
const fsnfs = /\d+/; //fsnfs: First (set of) numbers (from the) string.
const cithn = /^[(\d)]+$/; //cithn: check if the string has (numbers only)
const tftel = /^[\d]{3}/; //tftel: take first 3 (numbers from (l)eft)
const tfsnl = /^[\d]{7}/; //tfsnl: take first 7 (numbers from (l)eft)
const tlner = /[\d]{9}$/; //tlner: take last 9 (numbers from (r)ight)
const tlfrr = /[\d]{4}$/; //tlfrr: take last 4 (numbers from (r)ight)
//const linkUrl = "https://www.blogger.com/feeds/8192109517700330237/posts/default";
const selectPath = /^https?:\/\/([^\/]+\/){3}/; //Selecting 3rd Path
const removePathSlash = /\/+$/; //Remove the "/" from the selected path
const removeHttps = /^(?:https?:\/\/)?(?:www\.)?/i; //Remove url "https://www."



//////////////////// Image cropping RegEx \\\\\\\\\\\\\\\\\\\\
const rwS1600 = /\/rw-s\B\d{1,9}\/+/g;
const endingEqual = /=(.+)/g;
const w1600H1600PKNoNu = /\/w\B\d{1,9}-h\B\d{1,9}-p-k-no-nu\/+/g;
const s1600 = /\/s\B\d{1,9}\/+/g;
const s1600Rw = /\/s\B\d{1,9}-rw\/+/g;
const s1600Pf = /\/s\B\d{1,9}-pf\/+/g;
const s1600CRw = /\/s\B\d{1,9}-c-rw\/+/g;
const download = /\/d\/+/g;
const downloadRw = /\/d-rw\/+/g;
const s1600W1600H1600Rw = /\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-rw\/+/g;
const s1600W1600H1600CRw = /\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g;
const s1600C = /\/s\B\d{1,9}-c\/+/g;
const s1600CD = /\/s\B\d{1,9}-c-d\/+/g;
const mEqualOne = /\?m=1+/g;

const wAnyN = /\/w\B\d{1,9}\/+/g;
const hAnyN = /\/h\B\d{1,9}\/+/g;
const wAnyN_hAnyN = /\/w\B\d{1,9}-h\B\d{1,9}\/+/g;
const hAnyN_wAnyN = /\/h\B\d{1,9}-w\B\d{1,9}\/+/g;
const wAnyN_hAnyN_pknonu = /\/w\B\d{1,9}-h\B\d{1,9}-p-k-no-nu\/+/g;
const hAnyN_wAnyN_pknonu = /\/h\B\d{1,9}-w\B\d{1,9}-p-k-no-nu\/+/g;
const rW_wAny = /\/rw-w\B\d{1,9}\/+/g;
const rW_hAny = /\/rw-h\B\d{1,9}\/+/g;
const wAny_rW = /\/w\B\d{1,9}-rw\/+/g;
const hAny_rW = /\/h\B\d{1,9}-rw\/+/g;
const sAnyN_w_h_c = /\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c\/+/g;
const sAnyN_w_h_rw_c = /\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-rw-c\/+/g;
const sAnyN_w_c = /\/s\B\d{1,9}-w\B\d{1,9}-c\/+/g;
const sAnyN_h_c = /\/s\B\d{1,9}-h\B\d{1,9}-c\/+/g;
const sAnyN_w_rw_c = /\/s\B\d{1,9}-w\B\d{1,9}-rw-c\/+/g;
const sAnyN_h_rw_c = /\/s\B\d{1,9}-h\B\d{1,9}-rw-c\/+/g;
const sAnyN_w_h_rw = /\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-rw\/+/g;
const sAnyN_w_h_c_rw = /\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g;
const sAnyN_c_d = /\/s\B\d{1,9}-c-d\/+/g;


//////////////////// Image cropping parameters \\\\\\\\\\\\\\\\\\\\
const pKNoNu = cl[207]+cl[223]+cl[186]+cl[167]; //[-p-k-no-nu]
const pKNoNuF = pKNoNu+cl[67]; //[-p-k-no-nu/]
const erwW = cl[11]+cl[169]+cl[174]; //[=rw-w]
const frwW = cl[67]+cl[169]+cl[174]; //[/rw-w]
const urlOB = cl[107]+cl[70]; //[url(]
const feedsPostsDefault = cl[67]+cl[44]+cl[67]+cl[213]+cl[67]+cl[250]+cl[67]+cl[27]+cl[67]; //[/feeds/posts/default/-/]
const altJsonInScriptCallback = cl[15]+cl[184]+cl[11]+cl[132]+cl[27]+cl[5]+cl[27]+cl[79]+cl[36]+cl[155]+cl[11]+cl[225]; //[?alt=json-in-script&callback=display_related_posts]
const lessthanImg = cl[29]+cl[8]; //[<img]
const srcEqualBackslashSingleQuote = cl[87]+cl[11]+cl[40]+cl[58]; //[src=\']
const backslashSingleQuote = cl[40]+cl[58]; //[\']
//console.log(pKNoNu);


//////////////////// Footer credit inline styles \\\\\\\\\\\\\\\\\\\\
//////////////////// Footer Credit Remove Starts
const displayColon = cl[12]+cl[45]+cl[198]; //"display: "
//console.log(displayColon);

const zImportant = cl[198]+cl[31]+cl[32]+lv[3]; //" !important;"
//console.log(zImportant);

//const manuallyEnteredShopName = u!=typeof displayColon&&u!=typeof zImportant ? cl[125]+cl[160]+cl[121]+cl[145]+cl[214] : "anyString".w(); //If the above both variables are available, Cliup
////veryveryBasic
const manuallyEnteredShopName = u!=typeof displayColon&&u!=typeof zImportant ? cl[125]+cl[160]+cl[121]+cl[145]+cl[214] : cl[116].w(); //If the above both variables are available, Cliup
//console.log(cl[125]+cl[160]+cl[121]+cl[145]+cl[214]);
//const manuallyEnteredShopName = u!=typeof displayColon&&u!=typeof zImportant ? "Cliup" : "anyString".w(); //If the above both variables are available, Cliup
//console.log(cl[125]+cl[160]+cl[121]+cl[145]+cl[214]);
//console.log();

const backgroundInherit = cl[241]+cl[45]+cl[198]+cl[148]+zImportant; //"background: inherit !important;"
//console.log(backgroundInherit);

const colorInherit = cl[154]+cl[45]+cl[198]+cl[148]+zImportant+cl[198]; //"color: inherit !important;"
//console.log(colorInherit);

const backgroundColor = backgroundInherit+cl[198]+colorInherit+cl[198]; //"color: inherit !important;"
//console.log(backgroundColor);

//const displayBlock = u!=typeof manuallyEnteredShopName ? displayColon+cl[53]+zImportant : "anyString".w(); //"display: block !important;"
////veryveryBasic
const displayBlock = u!=typeof manuallyEnteredShopName ? displayColon+cl[53]+zImportant : cl[154].w(); //"display: block !important;"
//console.log(displayBlock);

const displayInline = displayColon+cl[89]+zImportant; //"display: inline !important;"
//console.log(displayInline);

const displayInlineBlock = displayColon+cl[89]+cl[27]+cl[53]+zImportant; //"display: inline-block !important;"
//console.log(displayInlineBlock);

const displayFlex = displayColon+cl[131]+zImportant; //"display: flex !important;"
//console.log(displayFlex);

const displayRevert = displayColon+cl[110]+zImportant; //"display: revert !important;"
//console.log(displayRevert);

const displayUnset = displayColon+cl[142]+zImportant; //"display: unset !important;"
//console.log(displayUnset);

const displayInherit = displayColon+cl[148]+zImportant; //"display: inherit !important;"
//console.log(displayInherit);

const displayInitial = displayColon+cl[171]+zImportant; //"display: initial !important;"
//console.log(displayInitial);

//u!=typeof displayBlock&&u!=typeof displayInline&&u!=typeof displayInlineBlock&&u!=typeof displayFlex&&u!=typeof displayRevert&&u!=typeof displayUnset&&u!=typeof displayInherit&&u!=typeof displayInitial||"anyString".l(); //If any of these variables are not available, remove the html
////veryveryBasic
u!=typeof displayBlock&&u!=typeof backgroundColor&&backgroundInherit&&colorInherit&&displayInline&&u!=typeof displayInlineBlock&&u!=typeof displayFlex&&u!=typeof displayRevert&&u!=typeof displayUnset&&u!=typeof displayInherit&&u!=typeof displayInitial||cl[201].l(); //If any of these variables are not available, remove the html

const fontSize = cl[198]+cl[176]+cl[27]+cl[199]+cl[45]+cl[198]+cl[208]+zImportant; //" font-size: 100% !important;"
//console.log(fontSize)

const opacityOne = cl[198]+cl[219]+cl[45]+cl[198]+cl[175]+zImportant; //" opacity: 1 !important;"
//console.log(opacityOne)

const visibilityVisible = cl[198]+cl[235]+cl[45]+cl[198]+cl[245]+zImportant; //" visibility: visible !important;"
//console.log(visibilityVisible)

//u!=typeof fontSize&&u!=typeof opacityOne&&u!=typeof visibilityVisible||"anyString".l(); //If any of these variables are not available, remove the html
////veryveryBasic
u!=typeof fontSize&&u!=typeof opacityOne&&u!=typeof visibilityVisible||cl[137].l(); //If any of these variables are not available, remove the html

const bottomZero = cl[198]+cl[232]+cl[45]+cl[198]+cl[237]+zImportant; //" bottom: 0 !important;"
//console.log(bottomZero)

const leftZero = cl[198]+cl[220]+cl[45]+cl[198]+cl[237]+zImportant; //" left: 0 !important;"
//console.log(leftZero)

const positionRelative = cl[198]+cl[172]+cl[45]+cl[198]+cl[166]+zImportant; //" position: relative !important;"
//console.log(positionRelative)

const rightZero = cl[198]+cl[137]+cl[45]+cl[198]+cl[237]+zImportant; //" right: 0 !important;"
//console.log(rightZero)

const topZero = cl[198]+cl[130]+cl[45]+cl[198]+cl[237]+zImportant; //" top: 0 !important;"
//console.log(topZero)

const zIndex = cl[198]+cl[140]+cl[27]+cl[123]+cl[45]+cl[198]+cl[237]+zImportant; //" z-index: 0 !important;"
//console.log(zIndex)

//u!=typeof bottomZero&&u!=typeof leftZero&&u!=typeof positionRelative&&u!=typeof rightZero&&u!=typeof topZero&&u!=typeof zIndex||"anyString".w(); ////If any of these variables are not available, remove the html
////veryveryBasic
u!=typeof bottomZero&&u!=typeof leftZero&&u!=typeof positionRelative&&u!=typeof rightZero&&u!=typeof topZero&&u!=typeof zIndex||cl[197].w(); ////If any of these variables are not available, remove the html

const unHideItems = cl[198]+cl[176]+cl[27]+cl[199]+cl[45]+cl[198]+cl[208]+zImportant+cl[198]+cl[219]+cl[45]+cl[198]+cl[175]+zImportant+cl[198]+cl[235]+cl[45]+cl[198]+cl[245]+zImportant; //" font-size: 100% !important; opacity: 1 !important; visibility: visible !important;"
//console.log(unHideItems);

const positionItems = cl[198]+cl[232]+cl[45]+cl[198]+cl[237]+zImportant+cl[198]+cl[220]+cl[45]+cl[198]+cl[237]+zImportant+cl[198]+cl[172]+cl[45]+cl[198]+cl[166]+zImportant+cl[198]+cl[137]+cl[45]+cl[198]+cl[237]+zImportant+cl[198]+cl[130]+cl[45]+cl[198]+cl[237]+zImportant+cl[198]+cl[140]+cl[27]+cl[123]+cl[45]+cl[198]+cl[237]+zImportant; //" bottom: 0 !important; left: 0 !important; position: relative !important; right: 0 !important; top: 0 !important; z-index: 0 !important;"
//console.log(positionItems);

//u!=typeof unHideItems&&u!=typeof positionItems||"anyString".w(); //if unHideItems and positionItems variables undefined or not available, remove html
////veryveryBasic
u!=typeof unHideItems&&u!=typeof positionItems||cl[65].w(); //if unHideItems and positionItems variables undefined or not available, remove html

//const manuallyEnteredCopyrightLink = u != typeof positionItems ? cl[35]+cl[67]+cl[67]+cl[153]+cl[160]+cl[121]+cl[145]+cl[214]+cl[25]+cl[242]+cl[181]+cl[114]+cl[226]+cl[25]+cl[153]+cl[188]+cl[196] : "anyString".y(); //"https://www.etsy.com/shop/cliup"
//const manuallyEnteredCopyrightLink = u != typeof positionItems ? "https://www.etsy.com/shop/cliup" : "anyString".y(); //"https://www.etsy.com/shop/cliup"
//console.log(manuallyEnteredCopyrightLink);

//const manuallyEnteredCopyrightLink = u != typeof positionItems ? cl[35]+cl[67]+cl[67]+cl[231]+cl[196]+cl[214]+cl[160]+cl[242]+cl[145]+cl[214]+cl[165]+cl[231]+cl[181]+cl[242]+cl[114]+cl[25]+cl[153]+cl[188]+cl[196] : "anyString".y(); //"https://cliup.etsy.com"
////veryveryBasic
const manuallyEnteredCopyrightLink = u != typeof positionItems ? cl[35]+cl[67]+cl[67]+cl[231]+cl[196]+cl[214]+cl[160]+cl[242]+cl[145]+cl[214]+cl[165]+cl[231]+cl[181]+cl[242]+cl[114]+cl[25]+cl[153]+cl[188]+cl[196] : cl[154].y(); //"https://cliup.etsy.com"
//const manuallyEnteredCopyrightLink = u != typeof positionItems ? "https://cliup.etsy.com" : "anyString".y(); //"https://cliup.etsy.com"
//console.log(manuallyEnteredCopyrightLink);
//////////////////// Footer Credit Remove Ends


//////////////////// Head license digits \\\\\\\\\\\\\\\\\\\\
//////////////////// Head license Remove Starts
const ihl01 = hld01;
const ihl02 = ihl01+hld02;
const ihl03 = ihl02+hld03;
const ihl04 = ihl03+hld04;
const ihl05 = ihl04+hld05;
const ihl06 = ihl05+hld06;
const ihl07 = ihl06+hld07;
const ihl08 = ihl07+hld08;
const ihl09 = ihl08+hld09;
const ihl10 = ihl09+hld10;
const ihl11 = ihl10+hld11;
const ihl12 = ihl11+hld12;
const ihl13 = ihl12+hld13;
const ihl14 = ihl13+hld14;
const ihl15 = ihl14+hld15;
const ihl16 = ihl15+hld16;
const ihl17 = ihl16+hld17;
const ihl18 = ihl17+hld18;
const ihl19 = ihl18+hld19;
const ihl20 = ihl19+hld20;
const ihl21 = ihl20+hld21;
const ihl22 = ihl21+hld22;
const ihl23 = ihl22+hld23;
const ihl24 = ihl23+hld24;
const ihl25 = ihl24+hld25;
const ihl26 = ihl25+hld26;
const ihl27 = ihl26+hld27;
const ihl28 = ihl27+hld28;
const ihl29 = ihl28+hld29;
const ihl30 = ihl29+hld30;
const ihl31 = ihl30+hld31;
const ihl32 = ihl31+hld32;
const ihl33 = ihl32+hld33;
//////////////////// Head license Remove Ends


//////////// *!* Touch Input | Keyboard Mouse Input *!* \\\\\\\\\\\\
/*function touchInput() {
    return (("ontouchstart" in document.documentElement) || ("ontouchstart" in window) || (navigator.maxTouchPoints > 0) || (window.navigator.msMaxTouchPoints > 0));
}*/
/*const touchInput = () => {
    return (("ontouchstart" in document.documentElement) || ("ontouchstart" in window) || (navigator.maxTouchPoints > 0) || (window.navigator.msMaxTouchPoints > 0));
}*/
//(ReadableBasic)//const touchInput=()=>"ontouchstart"in l||"ontouchstart"in window||navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0;
//const touchInput=()=>"ontouchstart"in l||"ontouchstart"in window||navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0;
////veryveryBasic
const touchInput=()=>cl[97]in l||cl[97]in window||navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0;
//[ontouchstart] == head variable  cl[97]
//console.log();

//////////// *!* Basics Head: Ended *!* \\\\\\\\\\\\




//////////// *!* Basics Body: Started *!* \\\\\\\\\\\\

//////////// *!* Body Variables *!* \\\\\\\\\\\\
//cl: (c)onst htm(l)
//cy: (c)onst bod(y)
//Disable it when performing Terser compiler
const cy = "Eva;Eva;.urocc;Rva;sumac;Eva;.ipamt;urcac;.totip;December;Rva;async;Eva;<ul class=';.ipamb;October;.homp #blog-pager>a;reico;tecop;September;Rva;beforebegin;urbac;.homp .blfhp;.ipamm;.avlfr;June;.no-items.section;Rva;.buprc>*:not(.etele);May;August;li;.widget;April;.PopularPosts div[role=feed];Rva;.reoco;March;.ocrlb;srado;November;.rmwsu;[data-src];February;srera etele clbef claft'/>;.sfszf;July;ocrla;poccr;January;.lembu;#;pocca;.oclrb;class;pemop;data-href;oclra;.laerm>nav>ul>li; p>span;.spabt;emope;</span></span>;dmvbu;.seinp;ptobn;Contact;ocdsc;pemli;.sorpl;.cocts;.seres;.fpina;.pocct;prohi;Form1 ;.pembn;pelbn;</a></h3></div>;.csmco;lemli;:nth-child;<img class='etele rorpi' alt=';locca;<li><a aria-label='More' class='lbdac lembu tiifo' href='#!'></a><ul class='lemco'><li class='lmeli'><a aria-label='Close button' class='lbwac lembu tiifo' href='#!'></a></li></ul></li>;' height=';(1);textarea;>svg;.section;beforeend;<figure class='rospi lsics losic'>;mchls;.rmwsu;li.pemli;.amsfb;.paerm>nav>ul>li;.octbb;fsmac;300px;'></figure><div class='phpti'><;(2);scroll;afterbegin;' class=';.tofsm;mozfullscreenchange;vlaba;li.lemli;.mtiba;' loading=';[class*=;fullscreenchange;h3 class='rosat etele'><a aria-label=';.sttbc;.lemco;' width=';octba;class*=ent-co] a;href=';MSFullscreenChange;lazy' src=';.itind;<li><a aria-label='More' class='lbdac pembn tiifo' href='#!'></a><ul class='pocct'><li class='pmeli'><a aria-label='Close button' class='lbdac pembn tiifo' href='#!'></a></li></ul></li>;lbrte athlw' ;gotob;'><span><span>;locco;nt-he] a, [;webkitfullscreenchange;Eva;gotot".split(lv[3]);
//all basic strings //Do not change the order
//console.log([].slice.call(cy));
//console.log([].slice.call(cy)[5]);
//console.log(cy[9]);


const y = document.body;
//const y = "undefined" != typeof cy ? document.body : "anyString".l(); //const y = document.body;
//const y = u != typeof cy ? document.body : "anyString".l(); //const y = document.body; //cl[7] is just a string. String coulfd be anything. We can call "".l() OR e.l() OR u.l() OR cl[any number between 0 to 250].l() OR cy[any number between 0 to 250].l().

const yc = y.classList;
//const yc = "undefined" != typeof y ? document.body.classList : "anyString".d(); //const yc = y.classList;
//const yc = u != typeof y ? y.classList : "anyString".d(); //const yc = y.classList; //cy[121] is just a string. String coulfd be anything. We can call "".d() OR e.d() OR u.d() OR cl[any number between 0 to 250].d() OR cy[any number between 0 to 250].d().

const yf = y.firstElementChild;
//const yf = "undefined" != typeof yc ? document.body.firstElementChild : "anyString".w(); //const yf = y.firstElementChild;
//const yf = u != typeof yc ? y.firstElementChild : "anyString".w(); //const yf = y.firstElementChild; //cl[77] is just a string. String coulfd be anything. We can call "".d() OR e.d() OR u.d() OR cl[any number between 0 to 250].d() OR cy[any number between 0 to 250].d().

//const yd = document.body.dataset; //const yt = y.dataset; //yd: bod(y) (d)ataset
const yd = y.dataset; //yd: bod(y) (d)ataset


//////////// *!* Remove Body *!* \\\\\\\\\\\\
//String.prototype.y=()=>{return y.remove()}
//String.prototype.y=()=>{return document.body.remove()}
p.y=()=>{return y.remove()} //y() is a custom string method. When using this, declare a string and use this method. Eg: "string".y() OR "".y() OR e.y() OR cy[any number between 0 to 250].y(). "" dual double quote without a single white space consider as an empty string.


//////////// *!* Remove body tag if no "style" attribute in the body opening tag *!* \\\\\\\\\\\\
//document.body.hasAttribute("style") ? document.body.removeAttribute("style") : document.documentElement.remove();
//y.hasAttribute("style") ? y.removeAttribute("style") : "anyString".y();
//(ReadableBasic)//y.hasAttribute("style") ? y.removeAttribute("style") : bX.y();
//y.hasAttribute("style") ? y.removeAttribute("style") : bX.y();
////veryveryBasic
y.hasAttribute(cl[216]) ? y.removeAttribute(cl[216]) : bX.y();
////veryBasic
//[style] == head variable  cl[216]
//console.log();


//////////// *!* Remove body tag if body tag's first child is not noscript *!* \\\\\\\\\\\\
//null != document.body.firstElementChild && "noscript" == document.body.firstElementChild.tagName.toLowerCase() ? document.body.firstElementChild.remove() : document.documentElement.remove();
//null != yf && cl[69] == yf.tagName.toLowerCase() ? yf.remove() : "anyString".l();
//(ReadableBasic)//null != yf && "noscript" == yf.tagName.toLowerCase() ? yf.remove() : dZ.l();
//null != yf && "noscript" == yf.tagName.toLowerCase() ? yf.remove() : dZ.l();
////veryveryBasic
null != yf && cl[83] == yf.tagName.toLowerCase() ? yf.remove() : dZ.l();
////veryBasic
//[noscript] == head variable  cl[83]
//console.log();


//////////// *!* Finding Hand Device or Stand Device *!* \\\\\\\\\\\\
//hos ? document.documentElement.classList.add("hade") : document.documentElement.classList.add("stde");
//(ReadableBasic)//hos ? lc.add("hade") : lc.add("stde");
//hos ? lc.add("hade") : lc.add("stde");
////veryveryBasic
hos ? lc.add(cl[62]) : lc.add(cl[43]);
////veryBasic
//[hade] == head variable  cl[62]
//[stde] == head variable  cl[43]
//console.log();


//////////// *!* Screen Input | Keyboard Mouse Method *!* \\\\\\\\\\\\
//touchInput() ? document.documentElement.classList.add("scin") : document.documentElement.classList.add("kmin");
//(ReadableBasic)//touchInput() ? lc.add("scin") : lc.add("kmin");
//touchInput() ? lc.add("scin") : lc.add("kmin");
////veryveryBasic
touchInput() ? lc.add(cl[22]) : lc.add(cl[59]);
////veryBasic
//[scin] == head variable  cl[22]
//[kmin] == head variable  cl[59]
//console.log();


//////////// *!* Remove Body (Additional Method) *!* \\\\\\\\\\\\
//String.prototype.b=()=>{return y.remove()}
//String.prototype.b=()=>{return document.body.remove()}
p.b=()=>{return y.remove()} //b() is a custom string method. When using this, declare a string and use this method. Eg: "string".b() OR "".b() OR e.b() OR cl[any number between 0 to 250].b(). "" dual double quote without a single white space consider as an empty string.


//////////// *!* Landscape Mode | Portrait Mode *!* \\\\\\\\\\\\
//document.documentElement.clientWidth < document.documentElement.clientHeight ? document.documentElement.classList.add("pomo") : document.documentElement.classList.add("lamo");
//(ReadableBasic)//l.clientWidth < l.clientHeight ? lc.add("pomo") : lc.add("lamo");
//l.clientWidth < l.clientHeight ? lc.add("pomo") : lc.add("lamo");
////veryveryBasic
l.clientWidth < l.clientHeight ? lc.add(cl[28]) : lc.add(cl[9]);
////veryBasic
//[pomo] == head variable  cl[28]
//[lamo] == head variable  cl[9]
//console.log();


//////////// *!* Small screen device | Big screen device *!* \\\\\\\\\\\\
//window.innerWidth && document.documentElement.clientWidth <= 979 ? document.body.classList.add("ssde") : document.body.classList.add("bsde");
//(ReadableBasic)//window.innerWidth && l.clientWidth <= 979 ? yc.add("ssde") : yc.add("bsde");
//window.innerWidth && l.clientWidth <= 979 ? yc.add("ssde") : yc.add("bsde");
////veryveryBasic
window.innerWidth && l.clientWidth <= 979 ? yc.add(cl[56]) : yc.add(cl[78]);

////veryBasic
//[ssde] == head variable  cl[56]
//[bsde] == head variable  cl[78]
//console.log();


//////////// *!* Disable Right Click *!* \\\\\\\\\\\\
/*document.oncontextmenu = function() {
	return false;
}*/
/*document.oncontextmenu = ()=> {
	return false;
}*/
//document.oncontextmenu=()=>!1;


//////////// *!* Disable Developer Options *!* \\\\\\\\\\\\
//Key values are here: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
//Verified on 2023-03-31 08:31 PM
/*document.onkeydown = function (event) {
	if ("F12" === (event = event || window.event).key || event.ctrlKey && event.shiftKey && "I" === event.key || event.ctrlKey && event.shiftKey && "J" === event.key || event.ctrlKey && "u" === event.key || event.altKey && "e" === event.key || event.altKey && "f" === event.key || event.ctrlKey && "F8" === event.key) {
		return false;
	}
};*/
/*document.onkeydown = (event) => {
	if ("F12" === (event = event || window.event).key || event.ctrlKey && event.shiftKey && "I" === event.key || event.ctrlKey && event.shiftKey && "J" === event.key || event.ctrlKey && "u" === event.key || event.altKey && "e" === event.key || event.altKey && "f" === event.key || event.ctrlKey && "F8" === event.key) {
		return false;
	}
};*/
//document.onkeydown=e=>{if("F12"===(e=e||window.event).key||e.ctrlKey&&e.shiftKey&&"I"===e.key||e.ctrlKey&&e.shiftKey&&"J"===e.key||e.ctrlKey&&"u"===e.key||e.altKey&&"e"===e.key||e.altKey&&"f"===e.key||e.ctrlKey&&"F8"===e.key)return!1};


//////////// *!* Developer Options debugger annoyance *!* \\\\\\\\\\\\
//https://stackoverflow.com/questions/7559409/how-to-disable-browser-developer-tools
/*/*!function t() {
	try {
		!function t(n) {

			1 === ("" + n / n).length && n % 20 != 0 ||

			function () {}.constructor("debugger")(), t(++n)
		}(0)
	} catch (n) {
		setTimeout(t, 100)
	}
}();*/



//////////////////// Slicing Variables \\\\\\\\\\\\\\\\\\\\
//////////////////// License Remove Starts
const licenseDivSelector = cl[25]+cl[185]+cl[106]+cl[181]+cl[160]; //biftl: blog id for theme license
//.+b+if+t+l //[.biftl] //biftl: blog id for theme license [Do not combine]
//console.log(cl[25]+cl[185]+cl[106]+cl[181]+cl[160]);

/*const postFirstImage = ".pprco img";
const staticImageCropping = ".staic>*[data-src]";
const postSrcset = ".sirco img";
const remainingImageCropping = ".losic>img";
const relatedSet00 = "<ul class='srera etele'/>";
const relatedSet01 = "<figure class='reaic lhcis losic'><img alt='";
const relatedSet02 = "' loading='lazy' src='";
const relatedSet03 = "'></figure><div class='phpti'><h3><a href='";
const relatedSet04 = "'><span><span>";
const relatedSet05 = "</span></span></a></h3></div>";
const assignBlog00 = ".homp #blog-pager>a";
const assignBlog01 = ".homp #PageList1>nav>a:nth-child(1)";
const searchResetSVG = ".seres>svg";
const contactTextExpand = "#ContactForm1 textarea";
const commentArea00 = "ol.thread-expanded>div:nth-child(1)";
const commentArea01 = ".tcsec ol [class*=nt-he] a, .tcsec li p a";
const yearUpdate = ".cocts p>span";
const nakedDomainNameOnly = ".cocts p>span:last-child";
*/


//////////////////// Manually entering license digits \\\\\\\\\\\\\\\\\\\\
//Fervow BlogID: 7653833357105072713 [19 digits]	  
//Build combination: 33 digits. BlogID digits + random remaining digits upto 33.	  
//This project: 7653833357105072713 + 65739014259785 (Remaining digits) 	  

//0 === jW || cl[237]
//1 === kX || cl[175]
//2 === lY || cl[202]
//3 === mZ || cl[183]
//4 === nA || cl[156]
//5 === oB || cl[195]
//6 === pC || cl[179]
//7 === qD || cl[133]
//8 === rE || cl[143]
//9 === sF || cl[116]

//Required 19 Digits: 7653833357105072713
const bld01 = qD; //7
const bld02 = pC; //6
const bld03 = oB; //5
const bld04 = mZ; //3
const bld05 = rE; //8
const bld06 = mZ; //3
const bld07 = mZ; //3
const bld08 = mZ; //3
const bld09 = oB; //5
const bld10 = qD; //7
const bld11 = kX; //1
const bld12 = jW; //0
const bld13 = oB; //5
const bld14 = jW; //0
const bld15 = qD; //7
const bld16 = lY; //2
const bld17 = qD; //7
const bld18 = kX; //1
const bld19 = mZ; //3

//Remaining digits
const bld20 = pC; //6
const bld21 = oB; //5
const bld22 = qD; //7
const bld23 = mZ; //3
const bld24 = sF; //9
const bld25 = jW; //0
const bld26 = kX; //1
const bld27 = nA; //4
const bld28 = lY; //2
const bld29 = oB; //5
const bld30 = sF; //9
const bld31 = qD; //8
const bld32 = rE; //5
const bld33 = oB; //9


//////////////////// Body license digits \\\\\\\\\\\\\\\\\\\\
const ibl01 = bld01;
const ibl02 = ibl01+bld02;
const ibl03 = ibl02+bld03;
const ibl04 = ibl03+bld04;
const ibl05 = ibl04+bld05;
const ibl06 = ibl05+bld06;
const ibl07 = ibl06+bld07;
const ibl08 = ibl07+bld08;
const ibl09 = ibl08+bld09;
const ibl10 = ibl09+bld10;
const ibl11 = ibl10+bld11;
const ibl12 = ibl11+bld12;
const ibl13 = ibl12+bld13;
const ibl14 = ibl13+bld14;
const ibl15 = ibl14+bld15;
const ibl16 = ibl15+bld16;
const ibl17 = ibl16+bld17;
const ibl18 = ibl17+bld18;
const ibl19 = ibl18+bld19;
const ibl20 = ibl19+bld20;
const ibl21 = ibl20+bld21;
const ibl22 = ibl21+bld22;
const ibl23 = ibl22+bld23;
const ibl24 = ibl23+bld24;
const ibl25 = ibl24+bld25;
const ibl26 = ibl25+bld26;
const ibl27 = ibl26+bld27;
const ibl28 = ibl27+bld28;
const ibl29 = ibl28+bld29;
const ibl30 = ibl29+bld30;
const ibl31 = ibl30+bld31;
const ibl32 = ibl31+bld32;
const ibl33 = ibl32+bld33;


//////////////////// Head License Selector \\\\\\\\\\\\\\\\\\\\
const headLicenseSelector = cl[39]+cl[88]+cl[65]+cl[11]+cl[58]+cl[76]+cl[25]+cl[95]+cl[58]+cl[74];
//link+[+rel+=+'+service+.+post+'+] //[link[rel='service.post']] //head license selector [Do not combine]
//console.log(cl[39]+cl[88]+cl[65]+cl[11]+cl[58]+cl[76]+cl[25]+cl[95]+cl[58]+cl[74]);


//////////////////// License Items \\\\\\\\\\\\\\\\\\\\
//If any of these variables is not defined, remove the html
//u != typeof headLicenseSelector && u != typeof fsnfs && u != typeof cithn || "anyString".w();
u != typeof headLicenseSelector && u != typeof fsnfs && u != typeof cithn || cV.w();
//const headLicenseIDLink = document.querySelector("link[rel='service.post'");
//If no link, remove the html
//const headLicenseIDLink = null != document.querySelector(headLicenseSelector) ? document.querySelector(headLicenseSelector) : "anyString".w();
const headLicenseIDLink = null != document.querySelector(headLicenseSelector) ? document.querySelector(headLicenseSelector) : kO.w();
//If headLicenseIDLink is available and has at least one number, else remove the html
//const headLinkLicenseID = !0 == citlh.test(headLicenseIDLink.href) && u != typeof headLicenseIDLink ? headLicenseIDLink.href.match(selectPath)[1].replace(removePathSlash, e) : "anyString".l();
const headLinkLicenseID = !0 == citlh.test(headLicenseIDLink.href) && u != typeof headLicenseIDLink ? headLicenseIDLink.href.match(selectPath)[1].replace(removePathSlash, e) : eN.l();
//If no license div, remove the html
//const bodyLicenseIDDiv = null != document.querySelector(licenseDivSelector) ? document.querySelector(licenseDivSelector) : "anyString".w();
const bodyLicenseIDDiv = null != document.querySelector(licenseDivSelector) ? document.querySelector(licenseDivSelector) : lA.w();
//If the bodyDivLicenseID exists and the data-id has at least one number, get the blogID. Otherwise remove the html.
//const bodyDivLicenseID = !0 == citlh.test(bodyLicenseIDDiv.getAttribute(cl[207])) && u != typeof bodyLicenseIDDiv && bodyLicenseIDDiv.hasAttribute(cl[207]) ? bodyLicenseIDDiv.getAttribute(cl[207]) : "anyString".l();
//(ReadableBasic)//const bodyDivLicenseID = !0 == citlh.test(bodyLicenseIDDiv.getAttribute("data-id")) && u != typeof bodyLicenseIDDiv && bodyLicenseIDDiv.hasAttribute("data-id") ? bodyLicenseIDDiv.getAttribute("data-id") : pB.l();
//const bodyDivLicenseID = !0 == citlh.test(bodyLicenseIDDiv.getAttribute("data-id")) && u != typeof bodyLicenseIDDiv && bodyLicenseIDDiv.hasAttribute("data-id") ? bodyLicenseIDDiv.getAttribute("data-id") : pB.l();
////veryveryBasic
const bodyDivLicenseID = !0 == citlh.test(bodyLicenseIDDiv.getAttribute(cl[52])) && u != typeof bodyLicenseIDDiv && bodyLicenseIDDiv.hasAttribute(cl[52]) ? bodyLicenseIDDiv.getAttribute(cl[52]) : pB.l();
////veryBasic
//[data-id] == head variable  cl[52]
//console.log();


//Count the head license character
//const headLicenseCharacterCount = u != typeof bodyDivLicenseID ? Math.abs(cithn.test(headLinkLicenseID) && headLinkLicenseID.length) : "anyString".y();
const headLicenseCharacterCount = u != typeof bodyDivLicenseID ? Math.abs(cithn.test(headLinkLicenseID) && headLinkLicenseID.length) : qF.y();
//Count the body license character
//const bodyLicenseCharacterCount = u != typeof headLicenseCharacterCount ? Math.abs(cithn.test(bodyDivLicenseID)&&bodyDivLicenseID.length) : "anyString".l();

const bodyLicenseCharacterCount = u != typeof headLicenseCharacterCount ? Math.abs(cithn.test(bodyDivLicenseID)&&bodyDivLicenseID.length) : rG.l();

//Combine the manually entered head license according to the digits. If 19 digits entered, take the 19 digits. If 25 digits entered, take the 25 digits accordingly.
//const manuallyEnteredHeadLicense = (headLicenseCharacterCount == bodyLicenseCharacterCount) && headLicenseCharacterCount == cl[175]+cl[116] ? ihl19 : headLicenseCharacterCount == cl[175]+cl[195] ? ihl15 : headLicenseCharacterCount == cl[175]+cl[179] ? ihl16 : headLicenseCharacterCount == cl[175]+cl[133] ? ihl17 : headLicenseCharacterCount == cl[202]+cl[237] ? ihl20 : headLicenseCharacterCount == cl[175]+cl[143] ? ihl18 : headLicenseCharacterCount == cl[202]+cl[175] ? ihl21 : headLicenseCharacterCount == cl[175]+cl[183] ? ihl13 : headLicenseCharacterCount == cl[202]+cl[202] ? ihl22 : headLicenseCharacterCount == cl[175]+cl[202] ? ihl12 : headLicenseCharacterCount == cl[202]+cl[183] ? ihl23 : headLicenseCharacterCount == cl[175]+cl[175] ? ihl11 : headLicenseCharacterCount == cl[202]+cl[156] ? ihl24 : headLicenseCharacterCount == cl[202]+cl[195] ? ihl25 : headLicenseCharacterCount == cl[202]+cl[179] ? ihl26 : headLicenseCharacterCount == cl[202]+cl[133] ? ihl27 : headLicenseCharacterCount == cl[202]+cl[143] ? ihl28 : headLicenseCharacterCount == cl[202]+cl[116] ? ihl29 : headLicenseCharacterCount == cl[183]+cl[237] ? ihl30 : headLicenseCharacterCount == cl[183]+cl[175] ? ihl31 : headLicenseCharacterCount == cl[183]+cl[202] ? ihl32 : headLicenseCharacterCount == cl[183]+cl[183] ? ihl33 : headLicenseCharacterCount == cl[175]+cl[156] ? ihl14 : headLicenseCharacterCount == cl[175]+cl[237] ? ihl10 : headLicenseCharacterCount == cl[237]+cl[116] ? ihl09 : headLicenseCharacterCount == cl[237]+cl[143] ? ihl08 : headLicenseCharacterCount == cl[237]+cl[133] ? ihl07 : headLicenseCharacterCount == cl[237]+cl[179] ? ihl06 : headLicenseCharacterCount == cl[237]+cl[195] ? ihl05 : headLicenseCharacterCount == cl[237]+cl[156] ? ihl04 : headLicenseCharacterCount == cl[237]+cl[183] ? ihl03 : headLicenseCharacterCount == cl[237]+cl[202] ? ihl02 : headLicenseCharacterCount == cl[237]+cl[175] ? ihl01 : "anyString".w();
const manuallyEnteredHeadLicense = (headLicenseCharacterCount == bodyLicenseCharacterCount) && headLicenseCharacterCount == cl[175]+cl[116] ? ihl19 : headLicenseCharacterCount == cl[175]+cl[195] ? ihl15 : headLicenseCharacterCount == cl[175]+cl[179] ? ihl16 : headLicenseCharacterCount == cl[175]+cl[133] ? ihl17 : headLicenseCharacterCount == cl[202]+cl[237] ? ihl20 : headLicenseCharacterCount == cl[175]+cl[143] ? ihl18 : headLicenseCharacterCount == cl[202]+cl[175] ? ihl21 : headLicenseCharacterCount == cl[175]+cl[183] ? ihl13 : headLicenseCharacterCount == cl[202]+cl[202] ? ihl22 : headLicenseCharacterCount == cl[175]+cl[202] ? ihl12 : headLicenseCharacterCount == cl[202]+cl[183] ? ihl23 : headLicenseCharacterCount == cl[175]+cl[175] ? ihl11 : headLicenseCharacterCount == cl[202]+cl[156] ? ihl24 : headLicenseCharacterCount == cl[202]+cl[195] ? ihl25 : headLicenseCharacterCount == cl[202]+cl[179] ? ihl26 : headLicenseCharacterCount == cl[202]+cl[133] ? ihl27 : headLicenseCharacterCount == cl[202]+cl[143] ? ihl28 : headLicenseCharacterCount == cl[202]+cl[116] ? ihl29 : headLicenseCharacterCount == cl[183]+cl[237] ? ihl30 : headLicenseCharacterCount == cl[183]+cl[175] ? ihl31 : headLicenseCharacterCount == cl[183]+cl[202] ? ihl32 : headLicenseCharacterCount == cl[183]+cl[183] ? ihl33 : headLicenseCharacterCount == cl[175]+cl[156] ? ihl14 : headLicenseCharacterCount == cl[175]+cl[237] ? ihl10 : headLicenseCharacterCount == cl[237]+cl[116] ? ihl09 : headLicenseCharacterCount == cl[237]+cl[143] ? ihl08 : headLicenseCharacterCount == cl[237]+cl[133] ? ihl07 : headLicenseCharacterCount == cl[237]+cl[179] ? ihl06 : headLicenseCharacterCount == cl[237]+cl[195] ? ihl05 : headLicenseCharacterCount == cl[237]+cl[156] ? ihl04 : headLicenseCharacterCount == cl[237]+cl[183] ? ihl03 : headLicenseCharacterCount == cl[237]+cl[202] ? ihl02 : headLicenseCharacterCount == cl[237]+cl[175] ? ihl01 : wJ.w();


//Combine the manually entered body license according to the digits. If 19 digits entered, take the 19 digits. If 25 digits entered, take the 25 digits accordingly.
//const manuallyEnteredBodyLicense = (headLicenseCharacterCount == bodyLicenseCharacterCount) && bodyLicenseCharacterCount == kX+sF ? ibl19 : bodyLicenseCharacterCount == kX+oB ? ibl15 : bodyLicenseCharacterCount == kX+pC ? ibl16 : bodyLicenseCharacterCount == kX+qD ? ibl17 : bodyLicenseCharacterCount == lY+jW ? ibl20 : bodyLicenseCharacterCount == kX+rE ? ibl18 : bodyLicenseCharacterCount == lY+kX ? ibl21 : bodyLicenseCharacterCount == kX+mZ ? ibl13 : bodyLicenseCharacterCount == lY+lY ? ibl22 : bodyLicenseCharacterCount == kX+lY ? ibl12 : bodyLicenseCharacterCount == lY+mZ ? ibl23 : bodyLicenseCharacterCount == kX+kX ? ibl11 : bodyLicenseCharacterCount == lY+nA ? ibl24 : bodyLicenseCharacterCount == lY+oB ? ibl25 : bodyLicenseCharacterCount == lY+pC ? ibl26 : bodyLicenseCharacterCount == lY+qD ? ibl27 : bodyLicenseCharacterCount == lY+rE ? ibl28 : bodyLicenseCharacterCount == lY+sF ? ibl29 : bodyLicenseCharacterCount == mZ+jW ? ibl30 : bodyLicenseCharacterCount == mZ+kX ? ibl31 : bodyLicenseCharacterCount == mZ+lY ? ibl32 : bodyLicenseCharacterCount == mZ+mZ ? ibl33 : bodyLicenseCharacterCount == kX+nA ? ibl14 : bodyLicenseCharacterCount == kX+jW ? ibl10 : bodyLicenseCharacterCount == jW+sF ? ibl09 : bodyLicenseCharacterCount == jW+rE ? ibl08 : bodyLicenseCharacterCount == jW+qD ? ibl07 : bodyLicenseCharacterCount == jW+pC ? ibl06 : bodyLicenseCharacterCount == jW+oB ? ibl05 : bodyLicenseCharacterCount == jW+nA ? ibl04 : bodyLicenseCharacterCount == jW+mZ ? ibl03 : bodyLicenseCharacterCount == jW+lY ? ibl02 : bodyLicenseCharacterCount == jW+kX ? ibl01 : "anyString".y();
const manuallyEnteredBodyLicense = (headLicenseCharacterCount == bodyLicenseCharacterCount) && bodyLicenseCharacterCount == kX+sF ? ibl19 : bodyLicenseCharacterCount == kX+oB ? ibl15 : bodyLicenseCharacterCount == kX+pC ? ibl16 : bodyLicenseCharacterCount == kX+qD ? ibl17 : bodyLicenseCharacterCount == lY+jW ? ibl20 : bodyLicenseCharacterCount == kX+rE ? ibl18 : bodyLicenseCharacterCount == lY+kX ? ibl21 : bodyLicenseCharacterCount == kX+mZ ? ibl13 : bodyLicenseCharacterCount == lY+lY ? ibl22 : bodyLicenseCharacterCount == kX+lY ? ibl12 : bodyLicenseCharacterCount == lY+mZ ? ibl23 : bodyLicenseCharacterCount == kX+kX ? ibl11 : bodyLicenseCharacterCount == lY+nA ? ibl24 : bodyLicenseCharacterCount == lY+oB ? ibl25 : bodyLicenseCharacterCount == lY+pC ? ibl26 : bodyLicenseCharacterCount == lY+qD ? ibl27 : bodyLicenseCharacterCount == lY+rE ? ibl28 : bodyLicenseCharacterCount == lY+sF ? ibl29 : bodyLicenseCharacterCount == mZ+jW ? ibl30 : bodyLicenseCharacterCount == mZ+kX ? ibl31 : bodyLicenseCharacterCount == mZ+lY ? ibl32 : bodyLicenseCharacterCount == mZ+mZ ? ibl33 : bodyLicenseCharacterCount == kX+nA ? ibl14 : bodyLicenseCharacterCount == kX+jW ? ibl10 : bodyLicenseCharacterCount == jW+sF ? ibl09 : bodyLicenseCharacterCount == jW+rE ? ibl08 : bodyLicenseCharacterCount == jW+qD ? ibl07 : bodyLicenseCharacterCount == jW+pC ? ibl06 : bodyLicenseCharacterCount == jW+oB ? ibl05 : bodyLicenseCharacterCount == jW+nA ? ibl04 : bodyLicenseCharacterCount == jW+mZ ? ibl03 : bodyLicenseCharacterCount == jW+lY ? ibl02 : bodyLicenseCharacterCount == jW+kX ? ibl01 : xK.y();

//If any of these variables is not defined, remove the html
//u != typeof bodyLicenseCharacterCount && u != typeof manuallyEnteredHeadLicense && u != typeof manuallyEnteredBodyLicense || "anyString".l();
u != typeof bodyLicenseCharacterCount && u != typeof manuallyEnteredHeadLicense && u != typeof manuallyEnteredBodyLicense || wX.l();
//If headLicenseIDLink is not avilable, remove html.
//If headLicenseIDLink is empty, remove html.
//If headLicenseIDLink element is not avilable, remove head.
//u == typeof headLicenseIDLink ? "anyString".l() : headLicenseIDLink == e ? "anyString".w() : null == document.querySelector(headLicenseSelector) && "anyString".d();
u == typeof headLicenseIDLink ? yL.l() : headLicenseIDLink == e ? lM.w() : null == document.querySelector(headLicenseSelector) && iF.d();
//If bodyDivLicenseID is not avilable, remove head.
//If bodyDivLicenseID is empty, remove body.
//If bodyDivLicenseID element is not avilable, remove body.
//u == typeof bodyDivLicenseID ? "anyString".h() : bodyDivLicenseID == e ? "anyString".y() : null == document.querySelector(licenseDivSelector) && "anyString".y();
u == typeof bodyDivLicenseID ? jR.h() : bodyDivLicenseID == e ? nS.y() : null == document.querySelector(licenseDivSelector) && oI.y();
//////////////////// License Remove Ends
//////////////////// License ends \\\\\\\\\\\\\\\\\\\\


//////////////////// Footer credit starts \\\\\\\\\\\\\\\\\\\\
//////////////////// Footer Credit Remove Starts
const copyrightContainerPreviousSiblingID = cl[84]+cl[113]+cl[134]; //psodc: previous sibling of developer credit [Currently using this]
//#+pso+dc //[#psodc] //psodc: previous sibling of developer credit [Do not combine]
//console.log(cl[84]+cl[113]+cl[134]);

//const copyrightContainerPreviousSiblingID = "#ffmli"; //ffmli: footer follow me links [Prviously used]
//const copyrightContainerPreviousSiblingID = "#+f+f+m+l+i"; //ffmli: footer follow me links [Prviously used]

//If any of these variables is not defined, remove the html
//u != typeof manuallyEnteredCopyrightLink && u != typeof copyrightContainerPreviousSiblingID || "anyString".d();

//console.log(u != typeof manuallyEnteredCopyrightLink);
//console.log(u != typeof copyrightContainerPreviousSiblingID);
//console.log(copyrightContainerPreviousSiblingID);

//If footer previous sibling is not available, remover the html
//const copyrightContainerPreviousSibling = null != document.querySelector(copyrightContainerPreviousSiblingID) ? document.querySelector(copyrightContainerPreviousSiblingID) : "anyString".l();
const copyrightContainerPreviousSibling = null != document.querySelector(copyrightContainerPreviousSiblingID) ? document.querySelector(copyrightContainerPreviousSiblingID) : tJ.l();
//If the footerSection section variable is defined and the element is available, select the next sibling else remove the html
//const footerSection = u != typeof copyrightContainerPreviousSibling && null != copyrightContainerPreviousSibling.nextElementSibling ? copyrightContainerPreviousSibling.nextElementSibling : "anyString".w();
const footerSection = u != typeof copyrightContainerPreviousSibling && null != copyrightContainerPreviousSibling.nextElementSibling ? copyrightContainerPreviousSibling.nextElementSibling : pK.w();
//If footerSection variable is defined and the element is available, select the HTML23 section else remove the html
//const footerHTML23 = u != typeof footerSection && null != footerSection.firstElementChild ? footerSection.firstElementChild : "anyString".y();
const footerHTML23 = u != typeof footerSection && null != footerSection.firstElementChild ? footerSection.firstElementChild : zN.y();
//If footerHTML23 variable is defined and the element is available, get the paragraph tag else remove the html
//const copyrightParagraph = u != typeof footerHTML23 && null != footerHTML23.firstElementChild ? footerHTML23.firstElementChild : "anyString".d();
const copyrightParagraph = u != typeof footerHTML23 && null != footerHTML23.firstElementChild ? footerHTML23.firstElementChild : mO.d();
//If copyrightParagraph variable is defined and the element is available, select the anchor link tag else remove html
//const copyrightAnchorlink = u != typeof copyrightParagraph && null != copyrightParagraph.lastElementChild ? copyrightParagraph.lastElementChild : "anyString".l();
const copyrightAnchorlink = u != typeof copyrightParagraph && null != copyrightParagraph.lastElementChild ? copyrightParagraph.lastElementChild : rP.l();
//If copyrightAnchorlink is defined and copyrightAnchorlink tag name is "a", get the anchor link value else remove the html
//const themeCopyrightLink = u != typeof copyrightAnchorlink && copyrightAnchorlink.tagName.toLowerCase() == cl[231] ? copyrightAnchorlink.getAttribute(cl[164]) : "anyString".l();
//const themeCopyrightLink = u != typeof copyrightAnchorlink && copyrightAnchorlink.tagName.toLowerCase() == cl[231] ? copyrightAnchorlink.getAttribute("href") : sA.l();
////veryveryBasic
const themeCopyrightLink = u != typeof copyrightAnchorlink && copyrightAnchorlink.tagName.toLowerCase() == cl[231] ? copyrightAnchorlink.getAttribute(cl[71]) : sA.l();
////veryBasic
//[href] == head variable  cl[71]
//console.log();
//If copyrigt link available, apply these block level styles
//const blockLevelStyles = u != typeof themeCopyrightLink ? displayBlock+unHideItems+positionItems : "anyString".w();
const blockLevelStyles = u != typeof themeCopyrightLink ? displayBlock+unHideItems+positionItems : vY.w();
//const inlineStyles = u != typeof blockLevelStyles ? displayInline+unHideItems+positionItems : "anyString".y();
const inlineStyles = u != typeof blockLevelStyles ? backgroundColor+displayInline+unHideItems+positionItems : dT.y();
//const themeCopyrightLinkShopName = u != typeof inlineStyles ? copyrightAnchorlink.innerHTML : "anyString".b(); //Cliup
const themeCopyrightLinkShopName = u != typeof inlineStyles ? copyrightAnchorlink.innerHTML : eZ.b(); //Cliup
//console.log(themeCopyrightLinkShopName);
//////////////////// Footer Credit Remove Ends
//////////////////// Footer credit ends \\\\\\\\\\\\\\\\\\\\



/////////// *!* Remove Empty Sections *!* \\\\\\\\\\\\\
/*for(var removeEmpty = document.querySelectorAll(".no-items.section"), re = 0; re < removeEmpty.length; re++){
	removeEmpty[re].remove();
}*/
/*for(let removeEmpty = document.querySelectorAll(".no-items.section"), re = 0; re < removeEmpty.length; re++){
	removeEmpty[re].remove();
}*/
//for(let e=document.querySelectorAll(".no-items.section"),o=0;o<e.length;o++)e[o].remove();
for(let e=document.querySelectorAll(cy[27]),o=0;o<e.length;o++)e[o].remove();
//[.no-items.section]  == body variable  cy[27]
//console.log();



/////////// *!* 9 Column Responsive Grid *!* \\\\\\\\\\\\\
if (document.querySelectorAll(".nicgr").length > 0 && window.matchMedia("(min-width: 320px)").matches) for (let d = document.querySelectorAll(".nicgr"), e = 0; e < d.length; e++) {
	let a = d[e].childElementCount,
		i = d[e].classList;
	if (window.matchMedia("(min-width: 320px) and (max-width: 409px)").matches) 0 !== (a > 1 && a % 2) && i.add("etfco");
	else if (window.matchMedia("(min-width: 410px) and (max-width: 629px)").matches) {
		2 === (a > 1 && a % 3) && i.add("etstw")
	} else if (window.matchMedia("(min-width: 630px)").matches) {
		let n = a > 1 && a % 9;
		0 == n && 0 !== n ? i.add("enoon") : 1 === n ? i.add("enson") : 2 === n ? i.add("enstw") : 3 === n ? i.add("ensth") : 4 === n ? i.add("ensfo") : 5 === n ? i.add("ensfi") : 6 === n ? i.add("enssi") : 7 === n ? i.add("ensse") : 8 === n && i.add("ensei")
	}
}



/////////// *!* Static Image Cropping *!* \\\\\\\\\\\\\
//Previously used
/*document.querySelectorAll(".staic>*[data-src]").forEach(function(thisImage) {
	var thisParent = thisImage.parentElement;
	//thisParent.style.backgroundImage = "url(" + thisImage.dataset.src + ")";
	var thisDataSetSrc = thisImage.dataset.src;
	var thisImageWidth = Math.round(thisParent.offsetWidth);
	var thisImageHeight = Math.round(thisParent.offsetHeight);
	var bloggergoogleusercontent = thisDataSetSrc.match(/=(.+)/g);
	//var bpblogspot = thisDataSetSrc.match(/\/w\B\d{1,4}-h\B\d{1,4}-p-k-no-nu\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}\/+/g) || thisDataSetSrc.match(/\/rw-s\B\d{1,4}\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-pf\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-c-rw\/+/g) || thisDataSetSrc.match(/\/d\/+/g) || thisDataSetSrc.match(/\/d-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-c-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-c\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-c-d\/+/g); //Previously order
	//(/w(widthAnyNumber)-h(heightAnyNumber)-p-k-no-nu/) || (/s(any_number)/) || (/rw-s(any_number)/) || (/s(any_number)-rw/) || (/s(any_number)-pf/) || (/s(any_number)-c-rw/) || (/d/) || (/d-rw/) || (/s(any_number)-w(any_number)-h(any_number)-c-rw/) || (/s(any_number)-c/) || (/s(any_number)-c-d/)
	var bpblogspot = thisDataSetSrc.match(/\/w\B\d{1,4}-h\B\d{1,4}-p-k-no-nu\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}\/+/g) || thisDataSetSrc.match(/\/rw-s\B\d{1,4}\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-pf\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-c\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-c-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-c-rw\/+/g) || thisDataSetSrc.match(/\/d\/+/g) || thisDataSetSrc.match(/\/d-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-c-d\/+/g); //Present order
	//(/w(widthAnyNumber)-h(heightAnyNumber)-p-k-no-nu/) || (/s(any_number)/) || (/rw-s(any_number)/) || (/s(any_number)-rw/) || (/s(any_number)-pf/) || (/s(any_number)-c/) || (/s(any_number)-c-rw/) || (/s(any_number)-w(widthAnyNumber)-h(heightAnyNumber)-c-rw/) || (/d/) || (/d-rw/) || (/s(any_number)-c-d/)
	bloggergoogleusercontent ? thisImage.setAttribute("data-src", thisDataSetSrc.replace(bloggergoogleusercontent, "=rw-w" + thisImageWidth + "-h" + thisImageHeight + "-p-k-no-nu")) : thisImage.setAttribute("data-src", thisDataSetSrc.replace(bpblogspot, "/rw-w" + thisImageWidth + "-h" + thisImageHeight + "-p-k-no-nu/")); //Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
});*/
/*document.querySelectorAll(".staic>*[data-src]").forEach((thisImage) => {
	let thisParent = thisImage.parentElement;
	//thisParent.style.backgroundImage = "url(" + thisImage.dataset.src + ")";
	let thisDataSetSrc = thisImage.dataset.src;
	let thisImageWidth = Math.round(thisParent.offsetWidth);
	let thisImageHeight = Math.round(thisParent.offsetHeight);
	let bloggergoogleusercontent = thisDataSetSrc.match(/=(.+)/g);
	//let bpblogspot = thisDataSetSrc.match(/\/w\B\d{1,4}-h\B\d{1,4}-p-k-no-nu\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}\/+/g) || thisDataSetSrc.match(/\/rw-s\B\d{1,4}\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-pf\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-c-rw\/+/g) || thisDataSetSrc.match(/\/d\/+/g) || thisDataSetSrc.match(/\/d-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-c-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-c\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-c-d\/+/g); //Previously order
	//(/w(widthAnyNumber)-h(heightAnyNumber)-p-k-no-nu/) || (/s(any_number)/) || (/rw-s(any_number)/) || (/s(any_number)-rw/) || (/s(any_number)-pf/) || (/s(any_number)-c-rw/) || (/d/) || (/d-rw/) || (/s(any_number)-w(any_number)-h(any_number)-c-rw/) || (/s(any_number)-c/) || (/s(any_number)-c-d/)
	var bpblogspot = thisDataSetSrc.match(/\/w\B\d{1,4}-h\B\d{1,4}-p-k-no-nu\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}\/+/g) || thisDataSetSrc.match(/\/rw-s\B\d{1,4}\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-pf\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-c\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-c-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-c-rw\/+/g) || thisDataSetSrc.match(/\/d\/+/g) || thisDataSetSrc.match(/\/d-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,4}-c-d\/+/g); //Present order
	//(/w(widthAnyNumber)-h(heightAnyNumber)-p-k-no-nu/) || (/s(any_number)/) || (/rw-s(any_number)/) || (/s(any_number)-rw/) || (/s(any_number)-pf/) || (/s(any_number)-c/) || (/s(any_number)-c-rw/) || (/s(any_number)-w(widthAnyNumber)-h(heightAnyNumber)-c-rw/) || (/d/) || (/d-rw/) || (/s(any_number)-c-d/)
	bloggergoogleusercontent ? thisImage.setAttribute("data-src", thisDataSetSrc.replace(bloggergoogleusercontent, "=rw-w" + thisImageWidth + "-h" + thisImageHeight + "-p-k-no-nu")) : thisImage.setAttribute("data-src", thisDataSetSrc.replace(bpblogspot, "/rw-w" + thisImageWidth + "-h" + thisImageHeight + "-p-k-no-nu/")); //Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
});*/
//(ReadableBasic)//document.querySelectorAll(".staic>*[data-src]").forEach((t=>{let a=t.parentElement,c=t.dataset.src,d=Math.round(a.offsetWidth),r=Math.round(a.offsetHeight),h=c.match(/=(.+)/g);var e=c.match(/\/w\B\d{1,4}-h\B\d{1,4}-p-k-no-nu\/+/g)||c.match(/\/s\B\d{1,4}\/+/g)||c.match(/\/rw-s\B\d{1,4}\/+/g)||c.match(/\/s\B\d{1,4}-rw\/+/g)||c.match(/\/s\B\d{1,4}-pf\/+/g)||c.match(/\/s\B\d{1,4}-c\/+/g)||c.match(/\/s\B\d{1,4}-c-rw\/+/g)||c.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-c-rw\/+/g)||c.match(/\/d\/+/g)||c.match(/\/d-rw\/+/g)||c.match(/\/s\B\d{1,4}-c-d\/+/g);h?t.setAttribute("data-src",c.replace(h,"=rw-w"+d+"-h"+r+"-p-k-no-nu")):t.setAttribute("data-src",c.replace(e,"/rw-w"+d+"-h"+r+"-p-k-no-nu/"))}));//Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
////veryveryBasic
/*document.querySelectorAll(imageCroppingSeclector).forEach((t=>{let a=t.parentElement,c=t.dataset.src,d=Math.round(a.offsetWidth),r=Math.round(a.offsetHeight),	h=c.match(endingEqual);var e=c.match(w1600H1600PKNoNu)||c.match(s1600)||c.match(rwS1600)||c.match(s1600Rw)||c.match(s1600Pf)||c.match(s1600C)||c.match(s1600CRw)||c.match(s1600W1600H1600CRw)||c.match(download)||c.match(downloadRw)||c.match(s1600CD);h?t.setAttribute(cl[122],c.replace(h,erwW+d+cl[189]+r+pKNoNu)):t.setAttribute(cl[122],c.replace(e,frwW+d+cl[189]+r+pKNoNuF))}));*///Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
//[data-src]  == head variable  cl[122]
//[-h]  == head variable  cl[189]
//console.log();


//Updated
/*document.querySelectorAll(".staic>*[data-src]").forEach(function(thisImage) {
	var thisParent = thisImage.parentElement;
	//thisParent.style.backgroundImage = "url(" + thisImage.dataset.src + ")";
	var thisDataSetSrc = thisImage.dataset.src;
	var thisImageWidth = Math.round(thisParent.offsetWidth);
	var thisImageHeight = Math.round(thisParent.offsetHeight);
	var bloggergoogleusercontent = thisDataSetSrc.match(/=(.+)/g);
	//var bpblogspot = thisDataSetSrc.match(/\/w\B\d{1,9}-h\B\d{1,9}-p-k-no-nu\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/rw-s\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-pf\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c-rw\/+/g) || thisDataSetSrc.match(/\/d\/+/g) || thisDataSetSrc.match(/\/d-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c-d\/+/g); //Previously order
	//(/w(widthAnyNumber)-h(heightAnyNumber)-p-k-no-nu/) || (/s(any_number)/) || (/rw-s(any_number)/) || (/s(any_number)-rw/) || (/s(any_number)-pf/) || (/s(any_number)-c-rw/) || (/d/) || (/d-rw/) || (/s(any_number)-w(any_number)-h(any_number)-c-rw/) || (/s(any_number)-c/) || (/s(any_number)-c-d/)
	//var bpblogspot = thisDataSetSrc.match(/\/w\B\d{1,9}-h\B\d{1,9}-p-k-no-nu\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/rw-s\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-pf\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g) || thisDataSetSrc.match(/\/d\/+/g) || thisDataSetSrc.match(/\/d-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c-d\/+/g); //Previous
	//(/w(widthAnyNumber)-h(heightAnyNumber)-p-k-no-nu/) || (/s(any_number)/) || (/rw-s(any_number)/) || (/s(any_number)-rw/) || (/s(any_number)-pf/) || (/s(any_number)-c/) || (/s(any_number)-c-rw/) || (/s(any_number)-w(widthAnyNumber)-h(heightAnyNumber)-c-rw/) || (/d/) || (/d-rw/) || (/s(any_number)-c-d/) //Previous
	var bpblogspot = thisDataSetSrc.match(/\/s\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/w\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/h\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/w\B\d{1,9}-h\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/h\B\d{1,9}-w\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/w\B\d{1,9}-h\B\d{1,9}-p-k-no-nu\/+/g) || thisDataSetSrc.match(/\/h\B\d{1,9}-w\B\d{1,9}-p-k-no-nu\/+/g) || thisDataSetSrc.match(/\/rw-s\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/rw-w\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/rw-h\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-rw\/+/g) || thisDataSetSrc.match(/\/w\B\d{1,9}-rw\/+/g) || thisDataSetSrc.match(/\/h\B\d{1,9}-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-pf\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c-rw\/+/g) || thisDataSetSrc.match(/\/d\/+/g) || thisDataSetSrc.match(/\/d-rw\/+/g); //Present
	//(/s(any_number)/) || (/w(any_number)/) || (/h(any_number)/) || (/w(widthAnyNumber)-h(heightAnyNumber)/) || (/h(heightAnyNumber)-w(widthAnyNumber)/) || (/w(widthAnyNumber)-h(heightAnyNumber)-p-k-no-nu/) || (/h(heightAnyNumber)-w(widthAnyNumber)-p-k-no-nu/) || (/rw-s(any_number)/) || (/rw-w(any_number)/) || (/rw-h(any_number)/) || (/s(any_number)-rw/) || (/w(any_number)-rw/) || (/h(any_number)-rw/) || (/s(any_number)-pf/) || (/s(any_number)-c/) || (/s(any_number)-c-rw/) || (/d/) || (/d-rw/) //Present
	bloggergoogleusercontent ? thisImage.setAttribute("data-src", thisDataSetSrc.replace(bloggergoogleusercontent, "=rw-w" + thisImageWidth + "-h" + thisImageHeight + "-p-k-no-nu")) : thisImage.setAttribute("data-src", thisDataSetSrc.replace(bpblogspot, "/rw-w" + thisImageWidth + "-h" + thisImageHeight + "-p-k-no-nu/")); //Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
});*/
/*document.querySelectorAll(".staic>*[data-src]").forEach((thisImage) => {
	let thisParent = thisImage.parentElement;
	//thisParent.style.backgroundImage = "url(" + thisImage.dataset.src + ")";
	let thisDataSetSrc = thisImage.dataset.src;
	let thisImageWidth = Math.round(thisParent.offsetWidth);
	let thisImageHeight = Math.round(thisParent.offsetHeight);
	let bloggergoogleusercontent = thisDataSetSrc.match(/=(.+)/g);
	//let bpblogspot = thisDataSetSrc.match(/\/w\B\d{1,9}-h\B\d{1,9}-p-k-no-nu\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/rw-s\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-pf\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c-rw\/+/g) || thisDataSetSrc.match(/\/d\/+/g) || thisDataSetSrc.match(/\/d-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c-d\/+/g); //Previously order
	//(/w(widthAnyNumber)-h(heightAnyNumber)-p-k-no-nu/) || (/s(any_number)/) || (/rw-s(any_number)/) || (/s(any_number)-rw/) || (/s(any_number)-pf/) || (/s(any_number)-c-rw/) || (/d/) || (/d-rw/) || (/s(any_number)-w(any_number)-h(any_number)-c-rw/) || (/s(any_number)-c/) || (/s(any_number)-c-d/)
	//let bpblogspot = thisDataSetSrc.match(/\/w\B\d{1,9}-h\B\d{1,9}-p-k-no-nu\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/rw-s\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-pf\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g) || thisDataSetSrc.match(/\/d\/+/g) || thisDataSetSrc.match(/\/d-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c-d\/+/g); //Previous
	//(/w(widthAnyNumber)-h(heightAnyNumber)-p-k-no-nu/) || (/s(any_number)/) || (/rw-s(any_number)/) || (/s(any_number)-rw/) || (/s(any_number)-pf/) || (/s(any_number)-c/) || (/s(any_number)-c-rw/) || (/s(any_number)-w(widthAnyNumber)-h(heightAnyNumber)-c-rw/) || (/d/) || (/d-rw/) || (/s(any_number)-c-d/) //Previous
	let bpblogspot = thisDataSetSrc.match(/\/s\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/w\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/h\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/w\B\d{1,9}-h\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/h\B\d{1,9}-w\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/w\B\d{1,9}-h\B\d{1,9}-p-k-no-nu\/+/g) || thisDataSetSrc.match(/\/h\B\d{1,9}-w\B\d{1,9}-p-k-no-nu\/+/g) || thisDataSetSrc.match(/\/rw-s\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/rw-w\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/rw-h\B\d{1,9}\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-rw\/+/g) || thisDataSetSrc.match(/\/w\B\d{1,9}-rw\/+/g) || thisDataSetSrc.match(/\/h\B\d{1,9}-rw\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-pf\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c\/+/g) || thisDataSetSrc.match(/\/s\B\d{1,9}-c-rw\/+/g) || thisDataSetSrc.match(/\/d\/+/g) || thisDataSetSrc.match(/\/d-rw\/+/g); //Present
	//(/s(any_number)/) || (/w(any_number)/) || (/h(any_number)/) || (/w(widthAnyNumber)-h(heightAnyNumber)/) || (/h(heightAnyNumber)-w(widthAnyNumber)/) || (/w(widthAnyNumber)-h(heightAnyNumber)-p-k-no-nu/) || (/h(heightAnyNumber)-w(widthAnyNumber)-p-k-no-nu/) || (/rw-s(any_number)/) || (/rw-w(any_number)/) || (/rw-h(any_number)/) || (/s(any_number)-rw/) || (/w(any_number)-rw/) || (/h(any_number)-rw/) || (/s(any_number)-pf/) || (/s(any_number)-c/) || (/s(any_number)-c-rw/) || (/d/) || (/d-rw/) //Present
	bloggergoogleusercontent ? thisImage.setAttribute("data-src", thisDataSetSrc.replace(bloggergoogleusercontent, "=rw-w" + thisImageWidth + "-h" + thisImageHeight + "-p-k-no-nu")) : thisImage.setAttribute("data-src", thisDataSetSrc.replace(bpblogspot, "/rw-w" + thisImageWidth + "-h" + thisImageHeight + "-p-k-no-nu/")); //Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
});*/
/*document.querySelectorAll(".staic>*[data-src]").forEach((t=>{let a=t.parentElement,h=t.dataset.src,c=Math.round(a.offsetWidth),d=Math.round(a.offsetHeight),r=h.match(/=(.+)/g),m=h.match(/\/s\B\d{1,9}\/+/g)||h.match(/\/w\B\d{1,9}\/+/g)||h.match(/\/h\B\d{1,9}\/+/g)||h.match(/\/w\B\d{1,9}-h\B\d{1,9}\/+/g)||h.match(/\/h\B\d{1,9}-w\B\d{1,9}\/+/g)||h.match(/\/w\B\d{1,9}-h\B\d{1,9}-p-k-no-nu\/+/g)||h.match(/\/h\B\d{1,9}-w\B\d{1,9}-p-k-no-nu\/+/g)||h.match(/\/rw-s\B\d{1,9}\/+/g)||h.match(/\/rw-w\B\d{1,9}\/+/g)||h.match(/\/rw-h\B\d{1,9}\/+/g)||h.match(/\/s\B\d{1,9}-rw\/+/g)||h.match(/\/w\B\d{1,9}-rw\/+/g)||h.match(/\/h\B\d{1,9}-rw\/+/g)||h.match(/\/s\B\d{1,9}-pf\/+/g)||h.match(/\/s\B\d{1,9}-c\/+/g)||h.match(/\/s\B\d{1,9}-c-rw\/+/g)||h.match(/\/d\/+/g)||h.match(/\/d-rw\/+/g);r?t.setAttribute("data-src",h.replace(r,"=rw-w"+c+"-h"+d+"-p-k-no-nu")):t.setAttribute("data-src",h.replace(m,"/rw-w"+c+"-h"+d+"-p-k-no-nu/"))}));*/
document.querySelectorAll(imageCroppingSeclector).forEach((t=>{let a=t.parentElement,h=t.dataset.src,c=Math.round(a.offsetWidth),d=Math.round(a.offsetHeight),r=h.match(endingEqual),m=h.match(s1600)||h.match(wAnyN)||h.match(hAnyN)||h.match(wAnyN_hAnyN)||h.match(hAnyN_wAnyN)||h.match(w1600H1600PKNoNu)||h.match(hAnyN_wAnyN_pknonu)||h.match(rwS1600)||h.match(rW_wAny)||h.match(rW_hAny)||h.match(s1600Rw)||h.match(wAny_rW)||h.match(hAny_rW)||h.match(s1600Pf)||h.match(s1600C)||h.match(s1600CRw)||h.match(download)||h.match(downloadRw);r?t.setAttribute(cl[122],h.replace(r,erwW+c+cl[189]+d+pKNoNu)):t.setAttribute(cl[122],h.replace(m,frwW+c+cl[189]+d+pKNoNuF))}));//Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
//[data-src]  == head variable  cl[122]
//[-h]  == head variable  cl[189]
//console.log();


/////////// *!* Static Image Cropping: Intersection Observer *!* \\\\\\\\\\\\\
/*var thisDataSrcImage = document.querySelectorAll(".siwiv>*[data-src]"),
	ifIntersectingTheViewport = new IntersectionObserver(function (theseImages) {
		theseImages.forEach(function (thisImage) {
			if (thisImage.isIntersecting && thisImage.target.parentNode.classList.contains("ioclc")) {
				var thi = thisImage.target.parentNode.classList.contains("ibdbi");
				thi && (thisImage.target.parentNode.style.backgroundImage = "url(" + thisImage.target.getAttribute("data-src") + ")");
				thisImage.target.src = thisImage.target.getAttribute("data-src");
				thisImage.target.onload = function () {
					thisImage.target.parentNode.classList.remove("ioclc");
					thisImage.target.removeAttribute("data-src");
					thi && thisImage.target.remove();
				}
			}
		})
	}, {
		root: null,
		rootMargin: "600px", //looking down upto 600px before appearing in viewport. It's good to see when we scrolling down, the image already available to show.
		threshold: .05 //animation setting. ".05" means 50%. The animation takes effect when the image is showing at least 50%. ".01" means 10%, ".08" means 80%, ".095" means 95% and "1" means 100%.
	});
thisDataSrcImage.forEach(function (b) {
	ifIntersectingTheViewport.observe(b);
});*/
/*const thisDataSrcImage = document.querySelectorAll(".siwiv>*[data-src]"),
	ifIntersectingTheViewport = new IntersectionObserver( (theseImages) => {
		theseImages.forEach( (thisImage) => {
			if (thisImage.isIntersecting && thisImage.target.parentNode.classList.contains("ioclc")) {
				const thi = thisImage.target.parentNode.classList.contains("ibdbi");
				thi && (thisImage.target.parentNode.style.backgroundImage = "url(" + thisImage.target.getAttribute("data-src") + ")");
				thisImage.target.src = thisImage.target.getAttribute("data-src");
				thisImage.target.onload = () => {
					thisImage.target.parentNode.classList.remove("ioclc");
					thisImage.target.removeAttribute("data-src");
					thi && thisImage.target.remove();
				}
			}
		})
	}, {
		root: null,
		rootMargin: "600px", //looking down upto 600px before appearing in viewport. It's good to see when we scrolling down, the image already available to show.
		threshold: .05 //animation setting. ".05" means 50%. The animation takes effect when the image is showing at least 50%. ".01" means 10%, ".08" means 80%, ".095" means 95% and "1" means 100%.
	});
thisDataSrcImage.forEach( (b) => {
	ifIntersectingTheViewport.observe(b);
});*/
//const thisDataSrcImage=document.querySelectorAll(".siwiv>*[data-src]"),ifIntersectingTheViewport=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting&&t.target.parentNode.classList.contains("ioclc")){const e=t.target.parentNode.classList.contains("ibdbi");e&&(t.target.parentNode.style.backgroundImage="url("+t.target.getAttribute("data-src")+")"),t.target.src=t.target.getAttribute("data-src"),t.target.onload=()=>{t.target.parentNode.classList.remove("ioclc"),t.target.removeAttribute("data-src"),e&&t.target.remove()}}}))}),{root:null,rootMargin:"600px",threshold:.085});thisDataSrcImage.forEach((t=>{ifIntersectingTheViewport.observe(t)}));
//(ReadableBasic)//const thisDataSrcImage=document.querySelectorAll(".siwiv>*[data-src]"),ifIntersectingTheViewport=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting&&t.target.parentNode.classList.contains("ioclc")){const e=t.target.parentNode.classList.contains("ibdbi");e&&(t.target.parentNode.style.backgroundImage="url("+t.target.getAttribute("data-src")+")"),t.target.src=t.target.getAttribute("data-src"),t.target.onload=()=>{t.target.parentNode.classList.remove("ioclc"),t.target.removeAttribute("data-src"),e&&t.target.remove()}}}))}),{root:null,rootMargin:"600px",threshold:.085});thisDataSrcImage.forEach((t=>{ifIntersectingTheViewport.observe(t)}));
////veryveryBasic
const thisDataSrcImage=document.querySelectorAll(imageIntersectionObserverSeclector),ifIntersectingTheViewport=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting&&t.target.parentNode.classList.contains(cl[150])){const e=t.target.parentNode.classList.contains(cl[127]);e&&(t.target.parentNode.style.backgroundImage=urlOB+t.target.getAttribute(cl[122])+cl[77]),t.target.src=t.target.getAttribute(cl[122]),t.target.onload=()=>{t.target.parentNode.classList.remove(cl[150]),t.target.removeAttribute(cl[122]),e&&t.target.remove()}}}))}),{root:null,rootMargin:cl[98],threshold:.085});thisDataSrcImage.forEach((t=>{ifIntersectingTheViewport.observe(t)}));
////veryBasic
//[ioclc]  == head variable  cl[150]
//[ibdbi]  == head variable  cl[127]
//[data-src]  == head variable  cl[122]
//[)]  == head variable  cl[77]
//[600px]  == head variable  cl[98]
//console.log();


/////////// *!* Fullpost Image srcset *!* \\\\\\\\\\\\\
/*(function() {
	function createSrcSet(imageTag) {
		var source = imageTag.getAttribute("src");
		var srcSetValue = createSrcSetValue(source);
		imageTag.setAttribute("srcset", srcSetValue);
	}

	function createSrcSetValue(imageSource) {
		var result = [];
		var ifEqual = imageSource.match(/=(.+)/g);
		var sourceArray = imageSource.split("/");
		var resolutions = [360, 400, 480, 540, 640, 700, 742, 980];
		Array.prototype.forEach.call(resolutions, function(resolution) {
			sourceArray[7] = "s" + resolution + "-rw";
			var url = ifEqual ? imageSource.replace(ifEqual, "=s" + resolution + "-rw " + resolution + "w") : sourceArray.join("/") + " " + resolution + "w";
			result.push(url);

		});
		return result.join(", ");
	}

	var fullPostImagesSrcset = document.querySelectorAll(".sirco img");
	Array.prototype.forEach.call(fullPostImagesSrcset, function(image) {
		createSrcSet(image);
	});
})();*/
//Array.prototype.forEach.call(document.querySelectorAll(".sirco img"),(r=>{let t,c,e,o,a=r.getAttribute("src"),i=(c=[],e=(t=a).match(/=(.+)/g),o=t.split("/"),Array.prototype.forEach.call([360,400,480,540,640,700,742,810],(r=>{o[7]="s"+r+"-rw";let a=e?t.replace(e,"=s"+r+"-rw "+r+"w"):o.join("/")+" "+r+"w";c.push(a)})),c.join(", "));r.setAttribute("srcset",i)}));//never change this format. never add any extra prarmeters like -p-k-no-nu, -w, -h etc. This is the perfect script for full post images. This script handles all images whether it is a landscape or portrait. Must stick with this format for full post images.
//(ReadableBasic)//Array.prototype.forEach.call(document.querySelectorAll(".sirco img"),(r=>{let t,c,e,o,a=r.getAttribute("src"),i=(c=[],e=(t=a).match(/=(.+)/g),o=t.split("/"),Array.prototype.forEach.call([360,400,480,540,640,700,742,810],(r=>{o[7]="s"+r+"-rw";let a=e?t.replace(e,"=s"+r+"-rw "+r+"w"):o.join("/")+" "+r+"w";c.push(a)})),c.join(", "));r.setAttribute("srcset",i)}));//never change this format. never add any extra prarmeters like -p-k-no-nu, -w, -h etc. This is the perfect script for full post images. This script handles all images whether it is a landscape or portrait. Must stick with this format for full post images.
////veryveryBasic
Array.prototype.forEach.call(document.querySelectorAll(cl[25]+cl[30]+cl[198]+cl[8]),(r=>{let t,c,e,o,a=r.getAttribute(cl[87]),i=(c=[],e=(t=a).match(endingEqual),o=t.split(cl[67]),Array.prototype.forEach.call([360,400,480,640,768,980,1024,1280,1440,1920,2560],(r=>{o[7]=cl[114]+r+cl[60];let a=e?t.replace(e,cl[24]+r+cl[47]+r+cl[105]):o.join(cl[67])+cl[198]+r+cl[105];c.push(a)})),c.join(cl[41]));r.setAttribute(cl[21],i)}));//never change this format. never add any extra prarmeters like -p-k-no-nu, -w, -h etc. This is the perfect script for full post images. This script handles all images whether it is a landscape or portrait. Must stick with this format for full post images.
//[.]+[sirco]+[]+[img]  == head variable  cl[25]+cl[30]+cl[198]+cl[8] (third is single white space)
//[src]  == head variable  cl[87]
//[/]  == head variable  cl[67]
//[s]  == head variable  cl[114]
//[=s]  == head variable  cl[24]
//[w]  == head variable  cl[105]
//[ ]  == head variable  cl[198] (single white space)
//[srcset]  == head variable  cl[21]
//[, ]  == head variable  cl[41] (comma single white space)
//console.log();



/////////// *!* Left over static height image cropping *!* \\\\\\\\\\\\\
//////////////////// Previously used version
/*function leftOverImageHeightCropping() {
	document.querySelectorAll(".losic>img").forEach(function (i) { //inline variable version
		var RecRelRanSrc = i.src;
		var RecRelRanWidth = Math.round(i.offsetWidth);
		var RecRelRanHeight = Math.round(i.offsetHeight);
		var bloggerGoogleUserContent = RecRelRanSrc.match(/=(.+)/g);
		//var bpBlogSpot = RecRelRanSrc.match(/\/s\B\d{1,4}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-c-d\/+/g); //Previouslu used
		var bpBlogSpot = RecRelRanSrc.match(/\/s\B\d{1,4}\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-c-d\/+/g);
		//(/s(anyNumber)/) || (/s(anyNumber)-rw/) || (/s(anyNumber)-c/)
		//bloggerGoogleUserContent ? i.setAttribute("src", i.src.replace(bloggerGoogleUserContent, "=rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu")) : i.setAttribute("src", i.src.replace(bpBlogSpot, "/rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu/"));

		bloggerGoogleUserContent ? i.setAttribute("src", i.src.replace(bloggerGoogleUserContent, "=rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu")) : i.setAttribute("src", i.src.replace(bpBlogSpot, "/rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu/"));//Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
	});
}*/
/*const leftOverImageHeightCropping = () => {
	document.querySelectorAll(".losic>img").forEach((i) => { //inline variable version
		let RecRelRanSrc = i.src;
		let RecRelRanWidth = Math.round(i.offsetWidth);
		let RecRelRanHeight = Math.round(i.offsetHeight);
		let bloggerGoogleUserContent = RecRelRanSrc.match(/=(.+)/g);
		//let bpBlogSpot = RecRelRanSrc.match(/\/s\B\d{1,4}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-rw\/+/g) || RecRelRanSrc.match(/\/rw-s\B\d{1,4}\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-c-d\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-pf\/+/g); 
		//Previouslu used
		let bpBlogSpot = RecRelRanSrc.match(/\/s\B\d{1,4}\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,4}-c-d\/+/g);
		//(/s(anyNumber)/) || (/s(anyNumber)-rw/) || (/s(anyNumber)-c/)
		//bloggerGoogleUserContent ? i.setAttribute("src", i.src.replace(bloggerGoogleUserContent, "=rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu")) : i.setAttribute("src", i.src.replace(bpBlogSpot, "/rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu/"));
		bloggerGoogleUserContent ? i.setAttribute("src", i.src.replace(bloggerGoogleUserContent, "=rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu")) : i.setAttribute("src", i.src.replace(bpBlogSpot, "/rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu/"));//Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
	});
}*/
/*const leftOverImageHeightCropping = () => {
	document.querySelectorAll(".losic>img").forEach((t=>{let r=t.src,c=Math.round(t.offsetWidth),e=Math.round(t.offsetHeight),s=r.match(/=(.+)/g),h=r.match(/\/s\B\d{1,4}\/+/g)||r.match(/\/s\B\d{1,4}-rw\/+/g)||r.match(/\/rw-s\B\d{1,4}\/+/g)||r.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-rw\/+/g)||r.match(/\/s\B\d{1,4}-c\/+/g)||r.match(/\/s\B\d{1,4}-c-rw\/+/g) || r.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-c-rw\/+/g)||r.match(/\/s\B\d{1,4}-c-d\/+/g)||r.match(/\/s\B\d{1,4}-pf\/+/g);s?t.setAttribute("src",t.src.replace(s,"=rw-w"+c+"-h"+e+"-p-k-no-nu")):t.setAttribute("src",t.src.replace(h,"/rw-w"+c+"-h"+e+"-p-k-no-nu/"))}));//Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
}*/
//(ReadableBasic)//
/*const leftOverImageHeightCropping = () => {
	document.querySelectorAll(".losic>img").forEach((t=>{let r=t.src,c=Math.round(t.offsetWidth),e=Math.round(t.offsetHeight),s=r.match(/=(.+)/g),h=r.match(/\/s\B\d{1,4}\/+/g)||r.match(/\/s\B\d{1,4}-rw\/+/g)||r.match(/\/rw-s\B\d{1,4}\/+/g)||r.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-rw\/+/g)||r.match(/\/s\B\d{1,4}-c\/+/g)||r.match(/\/s\B\d{1,4}-c-rw\/+/g) || r.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-c-rw\/+/g)||r.match(/\/s\B\d{1,4}-c-d\/+/g)||r.match(/\/s\B\d{1,4}-pf\/+/g);s?t.setAttribute("src",t.src.replace(s,"=rw-w"+c+"-h"+e+"-p-k-no-nu")):t.setAttribute("src",t.src.replace(h,"/rw-w"+c+"-h"+e+"-p-k-no-nu/"))}));//Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
}*/
////veryveryBasic
/*const leftOverImageHeightCropping = () => {
	document.querySelectorAll(cl[25]+cl[57]+cl[80]+cl[8]).forEach((t=>{let r=t.src,c=Math.round(t.offsetWidth),e=Math.round(t.offsetHeight),s=r.match(endingEqual),h=r.match(s1600)||r.match(s1600Rw)||r.match(rwS1600)||r.match(s1600W1600H1600Rw)||r.match(s1600C)||r.match(s1600CRw) || r.match(s1600W1600H1600CRw)||r.match(s1600CD)||r.match(s1600Pf);s?t.setAttribute(cl[87],t.src.replace(s,erwW+c+cl[189]+e+pKNoNu)):t.setAttribute(cl[87],t.src.replace(h,frwW+c+cl[189]+e+pKNoNuF))}));//Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
}*/
//[.]+[losic]+[>]+[img]  == head variable  cl[25]+cl[57]+cl[80]+cl[8]
//[src]  == head variable  cl[87]
//[-h]  == head variable  cl[189]
//console.log();
//////////////////// Previously used version finished

////////////////////Updated Version
/*function leftOverImageHeightCropping() {
	document.querySelectorAll(".losic>img").forEach(function (i) { //inline variable version
		var RecRelRanSrc = i.src;
		var RecRelRanWidth = Math.round(i.offsetWidth);
		var RecRelRanHeight = Math.round(i.offsetHeight);
		var bloggerGoogleUserContent = RecRelRanSrc.match(/=(.+)/g);
		//var bpBlogSpot = RecRelRanSrc.match(/\/s\B\d{1,9}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c-d\/+/g); //Previouslu used
		//var bpBlogSpot = RecRelRanSrc.match(/\/s\B\d{1,9}\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c-d\/+/g);//Previously used
		//(/s(anyNumber)/) || (/s(anyNumber)-rw/) || (/s(anyNumber)-c/)
		//bloggerGoogleUserContent ? i.setAttribute("src", i.src.replace(bloggerGoogleUserContent, "=rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu")) : i.setAttribute("src", i.src.replace(bpBlogSpot, "/rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu/"));//Previously used
		var bpBlogSpot = RecRelRanSrc.match(/\/s\B\d{1,9}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-rw-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-h\B\d{1,9}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-rw-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-h\B\d{1,9}-rw-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c-d\/+/g);//At present
		//(/s(anyNumber)-c/) || (/s(anyNumber)-c-rw/) || (/s(anyNumber)/) || (/s(anyNumber)-rw/) || (/s(anyNumber)-w(anyNumber)-h(anyNumber)-c/) || (/s(anyNumber)-w(anyNumber)-h(anyNumber)-rw-c/) || (/s(anyNumber)-w(anyNumber)-c/) || (/s(anyNumber)-h(anyNumber)-c/) || (/s(anyNumber)-w(anyNumber)-rw-c/) || (/s(anyNumber)-h(anyNumber)-rw-c/) || (/s(anyNumber)-w(anyNumber)-h(anyNumber)-rw/) || (/s(anyNumber)-w(anyNumber)-h(anyNumber)-c-rw/) || (/s(anyNumber)-c-d/);//At present 
		bloggerGoogleUserContent ? i.setAttribute("src", i.src.replace(bloggerGoogleUserContent, "=rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu")) : i.setAttribute("src", i.src.replace(bpBlogSpot, "/rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu/"));//Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
	});
}*/
/*function leftOverImageHeightCropping() {
	document.querySelectorAll(".losic>img").forEach( (i) => { //inline variable version
		let RecRelRanSrc = i.src;
		let RecRelRanWidth = Math.round(i.offsetWidth);
		let RecRelRanHeight = Math.round(i.offsetHeight);
		let bloggerGoogleUserContent = RecRelRanSrc.match(/=(.+)/g);
		//let bpBlogSpot = RecRelRanSrc.match(/\/s\B\d{1,9}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c-d\/+/g); //Previouslu used
		//let bpBlogSpot = RecRelRanSrc.match(/\/s\B\d{1,9}\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c-d\/+/g);//Previously used
		//(/s(anyNumber)/) || (/s(anyNumber)-rw/) || (/s(anyNumber)-c/)
		//bloggerGoogleUserContent ? i.setAttribute("src", i.src.replace(bloggerGoogleUserContent, "=rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu")) : i.setAttribute("src", i.src.replace(bpBlogSpot, "/rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu/"));//Previously used
		let bpBlogSpot = RecRelRanSrc.match(/\/s\B\d{1,9}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-rw-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-h\B\d{1,9}-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-rw-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-h\B\d{1,9}-rw-c\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g) || RecRelRanSrc.match(/\/s\B\d{1,9}-c-d\/+/g);//At present
		//(/s(anyNumber)-c/) || (/s(anyNumber)-c-rw/) || (/s(anyNumber)/) || (/s(anyNumber)-rw/) || (/s(anyNumber)-w(anyNumber)-h(anyNumber)-c/) || (/s(anyNumber)-w(anyNumber)-h(anyNumber)-rw-c/) || (/s(anyNumber)-w(anyNumber)-c/) || (/s(anyNumber)-h(anyNumber)-c/) || (/s(anyNumber)-w(anyNumber)-rw-c/) || (/s(anyNumber)-h(anyNumber)-rw-c/) || (/s(anyNumber)-w(anyNumber)-h(anyNumber)-rw/) || (/s(anyNumber)-w(anyNumber)-h(anyNumber)-c-rw/) || (/s(anyNumber)-c-d/);//At present 
		bloggerGoogleUserContent ? i.setAttribute("src", i.src.replace(bloggerGoogleUserContent, "=rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu")) : i.setAttribute("src", i.src.replace(bpBlogSpot, "/rw-w" + RecRelRanWidth + "-h" + RecRelRanHeight + "-p-k-no-nu/"));//Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
	});
}*/
/*const leftOverImageHeightCropping = () => {
	document.querySelectorAll(".losic>img").forEach((c=>{let t=c.src,d=Math.round(c.offsetWidth),h=Math.round(c.offsetHeight),B=t.match(/=(.+)/g),r=t.match(/\/s\B\d{1,9}-c\/+/g)||t.match(/\/s\B\d{1,9}-c-rw\/+/g)||t.match(/\/s\B\d{1,9}\/+/g)||t.match(/\/s\B\d{1,9}-rw\/+/g)||t.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c\/+/g)||t.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-rw-c\/+/g)||t.match(/\/s\B\d{1,9}-w\B\d{1,9}-c\/+/g)||t.match(/\/s\B\d{1,9}-h\B\d{1,9}-c\/+/g)||t.match(/\/s\B\d{1,9}-w\B\d{1,9}-rw-c\/+/g)||t.match(/\/s\B\d{1,9}-h\B\d{1,9}-rw-c\/+/g)||t.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-rw\/+/g)||t.match(/\/s\B\d{1,9}-w\B\d{1,9}-h\B\d{1,9}-c-rw\/+/g)||t.match(/\/s\B\d{1,9}-c-d\/+/g);B?c.setAttribute("src",c.src.replace(B,"=rw-w"+d+"-h"+h+"-p-k-no-nu")):c.setAttribute("src",c.src.replace(r,"/rw-w"+d+"-h"+h+"-p-k-no-nu/"))}));
}*/
const leftOverImageHeightCropping = ()=> {document.querySelectorAll(cl[25]+cl[57]+cl[80]+cl[8]).forEach((c=>{let t=c.src,d=Math.round(c.offsetWidth),h=Math.round(c.offsetHeight),B=t.match(endingEqual),r=t.match(s1600C)||t.match(s1600CRw)||t.match(s1600)||t.match(s1600Rw)||t.match(sAnyN_w_h_c)||t.match(sAnyN_w_h_rw_c)||t.match(sAnyN_w_c)||t.match(sAnyN_h_c)||t.match(sAnyN_w_rw_c)||t.match(sAnyN_h_rw_c)||t.match(sAnyN_w_h_rw)||t.match(sAnyN_w_h_c_rw)||t.match(sAnyN_c_d);B?c.setAttribute(cl[87],c.src.replace(B,erwW+d+cl[189]+h+pKNoNu)):c.setAttribute(cl[87],c.src.replace(r,frwW+d+cl[189]+h+pKNoNuF))}));}
//Do not remove the -p-k-no-nu and rw parameters. "-p-k-no-nu" is scaling the image perfectly during cropping and "rw" simply transform the jpg or png into webp format.
//[.]+[losic]+[>]+[img]  == head variable  cl[25]+cl[57]+cl[80]+cl[8]
//[src]  == head variable  cl[87]
//[-h]  == head variable  cl[189]
//console.log();


/////////// *!* Related. (Asynchronous callback script placement) *!* \\\\\\\\\\\\\
/*for(var relatedOrSimilar = document.querySelectorAll(".sorpl"), ros = 0; ros < relatedOrSimilar.length; ros++){
	const relatedLabelName = relatedOrSimilar[ros].innerHTML;
	const relatedScriptTag = document.createElement("script");
	relatedScriptTag.src = "/feeds/posts/default/-/"+relatedLabelName+"?alt=json-in-script&callback=display_related_posts";
	//relatedScriptTag.src = "/feeds/posts/default/-/"+relatedLabelName+"?alt=json-in-script&callback=display_related_posts&max-results=2"; //if maximum results
	relatedScriptTag.async = "async";
	relatedOrSimilar[ros].insertAdjacentElement("beforebegin",relatedScriptTag);
}*/
//<script async="async" expr:src="'/feeds/posts/default/-/' + data:label.name + '?alt=json-in-script&callback=display_related_posts&max-results=2'" type="text/javascript"/>
//<b:tag async='async' expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=display_related_posts&amp;max-results=2&quot;' name='script' type='text/javascript'/> //xml markup
////veryveryBasic
for(let e=document.querySelectorAll(cy[70]),t=0;t<e.length;t++){const n=e[t].innerHTML,s=document.createElement(cl[79]);s.src=feedsPostsDefault+n+altJsonInScriptCallback,s.async=cy[11],e[t].insertAdjacentElement(cy[21],s)}
//[.sorpl] == body variable  cy[70]
//[script] == head variable  cl[79]
//[async] == body variable  cy[11]
//[beforebegin] == body variable  cy[21]
//console.log();


/////////////// *!* Related. Suggested Randomly *!* \\\\\\\\\\\\\\\\\
/*const display_related_posts = (json_feed) => {
	document.querySelectorAll("#srpco").forEach((similarRandomPostContainer) => {
		for (var post_titles = new Array, title_num = 0, post_urls = new Array, post_thumbnail_url = new Array, i = 0; i < json_feed.feed.entry.length; i++) {
			var feed_entry = json_feed.feed.entry[i];
			post_titles[title_num] = feed_entry.title.$t;
			var _contents = feed_entry.content.$t;
			var _thumbnail_Tag = _contents.indexOf("<img");
			var _thumbnail_Tag_src = _contents.indexOf("src=\'", _thumbnail_Tag);
			var _tag_src = _contents.indexOf("\'", _thumbnail_Tag_src + 5);
			var _thumbnail_set = _contents.substr(_thumbnail_Tag_src + 5, _tag_src - _thumbnail_Tag_src - 5);
			var thisSrc = feed_entry.media$thumbnail.url;

			var parentContainerWidth = Math.round(similarRandomPostContainer.firstElementChild.firstElementChild.firstElementChild.offsetWidth);
			var parentContainerHeight = Math.round(similarRandomPostContainer.firstElementChild.firstElementChild.firstElementChild.offsetHeight);

			try {
				post_thumbnail_url[title_num] = thisSrc;
			} catch (error) {
				if ((_thumbnail_Tag != -1) && (_thumbnail_Tag_src != -1) && (_tag_src != -1) && (_thumbnail_set != "")) {
					post_thumbnail_url[title_num] = _thumbnail_set;
				} else post_thumbnail_url[title_num] = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
			}

			for (var k = 0; k < feed_entry.link.length; k++) {
				"alternate" == feed_entry.link[k].rel && (post_urls[title_num] = feed_entry.link[k].href, title_num++)
			}
		}

		var random_entry = Math.floor((post_titles.length - 1) * Math.random()),
			iteration = 0;

		var originalLocation = window.location.href;
		var checkSuffix = originalLocation.match(/\?m=1+/g);
		var newLocation = checkSuffix ? originalLocation.replace(checkSuffix, "") : originalLocation;

		post_titles.length > 0 ? similarRandomPostContainer.innerHTML = "<ul class='srera etele clbef claft'/>" : similarRandomPostContainer.remove(); //srpco: similar random posts container | srera: suggested related random | etele: except this element | clbef: clear before | claft: clear after element

		//var setLimit = post_urls[random_entry] != newLocation ? 3 : 4;

		for (; iteration < post_titles.length && (post_urls[random_entry] != newLocation ? 3 : 4) > iteration;) {
			//3 is the target. If unique post, 3 posts else 4 post. Duplicate post will be skipped.
			if (post_urls[random_entry] != newLocation) {
				var relatedArticleContainer = document.createElement("li");
				relatedArticleContainer.classList.add("prohi"); //for a single class
				//relatedArticleContainer.classList.add("prohi", "srfad", "srjse"); //for multiple classes
				//prohi: position relative overflow hidden

				//rospi: related or similar post image | lsics: left-ever static image cropping style (for CSS selector) | losic: Left-over static image cropping (for JavaScript selector)

				//athlw: absolute top height left width
				//lbrte: link but regular text
				//rorpi: related or random post image
				//etele: except this element
				//rosat: related or similar article title

				relatedArticleContainer.innerHTML = "<figure class='rospi lsics losic'><img class='etele rorpi' alt='" + post_titles[random_entry] + "' height='"+parentContainerHeight+"' loading='lazy' src='" + post_thumbnail_url[random_entry] + "' width='"+parentContainerWidth+"'></figure><div class='phpti'><h3 class='rosat etele'><a aria-label='" + post_titles[random_entry] + "' class='lbrte athlw' href='" + post_urls[random_entry] + "'><span><span>" + post_titles[random_entry] + "</span></span></a></h3></div>";

				//(This image cropping is working only for parent container. [Do not use this])
				//var articleImageTag = relatedArticleContainer.firstElementChild.firstElementChild;
				//var articleImageSrc = articleImageTag.src;
				//var replaceAfterEqualSign = articleImageSrc.match(/=(.+)/g);
				//var replaceBetweenTwoForwardSlash = articleImageSrc.match(/\/s\B\d{1,4}\/+/g) || articleImageSrc.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-rw\/+/g) || articleImageSrc.match(/\/s\B\d{1,4}-c\/+/g) || articleImageSrc.match(/\/s\B\d{1,4}-c-rw\/+/g) || articleImageSrc.match(/\/s\B\d{1,4}-w\B\d{1,4}-h\B\d{1,4}-c-rw\/+/g) || articleImageSrc.match(/\/s\B\d{1,4}-c-d\/+/g);
				//replaceAfterEqualSign ? articleImageTag.setAttribute("src", articleImageTag.src.replace(replaceAfterEqualSign, "=rw-w" + parentContainerWidth + "-h" + parentContainerHeight + "-p-k-no-nu")) : articleImageTag.setAttribute("src", articleImageTag.src.replace(replaceBetweenTwoForwardSlash, "/rw-w" + parentContainerWidth + "-h" + parentContainerHeight + "-p-k-no-nu/")); 

				similarRandomPostContainer.firstElementChild.appendChild(relatedArticleContainer);

				leftOverImageHeightCropping();

			}
				iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0;

		}

		similarRandomPostContainer.outerHTML = similarRandomPostContainer.innerHTML;
	});
}*/
/*const display_related_posts = (json_feed) => {document.querySelectorAll("#srpco").forEach((e=>{for(var t=new Array,l=0,r=new Array,a=new Array,i=0;i<json_feed.feed.entry.length;i++){var n=json_feed.feed.entry[i];t[l]=n.title.$t;var s=n.content.$t,h=s.indexOf("<img"),f=s.indexOf("src=\'",h),A=s.indexOf("\'",f+5),d=s.substr(f+5,A-f-5),o=n.media$thumbnail.url,c=Math.round(e.firstElementChild.firstElementChild.firstElementChild.offsetWidth),m=Math.round(e.firstElementChild.firstElementChild.firstElementChild.offsetHeight);try{a[l]=o}catch(e){a[l]=-1!=h&&-1!=f&&-1!=A&&""!=d?d:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}for(var g=0;g<n.link.length;g++)"alternate"==n.link[g].rel&&(r[l]=n.link[g].href,l++)}var p=Math.floor((t.length-1)*Math.random()),u=0,E=window.location.href,v=E.match(/\?m=1+/g),y=v?E.replace(v,""):E;for(t.length>0?e.innerHTML="<ul class='srera etele clbef claft'/>":e.remove();u<t.length&&(r[p]!=y?3:4)>u;){if(r[p]!=y){var C=document.createElement("li");C.classList.add("prohi"),C.innerHTML="<figure class='rospi lsics losic'><img class='etele rorpi' alt='"+t[p]+"' height='"+m+"' loading='lazy' src='"+a[p]+"' width='"+c+"'></figure><div class='phpti'><h3 class='rosat etele'><a aria-label='"+t[p]+"' class='lbrte athlw' href='"+r[p]+"'><span><span>"+t[p]+"</span></span></a></h3></div>",e.firstElementChild.appendChild(C),leftOverImageHeightCropping()}u++,p<t.length-1?p++:p=0}e.outerHTML=e.innerHTML}));}*/
const display_related_posts = (json_feed) => {document.querySelectorAll(cl[84]+cl[63]).forEach((e=>{for(var t=new Array,l=0,r=new Array,a=new Array,i=0;i<json_feed.feed.entry.length;i++){var n=json_feed.feed.entry[i];t[l]=n.title.$t;var s=n.content.$t,h=s.indexOf(lessthanImg),f=s.indexOf(srcEqualBackslashSingleQuote,h),A=s.indexOf(backslashSingleQuote,f+5),d=s.substr(f+5,A-f-5),o=n.media$thumbnail.url,c=Math.round(e.firstElementChild.firstElementChild.firstElementChild.offsetWidth),m=Math.round(e.firstElementChild.firstElementChild.firstElementChild.offsetHeight);try{a[l]=o}catch(e){a[l]=-1!=h&&-1!=f&&-1!=A&&cl[190]!=d?d:transparentImage}for(var g=0;g<n.link.length;g++)cl[249]==n.link[g].rel&&(r[l]=n.link[g].href,l++)}var p=Math.floor((t.length-1)*Math.random()),u=0,E=window.location.href,v=E.match(mEqualOne),y=v?E.replace(v,cl[190]):E;for(t.length>0?e.innerHTML=cy[13]+cy[45]:e.remove();u<t.length&&(r[p]!=y?3:4)>u;){if(r[p]!=y){var C=document.createElement(cy[32]);C.classList.add(cy[75]),C.innerHTML=cy[92]+cy[83]+t[p]+cy[86]+m+cy[111]+cy[122]+a[p]+cy[117]+c+cy[101]+cy[114]+t[p]+cy[105]+cy[125]+cy[120]+r[p]+cy[127]+t[p]+cy[63]+cy[79],e.firstElementChild.appendChild(C),leftOverImageHeightCropping()}u++,p<t.length-1?p++:p=0}e.outerHTML=e.innerHTML}));}
//[#]+[srpco]  == head variable  cl[84]+cl[63]
//[""]  == head variable  cl[190] (Empty variable)
//[alternate]  == head variable  cl[249]
//[li]  == body variable  cy[32]
//[<img]
//[src=\']
//[\']
//[<ul class=']+[srera etele clbef claft'/>] == body variable  cy[13]+cy[45]
//[prohi] == body variable  cy[75]
//[<figure class='rospi lsics losic'>]+[<img class='etele rorpi' alt='] == body variable  cy[92]+cy[83]
//[' height='] == body variable  cy[86]
//[' loading=']+[lazy' src='] == body variable  cy[111]+cy[122]
//[' width='] == body variable  cy[117]
//['></figure><div class='phpti'><]+[h3 class='rosat etele'><a aria-label='] == body variable  cy[101]+cy[114] 
//[' class=']+[lbrte athlw' ]+[href='] == body variable  cy[105]+cy[125]+cy[120]
//['><span><span>] == body variable  cy[127]
//[</span></span>]+[</a></h3></div>] == body variable  cy[63]+cy[79]
//console.log();



/////////// *!* Pagelist Menu: Ellipsis *!* \\\\\\\\\\\\\
/*(()=>{
let pageListlLiOverflow = document.querySelectorAll(".paerm>nav>ul>li");
if(null != pageListlLiOverflow[0]){
	let pagelistlUlLiWidth = 0;
	let pagelistlUlWidth = pageListlLiOverflow[0].parentElement.offsetWidth - 250;
	pageListlLiOverflow.forEach(function(i){
		pagelistlUlLiWidth += i.offsetWidth;
		if(pagelistlUlLiWidth > pagelistlUlWidth){
			i.classList.add("pemli"); //pemli: pagelist ellipsis menu list
		}
	});
	let pagelistUlOverflowLi = document.querySelectorAll("li.pemli");
	if(null != pagelistUlOverflowLi[0]) {
		pagelistUlOverflowLi[0].parentElement.insertAdjacentHTML("beforeend", "<li><a aria-label='More' class='lbdac pembn tiifo' href='#!'></a><ul class='pocct'><li class='pmeli'><a aria-label='Close button' class='lbdac pembn tiifo' href='#!'></a></li></ul></li>");
		for(let sE = pagelistUlOverflowLi, s = 0; s < sE.length; s++) {
			for(let tE = document.querySelectorAll(".pocct"), t = 0; t < tE.length; t++) {
				tE[t].insertAdjacentElement("beforeend", sE[s]);
			}
		}
		pagelistUlOverflowLi[0].parentElement.parentElement.classList.add("poccr");
		//poccr: pagelist open close container
		pagelistUlOverflowLi.forEach(function(r){r.removeAttribute("class");});
		//If the menu button is only showing, remove the left padding
		let pagelistMainUl = pagelistUlOverflowLi[0].parentElement.parentElement.parentElement;
		//console.log(pagelistMainUl.children.length);
		if(pagelistMainUl.children.length > 1) { pagelistMainUl.classList.add("pelbn"); } //pelbn: pagelist ellipsis button
		if(pagelistMainUl.children.length < 2) { pagelistMainUl.classList.add("ptobn"); } //ptobn: pagelist touch button
	}
}
})();*/
/*(()=>{
let pageListlLiOverflow = document.querySelectorAll(".paerm>nav>ul>li");
if(null != pageListlLiOverflow[0]){
	let pagelistlUlLiWidth = 0;
	let pagelistlUlWidth = pageListlLiOverflow[0].parentElement.offsetWidth - 250;
	pageListlLiOverflow.forEach((i)=>{
		pagelistlUlLiWidth += i.offsetWidth;
		if(pagelistlUlLiWidth > pagelistlUlWidth){
			i.classList.add("pemli"); //pemli: pagelist ellipsis menu list
		}
	});
	let pagelistUlOverflowLi = document.querySelectorAll("li.pemli");
	if(null != pagelistUlOverflowLi[0]) {
		pagelistUlOverflowLi[0].parentElement.insertAdjacentHTML("beforeend", "<li><a aria-label='More' class='lbdac pembn tiifo' href='#!'></a><ul class='pocct'><li class='pmeli'><a aria-label='Close button' class='lbdac pembn tiifo' href='#!'></a></li></ul></li>");
		for(let sE = pagelistUlOverflowLi, s = 0; s < sE.length; s++) {
			for(let tE = document.querySelectorAll(".pocct"), t = 0; t < tE.length; t++) {
				tE[t].insertAdjacentElement("beforeend", sE[s]);
			}
		}
		pagelistUlOverflowLi[0].parentElement.parentElement.classList.add("poccr");
		//poccr: pagelist open close container
		pagelistUlOverflowLi.forEach((r)=>{r.removeAttribute("class");});
		//If the menu button is only showing, remove the left padding
		let pagelistMainUl = pagelistUlOverflowLi[0].parentElement.parentElement.parentElement;
		//console.log(pagelistMainUl.children.length);
		if(pagelistMainUl.children.length > 1) { pagelistMainUl.classList.add("pelbn"); } //pelbn: pagelist ellipsis button
		if(pagelistMainUl.children.length < 2) { pagelistMainUl.classList.add("ptobn"); } //ptobn: pagelist touch button
	}
}
})();*/
/*(()=>{let e=document.querySelectorAll(".paerm>nav>ul>li");if(null!=e[0]){let l=0,t=e[0].parentElement.offsetWidth-250;e.forEach((e=>{l+=e.offsetWidth,l>t&&e.classList.add("pemli")}));let a=document.querySelectorAll("li.pemli");if(null!=a[0]){a[0].parentElement.insertAdjacentHTML("beforeend","<li><a aria-label='More' class='lbdac pembn tiifo' href='#!'></a><ul class='pocct'><li class='pmeli'><a aria-label='Close button' class='lbdac pembn tiifo' href='#!'></a></li></ul></li>");for(let e=a,l=0;l<e.length;l++)for(let t=document.querySelectorAll(".pocct"),a=0;a<t.length;a++)t[a].insertAdjacentElement("beforeend",e[l]);a[0].parentElement.parentElement.classList.add("poccr"),a.forEach((e=>{e.removeAttribute("class")}));let e=a[0].parentElement.parentElement.parentElement;e.children.length>1&&e.classList.add("pelbn"),e.children.length<2&&e.classList.add("ptobn")}}})();*/
(()=>{let e=document.querySelectorAll(cy[97]);if(null!=e[0]){let l=0,t=e[0].parentElement.offsetWidth-250;e.forEach((e=>{l+=e.offsetWidth,l>t&&e.classList.add(cy[69])}));let a=document.querySelectorAll(cy[95]);if(null!=a[0]){a[0].parentElement.insertAdjacentHTML(cy[91],cy[124]);for(let e=a,l=0;l<e.length;l++)for(let t=document.querySelectorAll(cy[74]),a=0;a<t.length;a++)t[a].insertAdjacentElement(cy[91],e[l]);a[0].parentElement.parentElement.classList.add(cy[49]),a.forEach((e=>{e.removeAttribute(cy[55])}));let e=a[0].parentElement.parentElement.parentElement;e.children.length>1&&e.classList.add(cy[78]),e.children.length<2&&e.classList.add(cy[66])}}})();
//[<li><a aria-label='More' class='lbdac pembn tiifo' href='#!'></a><ul class='pocct'><li class='pmeli'><a aria-label='Close button' class='lbdac pembn tiifo' href='#!'></a></li></ul></li>] == body variable  cy[124]
//[.paerm>nav>ul>li] == body variable  cy[97]
//[pemli] == body variable  cy[69]
//[li.pemli] == body variable  cy[95]
//[beforeend] == body variable  cy[91]
//[.pocct] == body variable  cy[74]
//[poccr] == body variable  cy[49]
//[ptobn] == body variable  cy[66]
//[pelbn] == body variable  cy[78]
//[class] == body variable  cy[55]
//console.log();
//getjio@jio.com [2024-04-17 Wednesday 07:31 PM]
//care@jio.com
//appellate.tn@jio.com
//https://www.jio.com/en-in/help-support/appellate-authority


/////////////// *!* Pagelist Menu: Open/Close *!* \\\\\\\\\\\\\\\\
/*document.querySelectorAll(".pembn").forEach(function(pagelistOpenCloseButton) {
    document.querySelectorAll(".pocct").forEach(function(pagelistOpenCloseContent) {
		//pembn: pagelist open close button
		//pocct: pagelist open close content
        let pagelistOpenCloseContainer = pagelistOpenCloseContent.parentElement;
        pagelistOpenCloseButton.addEventListener("click", function() {
            pagelistOpenCloseContent.classList.toggle("pocca");
            document.body.classList.toggle("pemop");
            //yc.toggle("pemop"); //yc == document.body.classList
			//pocca: pagelist open close container active
			//pemop: pagelist ellipsis menu opened
        });
        document.addEventListener("click", function(event) {
            if (!pagelistOpenCloseContainer.contains(event.target)) {
                pagelistOpenCloseContent.classList.remove("pocca");
                document.body.classList.remove("pemop");
                //yc.remove("pemop"); //yc == document.body.classList
            }
        });
    });
});*/
/*document.querySelectorAll(".pembn").forEach((pagelistOpenCloseButton)=> {
    document.querySelectorAll(".pocct").forEach((pagelistOpenCloseContent)=> {
		//pembn: pagelist open close button
		//pocct: pagelist open close content
        let pagelistOpenCloseContainer = pagelistOpenCloseContent.parentElement;
        pagelistOpenCloseButton.addEventListener("click", ()=> {
            pagelistOpenCloseContent.classList.toggle("pocca");
            document.body.classList.toggle("pemop");
            //yc.toggle("pemop"); //yc == document.body.classList
			//pocca: pagelist open close container active
			//pemop: pagelist ellipsis menu opened
        });
        document.addEventListener("click", (event)=> {
            if (!pagelistOpenCloseContainer.contains(event.target)) {
                pagelistOpenCloseContent.classList.remove("pocca");
                document.body.classList.remove("pemop");
                //yc.remove("pemop"); //yc == document.body.classList
            }
        });
    });
});*/
/*document.querySelectorAll(".pembn").forEach((e=>{document.querySelectorAll(".pocct").forEach((c=>{let t=c.parentElement;e.addEventListener("click",(()=>{c.classList.toggle("pocca"),yc.toggle("pemop")})),document.addEventListener("click",(e=>{t.contains(e.target)||(c.classList.remove("pocca"),yc.remove("pemop"))}))}))}));*/
document.querySelectorAll(cy[77]).forEach((e=>{document.querySelectorAll(cy[74]).forEach((c=>{let t=c.parentElement;e.addEventListener(cl[16],(()=>{c.classList.toggle(cy[53]),yc.toggle(cy[56])})),document.addEventListener(cl[16],(e=>{t.contains(e.target)||(c.classList.remove(cy[53]),yc.remove(cy[56]))}))}))}));
//[.pembn] == body variable  cy[77]
//[.pocct] == body variable  cy[74]
//[click] == head variable  cl[16]
//[pocca] == body variable  cy[53]
//[pemop] == body variable  cy[56]
//console.log();


/////////// *!* Label Menu: Ellipsis *!* \\\\\\\\\\\\\
/*(()=>{
let labelLiOverflow = document.querySelectorAll(".laerm>nav>ul>li");
if(null != labelLiOverflow[0]){
	let labelUlLiWidth = 0;
	let labelUlWidth = labelLiOverflow[0].parentElement.offsetWidth - 130;
	labelLiOverflow.forEach(function(i){
		labelUlLiWidth += i.offsetWidth;
		if(labelUlLiWidth > labelUlWidth){
			i.classList.add("lemli"); //lemli: label ellipsis menu list
		}
	});
	let labelUlOverflowLi = document.querySelectorAll("li.lemli");
	if(null != labelUlOverflowLi[0]) {
		labelUlOverflowLi[0].parentElement.insertAdjacentHTML("beforeend", "<li><a aria-label='More' class='lbdac lembu tiifo' href='#!'></a><ul class='lemco'><li class='lmeli'><a aria-label='Close button' class='lbwac lembu tiifo' href='#!'></a></li></ul></li>"); //lemco: label ellipsis menu container | lmeli: label menu ellipsis line | tiifo: this is icon font
		for(let sE = labelUlOverflowLi, s = 0; s < sE.length; s++) {
			for(let tE = document.querySelectorAll(".lemco"), t = 0; t < tE.length; t++) {
				tE[t].insertAdjacentElement("beforeend", sE[s]);
			}
		}
		labelUlOverflowLi[0].parentElement.parentElement.classList.add("locco");
		labelUlOverflowLi.forEach(function(r){r.removeAttribute("class");});
		//If the menu button is only showing, remove the left padding
		let mainUl = labelUlOverflowLi[0].parentElement.parentElement.parentElement;
		//console.log(mainUl.children.length);
		if(mainUl.children.length === 1) { mainUl.classList.add("dmvbu"); } //dmvbu: dedicated mobile view button
	}
}
})();*/
/*(()=>{
let labelLiOverflow = document.querySelectorAll(".laerm>nav>ul>li");
if(null != labelLiOverflow[0]){
	let labelUlLiWidth = 0;
	let labelUlWidth = labelLiOverflow[0].parentElement.offsetWidth - 130;
	labelLiOverflow.forEach((i)=>{
		labelUlLiWidth += i.offsetWidth;
		if(labelUlLiWidth > labelUlWidth){
			i.classList.add("lemli"); //lemli: label ellipsis menu list
		}
	});
	let labelUlOverflowLi = document.querySelectorAll("li.lemli");
	if(null != labelUlOverflowLi[0]) {
		labelUlOverflowLi[0].parentElement.insertAdjacentHTML("beforeend", "<li><a aria-label='More' class='lbdac lembu tiifo' href='#!'></a><ul class='lemco'><li class='lmeli'><a aria-label='Close button' class='lbwac lembu tiifo' href='#!'></a></li></ul></li>"); //lemco: label ellipsis menu container | lmeli: label menu ellipsis line | tiifo: this is icon font
		for(let sE = labelUlOverflowLi, s = 0; s < sE.length; s++) {
			for(let tE = document.querySelectorAll(".lemco"), t = 0; t < tE.length; t++) {
				tE[t].insertAdjacentElement("beforeend", sE[s]);
			}
		}
		labelUlOverflowLi[0].parentElement.parentElement.classList.add("locco");
		labelUlOverflowLi.forEach((r)=>{r.removeAttribute("class");});
		//If the menu button is only showing, remove the left padding
		let mainUl = labelUlOverflowLi[0].parentElement.parentElement.parentElement;
		//console.log(mainUl.children.length);
		if(mainUl.children.length === 1) { mainUl.classList.add("dmvbu"); } //dmvbu: dedicated mobile view button
	}
}
})();*/
//(()=>{let e=document.querySelectorAll(cy[59]);if(null!=e[0]){let l=0,t=e[0].parentElement.offsetWidth-130;e.forEach((e=>{l+=e.offsetWidth,l>t&&e.classList.add("lemli")}));let a=document.querySelectorAll("li.lemli");if(null!=a[0]){a[0].parentElement.insertAdjacentHTML("beforeend","<li><a aria-label='More' class='lbdac lembu tiifo' href='#!'></a><ul class='lemco'><li class='lmeli'><a aria-label='Close button' class='lbwac lembu tiifo' href='#!'></a></li></ul></li>");for(let e=a,l=0;l<e.length;l++)for(let t=document.querySelectorAll(".lemco"),a=0;a<t.length;a++)t[a].insertAdjacentElement("beforeend",e[l]);a[0].parentElement.parentElement.classList.add("locco"),a.forEach((e=>{e.removeAttribute("class")}));let e=a[0].parentElement.parentElement.parentElement;1===e.children.length&&e.classList.add("dmvbu")}}})();
(()=>{let e=document.querySelectorAll(cy[59]);if(null!=e[0]){let l=0,t=e[0].parentElement.offsetWidth-130;e.forEach((e=>{l+=e.offsetWidth,l>t&&e.classList.add(cy[81])}));let a=document.querySelectorAll(cy[109]);if(null!=a[0]){a[0].parentElement.insertAdjacentHTML(cy[91],cy[85]);for(let e=a,l=0;l<e.length;l++)for(let t=document.querySelectorAll(cy[116]),a=0;a<t.length;a++)t[a].insertAdjacentElement(cy[91],e[l]);a[0].parentElement.parentElement.classList.add(cy[128]),a.forEach((e=>{e.removeAttribute(cy[55])}));let e=a[0].parentElement.parentElement.parentElement;1===e.children.length&&e.classList.add(cy[64])}}})();
//[lemli] == body variable  cy[81]
//[li.lemli] == body variable  cy[109]
//[beforeend] == body variable  cy[91]
//[.lemco] == body variable  cy[116]
//[locco] == body variable  cy[128]
//[class] == body variable  cy[55]
//[dmvbu] == body variable  cy[64]
//console.log();


/////////////// *!* Label Menu: Open/Close *!* \\\\\\\\\\\\\\\\
/*document.querySelectorAll(".lembu").forEach(function(RtL) {

    document.querySelectorAll(".lemco").forEach(function(RtLC) {
        var this_RTL_Parent = RtLC.parentElement;
        RtL.addEventListener("click", function() {
            RtLC.classList.toggle("locca");
            document.body.classList.toggle("emope");
            //yc.toggle("emope");
			//locca: label open close container active
			//emope: ellipsis menu opened
        });
        document.addEventListener("click", function(event) {
            if (!this_RTL_Parent.contains(event.target)) {
                RtLC.classList.remove("locca");
                document.body.classList.remove("emope");
                //yc.remove("emope");
            }
        });
    });
});*/
/*document.querySelectorAll(".lembu").forEach((RtL)=> {
    document.querySelectorAll(".lemco").forEach((RtLC)=> {
        let this_RTL_Parent = RtLC.parentElement;
        RtL.addEventListener("click", ()=> {
            RtLC.classList.toggle("locca");
            document.body.classList.toggle("emope");
            //yc.toggle("emope");
			//locca: label open close container active
			//emope: ellipsis menu opened
        });
        document.addEventListener("click", (event)=> {
            if (!this_RTL_Parent.contains(event.target)) {
                RtLC.classList.remove("locca");
                document.body.classList.remove("emope");
                //yc.remove("emope");
            }
        });
    });
});*/
//document.querySelectorAll(".lembu").forEach((e=>{document.querySelectorAll(".lemco").forEach((c=>{let t=c.parentElement;e.addEventListener("click",(()=>{c.classList.toggle("locca"),document.body.classList.toggle("emope")})),document.addEventListener("click",(e=>{t.contains(e.target)||(c.classList.remove("locca"),document.body.classList.remove("emope"))}))}))}));
document.querySelectorAll(cy[51]).forEach((e=>{document.querySelectorAll(cy[116]).forEach((c=>{let t=c.parentElement;e.addEventListener(cl[16],(()=>{c.classList.toggle(cy[84]),document.body.classList.toggle(cy[62])})),document.addEventListener(cl[16],(e=>{t.contains(e.target)||(c.classList.remove(cy[84]),document.body.classList.remove(cy[62]))}))}))}));
//[.lembu] == body variable  cy[51]
//[.lemco] == body variable  cy[116]
//[click] == head variable  cl[16]
//[locca] == body variable  cy[84]
//[emope] == body variable  cy[62]
//console.log();



//////////////////// *!* Inside Full Post Ad Placement: Starts *!* \\\\\\\\\\\\\\\\\\\\
//////////// *!* Full Post Inside Middle-Top Ad *!* \\\\\\\\\\\\
//ipamt:inside post ad middle top
//buprc: blog update post reading content 
/*document.querySelectorAll(".ipamt").forEach(function (insidePostMiddleTopAd) {
	var showInsidePostFirstAdNextTo = document.querySelectorAll(".buprc>*:not(.etele)");
	if (3 < showInsidePostFirstAdNextTo.length) {
		var targetParent = showInsidePostFirstAdNextTo[Math.round(showInsidePostFirstAdNextTo.length / 3.8)],
			grandFather = targetParent.parentNode;
		grandFather.lastChild == targetParent ? grandFather.appendChild(insidePostMiddleTopAd) : grandFather.insertBefore(insidePostMiddleTopAd, targetParent.nextSibling)
	} else {  
		insidePostMiddleTopAd.remove();
	}
});*/
/*document.querySelectorAll(".ipamt").forEach((insidePostMiddleTopAd)=> {
	let showInsidePostFirstAdNextTo = document.querySelectorAll(".buprc>*:not(.etele)");
	if (3 < showInsidePostFirstAdNextTo.length) {
		let targetParent = showInsidePostFirstAdNextTo[Math.round(showInsidePostFirstAdNextTo.length / 3.8)],
			grandFather = targetParent.parentNode;
		grandFather.lastChild == targetParent ? grandFather.appendChild(insidePostMiddleTopAd) : grandFather.insertBefore(insidePostMiddleTopAd, targetParent.nextSibling)
	} else {  
		insidePostMiddleTopAd.remove();
	}
});*/
//document.querySelectorAll(".ipamt").forEach((e=>{let l=document.querySelectorAll(".buprc>*:not(.etele)");if(3<l.length){let t=l[Math.round(l.length/3.8)],r=t.parentNode;r.lastChild==t?r.appendChild(e):r.insertBefore(e,t.nextSibling)}else e.remove()}));
//document.querySelectorAll(".ipamt").forEach((e=>{let l=document.querySelectorAll(".buprc>*:not(.etele)");if(3<l.length){let t=l[Math.round(l.length/3.8)],r=t.parentNode;r.lastChild==t?r.appendChild(e):r.insertBefore(e,t.nextSibling)}else e.remove()}));
document.querySelectorAll(cy[6]).forEach((e=>{let l=document.querySelectorAll(cy[29]);if(3<l.length){let t=l[Math.round(l.length/3.8)],r=t.parentNode;r.lastChild==t?r.appendChild(e):r.insertBefore(e,t.nextSibling)}else e.remove()}));
//[.ipamt] == body variable  cy[6]
//[.buprc>*:not(.etele)] == body variable  cy[29]
//console.log();


//////////// *!* Full Post Inside Middle-Middle Ad *!* \\\\\\\\\\\\
//ipamm:inside post ad middle middle
/*document.querySelectorAll(".ipamm").forEach(function (insidePostMiddleMiddleAd) {
	var showInsidePostFirstAdNextTo = document.querySelectorAll(".buprc>*:not(.etele)");
	if (6 < showInsidePostFirstAdNextTo.length) {
		var targetParent = showInsidePostFirstAdNextTo[Math.round(showInsidePostFirstAdNextTo.length / 1.7)],
			grandFather = targetParent.parentNode;
		grandFather.lastChild == targetParent ? grandFather.appendChild(insidePostMiddleMiddleAd) : grandFather.insertBefore(insidePostMiddleMiddleAd, targetParent.nextSibling)
	} else {  
		insidePostMiddleMiddleAd.remove();
	}
});*/
/*document.querySelectorAll(".ipamm").forEach((insidePostMiddleMiddleAd)=> {
	let showInsidePostFirstAdNextTo = document.querySelectorAll(".buprc>*:not(.etele)");
	if (6 < showInsidePostFirstAdNextTo.length) {
		let targetParent = showInsidePostFirstAdNextTo[Math.round(showInsidePostFirstAdNextTo.length / 1.7)],
			grandFather = targetParent.parentNode;
		grandFather.lastChild == targetParent ? grandFather.appendChild(insidePostMiddleMiddleAd) : grandFather.insertBefore(insidePostMiddleMiddleAd, targetParent.nextSibling)
	} else {  
		insidePostMiddleMiddleAd.remove();
	}
});*/
//document.querySelectorAll(".ipamm").forEach((e=>{let l=document.querySelectorAll(".buprc>*:not(.etele)");if(6<l.length){let t=l[Math.round(l.length/1.7)],r=t.parentNode;r.lastChild==t?r.appendChild(e):r.insertBefore(e,t.nextSibling)}else e.remove()}));
//document.querySelectorAll(".ipamm").forEach((e=>{let l=document.querySelectorAll(".buprc>*:not(.etele)");if(6<l.length){let t=l[Math.round(l.length/1.7)],r=t.parentNode;r.lastChild==t?r.appendChild(e):r.insertBefore(e,t.nextSibling)}else e.remove()}));
document.querySelectorAll(cy[24]).forEach((e=>{let l=document.querySelectorAll(cy[29]);if(6<l.length){let t=l[Math.round(l.length/1.7)],r=t.parentNode;r.lastChild==t?r.appendChild(e):r.insertBefore(e,t.nextSibling)}else e.remove()}));
//[.ipamm] == body variable  cy[24]
//[.buprc>*:not(.etele)] == body variable  cy[29]
//console.log();


//////////// *!* Full Post Inside Middle-Bottom Ad *!* \\\\\\\\\\\\
//ipamb:inside post ad middle bottom
/*document.querySelectorAll(".ipamb").forEach(function (insidePostMiddleBottomAd) {
	let showInsidePostFirstAdNextTo = document.querySelectorAll(".buprc>*:not(.etele)");
	if (9 < showInsidePostFirstAdNextTo.length) {
		let targetParent = showInsidePostFirstAdNextTo[Math.round(showInsidePostFirstAdNextTo.length / 1.2)],
			grandFather = targetParent.parentNode;
		grandFather.lastChild == targetParent ? grandFather.appendChild(insidePostMiddleBottomAd) : grandFather.insertBefore(insidePostMiddleBottomAd, targetParent.nextSibling)
	} else {  
		insidePostMiddleBottomAd.remove();
	}
});*/
/*document.querySelectorAll(".ipamb").forEach((insidePostMiddleBottomAd)=> {
	let showInsidePostFirstAdNextTo = document.querySelectorAll(".buprc>*:not(.etele)");
	if (9 < showInsidePostFirstAdNextTo.length) {
		let targetParent = showInsidePostFirstAdNextTo[Math.round(showInsidePostFirstAdNextTo.length / 1.2)],
			grandFather = targetParent.parentNode;
		grandFather.lastChild == targetParent ? grandFather.appendChild(insidePostMiddleBottomAd) : grandFather.insertBefore(insidePostMiddleBottomAd, targetParent.nextSibling)
	} else {  
		insidePostMiddleBottomAd.remove();
	}
});*/
//document.querySelectorAll(".ipamb").forEach((e=>{let l=document.querySelectorAll(".buprc>*:not(.etele)");if(9<l.length){let t=l[Math.round(l.length/1.2)],r=t.parentNode;r.lastChild==t?r.appendChild(e):r.insertBefore(e,t.nextSibling)}else e.remove()}));
//document.querySelectorAll(".ipamb").forEach((e=>{let l=document.querySelectorAll(".buprc>*:not(.etele)");if(9<l.length){let t=l[Math.round(l.length/1.2)],r=t.parentNode;r.lastChild==t?r.appendChild(e):r.insertBefore(e,t.nextSibling)}else e.remove()}));
document.querySelectorAll(cy[14]).forEach((e=>{let l=document.querySelectorAll(cy[29]);if(9<l.length){let t=l[Math.round(l.length/1.2)],r=t.parentNode;r.lastChild==t?r.appendChild(e):r.insertBefore(e,t.nextSibling)}else e.remove()}));
//[.ipamb] == body variable  cy[14]
//[.buprc>*:not(.etele)] == body variable  cy[29]
//console.log();
//////////////////// *!* Inside Full Post Ad Placement: Ends *!* \\\\\\\\\\\\\\\\\\\\


/////////////// *!* Comment OpenClose: To Bottom *!* \\\\\\\\\\\\\\\\
/*document.querySelectorAll(".urocc").forEach(function(c) { //urocc: user reviews open close content
	var s = c.previousElementSibling;
	var commentSection = c.parentElement;
	var commentSectionHeight = c.scrollHeight+"px";

	s.addEventListener("click", function() {
		if(c.classList.toggle("urcac")){ //urcac: user reviews content active
			c.style.maxHeight = commentSectionHeight;
			s.classList.add("urbac"); //urbac: user reviews button active
		} else {
			s.classList.remove("urbac");
			c.removeAttribute("style");
		}
	});

	document.addEventListener("click", function(event) {
		if (!commentSection.contains(event.target)) {
			c.classList.remove("urcac");
			s.classList.remove("urbac");
			c.removeAttribute("style");
		}
	});
});*/
/*document.querySelectorAll(".urocc").forEach((c)=> { //urocc: user reviews open close content
	let s = c.previousElementSibling;
	let commentSection = c.parentElement;
	let commentSectionHeight = c.scrollHeight+"px";

	s.addEventListener("click", ()=> {
		if(c.classList.toggle("urcac")){ //urcac: user reviews content active
			c.style.maxHeight = commentSectionHeight;
			s.classList.add("urbac"); //urbac: user reviews button active
		} else {
			s.classList.remove("urbac");
			c.removeAttribute("style");
		}
	});

	document.addEventListener("click", (event)=> {
		if (!commentSection.contains(event.target)) {
			c.classList.remove("urcac");
			s.classList.remove("urbac");
			c.removeAttribute("style");
		}
	});
});*/
//document.querySelectorAll(".urocc").forEach((e=>{let t=e.previousElementSibling,c=e.parentElement,s=e.scrollHeight+"px";t.addEventListener("click",(()=>{e.classList.toggle("urcac")?(e.style.maxHeight=s,t.classList.add("urbac")):(t.classList.remove("urbac"),e.removeAttribute("style"))})),document.addEventListener("click",(s=>{c.contains(s.target)||(e.classList.remove("urcac"),t.classList.remove("urbac"),e.removeAttribute("style"))}))}));
//document.querySelectorAll(cy[2]).forEach((e=>{let t=e.previousElementSibling,c=e.parentElement,s=e.scrollHeight+cl[194];t.addEventListener(cl[16],(()=>{e.classList.toggle(cy[7])?(e.style.maxHeight=s,t.classList.add(cy[22])):(t.classList.remove(cy[22]),e.removeAttribute(cl[216]))})),document.addEventListener(cl[16],(s=>{c.contains(s.target)||(e.classList.remove(cy[7]),t.classList.remove(cy[22]),e.removeAttribute(cl[216]))}))}));

document.querySelectorAll(".urocc").forEach(function(container) { //urocc: user reviews open close content
	let theSwitch = container.previousElementSibling;
	let commentSection = container.parentElement;

	theSwitch.addEventListener("click", function() {
		if(container.classList.toggle("urcac")){ //urcac: user reviews content active
			theSwitch.classList.add("urbac"); //urbac: user reviews button active
		} else {
			theSwitch.classList.remove("urbac");
		}
	});

	document.addEventListener("click", function(event) {
		if (!commentSection.contains(event.target)) {
			container.classList.remove("urcac");
			theSwitch.classList.remove("urbac");
		}
	});
});

//[.urocc] == body variable  cy[2]
//[px] == head variable  cl[194]
//[click] == head variable  cl[16]
//[urcac] == body variable  cy[7]
//[urbac] == body variable  cy[22]
//[style] == head variable  cl[216]
//console.log();


/////////// *!* Enable search submit after entered the search query *!* \\\\\\\\\\\\\
/*document.querySelectorAll(".seinp").forEach(function(s){
	var searchReset = s.nextElementSibling.nextElementSibling;
	s.addEventListener("keyup", function(){
		s.value ? searchReset.disabled = false : searchReset.disabled = true;
	});

	document.addEventListener("click", function(event){
		if(event.target !== searchReset) {
			searchReset.setAttribute("disabled", "disabled");
		}
	});
});*/
/*document.querySelectorAll(".seinp").forEach((s)=>{
	let searchReset = s.nextElementSibling.nextElementSibling;
	s.addEventListener("keyup", ()=>{
		s.value ? searchReset.disabled = false : searchReset.disabled = true;
	});

	document.addEventListener("click", (event)=>{
		if(event.target !== searchReset) {
			searchReset.setAttribute("disabled", "disabled");
		}
	});
});*/
//document.querySelectorAll(".seinp").forEach((e=>{let t=e.nextElementSibling.nextElementSibling;e.addEventListener("keyup",(()=>{e.value?t.disabled=!1:t.disabled=!0})),document.addEventListener("click",(e=>{e.target!==t&&t.setAttribute("disabled","disabled")}))}));
//(ReadableBasic)//document.querySelectorAll(".seinp").forEach((e=>{let t=e.nextElementSibling.nextElementSibling;e.addEventListener("keyup",(()=>{e.value?t.disabled=!1:t.disabled=!0})),document.addEventListener("click",(e=>{e.target!==t&&t.setAttribute("disabled","disabled")}))}));
////veryveryBasic
document.querySelectorAll(cy[65]).forEach((e=>{let t=e.nextElementSibling.nextElementSibling;e.addEventListener(cl[138],(()=>{e.value?t.disabled=!1:t.disabled=!0})),document.addEventListener(cl[16],(e=>{e.target!==t&&t.setAttribute(cl[157],cl[157])}))}));
//[.seinp] == body variable  cy[65]
//[keyup] == head variable  cl[138]
//[click] == head variable  cl[16]
//[disabled] == head variable  cl[157]
//console.log();


/////////// *!* Search Reset *!* \\\\\\\\\\\\\
/*document.querySelectorAll('.seres>svg').forEach(function(thisButton){
	var resetThis = thisButton.parentElement.previousElementSibling.previousElementSibling;
	thisButton.addEventListener('click', function(){
		resetThis.value = '';
	});
});*/
/*document.querySelectorAll('.seres>svg').forEach((thisButton)=>{
	let resetThis = thisButton.parentElement.previousElementSibling.previousElementSibling;
	thisButton.addEventListener('click', ()=>{
		resetThis.value = '';
	});
});*/
//document.querySelectorAll(".seres>svg").forEach((e=>{let l=e.parentElement.previousElementSibling.previousElementSibling;e.addEventListener("click",(()=>{l.value=""}))}));
//(ReadableBasic)//document.querySelectorAll(".seres>svg").forEach((e=>{let l=e.parentElement.previousElementSibling.previousElementSibling;e.addEventListener("click",(()=>{l.value=""}))}));

////veryveryBasic
document.querySelectorAll(cy[72]+cy[89]).forEach((e=>{let l=e.parentElement.previousElementSibling.previousElementSibling;e.addEventListener(cl[16],(()=>{l.value=cl[190]}))}));
//[.seres]+[>svg] == body variable  cy[72]+cy[89]
//[click] == head variable  cl[16]
//[""] == head variable (Empty string)  cl[190]
//console.log();



////////// *!* Search OpenClose: Top to Bottom *!* \\\\\\\\\\
/*document.querySelectorAll(".octbb").forEach(function (i) {
	var thisParent = i.parentElement;
	i.addEventListener("click", function () {
		thisParent.classList.toggle("octba")
	});
	document.addEventListener("click", function (event) {
		if (!thisParent.contains(event.target)) {
			thisParent.classList.remove("octba");
		}
	});
});*/
/*document.querySelectorAll(".octbb").forEach((i) => {
	const thisParent = i.parentElement;
	i.addEventListener("click", () => {
		thisParent.classList.toggle("octba")
	});
	document.addEventListener("click", (event) => {
		if (!thisParent.contains(event.target)) {
			thisParent.classList.remove("octba");
		}
	});
});*/
//document.querySelectorAll(".octbb").forEach((e=>{const t=e.parentElement;e.addEventListener("click",(()=>{t.classList.toggle("octba")})),document.addEventListener("click",(e=>{t.contains(e.target)||t.classList.remove("octba")}))}));
//(ReadableBasic)//document.querySelectorAll(".octbb").forEach((e=>{const t=e.parentElement;e.addEventListener("click",(()=>{t.classList.toggle("octba")})),document.addEventListener("click",(e=>{t.contains(e.target)||t.classList.remove("octba")}))}));
////veryveryBasic
document.querySelectorAll(cy[98]).forEach((e=>{const t=e.parentElement;e.addEventListener(cl[16],(()=>{t.classList.toggle(cy[118])})),document.addEventListener(cl[16],(e=>{t.contains(e.target)||t.classList.remove(cy[118])}))}));
//[.octbb] == body variable  cy[98]
//[click] == head variable  cl[16]
//[octba] == body variable  cy[118]
//console.log();


////////// *!* Search Open/Close: Right to Left *!* \\\\\\\\\\
/*document.querySelectorAll(".ocrlb").forEach(function (i) {
	let thisParent = i.parentElement;

	i.addEventListener("click", function () {
		thisParent.classList.toggle("ocrla")
	});
	document.addEventListener("click", function (event) {
		if (!thisParent.contains(event.target)) {
			thisParent.classList.remove("ocrla");
		}
	});
});*/
/*document.querySelectorAll(".ocrlb").forEach((i)=> {
	let thisParent = i.parentElement;
	i.addEventListener("click", ()=> {
		thisParent.classList.toggle("ocrla")
	});
	document.addEventListener("click", (event)=> {
		if (!thisParent.contains(event.target)) {
			thisParent.classList.remove("ocrla");
		}
	});
});*/
//document.querySelectorAll(".ocrlb").forEach((e=>{let t=e.parentElement;e.addEventListener("click",(()=>{t.classList.toggle("ocrla")})),document.addEventListener("click",(e=>{t.contains(e.target)||t.classList.remove("ocrla")}))}));
document.querySelectorAll(cy[39]).forEach((e=>{let t=e.parentElement;e.addEventListener(cl[16],(()=>{t.classList.toggle(cy[48])})),document.addEventListener(cl[16],(e=>{t.contains(e.target)||t.classList.remove(cy[48])}))}));
//[.ocrlb] == body variable  cy[39]
//[click] == head variable  cl[16]
//[ocrla] == body variable  cy[48]
//console.log();



/////////// *!* ContactForm Textarea Expand *!* \\\\\\\\\\\\\
/*document.querySelectorAll("#ContactForm1 textarea").forEach(function(i){
	var resetButton = i.nextElementSibling.firstElementChild.firstElementChild;
	i.addEventListener("keyup", function(){
		i.style.height = "1px";
		i.style.height = (25 + i.scrollHeight) + "px";
	});
	resetButton.addEventListener("click", function(){
		i.removeAttribute("style");
	});
});*/
/*document.querySelectorAll("#ContactForm1 textarea").forEach((i)=>{
	let resetButton = i.nextElementSibling.firstElementChild.firstElementChild;
	i.addEventListener("keyup",()=>{
		i.style.height = "1px";
		i.style.height = (25 + i.scrollHeight) + "px";
	});
	resetButton.addEventListener("click",()=>{
		i.removeAttribute("style");
	});
});/**/
/*document.querySelectorAll("#ContactForm1 textarea").forEach((i)=>{
	let resetButton = i.nextElementSibling.firstElementChild.firstElementChild;
	i.addEventListener("keyup",()=>{
		i.style.height = "1px";
		i.style.height = (25 + i.scrollHeight) + "px";
	});
	resetButton.addEventListener("click",()=>{
		i.removeAttribute("style");
	});
});*/
//(ReadableBasic)//document.querySelectorAll("#ContactForm1 textarea").forEach((e=>{let t=e.nextElementSibling.firstElementChild.firstElementChild;e.addEventListener("keyup",(()=>{e.style.height="1px",e.style.height=25+e.scrollHeight+"px"})),t.addEventListener("click",(()=>{e.removeAttribute("style")}))}));
////veryveryBasic
document.querySelectorAll(cy[52]+cy[67]+cy[76]+cy[88]).forEach((e=>{let t=e.nextElementSibling.firstElementChild.firstElementChild;e.addEventListener(cl[138],(()=>{e.style.height=cl[175]+cl[194],e.style.height=25+e.scrollHeight+cl[194]})),t.addEventListener(cl[16],(()=>{e.removeAttribute(cl[216])}))}));
//[#]+[Contact]+[Form1 ]+[textarea] == body variable  cy[52]+cy[67]+cy[76]+cy[88]
//[keyup] == head variable  cl[138]
//[1]+[px] == head variable  cl[175]+cl[194]
//[px] == head variable  cl[194]
//[click] == head variable  cl[16]
//[style] == head variable  cl[216]
//console.log();


/////////// *!* Ripple Effect *!* \\\\\\\\\\\\\
/*document.querySelectorAll(".reoco").forEach(function(b){
	b.addEventListener("click", function (e) {
		if (this.getElementsByClassName("reico").length > 0) {
			this.removeChild(this.childNodes[1]);
		}
		var circle = document.createElement("span");
		this.appendChild(circle);
		var d = Math.max(this.clientWidth, this.clientHeight);
		circle.style.width = circle.style.height = d + "px";
		circle.style.left = e.clientX - this.offsetLeft - d / 2 + "px";
		circle.style.top = e.clientY - this.offsetTop - d / 2 + "px";
		circle.classList.add("reico");
	});
});*/
/*document.querySelectorAll(".reoco").forEach((b) => {
	b.addEventListener("click", function (e) { //Arrow function is not working here
		if (this.getElementsByClassName("reico").length > 0) {
			this.removeChild(this.childNodes[1]);
		}
		const circle = document.createElement("span");
		this.appendChild(circle);
		const d = Math.max(this.clientWidth, this.clientHeight);
		circle.style.width = circle.style.height = d + "px";
		circle.style.left = e.clientX - this.offsetLeft - d / 2 + "px";
		circle.style.top = e.clientY - this.offsetTop - d / 2 + "px";
		circle.classList.add("reico");
	});
});*/
//document.querySelectorAll(".reoco").forEach((t=>{t.addEventListener("click",(function(t){this.getElementsByClassName("reico").length>0&&this.removeChild(this.childNodes[1]);const e=document.createElement("span");this.appendChild(e);const i=Math.max(this.clientWidth,this.clientHeight);e.style.width=e.style.height=i+"px",e.style.left=t.clientX-this.offsetLeft-i/2+"px",e.style.top=t.clientY-this.offsetTop-i/2+"px",e.classList.add("reico")}))}));
//document.querySelectorAll(".reoco").forEach((t=>{t.addEventListener("click",(function(t){this.getElementsByClassName("reico").length>0&&this.removeChild(this.childNodes[1]);const e=document.createElement("span");this.appendChild(e);const i=Math.max(this.clientWidth,this.clientHeight);e.style.width=e.style.height=i+"px",e.style.left=t.clientX-this.offsetLeft-i/2+"px",e.style.top=t.clientY-this.offsetTop-i/2+"px",e.classList.add("reico")}))}));
document.querySelectorAll(cy[37]).forEach((t=>{t.addEventListener(cl[16],(function(t){this.getElementsByClassName(cy[17]).length>0&&this.removeChild(this.childNodes[1]);const e=document.createElement(cl[240]);this.appendChild(e);const i=Math.max(this.clientWidth,this.clientHeight);e.style.width=e.style.height=i+cl[194],e.style.left=t.clientX-this.offsetLeft-i/2+cl[194],e.style.top=t.clientY-this.offsetTop-i/2+cl[194],e.classList.add(cy[17])}))}));
//[.reoco] == ? variable  cy[37]
//[click] == head variable  cl[16]
//[reico] == ? variable  cy[17]
//[span] == head variable  cl[240]
//[px] == head variable  cl[194]
//console.log();



///////////// *!* Scroll-up Show Menu *!* \\\\\\\\\\\\\\\
//////////////////// Previously used version
/*document.querySelectorAll(".bddmh").forEach(function(s){
	var scrollStart = 0;
	var stickyHeight = s.offsetHeight;
	window.addEventListener("scroll", function () {
		var scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
		if (scrollY > scrollStart) {
			s.style.top = "-" + stickyHeight + "px";
		} else {
			s.style.top = "0";
		}
		scrollStart = scrollY <= 0 ? 0 : scrollY; //For Mobile or negative scrolling
	}, false);
});*/
/*document.querySelectorAll(".bddmh").forEach((s) =>{
	let scrollStart = 0;
	let stickyHeight = s.offsetHeight;
	window.addEventListener("scroll", ()=> {
		let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
		if (scrollY > scrollStart) {
			s.style.top = "-" + stickyHeight + "px";
		} else {
			s.style.top = "0";
		}
		scrollStart = scrollY <= 0 ? 0 : scrollY; //For Mobile or negative scrolling
	}, false);
});*/
//document.querySelectorAll(".bddmh").forEach((e=>{let t=0,o=e.offsetHeight;window.addEventListener("scroll",(()=>{let l=window.scrollY || window.pageYOffset||document.documentElement.scrollTop;e.style.top=l>t?"-"+o+"px":"0",t=l<=0?0:l}),!1)}));
//document.querySelectorAll(".bddmh").forEach((e=>{let t=0,o=e.offsetHeight;window.addEventListener("scroll",(()=>{let l=window.scrollY || window.pageYOffset||document.documentElement.scrollTop;e.style.top=l>t?"-"+o+"px":"0",t=l<=0?0:l}),!1)}));
//[.bddmh] == body variable  cy[94]
//[scroll] == body variable  cy[103]
//[-] == head variable  cl[27]
//[px] == head variable  cl[194]
//[0] == head variable  cl[237]
//console.log();
//////////////////// Previously used version finished

////////////////////Updated Version
/*(()=>{ 
	document.querySelectorAll(".rmwsu").forEach(function (s) {//Previous class name was '.bddmh'. Replace the old class with updated new class '.rmwsu'.
		var lastScroll = 0;
		var isScrolled = false;
		var stickyHeight = s.offsetHeight;
		window.addEventListener("scroll", function () {
			var currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
			var scrollDirection = currentScroll < lastScroll;
			var shouldToggle = isScrolled && scrollDirection;
			isScrolled = currentScroll > 100;
			if (currentScroll > lastScroll) {
				s.style.top = "-" + stickyHeight + "px";
			} else {
				s.style.top = "0";
			}
			s.classList.toggle("sumac", shouldToggle); //sumac: scroll up menu active
			lastScroll = currentScroll <= 0 ? 0 : currentScroll; //For Mobile or negative scrolling	
		});
	});
})();*/
/*(()=>{ 
	document.querySelectorAll(".rmwsu").forEach((s)=> {//Previous class name was '.bddmh'. Replace the old class with updated new class '.rmwsu'.
		let lastScroll = 0;
		let isScrolled = false;
		let stickyHeight = s.offsetHeight;
		window.addEventListener("scroll", ()=> {
			let currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
			let scrollDirection = currentScroll < lastScroll;
			let shouldToggle = isScrolled && scrollDirection;
			isScrolled = currentScroll > 100;
			if (currentScroll > lastScroll) {
				s.style.top = "-" + stickyHeight + "px";
			} else {
				s.style.top = "0";
			}
			s.classList.toggle("sumac", shouldToggle); //sumac: scroll up menu active
			lastScroll = currentScroll <= 0 ? 0 : currentScroll; //For Mobile or negative scrolling	
		});
	});
})();*/
//document.querySelectorAll(".rmwsu").forEach((e=>{let o=0,t=!1,l=e.offsetHeight;window.addEventListener("scroll",(()=>{let s=window.scrollY || window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=t&&s<o;t=s>100,e.style.top=s>o?"-"+l+"px":"0",e.classList.toggle("sumac",c),o=s<=0?0:s}))}));
document.querySelectorAll(cy[94]).forEach((e=>{let o=0,t=!1,l=e.offsetHeight;window.addEventListener(cy[103],(()=>{let s=window.scrollY || window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=t&&s<o;t=s>100,e.style.top=s>o?cl[27]+l+cl[194]:cl[237],e.classList.toggle(cy[4],c),o=s<=0?0:s}))}));
//[.rmwsu] == body variable  cy[94]
//[scroll] == body variable  cy[103]
//[-] == head variable  cl[27]
//[px] == head variable  cl[194]
//[0] == head variable  cl[237]
//[sumac] == body variable  cy[4]
//console.log();




/////////// *!* Go To Bottom || Go to Top *!* \\\\\\\\\\\\\
/*!function(){
	var lastScrollTop = 0;
	window.addEventListener("scroll", function(){
		document.querySelectorAll(".sttbc").forEach(function(s){
		var sctot = s.firstElementChild.classList; // scroll to top
		var sctob = s.lastElementChild.classList; // scroll to bottom
		//var sctot = document.querySelector(".sctot").classList; // scroll to top
		//var sctob = document.querySelector(".sctob").classList; // scroll to bottom
		//gotot == go to top
		//gotob == go to bottom
		var topBottomHideHeight = 800;
		//var defaultPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
		var defaultPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
		if (defaultPosition > lastScrollTop){
			defaultPosition >= topBottomHideHeight ? sctob.add("gotob") : sctob.remove("gotob");
			sctot.remove("gotot");
		} else {
			defaultPosition >= topBottomHideHeight ? sctot.add("gotot") : sctot.remove("gotot");
			sctob.remove("gotob");
		}
		lastScrollTop = defaultPosition <= 0 ? 0 : defaultPosition;
		if((window.innerHeight + window.scrollY) >= document.body.offsetHeight - topBottomHideHeight) {
			sctob.remove("gotob");
			sctot.remove("gotot");
		}
		});
	}, false);
}();*/
/*(()=>{
	let lastScrollTop = 0;
	window.addEventListener("scroll", ()=>{
		document.querySelectorAll(".sttbc").forEach((s)=>{
		let sctot = s.firstElementChild.classList; // scroll to top
		let sctob = s.lastElementChild.classList; // scroll to bottom
		let topBottomHideHeight = 800;
		let defaultPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
		if (defaultPosition > lastScrollTop){
			defaultPosition >= topBottomHideHeight ? sctob.add("gotob") : sctob.remove("gotob");
			sctot.remove("gotot");
		} else {
			defaultPosition >= topBottomHideHeight ? sctot.add("gotot") : sctot.remove("gotot");
			sctob.remove("gotob");
		}
		lastScrollTop = defaultPosition <= 0 ? 0 : defaultPosition;
		if((window.innerHeight + window.scrollY) >= document.body.offsetHeight - topBottomHideHeight) {
			sctob.remove("gotob");
			sctot.remove("gotot");
		}
		});
	}, false);
})();*/
//(()=>{let o=0;window.addEventListener("scroll",(()=>{document.querySelectorAll(".sttbc").forEach((e=>{let t=e.firstElementChild.classList,l=e.lastElementChild.classList,d=window.scrollY || window.pageYOffset||document.documentElement.scrollTop;d>o?(d>=800?l.add("gotob"):l.remove("gotob"),t.remove("gotot")):(d>=800?t.add("gotot"):t.remove("gotot"),l.remove("gotob")),o=d<=0?0:d,window.innerHeight+window.scrollY>=document.body.offsetHeight-800&&(l.remove("gotob"),t.remove("gotot"))}))}),!1)})();
//(()=>{let o=0;window.addEventListener("scroll",(()=>{document.querySelectorAll(".sttbc").forEach((e=>{let t=e.firstElementChild.classList,l=e.lastElementChild.classList,d=window.scrollY || window.pageYOffset||document.documentElement.scrollTop;d>o?(d>=800?l.add("gotob"):l.remove("gotob"),t.remove("gotot")):(d>=800?t.add("gotot"):t.remove("gotot"),l.remove("gotob")),o=d<=0?0:d,window.innerHeight+window.scrollY>=document.body.offsetHeight-800&&(l.remove("gotob"),t.remove("gotot"))}))}),!1)})();
(()=>{let o=0;window.addEventListener(cy[103],(()=>{document.querySelectorAll(cy[115]).forEach((e=>{let t=e.firstElementChild.classList,l=e.lastElementChild.classList,d=window.scrollY || window.pageYOffset||document.documentElement.scrollTop;d>o?(d>=800?l.add(cy[126]):l.remove(cy[126]),t.remove(cy[132])):(d>=800?t.add(cy[132]):t.remove(cy[132]),l.remove(cy[126])),o=d<=0?0:d,window.innerHeight+window.scrollY>=document.body.offsetHeight-800&&(l.remove(cy[126]),t.remove(cy[132]))}))}),!1)})();
//[scroll] == body variable  cy[103]
//[.sttbc] == body variable  cy[115]
//[gotob] == body variable  cy[126]
//[gotot] == body variable  cy[132]
//console.log();


////////// *!* Menu Open Close: Left to Right *!* \\\\\\\\\\
/*document.querySelectorAll(".oclrb").forEach(function (i) {
	var thisParent = i.parentElement;
	i.addEventListener("click", function () {
		thisParent.classList.toggle("oclra");
		document.body.classList.toggle("ocdsc"); //ocdsc: on click disable scroll
	});
	document.addEventListener("click", function (event) {
		if (!thisParent.contains(event.target)) {
			thisParent.classList.remove("oclra");
			document.body.classList.remove("ocdsc"); //ocdsc: on click disable scroll
		}
	});
});*/
/*document.querySelectorAll(".oclrb").forEach( (i) => {
	let thisParent = i.parentElement;
	i.addEventListener("click", () => {
		thisParent.classList.toggle("oclra");
		document.body.classList.toggle("ocdsc"); //ocdsc: on click disable scroll
	});
	document.addEventListener("click", (event) => {
		if (!thisParent.contains(event.target)) {
			thisParent.classList.remove("oclra");
			document.body.classList.remove("ocdsc"); //ocdsc: on click disable scroll
		}
	});
});*/
////veryveryBasic
document.querySelectorAll(cy[54]).forEach((e=>{let c=e.parentElement;e.addEventListener(cl[16],(()=>{c.classList.toggle(cy[58]),document.body.classList.toggle(cy[68])})),document.addEventListener(cl[16],(e=>{c.contains(e.target)||(c.classList.remove(cy[58]),document.body.classList.remove(cy[68]))}))}));
//[.oclrb] == body variable  cy[54]
//[click] == head variable  cl[16]
//[oclra] == body variable  cy[58]
//[ocdsc] == body variable  cy[68]
//console.log();



////////// *!* Moving Status message from Blog1 to section after header *!* \\\\\\\\\\
/*for(var sE = document.querySelectorAll(".csmco"), sS = 0; sS < sE.length; sS++) { // Source Element
	for(var tE = document.querySelectorAll(".amsfb"), tT = 0; tT < tE.length; tT++) { // Target Element
		tE[tT].insertAdjacentElement("afterbegin", sE[sS]);
	}
}*/
/*for(let sE = document.querySelectorAll(".csmco"), sS = 0; sS < sE.length; sS++) { // Source Element
	for(let tE = document.querySelectorAll(".amsfb"), tT = 0; tT < tE.length; tT++) { // Target Element
		tE[tT].insertAdjacentElement("afterbegin", sE[sS]);
	}
}*/
//(ReadableBasic)//for(let e=document.querySelectorAll(".csmco"),t=0;t<e.length;t++)for(let l=document.querySelectorAll(".amsfb"),n=0;n<l.length;n++)l[n].insertAdjacentElement("afterbegin",e[t]);
////veryveryBasic
for(let e=document.querySelectorAll(cy[80]),t=0;t<e.length;t++)for(let l=document.querySelectorAll(cy[96]),n=0;n<l.length;n++)l[n].insertAdjacentElement(cy[104],e[t]);
//[.csmco] == body variable  cy[80]
//[.amsfb] == body variable  cy[96]
//[afterbegin] == body variable  cy[104]
//console.log();


/////////// *!* ContactForm: Move to inside blog article *!* \\\\\\\\\\\\\
/*document.querySelectorAll(".mtiba").forEach(function(contactForm) {
contactForm.parentElement.firstElementChild.firstElementChild.firstElementChild.lastElementChild.appendChild(contactForm);
});*/
/*document.querySelectorAll(".mtiba").forEach((contactForm)=> {
contactForm.parentElement.firstElementChild.firstElementChild.firstElementChild.lastElementChild.appendChild(contactForm);
});*/
//(ReadableBasic)//document.querySelectorAll(".mtiba").forEach((e=>{e.parentElement.firstElementChild.firstElementChild.firstElementChild.lastElementChild.appendChild(e)}));
////veryveryBasic
document.querySelectorAll(cy[110]).forEach((e=>{e.parentElement.firstElementChild.firstElementChild.firstElementChild.lastElementChild.appendChild(e)}));
//[.mtiba] == body variable  cy[110]
//console.log();


////////// *!* If no content, left side container look same height *!* \\\\\\\\\\
/*for(var sL = document.querySelectorAll(".itind"), s = 0; s < sL.length; s++) {
	sL[s].parentElement.parentElement.parentElement.classList.add("mchls");
	//mchls: main container height look same

}*/
/*for(let sL = document.querySelectorAll(".itind"), s = 0; s < sL.length; s++) {
	sL[s].parentElement.parentElement.parentElement.classList.add("mchls");
	//mchls: main container height look same
}*/
/**/
//(ReadableBasic)//for(let e=document.querySelectorAll(".itind"),t=0;t<e.length;t++)e[t].parentElement.parentElement.parentElement.classList.add("mchls");
////veryveryBasic
for(let e=document.querySelectorAll(cy[123]),t=0;t<e.length;t++)e[t].parentElement.parentElement.parentElement.classList.add(cy[93]);
//[.itind] == body variable  cy[123]
//[mchls] == body variable  cy[93]
//console.log();


////////// *!* Simple Scroll Reveal *!* \\\\\\\\\\
/*document.querySelectorAll(".sfszf").forEach(function(a) {
	new IntersectionObserver(function(entries) {
		entries.forEach(function(i){
			i.isIntersecting ? i.target.classList.add("srado") : i.target.classList.remove("srado");
		});
	}).observe(a);
});*/
////veryveryBasic
document.querySelectorAll(cl[25]+cl[3]).forEach((e=>{new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add(cl[238]):e.target.classList.remove(cl[238])}))})).observe(e)}));
//[.]+[sfszf] == head variable  cl[25]+cl[3]
//[srado] == head variable  cl[238]
//console.log();



/// *!* If current post is featured post, remove its parent 'section' or 'widget' wrapper *!* \\\
/*for (var removeElement = document.querySelectorAll(".fpina"), rf = 0; rf < removeElement.length; rf++) {
	//fpina: featured post is not available
	let thisRemove = removeElement[rf].closest(".section");
	null != thisRemove && thisRemove.remove();
	//removeElement[rf].remove();
}*/
////veryveryBasic
//for(let eee=document.querySelectorAll(cy[73]),l=0;l<eee.length;l++){let ooo=e[l].closest(cy[90]);null!=ooo&&ooo.remove()} //section remove version
////veryBasic
//[.fpina] == body variable  cy[73]
//[.section] == body variable  cy[90]
//console.log();

/*for (var removeElement = document.querySelectorAll(".fpina"), rf = 0; rf < removeElement.length; rf++) {
	//fpina: featured post is not available
	//let thisRemove = removeElement[rf].closest(".section"); //if section, enable this
	//null != thisRemove && thisRemove.remove(); //if section, enable this
	removeElement[rf].remove();  //if widget, this is ok.
	//removeElement[rf].remove();
}*/
/*for (let removeElement = document.querySelectorAll(".fpina"), rf = 0; rf < removeElement.length; rf++) {
	removeElement[rf].remove();
	
}*/
//for(let eeeee=document.querySelectorAll(".fpina"),l=0;l<eeeee.length;l++)eeeee[l].remove();//widget remove version
for(let eeeee=document.querySelectorAll(cy[73]),l=0;l<eeeee.length;l++)eeeee[l].remove();//widget remove version
//[.fpina] == body variable  cy[73]
//console.log();



//////// *!* If popular posts does not have any article, remove the widget *!* \\\\\\\\\\
/*for (let removeElement = document.querySelectorAll(".PopularPosts div[role=feed]"), pp = 0; pp < removeElement.length; pp++) {
	//fpina: featured post is not available
	//let thisRemove = removeElement[r].closest(".section");
	//null != thisRemove && thisRemove.remove();
	//removeElement[r].remove();
    if(removeElement[pp].children.length === 0){
		removeElement[pp].closest(".widget").remove();
    }
}*/
//for(let vvvvvv=document.querySelectorAll(".PopularPosts div[role=feed]"),l=0;l<vvvvvv.length;l++)0===vvvvvv[l].children.length&&vvvvvv[l].closest(".widget").remove();
for(let vvvvvv=document.querySelectorAll(cy[35]),l=0;l<vvvvvv.length;l++)0===vvvvvv[l].children.length&&vvvvvv[l].closest(cy[33]).remove();
//[.PopularPosts div[role=feed]] == body variable  cy[35]
//[.widget] == body variable  cy[33]
//console.log();



//////// *!* Setting height same as width (for self promoting ad) *!* \\\\\\\\\\
/*document.querySelectorAll(".spabt").forEach(function(s){
	s.style.height = s.offsetWidth + "px";
});*/
/*document.querySelectorAll(".spabt").forEach((s)=>{
	s.style.height = s.offsetWidth + "px";
});*/
//document.querySelectorAll(".spabt").forEach((e=>{e.style.height=e.offsetWidth+"px"}));
document.querySelectorAll(cy[61]).forEach((e=>{e.style.height=e.offsetWidth+cl[194]}));
//[.spabt] == body variable  cy[61]
//[px] == head variable  cl[194]
//console.log();



////////////// *!* on-click: copy text to clipboard *!* \\\\\\\\\\\\\\
/*document.querySelectorAll(".totip").forEach(function (i) {
	i.addEventListener("click", function () {
		navigator.clipboard.writeText(i.getAttribute("data-href"));
		i.classList.toggle("tecop");
		
		setTimeout(function(){
            if(i.classList.contains("tecop")){
				i.classList.remove("tecop");
			}
        }, 3000);
		
	});
	document.addEventListener("click", function (event) {
		if (!i.contains(event.target)) {
			i.classList.remove("tecop");
		}
	});
});*/
/*document.querySelectorAll(".totip").forEach((i)=> {
	i.addEventListener("click", ()=> {
		navigator.clipboard.writeText(i.getAttribute("data-href"));
		i.classList.toggle("tecop");
		
		setTimeout(()=>{
            if(i.classList.contains("tecop")){
				i.classList.remove("tecop");
			}
        }, 3000);
		
	});
	document.addEventListener("click", (event)=> {
		if (!i.contains(event.target)) {
			i.classList.remove("tecop");
		}
	});
});*/
//document.querySelectorAll(".totip").forEach((t=>{t.addEventListener("click",(()=>{navigator.clipboard.writeText(t.getAttribute("data-href")),t.classList.toggle("tecop"),setTimeout((()=>{t.classList.contains("tecop")&&t.classList.remove("tecop")}),3e3)})),document.addEventListener("click",(e=>{t.contains(e.target)||t.classList.remove("tecop")}))}));
document.querySelectorAll(cy[8]).forEach((t=>{t.addEventListener(cl[16],(()=>{navigator.clipboard.writeText(t.getAttribute(cy[57])),t.classList.toggle(cy[18]),setTimeout((()=>{t.classList.contains(cy[18])&&t.classList.remove(cy[18])}),3e3)})),document.addEventListener(cl[16],(e=>{t.contains(e.target)||t.classList.remove(cy[18])}))}));
//[.totip] == body variable  cy[8]
//[click] == head variable  cl[16]
//[data-href] == body variable  cy[57]
//[tecop] == body variable  cy[18]
//console.log();


//////////////////// *!* Intersection Observer video loading *!* \\\\\\\\\\\\\\\\\\\\
//yviob: youtube videos intersection observer
/*const yviob = new IntersectionObserver(function (entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting && entry.target.parentNode.classList.contains("vlaba")) {
			//vlaba: video loading animation before appearing
			entry.target.src = entry.target.getAttribute("data-src");
			entry.target.onload = () => {
				entry.target.parentNode.classList.remove("vlaba");
				entry.target.removeAttribute("data-src");
			};
		}
	});
}, {
	root: null,
	rootMargin: "100px", //looking down upto 100px before appearing in viewport. It's good to see when we scrolling down, the image already available to show.
	threshold: 0.05 //animation setting. ".05" means 50%. The animation takes effect when the image is showing at least 50%. ".01" means 10%, ".08" means 80%, ".095" means 95% and "1" means 100%.
});
document.querySelectorAll(".avlfr[data-src]").forEach(i => {
	//avlfr: asynchronous video loading frame
	yviob.observe(i);
	//yviob: youtube videos intersection observer
});*/
/*const yviob = new IntersectionObserver((entries)=> {
	entries.forEach(entry => {
		if (entry.isIntersecting && entry.target.parentNode.classList.contains("vlaba")) {
			//vlaba: video loading animation before appearing
			entry.target.src = entry.target.getAttribute("data-src");
			entry.target.onload = () => {
				entry.target.parentNode.classList.remove("vlaba");
				entry.target.removeAttribute("data-src");
			};
		}
	});
}, {
	root: null,
	rootMargin: "100px", //looking down upto 100px before appearing in viewport. It's good to see when we scrolling down, the image already available to show.
	threshold: 0.05 //animation setting. ".05" means 50%. The animation takes effect when the image is showing at least 50%. ".01" means 10%, ".08" means 80%, ".095" means 95% and "1" means 100%.
});
document.querySelectorAll(".avlfr[data-src]").forEach(i => {
	//avlfr: asynchronous video loading frame
	yviob.observe(i);
	//yviob: youtube videos intersection observer
});*/
//(ReadableBasic)//document.querySelectorAll(".avlfr[data-src]").forEach((t=>{new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&t.target.parentNode.classList.contains("vlaba")&&(t.target.src=t.target.getAttribute("data-src"),t.target.onload=()=>{t.target.parentNode.classList.remove("vlaba"),t.target.removeAttribute("data-src")})}))}),{root:null,rootMargin:"100px",threshold:.05}).observe(t)}));
////veryveryBasic
document.querySelectorAll(cy[25]+cy[43]).forEach((t=>{new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&t.target.parentNode.classList.contains(cy[108])&&(t.target.src=t.target.getAttribute(cl[122]),t.target.onload=()=>{t.target.parentNode.classList.remove(cy[108]),t.target.removeAttribute(cl[122])})}))}),{root:null,rootMargin:cy[100],threshold:.05}).observe(t)}));
//[.avlfr]+[[data-src]] == cy[25]+cy[43]
//[vlaba] == body variable  cy[108]
//[300px] == body variable  cy[100]
//console.log();
//.avlfr[data-src]


//////////////////// *!* Intersection Observer YouTube Video Play Pause *!* \\\\\\\\\\\\\\\\\\\\
/*
const videos = document.querySelectorAll(".aryvf").forEach((q) => {
//aryvf: asynchronous responsive youtube video frame
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				q.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
			} else {
				q.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
			}
		});
	}, {
		threshold: 1
	});
	observer.observe(q);
});
*/
//[] == ? variable  c?[]
//console.log();

/*
if(window.matchMedia("(min-width: 980px)").matches) {
	document.querySelectorAll(".fcop .csmes").forEach(function(i){
		const thisHeight = i.offsetHeight;
		const targetTopMargin = document.querySelector("aside");
		null != targetTopMargin ? (targetTopMargin.style.marginTop = thisHeight + "px") : "";
	});
}
*/
//[] == ? variable  c?[]
//console.log();



////// *!* If no content, left side container look same as right container height *!* \\\\\\
/*for(var sL = document.querySelectorAll(".itind"), s = 0; s < sL.length; s++) {
	sL[s].parentElement.parentElement.classList.add("mchls");
	//mchls: main container height look same
}*/
/*for(let sL = document.querySelectorAll(".itind"), s = 0; s < sL.length; s++) {
	sL[s].parentElement.parentElement.classList.add("mchls");
	//mchls: main container height look same
}*/
//for(let evev=document.querySelectorAll(".itind"),t=0;t<evev.length;t++)evev[t].parentElement.parentElement.classList.add("mchls");
for(let evev=document.querySelectorAll( cy[123]),t=0;t<evev.length;t++)evev[t].parentElement.parentElement.classList.add(cy[93]);
//[.itind] == body variable  cy[123]
//[mchls] == body variable  cy[93]
//console.log();



/////////////// *!* Remove Comment Anchor Link *!* \\\\\\\\\\\\\\\\
/*//for(var commentA = document.querySelectorAll("#comments ol [class*=nt-he] a, #comments li p a"), ca = 0; ca < commentA.length; ca++) {
for(var commentA = document.querySelectorAll("[class*=nt-he] a, [class*=ent-co] a"), ca = 0; ca < commentA.length; ca++) {
	commentA[ca].outerHTML = commentA[ca].innerHTML;
}*/
/*for(let commentA = document.querySelectorAll("[class*=nt-he] a, [class*=ent-co] a"), ca = 0; ca < commentA.length; ca++) {
	commentA[ca].outerHTML = commentA[ca].innerHTML;
}*/
//(ReadableBasic)//for(let e=document.querySelectorAll("[class*=nt-he] a, [class*=ent-co] a"),l=0;l<e.length;l++)e[l].outerHTML=e[l].innerHTML;
////veryveryBasic
for(let e=document.querySelectorAll(cy[112]+cy[129]+cy[119]),l=0;l<e.length;l++)e[l].outerHTML=e[l].innerHTML;
//[[class*=]+[nt-he] a, []+[class*=ent-co] a] == body variable  cy[112]+cy[129]+cy[119]
//console.log();



/////////////// *!* YouTube Video Loading *!* \\\\\\\\\\\\\\\\
//document.querySelectorAll(".pvwtf").forEach(((e)=>{let t=e.dataset.ipvws,o=document.createElement("iframe");o.setAttribute("frameborder","0"),o.setAttribute("allowfullscreen",""),o.setAttribute("srcdoc","<style>*{margin:0;overflow:hidden;padding:0;}html,body{height:100%;}img,svg{bottom:0;margin:auto;position:absolute;top:0;width:100%;}svg{filter:drop-shadow(1px 1px 15px #ffffff);transition:all 500ms ease-in-out;}body:hover svg{filter:drop-shadow(1px 1px 10px #ff0000);transform:scale(1.2);}body:active svg{transform:scale(0.5);}</style><a href='https://www.youtube.com/embed/"+t+"?autoplay=1'><img src='https://img.youtube.com/vi/"+t+"/maxresdefault.jpg' alt='Video Title'><svg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 24 24' fill='none' stroke='#ff1515' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg></a>"),o.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),o.setAttribute("src","https://www.youtube.com/embed/"+t+"?rel=0&showinfo=0&autoplay=1"),e.innerHTML="",e.appendChild(o)}));  
//document.querySelectorAll(".pvwtf").forEach(((e)=>{let t=e.dataset.ipvws,o=document.createElement("iframe");o.setAttribute("frameborder","0"),o.setAttribute("allowfullscreen",""),o.setAttribute("srcdoc","<style>*{margin:0"+lv[3]+"overflow:hidden"+lv[3]+"padding:0"+lv[3]+"}html,body{height:100%"+lv[3]+"}img,svg{bottom:0"+lv[3]+"margin:auto"+lv[3]+"position:absolute"+lv[3]+"top:0"+lv[3]+"width:100%"+lv[3]+"}svg{filter:drop-shadow(1px 1px 15px #ffffff)"+lv[3]+"transition:all 500ms ease-in-out"+lv[3]+"}body:hover svg{filter:drop-shadow(1px 1px 10px #ff0000)"+lv[3]+"transform:scale(1.2)"+lv[3]+"}body:active svg{transform:scale(0.5)"+lv[3]+"}</style><a href='https://www.youtube.com/embed/"+t+"?autoplay=1'><img src='https://img.youtube.com/vi/"+t+"/maxresdefault.jpg' alt='Video Title'><svg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 24 24' fill='none' stroke='#ff1515' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg></a>"),o.setAttribute("allow","accelerometer"+lv[3]+" autoplay"+lv[3]+" clipboard-write"+lv[3]+" encrypted-media"+lv[3]+" gyroscope"+lv[3]+" picture-in-picture"),o.setAttribute("src","https://www.youtube.com/embed/"+t+"?rel=0&showinfo=0&autoplay=1"),e.innerHTML="",e.appendChild(o)}));  
//lv[3]




/////////////// *!* Accordion *!* \\\\\\\\\\\\\\\\
document.querySelectorAll(".aocbu").forEach(trigger => trigger.addEventListener("click", function () {
	//aocbu: accordion open close button
	const thisItem = this.parentElement;
	document.querySelectorAll(".aocsi").forEach(item => {
		//aocsi: accordion open close single item
		if (thisItem == item) {
			thisItem.classList.toggle("aocia");
			//aocia: accordion open close item active
			return;
		}
		item.classList.remove("aocia");
	});
}));



//////////////////////////////////////////////////////////// Apply FooterCredit Starts
//If this element is available, set this style
//themeCopyrightLinkShopName == manuallyEnteredShopName && null != footerSection && themeCopyrightLink == manuallyEnteredCopyrightLink ? footerSection.setAttribute("style", blockLevelStyles) : qB.w(); //If individual styles, displayBlock+unHideItems+positionItems
////veryveryBasic
themeCopyrightLinkShopName == manuallyEnteredShopName && null != footerSection && themeCopyrightLink == manuallyEnteredCopyrightLink ? footerSection.setAttribute(cl[216], blockLevelStyles) : qB.w(); //If individual styles, displayBlock+unHideItems+positionItems
//[Footercredit Applied](1)
//[style] == head variable  cl[216]
//console.log();


//If this element is available, set this style
//themeCopyrightLink == manuallyEnteredCopyrightLink && null != footerHTML23 && themeCopyrightLinkShopName == manuallyEnteredShopName ? footerHTML23.setAttribute("style", blockLevelStyles) : uH.l(); //If individual styles, displayBlock+unHideItems+positionItems
////veryveryBasic
themeCopyrightLink == manuallyEnteredCopyrightLink && null != footerHTML23 && themeCopyrightLinkShopName == manuallyEnteredShopName ? footerHTML23.setAttribute(cl[216], blockLevelStyles) : uH.l(); //If individual styles, displayBlock+unHideItems+positionItems
//[Footercredit Applied](2)
//[style] == head variable  cl[216]
//console.log();


//Replace the cl[190] with your code
////veryveryBasic
//u == typeof themeCopyrightLinkShopName ? yQ.l() : u == typeof manuallyEnteredShopName ? zL.w() : themeCopyrightLinkShopName == manuallyEnteredShopName && themeCopyrightLink == manuallyEnteredCopyrightLink ? "" : sP.y();
u == typeof themeCopyrightLinkShopName ? yQ.l() : u == typeof manuallyEnteredShopName ? zL.w() : themeCopyrightLinkShopName == manuallyEnteredShopName && themeCopyrightLink == manuallyEnteredCopyrightLink ? cl[190] : sP.y();
//[Footercredit Applied](3)
//[""] == head variable (Empty string)  cl[190]
//console.log();


//If this element is available, set this style
//manuallyEnteredCopyrightLink == themeCopyrightLink && null != copyrightParagraph && manuallyEnteredShopName == themeCopyrightLinkShopName ? copyrightParagraph.setAttribute("style", blockLevelStyles) : gV.y(); //If individual styles, displayBlock+unHideItems+positionItems
////veryveryBasic
manuallyEnteredCopyrightLink == themeCopyrightLink && null != copyrightParagraph && manuallyEnteredShopName == themeCopyrightLinkShopName ? copyrightParagraph.setAttribute(cl[216], blockLevelStyles) : gV.y(); //If individual styles, displayBlock+unHideItems+positionItems
//[Footercredit Applied](4)
//[style] == head variable  cl[216]
//console.log();


//If this element is available, set this style
//manuallyEnteredShopName == themeCopyrightLinkShopName && null != copyrightAnchorlink && manuallyEnteredCopyrightLink == themeCopyrightLink ? copyrightAnchorlink.setAttribute("style", inlineStyles) : fW.b(); //If individual styles, displayInline+unHideItems+positionItems
////veryveryBasic
manuallyEnteredShopName == themeCopyrightLinkShopName && null != copyrightAnchorlink && manuallyEnteredCopyrightLink == themeCopyrightLink ? copyrightAnchorlink.setAttribute(cl[216], inlineStyles) : fW.b(); //If individual styles, displayInline+unHideItems+positionItems
//[Footercredit Applied](5)
//[style] == head variable  cl[216]
//console.log();


//Replace the cl[190] with your code
//u == typeof themeCopyrightLink ? hC.l() : u == typeof manuallyEnteredCopyrightLink ? bD.w() : themeCopyrightLink == manuallyEnteredCopyrightLink && themeCopyrightLinkShopName == manuallyEnteredShopName ? "" : cU.y();
////veryveryBasic
u == typeof themeCopyrightLink ? hC.l() : u == typeof manuallyEnteredCopyrightLink ? bD.w() : themeCopyrightLink == manuallyEnteredCopyrightLink && themeCopyrightLinkShopName == manuallyEnteredShopName ? cl[190] : cU.y();
//[Footercredit Applied](6)
//[""] == head variable (Empty string)  cl[190]
//console.log();

//////////////////////////////////////////////////////////// Apply FooterCredit Ends




//////////////////////////////////////////////////////////// Apply License Starts

//[License Apply](1) //Verified on 2023-11-04 08:17 AM
//Usage Type 1:
//headLinkLicenseID == manuallyEnteredHeadLicense && bodyDivLicenseID == manuallyEnteredBodyLicense ? "Put the script here without these left and right double quotes" : "anyString".l();

//Usage Type 2:
//headLinkLicenseID == manuallyEnteredHeadLicense && bodyDivLicenseID == manuallyEnteredBodyLicense ? cl[190] : "anyString".l();
//cl[190] is a empty string. It is just "" without a single whitespace.

//Usage Type 3:
//headLinkLicenseID == manuallyEnteredHeadLicense && bodyDivLicenseID == manuallyEnteredBodyLicense ? y : kG.l();
headLinkLicenseID == manuallyEnteredHeadLicense && bodyDivLicenseID == manuallyEnteredBodyLicense ? y : kG.l();
//y(document.body) is a read only property variable.
//kG is just a string.
//use it inside of any function. It works
//[License Applied](1)
////////////////////////////////////////////////


//[License Apply](2) //Verified on 2023-11-04 10:09 AM
//Usage Type 1:
//manuallyEnteredBodyLicense == manuallyEnteredHeadLicense && headLinkLicenseID == bodyDivLicenseID ? "Put the script here without these left and right double quotes" : "anyString".w();

//Usage Type 2:
//manuallyEnteredBodyLicense == manuallyEnteredHeadLicense && headLinkLicenseID == bodyDivLicenseID ? cl[198] : "anyString".w();
//cl[198] is a single whitespace string.

//Usage Type 3:
//manuallyEnteredBodyLicense == manuallyEnteredHeadLicense && headLinkLicenseID == bodyDivLicenseID ? l : aY.w();
manuallyEnteredBodyLicense == manuallyEnteredHeadLicense && headLinkLicenseID == bodyDivLicenseID ? l : aY.w();
//l(document.documentElement) is a read only property variable.
//aY is just a string.
//use it inside of any function. It works
//[License Applied](2)
////////////////////////////////////////////////


//[License Apply](3) //Verified on 2023-11-04 10:22 AM
//Usage Type 1:
//bodyDivLicenseID == headLinkLicenseID && manuallyEnteredBodyLicense == manuallyEnteredHeadLicense ? "Put the script here without these left and right double quotes" : "anyString".y();

//Usage Type 2:
//bodyDivLicenseID == headLinkLicenseID && manuallyEnteredBodyLicense == manuallyEnteredHeadLicense ? zL : "anyString".y();
//zL is a string. (zL is just a placeholder here)

//Usage Type 3:
//bodyDivLicenseID == headLinkLicenseID && manuallyEnteredBodyLicense == manuallyEnteredHeadLicense ? fI : fI.y();
bodyDivLicenseID == headLinkLicenseID && manuallyEnteredBodyLicense == manuallyEnteredHeadLicense ? fI : fI.y();
//fI is a string. (fI is just a placeholder here)
//[License Applied](3)
////////////////////////////////////////////////


//[License Apply](4) //Verified on 2023-11-04 10:29 AM
//Usage Type 1:
//manuallyEnteredHeadLicense == manuallyEnteredBodyLicense && bodyDivLicenseID == headLinkLicenseID ? "Put the script here without these left and right double quotes" : "anyString".b();

//Usage Type 2:
//manuallyEnteredHeadLicense == manuallyEnteredBodyLicense && bodyDivLicenseID == headLinkLicenseID ? kO : "anyString".b();
//kO is a string. (kO is just a placeholder here)

//Usage Type 3:
//manuallyEnteredHeadLicense == manuallyEnteredBodyLicense && bodyDivLicenseID == headLinkLicenseID ? yQ : yQ.b();
manuallyEnteredHeadLicense == manuallyEnteredBodyLicense && bodyDivLicenseID == headLinkLicenseID ? yQ : yQ.b();
//yQ is a string. (yQ is just a placeholder here)
//[License Applied](4)
////////////////////////////////////////////////


//[License Apply](5) //Verified on 2023-11-04 10:36 AM
//Usage Type 1:
//headLinkLicenseID == manuallyEnteredBodyLicense && manuallyEnteredHeadLicense == bodyDivLicenseID ? "Put the script here without these left and right double quotes" : "anyString".d();

//Usage Type 2:
//headLinkLicenseID == manuallyEnteredBodyLicense && manuallyEnteredHeadLicense == bodyDivLicenseID ? "" : "anyString".d();
//tR is a string. (tR is just a placeholder here)

//Usage Type 3:
//headLinkLicenseID == manuallyEnteredBodyLicense && manuallyEnteredHeadLicense == bodyDivLicenseID ? oW : oW.d();
headLinkLicenseID == manuallyEnteredBodyLicense && manuallyEnteredHeadLicense == bodyDivLicenseID ? oW : oW.d();
//oW is a string. (oW is just a placeholder here)
//[License Applied](5)
////////////////////////////////////////////////


//[License Apply](6) //Verified on 2023-11-04 10:58 AM
//Usage Type 1:
//bodyDivLicenseID == manuallyEnteredHeadLicense && manuallyEnteredBodyLicense == headLinkLicenseID ? "Put the script here without these left and right double quotes" : "anyString".h();

//Usage Type 2:
//bodyDivLicenseID == manuallyEnteredHeadLicense && manuallyEnteredBodyLicense == headLinkLicenseID ? rP : "anyString".h();
//rP is a string. (rP is just a placeholder here)

//Usage Type 3:
//bodyDivLicenseID == manuallyEnteredHeadLicense && manuallyEnteredBodyLicense == headLinkLicenseID ? aQ : aQ.h();
bodyDivLicenseID == manuallyEnteredHeadLicense && manuallyEnteredBodyLicense == headLinkLicenseID ? aQ : aQ.h();
//aQ is a string. (aQ is just a placeholder here)
//[License Applied](6)
////////////////////////////////////////////////


//[License Apply](7) //Verified on 2023-11-04 11:05 AM
//Usage Type 1:
//manuallyEnteredBodyLicense == headLinkLicenseID && bodyDivLicenseID == manuallyEnteredHeadLicense ? "Put the script here without these left and right double quotes" : "anyString".l();

//Usage Type 2:
//manuallyEnteredBodyLicense == headLinkLicenseID && bodyDivLicenseID == manuallyEnteredHeadLicense ? sA : "anyString".l();
//sA is a string. (sA is just a placeholder here)

//Usage Type 3:
//manuallyEnteredBodyLicense == headLinkLicenseID && bodyDivLicenseID == manuallyEnteredHeadLicense ? xE : xE.l();
manuallyEnteredBodyLicense == headLinkLicenseID && bodyDivLicenseID == manuallyEnteredHeadLicense ? xE : xE.l();
//xE is a string. (xE is just a placeholder here)
//[License Applied](7)
////////////////////////////////////////////////

//////////////////////////////////////////////////////////// Apply License Ends




/////////// *!* Copyright Year Update *!* \\\\\\\\\\\\\
/*document.querySelectorAll('.cocts p>span:nth-child(1)').forEach(function(i){
	i.innerHTML = new Date().getFullYear();
});*/
/*document.querySelectorAll('.cocts p>span:nth-child(1)').forEach((i) =>{
	i.innerHTML = new Date().getFullYear();
});*/
//document.querySelectorAll(".cocts p>span:nth-child(1)").forEach((e=>{e.innerHTML=(new Date).getFullYear()}));
//(ReadableBasic)//document.querySelectorAll(".cocts p>span:nth-child(1)").forEach((e=>{e.innerHTML=(new Date).getFullYear()}));
////veryveryBasic
document.querySelectorAll(cy[71]+cy[60]+cy[82]+cy[87]).forEach((e=>{e.innerHTML=(new Date).getFullYear()}));
//[.cocts]+[ p>span]+[:nth-child]+[(1)] == body variable  cy[71]+cy[60]+cy[82]+cy[87]
//console.log();


/////////// *!* Show Domain Name Only *!* \\\\\\\\\\\\\
/*document.querySelectorAll(".cocts p>span:nth-child(2)").forEach(function(i){ //site url name
	let thisText = i.innerHTML;
	i.innerHTML = thisText.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
});*/
/*document.querySelectorAll(".cocts p>span:nth-child(2)").forEach((i) => { //site url name
	let thisText = i.innerHTML;
	i.innerHTML = thisText.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
});*/
//document.querySelectorAll(".cocts p>span:nth-child(2)").forEach((e=>{let t=e.innerHTML;e.innerHTML=t.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"").split("/")[0]}));
//(ReadableBasic)//document.querySelectorAll(".cocts p>span:nth-child(2)").forEach((e=>{let t=e.innerHTML;e.innerHTML=t.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"").split("/")[0]}));
////veryveryBasic
document.querySelectorAll(cy[71]+cy[60]+cy[82]+cy[102]).forEach((e=>{let t=e.innerHTML;e.innerHTML=t.replace(removeHttps,cl[190]).split(cl[67])[0]}));
//[.cocts]+[ p>span]+[:nth-child]+[(2)] == body variable  cy[71]+cy[60]+cy[82]+cy[102]
//[/] == head variable  cl[67]
//console.log();





//////////// *!* Onclick change the current theme mode *!* \\\\\\\\\\\\
/*document.querySelectorAll(".daoli").forEach(function(thisButton) {//.daoli: dark or light
    thisButton.addEventListener("click", function() {
        document.documentElement.classList.contains("reamo") ? (document.documentElement.classList.add("surmo"), document.documentElement.classList.remove("reamo"), localStorage.setItem("pcsch", "light")) : (document.documentElement.classList.add("reamo"), document.documentElement.classList.remove("surmo"), localStorage.setItem("pcsch", "dark"));
    });
});*/
/*document.querySelectorAll(".daoli").forEach((thisButton) => {//.daoli: dark or light
    thisButton.addEventListener("click", () => {
        document.documentElement.classList.contains("reamo") ? (document.documentElement.classList.add("surmo"), document.documentElement.classList.remove("reamo"), localStorage.setItem("pcsch", "light")) : (document.documentElement.classList.add("reamo"), document.documentElement.classList.remove("surmo"), localStorage.setItem("pcsch", "dark"));
    });
});*/
//document.querySelectorAll(".daoli").forEach((e=>{e.addEventListener("click",(()=>{lc.contains("reamo")?(lc.add("surmo"),lc.remove("reamo"),localStorage.setItem("pcsch","light")):(lc.add("reamo"),lc.remove("surmo"),localStorage.setItem("pcsch","dark"))}))}));
//(ReadableBasic)//document.querySelectorAll(".daoli").forEach((e=>{e.addEventListener("click",(()=>{lc.contains("reamo")?(lc.add("surmo"),lc.remove("reamo"),localStorage.setItem("pcsch","light")):(lc.add("reamo"),lc.remove("surmo"),localStorage.setItem("pcsch","dark"))}))}));
////veryveryBasic
document.querySelectorAll(cl[25]+cl[104]).forEach((e=>{e.addEventListener(cl[16],(()=>{lc.contains(cl[73])?(lc.add(cl[37]),lc.remove(cl[73]),localStorage.setItem(cl[23],cl[49])):(lc.add(cl[73]),lc.remove(cl[37]),localStorage.setItem(cl[23],cl[180]))}))}));
//[.]+[daoli] == head variable  cl[25]+cl[104]
//[click] == head variable  cl[16]
//[reamo] == head variable  cl[73]
//[surmo] == head variable  cl[37]
//[pcsch] == head variable  cl[23]
//[light] == head variable  cl[49]
//[dark] == head variable  cl[180]
//console.log();


////////////////// *!* rfser: reload from server (Reload) *!* \\\\\\\\\\\\\\\\\\\\
/*document.querySelectorAll(".rfser").forEach(function(i){ //.rfser: reload from server
    i.addEventListener("click", function() {
        document.location.reload(true);
    });
});*/
/*document.querySelectorAll(".rfser").forEach((i) => { //.rfser: reload from server
    i.addEventListener("click", () => {
        document.location.reload(true);
    });
});*/
//document.querySelectorAll(".rfser").forEach((e=>{e.addEventListener("click",(()=>{document.location.reload(!0)}))}));
//(ReadableBasic)//document.querySelectorAll(".rfser").forEach((e=>{e.addEventListener("click",(()=>{document.location.reload(!0)}))}));
////veryveryBasic
document.querySelectorAll(cl[25]+cl[72]).forEach((e=>{e.addEventListener(cl[16],(()=>{document.location.reload(!0)}))}));
//[.]+[rfser] == head variable  cl[25]+cl[72]
//[click] == head variable  cl[16]
//console.log();



//////////////// *!* clsar: clear localStorage and reload *!* \\\\\\\\\\\\\\\\
/*document.querySelectorAll(".clsar").forEach(function(i){ //clsar: clear localStorage and reload
    i.addEventListener("click", function(){
        localStorage.clear();
        document.location.reload(true);
    });
});*/
/*document.querySelectorAll(".clsar").forEach((i) =>{ //clsar: clear localStorage and reload
    i.addEventListener("click", () => {
        localStorage.clear();
        document.location.reload(true);
    });
});*/
//document.querySelectorAll(".clsar").forEach((e=>{e.addEventListener("click",(()=>{localStorage.clear(),document.location.reload(!0)}))}));
//(ReadableBasic)//document.querySelectorAll(".clsar").forEach((e=>{e.addEventListener("click",(()=>{localStorage.clear(),document.location.reload(!0)}))}));
////veryveryBasic
document.querySelectorAll(cl[25]+cl[94]).forEach((e=>{e.addEventListener(cl[16],(()=>{localStorage.clear(),document.location.reload(!0)}))}));
// [.]+[clsar] == head variable  cl[25]+cl[94]
// [click] == head variable  cl[16]
//console.log();


//////////// *!* Full Screen *!* \\\\\\\\\\\\
/*var elem = document.documentElement;
function exitHandler() {
	if (!document.fullScreen && !document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
		document.querySelectorAll(".tofsm>svg").forEach(function(i) {
			i.parentElement.classList.contains("fsmac") && i.parentElement.classList.remove("fsmac");
		});
	}
}
document.querySelectorAll(".tofsm>svg:nth-child(1)").forEach(function(thisButton) {
	thisButton.addEventListener("click", function() {
		thisButton.parentElement.classList.toggle("fsmac");
		elem.requestFullscreen ? elem.requestFullscreen() : elem.mozRequestFullScreen ? elem.mozRequestFullScreen() : elem.webkitRequestFullscreen ? elem.webkitRequestFullscreen() : elem.msRequestFullscreen && elem.msRequestFullscreen();
	});
});
document.querySelectorAll(".tofsm>svg:nth-child(2)").forEach(function(thisButton) {
	thisButton.addEventListener("click", function() {
		thisButton.parentElement.classList.toggle("fsmac");
		document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
	});
});
if (document.addEventListener) {
	document.addEventListener('fullscreenchange', exitHandler, false);
	document.addEventListener('mozfullscreenchange', exitHandler, false);
	document.addEventListener('MSFullscreenChange', exitHandler, false);
	document.addEventListener('webkitfullscreenchange', exitHandler, false);
}*/
/*const elem = document.documentElement;
const exitHandler = () => {
	if (!document.fullScreen && !document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
		document.querySelectorAll(".tofsm>svg").forEach((i) => {
			i.parentElement.classList.contains("fsmac") && i.parentElement.classList.remove("fsmac");
		});
	}
}
document.querySelectorAll(".tofsm>svg:nth-child(1)").forEach((thisButton)=> {
	thisButton.addEventListener("click", ()=> {
		thisButton.parentElement.classList.toggle("fsmac");
		elem.requestFullscreen ? elem.requestFullscreen() : elem.mozRequestFullScreen ? elem.mozRequestFullScreen() : elem.webkitRequestFullscreen ? elem.webkitRequestFullscreen() : elem.msRequestFullscreen && elem.msRequestFullscreen();
	});
});
document.querySelectorAll(".tofsm>svg:nth-child(2)").forEach((thisButton) => {
	thisButton.addEventListener("click", () => {
		thisButton.parentElement.classList.toggle("fsmac");
		document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
	});
});
if (document.addEventListener) {
	document.addEventListener('fullscreenchange', exitHandler, false);
	document.addEventListener('mozfullscreenchange', exitHandler, false);
	document.addEventListener('MSFullscreenChange', exitHandler, false);
	document.addEventListener('webkitfullscreenchange', exitHandler, false);
}*/
/*(()=>{
const e=document.documentElement,n=()=>{document.fullScreen||document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||document.querySelectorAll(".tofsm>svg").forEach((e=>{e.parentElement.classList.contains("fsmac")&&e.parentElement.classList.remove("fsmac")}))};document.querySelectorAll(".tofsm>svg:nth-child(1)").forEach((n=>{n.addEventListener("click",(()=>{n.parentElement.classList.toggle("fsmac"),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}))})),document.querySelectorAll(".tofsm>svg:nth-child(2)").forEach((e=>{e.addEventListener("click",(()=>{e.parentElement.classList.toggle("fsmac"),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}))})),document.addEventListener&&(document.addEventListener("fullscreenchange",n,!1),document.addEventListener("mozfullscreenchange",n,!1),document.addEventListener("MSFullscreenChange",n,!1),document.addEventListener("webkitfullscreenchange",n,!1));
})();*/
/*
.tofsm>svg 					== [.tofsm] [>svg]
.tofsm>svg:nth-child(1)		== [.tofsm] [>svg:] [nth-child(1)]
.tofsm>svg:nth-child(2)		== [.tofsm] [>svg:] [nth-child(2)] //First two parts are same. Take last part only.
*/

//const l = document.documentElement; [Do this before using tersor compiler]
//(ReadableBasic)//
/*(()=>{
const e=document.documentElement,n=()=>{document.fullScreen||document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||document.querySelectorAll(".tofsm>svg").forEach((e=>{e.parentElement.classList.contains("fsmac")&&e.parentElement.classList.remove("fsmac")}))};document.querySelectorAll(".tofsm>svg:nth-child(1)").forEach((n=>{n.addEventListener("click",(()=>{n.parentElement.classList.toggle("fsmac"),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}))})),document.querySelectorAll(".tofsm>svg:nth-child(2)").forEach((e=>{e.addEventListener("click",(()=>{e.parentElement.classList.toggle("fsmac"),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}))})),document.addEventListener&&(document.addEventListener("fullscreenchange",n,!1),document.addEventListener("mozfullscreenchange",n,!1),document.addEventListener("MSFullscreenChange",n,!1),document.addEventListener("webkitfullscreenchange",n,!1));
})();*/
//(()=>{const e=document.documentElement,n=()=>{document.fullScreen||document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||document.querySelectorAll(".tofsm>svg").forEach((e=>{e.parentElement.classList.contains("fsmac")&&e.parentElement.classList.remove("fsmac")}))};document.querySelectorAll(".tofsm>svg:nth-child(1)").forEach((n=>{n.addEventListener("click",(()=>{n.parentElement.classList.toggle("fsmac"),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}))})),document.querySelectorAll(".tofsm>svg:nth-child(2)").forEach((e=>{e.addEventListener("click",(()=>{e.parentElement.classList.toggle("fsmac"),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}))})),document.addEventListener&&(document.addEventListener("fullscreenchange",n,!1),document.addEventListener("mozfullscreenchange",n,!1),document.addEventListener("MSFullscreenChange",n,!1),document.addEventListener("webkitfullscreenchange",n,!1));})();
(()=>{const e=document.documentElement,n=()=>{document.fullScreen||document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||document.querySelectorAll(cy[106]+cy[89]).forEach((e=>{e.parentElement.classList.contains(cy[99])&&e.parentElement.classList.remove(cy[99])}))};document.querySelectorAll(cy[106]+cy[89]+cy[82]+cy[87]).forEach((n=>{n.addEventListener(cl[16],(()=>{n.parentElement.classList.toggle(cy[99]),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}))})),document.querySelectorAll(cy[106]+cy[89]+cy[82]+cy[102]).forEach((e=>{e.addEventListener(cl[16],(()=>{e.parentElement.classList.toggle(cy[99]),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}))})),document.addEventListener&&(document.addEventListener(cy[113],n,!1),document.addEventListener(cy[107],n,!1),document.addEventListener(cy[121],n,!1),document.addEventListener(cy[130],n,!1));})();
//[.tofsm]+[>svg] == body variable  cy[106]+cy[89]
//[fsmac] == body variable  cy[99]
//[.tofsm]+[>svg]+[:nth-child]+[(1)] == body variable  cy[106]+cy[89]+cy[82]+cy[87]   .tofsm>svg:nth-child(1)
//[click] == head variable  cl[16]
//[.tofsm]+[>svg]+[:nth-child]+[(2)] == body variable  cy[106]+cy[89]+cy[82]+cy[102]
//[webkitfullscreenchange] == body variable  cy[130]
//[mozfullscreenchange] == body variable  cy[107]
//[fullscreenchange] == body variable  cy[113]
//[MSFullscreenChange] == body variable  cy[121]


///////////////// *!* Reload when orientation change *!* \\\\\\\\\\\\\\\\\\\
/*screen.orientation.addEventListener("change", function(e) {
    window.location.reload(true); //reload the page from the server
});*/
/*screen.orientation.addEventListener("change", (e)=> {
    window.location.reload(true); //reload the page from the server
});*/
/*screen.orientation.addEventListener("change", ()=> {
    window.location.reload(true); //reload the page from the server
});*/
//(ReadableBasic)//screen.orientation.addEventListener("change",(()=>{window.location.reload(!0)}));
////veryveryBasic
screen.orientation.addEventListener(cl[86],(()=>{window.location.reload(!0)}));
//[change] == head variable  cl[86]
//console.log();


///////////////// *!* Instant Page v5.2.0 *!* \\\\\\\\\\\\\\\\\\\
/*(()=>{//Untouched
let t,e,n,o,i,a=null,s=65,c=new Set;const r=1111;function d(t){o=performance.now();const e=t.target.closest("a");m(e)&&p(e.href,"high")}function u(t){if(performance.now()-o<r)return;if(!("closest"in t.target))return;const e=t.target.closest("a");m(e)&&(e.addEventListener("mouseout",f,{passive:!0}),i=setTimeout(()=>{p(e.href,"high"),i=void 0},s))}function l(t){const e=t.target.closest("a");m(e)&&p(e.href,"high")}function f(t){t.relatedTarget&&t.target.closest("a")==t.relatedTarget.closest("a")||i&&(clearTimeout(i),i=void 0)}function h(t){if(performance.now()-o<r)return;const e=t.target.closest("a");if(t.which>1||t.metaKey||t.ctrlKey)return;if(!e)return;e.addEventListener("click",function(t){1337!=t.detail&&t.preventDefault()},{capture:!0,passive:!1,once:!0});const n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337});e.dispatchEvent(n)}function m(o){if(o&&o.href&&(!n||"instant"in o.dataset)){if(o.origin!=location.origin){if(!(e||"instant"in o.dataset)||!a)return}if(["http:","https:"].includes(o.protocol)&&("http:"!=o.protocol||"https:"!=location.protocol)&&(t||!o.search||"instant"in o.dataset)&&!(o.hash&&o.pathname+o.search==location.pathname+location.search||"noInstant"in o.dataset))return!0}}function p(t,e="auto"){if(c.has(t))return;const n=document.createElement("link");n.rel="prefetch",n.href=t,n.fetchPriority=e,n.as="document",document.head.appendChild(n),c.add(t)}!function(){if(!document.createElement("link").relList.supports("prefetch"))return;const o="instantVaryAccept"in document.body.dataset||"Shopify"in window,i=navigator.userAgent.indexOf("Chrome/");i>-1&&(a=parseInt(navigator.userAgent.substring(i+"Chrome/".length)));if(o&&a&&a<110)return;const c="instantMousedownShortcut"in document.body.dataset;t="instantAllowQueryString"in document.body.dataset,e="instantAllowExternalLinks"in document.body.dataset,n="instantWhitelist"in document.body.dataset;const r={capture:!0,passive:!0};let f=!1,v=!1,g=!1;if("instantIntensity"in document.body.dataset){const t=document.body.dataset.instantIntensity;if(t.startsWith("mousedown"))f=!0,"mousedown-only"==t&&(v=!0);else if(t.startsWith("viewport")){const e=navigator.connection&&navigator.connection.saveData,n=navigator.connection&&navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g");e||n||("viewport"==t?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(g=!0):"viewport-all"==t&&(g=!0))}else{const e=parseInt(t);isNaN(e)||(s=e)}}v||document.addEventListener("touchstart",d,r);f?c||document.addEventListener("mousedown",l,r):document.addEventListener("mouseover",u,r);c&&document.addEventListener("mousedown",h,r);if(g){let t=window.requestIdleCallback;t||(t=(t=>{t()})),t(function(){const t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const n=e.target;t.unobserve(n),p(n.href)}})});document.querySelectorAll("a").forEach(e=>{m(e)&&t.observe(e)})},{timeout:1500})}}()
})();*/
/*(()=>{ //String customized version
let t,e,n,o,i,a=null,s=65,c=new Set;const r=1111;function d(t){o=performance.now();const e=t.target.closest("a");m(e)&&p(e.href,"high")}function u(t){if(performance.now()-o<r)return;if(!("closest"in t.target))return;const e=t.target.closest("a");m(e)&&(e.addEventListener("mouseout",f,{passive:!0}),i=setTimeout(()=>{p(e.href,"high"),i=void 0},s))}function l(t){const e=t.target.closest("a");m(e)&&p(e.href,"high")}function f(t){t.relatedTarget&&t.target.closest("a")==t.relatedTarget.closest("a")||i&&(clearTimeout(i),i=void 0)}function h(t){if(performance.now()-o<r)return;const e=t.target.closest("a");if(t.which>1||t.metaKey||t.ctrlKey)return;if(!e)return;e.addEventListener("click",function(t){1337!=t.detail&&t.preventDefault()},{capture:!0,passive:!1,once:!0});const n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337});e.dispatchEvent(n)}function m(o){if(o&&o.href&&(!n||"issic"in o.dataset)){if(o.origin!=location.origin){if(!(e||"issic"in o.dataset)||!a)return}if(["http:","https:"].includes(o.protocol)&&("http:"!=o.protocol||"https:"!=location.protocol)&&(t||!o.search||"issic"in o.dataset)&&!(o.hash&&o.pathname+o.search==location.pathname+location.search||"ifsic"in o.dataset))return!0}}function p(t,e="auto"){if(c.has(t))return;const n=document.createElement("link");n.rel="prefetch",n.href=t,n.fetchPriority=e,n.as="document",document.head.appendChild(n),c.add(t)}!function(){if(!document.createElement("link").relList.supports("prefetch"))return;const o="iosnc"in document.body.dataset||"Shopify"in window,i=navigator.userAgent.indexOf("Chrome/");i>-1&&(a=parseInt(navigator.userAgent.substring(i+"Chrome/".length)));if(o&&a&&a<110)return;const c="itswc"in document.body.dataset;t="sqalq"in document.body.dataset,e="ifsoc"in document.body.dataset,n="itshc"in document.body.dataset;const r={capture:!0,passive:!0};let f=!1,v=!1,g=!1;if("lqapo"in document.body.dataset){const t=document.body.dataset.lqapo;if(t.startsWith("msdn"))f=!0,"msdn-o"==t&&(v=!0);else if(t.startsWith("isol")){const e=navigator.connection&&navigator.connection.saveData,n=navigator.connection&&navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g");e||n||("isol"==t?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(g=!0):"isol-t"==t&&(g=!0))}else{const e=parseInt(t);isNaN(e)||(s=e)}}v||document.addEventListener("touchstart",d,r);f?c||document.addEventListener("mousedown",l,r):document.addEventListener("mouseover",u,r);c&&document.addEventListener("mousedown",h,r);if(g){let t=window.requestIdleCallback;t||(t=(t=>{t()})),t(function(){const t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const n=e.target;t.unobserve(n),p(n.href)}})});document.querySelectorAll("a").forEach(e=>{m(e)&&t.observe(e)})},{timeout:1500})}}();
})();*/
/*(()=>{ //String customized version
let t,e,n,o,i,a=null,s=65,c=new Set;const r=1111;function d(t){o=performance.now();const e=t.target.closest("a");m(e)&&p(e.href,"high")}function u(t){if(performance.now()-o<r)return;if(!("closest"in t.target))return;const e=t.target.closest("a");m(e)&&(e.addEventListener("mouseout",f,{passive:!0}),i=setTimeout(()=>{p(e.href,"high"),i=void 0},s))}function l(t){const e=t.target.closest("a");m(e)&&p(e.href,"high")}function f(t){t.relatedTarget&&t.target.closest("a")==t.relatedTarget.closest("a")||i&&(clearTimeout(i),i=void 0)}function h(t){if(performance.now()-o<r)return;const e=t.target.closest("a");if(t.which>1||t.metaKey||t.ctrlKey)return;if(!e)return;e.addEventListener("click",function(t){1337!=t.detail&&t.preventDefault()},{capture:!0,passive:!1,once:!0});const n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337});e.dispatchEvent(n)}function m(o){if(o&&o.href&&(!n||"issic"in o.dataset)){if(o.origin!=location.origin){if(!(e||"issic"in o.dataset)||!a)return}if(["http:","https:"].includes(o.protocol)&&("http:"!=o.protocol||"https:"!=location.protocol)&&(t||!o.search||"issic"in o.dataset)&&!(o.hash&&o.pathname+o.search==location.pathname+location.search||"ifsic"in o.dataset))return!0}}function p(t,e="auto"){if(c.has(t))return;const n=document.createElement("link");n.rel="prefetch",n.href=t,n.fetchPriority=e,n.as="document",document.head.appendChild(n),c.add(t)}!function(){if(!document.createElement("link").relList.supports("prefetch"))return;const o="iosnc"in document.body.dataset||"Shopify"in window,i=navigator.userAgent.indexOf("Chrome/");i>-1&&(a=parseInt(navigator.userAgent.substring(i+"Chrome/".length)));if(o&&a&&a<110)return;const c="itswc"in document.body.dataset;t="sqalq"in document.body.dataset,e="ifsoc"in document.body.dataset,n="itshc"in document.body.dataset;const r={capture:!0,passive:!0};let f=!1,v=!1,g=!1;if("lqapo"in document.body.dataset){const t=document.body.dataset.lqapo;if(t.startsWith("msdn"))f=!0,"msdn-o"==t&&(v=!0);else if(t.startsWith("isol")){const e=navigator.connection&&navigator.connection.saveData,n=navigator.connection&&navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g");e||n||("isol"==t?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(g=!0):"isol-t"==t&&(g=!0))}else{const e=parseInt(t);isNaN(e)||(s=e)}}v||document.addEventListener("touchstart",d,r);f?c||document.addEventListener("mousedown",l,r):document.addEventListener("mouseover",u,r);c&&document.addEventListener("mousedown",h,r);if(g){let t=window.requestIdleCallback;t||(t=(t=>{t()})),t(function(){const t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const n=e.target;t.unobserve(n),p(n.href)}})});document.querySelectorAll("a").forEach(e=>{m(e)&&t.observe(e)})},{timeout:1500})}}();
})();*/
/*(()=>{ //String replaced version
let t,e,n,o,i,a=null,s=65,c=new Set;const r=1111;function d(t){o=performance.now();const e=t.target.closest(cl[231]);m(e)&&p(e.href,cl[20])}function u(t){if(performance.now()-o<r)return;if(!(cl[100]in t.target))return;const e=t.target.closest(cl[231]);m(e)&&(e.addEventListener(cl[81],f,{passive:!0}),i=setTimeout(()=>{p(e.href,cl[20]),i=void 0},s))}function l(t){const e=t.target.closest(cl[231]);m(e)&&p(e.href,cl[20])}function f(t){t.relatedTarget&&t.target.closest(cl[231])==t.relatedTarget.closest(cl[231])||i&&(clearTimeout(i),i=void 0)}function h(t){if(performance.now()-o<r)return;const e=t.target.closest(cl[231]);if(t.which>1||t.metaKey||t.ctrlKey)return;if(!e)return;e.addEventListener(cl[82],function(t){1337!=t.detail&&t.preventDefault()},{capture:!0,passive:!1,once:!0});const n=new MouseEvent(cl[82],{view:window,bubbles:!0,cancelable:!1,detail:1337});e.dispatchEvent(n)}function m(o){if(o&&o.href&&(!n||cl[203]in o.dataset)){if(o.origin!=location.origin){if(!(e||cl[203]in o.dataset)||!a)return}if([cl[17],cl[35]].includes(o.protocol)&&(cl[17]!=o.protocol||cl[35]!=location.protocol)&&(t||!o.search||cl[203]in o.dataset)&&!(o.hash&&o.pathname+o.search==location.pathname+location.search||cl[126]in o.dataset))return!0}}function p(t,e=cl[117]){if(c.has(t))return;const n=document.createElement(cl[39]);n.rel=cl[19],n.href=t,n.fetchPriority=e,n.as=cl[0],document.head.appendChild(n),c.add(t)}!function(){if(!document.createElement(cl[39]).relList.supports(cl[19]))return;const o=cl[13]in document.body.dataset||Shopify in window,i=navigator.userAgent.indexOf(Chrome);i>-1&&(a=parseInt(navigator.userAgent.substring(i+Chrome.length)));if(o&&a&&a<110)return;const c=cl[1]in document.body.dataset;t=cl[14]in document.body.dataset,e=cl[7]in document.body.dataset,n=cl[6]in document.body.dataset;const r={capture:!0,passive:!0};let f=!1,v=!1,g=!1;if(cl[4]in document.body.dataset){const t=document.body.dataset.lqapo;if(t.startsWith(cl[128]))f=!0,cl[119]==t&&(v=!0);else if(t.startsWith(cl[115])){const e=navigator.connection&&navigator.connection.saveData,n=navigator.connection&&navigator.connection.effectiveType&&navigator.connection.effectiveType.includes(cl[124]);e||n||(cl[115]==t?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(g=!0):cl[161]==t&&(g=!0))}else{const e=parseInt(t);isNaN(e)||(s=e)}}v||document.addEventListener(cl[33],d,r);f?c||document.addEventListener(cl[101],l,r):document.addEventListener(cl[54],u,r);c&&document.addEventListener(cl[101],h,r);if(g){let t=window.requestIdleCallback;t||(t=(t=>{t()})),t(function(){const t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const n=e.target;t.unobserve(n),p(n.href)}})});document.querySelectorAll(cl[231]).forEach(e=>{m(e)&&t.observe(e)})},{timeout:1500})}}();
})();*/
(()=>{ //String shrinked version
let t,e,n,o,i,a=null,s=65,c=new Set;const r=1111;function z(t){o=performance.now();const e=t.target.closest(cl[231]);m(e)&&p(e.href,cl[20])}function u(t){if(performance.now()-o<r)return;if(!(cl[100]in t.target))return;const e=t.target.closest(cl[231]);m(e)&&(e.addEventListener(cl[81],f,{passive:!0}),i=setTimeout(()=>{p(e.href,cl[20]),i=void 0},s))}function l(t){const e=t.target.closest(cl[231]);m(e)&&p(e.href,cl[20])}function f(t){t.relatedTarget&&t.target.closest(cl[231])==t.relatedTarget.closest(cl[231])||i&&(clearTimeout(i),i=void 0)}function h(t){if(performance.now()-o<r)return;const e=t.target.closest(cl[231]);if(t.which>1||t.metaKey||t.ctrlKey)return;if(!e)return;e.addEventListener(cl[82],function(t){1337!=t.detail&&t.preventDefault()},{capture:!0,passive:!1,once:!0});const n=new MouseEvent(cl[82],{view:window,bubbles:!0,cancelable:!1,detail:1337});e.dispatchEvent(n)}function m(o){if(o&&o.href&&(!n||cl[203]in o.dataset)){if(o.origin!=location.origin){if(!(e||cl[203]in o.dataset)||!a)return}if([cl[17],cl[35]].includes(o.protocol)&&(cl[17]!=o.protocol||cl[35]!=location.protocol)&&(t||!o.search||cl[203]in o.dataset)&&!(o.hash&&o.pathname+o.search==location.pathname+location.search||cl[126]in o.dataset))return!0}}function p(t,e=cl[117]){if(c.has(t))return;const n=document.createElement(cl[39]);n.rel=cl[19],n.href=t,n.fetchPriority=e,n.as=cl[0],d.appendChild(n),c.add(t)}!function(){if(!document.createElement(cl[39]).relList.supports(cl[19]))return;const o=cl[13]in yd||Shopify in window,i=navigator.userAgent.indexOf(Chrome);i>-1&&(a=parseInt(navigator.userAgent.substring(i+Chrome.length)));if(o&&a&&a<110)return;const c=cl[1]in yd;t=cl[14]in yd,e=cl[7]in yd,n=cl[6]in yd;const r={capture:!0,passive:!0};let f=!1,v=!1,g=!1;if(cl[4]in yd){const t=yd.lqapo;if(t.startsWith(cl[128]))f=!0,cl[119]==t&&(v=!0);else if(t.startsWith(cl[115])){const e=navigator.connection&&navigator.connection.saveData,n=navigator.connection&&navigator.connection.effectiveType&&navigator.connection.effectiveType.includes(cl[124]);e||n||(cl[115]==t?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(g=!0):cl[161]==t&&(g=!0))}else{const e=parseInt(t);isNaN(e)||(s=e)}}v||document.addEventListener(cl[33],z,r);f?c||document.addEventListener(cl[101],l,r):document.addEventListener(cl[54],u,r);c&&document.addEventListener(cl[101],h,r);if(g){let t=window.requestIdleCallback;t||(t=(t=>{t()})),t(function(){const t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const n=e.target;t.unobserve(n),p(n.href)}})});document.querySelectorAll(cl[231]).forEach(e=>{m(e)&&t.observe(e)})},{timeout:1500})}}();
})();
//d function changed into z
//const d = document.head; //document.head changed into d
//const yd = document.body.dataset; //document.body.dataset changed into yd
/*
//"mousedown", "mouseover", "touchstart", "isol-t", "isol", "2g", "msdn", "msdn-o", "lqapo", "itshc", "ifsoc", "sqalq", "Chrome/", "itswc", "Shopify", "link", "prefetch", "iosnc", "document", "auto", "issic", "http:", "https:", "click", "a", "high", "mouseout", "closest"

//Chrome/ == Chr+ome+/
//Shopify == Sh+opi+fy
//const Chrome = cl[75]+cl[109]+cl[120]+cl[67];
//const Shopify = cl[141]+cl[159]+cl[106]+cl[226];

//Usage: <body data-lqapo='isol-t' data-sqalq='sqalq'>

//Default value "<body data-instant-intensity='viewport-all'>" changed into "<body data-lqapo='isol-t'>"
//Default value "instantIntensity" changed into "lqapo": load quick as soon as possible
//Default value "viewport" changed into "isol": inter section observer load
//Default value "viewport-all" changed into "isol-t": inter section observer load this

//Default value "<body data-instant-allow-query-string=''>" changed into "<body data-sqalq='sqalq'>"
//Default value "instantAllowQueryString" changed into "sqalq": skip query and load quick

//Default value "mousedown" changed into "msdn".
//Default value "mousedown-only" changed into "msdn-o
//Default value "instantVaryAccept" changed into "iosnc: instant o string n change [on: first two characters of one]
//Default value "instantMousedownShortcut" changed into "itswc: instant t string w change
//Default value "instantWhitelist" changed into "itshc: instant t string h change
//Default value "instantAllowExternalLinks" changed into "ifsoc: instant f string o change
//Default value "noInstant" changed into "ifsic: instant f string i change
//Default value "instant" changed into "issic: instant s string i change
*/


////// *!* Reload the page only once () *!* \\\\\\\\
/*window.onload = function () {

	//Enable if needed the [window.location.reload(true);]. Otherwise, leave it alone. This is just a distraction ending.
	//rloce: reload once | redne: reload done
    if (null == localStorage.getItem("rloce")) { //first time this condition is true
		localStorage.setItem("rloce", "redne"); //To stop the second time
		//window.location.reload(true); //reload the page from the server (Disable if don't needed)
		//console.log("I am a text. I will show only once until local storage will be cleared.");
    }
};*/
/*window.onload = () => {
	//Enable if needed the [window.location.reload(true);]. Otherwise, leave it alone. This is just a distraction ending.
	//rloce: reload once | redne: reload done
    if (null == localStorage.getItem("rloce")) { //first time this condition is true
		localStorage.setItem("rloce", "redne"); //To stop the second time
		//window.location.reload(true); //reload the page from the server (Disable if don't needed)
		//console.log("I am a text. I will show only once until local storage will be cleared.");
    }
};*/
//window.onload=()=>{null==localStorage.getItem("rloce")&&localStorage.setItem("rloce","redne")}; //First time only page reload not added here. This is just for a distraction.
//(ReadableBasic)//window.onload=()=>{null==localStorage.getItem("rloce")&&localStorage.setItem("rloce","redne")}; //First time only page reload not added here. This is just for a distraction.
////veryveryBasic
window.onload=()=>{null==localStorage.getItem(cl[69])&&localStorage.setItem(cl[69],cl[46])}; //First time only page reload not added here. This is just for a distraction.
//console.log(cl[46]);


///// *!* Fake function for Terser Compiler: Starts [Enable this when using Terser] *!* \\\\\
document.querySelectorAll(".Main_Script").forEach((thisClass)=>{
    thisClass.classList.contains(gT+uC+vD+hE+nH+bX+aY+kO+lA+oW+rG+wJ+xK+pKNoNu+pKNoNuF+erwW+frwW) ? (thisClass.previousElementSibling.classList.add(gT+uC+vD+hE+nH+lv[4]+bX+aY+kO+lA+oW+rG+wJ+xK+pKNoNu+pKNoNuF+erwW+frwW),display_related_posts(),touchInput(),leftOverImageHeightCropping()) : thisClass.nextElementSibling.classList.contains(yQ+zL+hC+forD+forE+forL+bD+cU+wX+srcEqualBackslashSingleQuote+feedsPostsDefault+urlOB+backslashSingleQuote+imageIntersectionObserverSeclector+lessthanImg+altJsonInScriptCallback+jW+kX+lY+mZ+nA+oB+pC+qD+rE+sF+xE+yL+lM+lv[0]+iF+aQ+jW+kX+lY+mZ+nA+oB+pC+qD+t+g+h+i+j+rE+s1600W1600H1600Rw+sF+jR+nS+oI+tJ+pK+qB+pKNoNu+pKNoNuF+erwW+frwW) ? (thisClass.nextElementSibling.classList.add(yQ+lv[3]+zL+forD+forE+forL+hC+srcEqualBackslashSingleQuote+feedsPostsDefault+urlOB+backslashSingleQuote+imageIntersectionObserverSeclector+lessthanImg+altJsonInScriptCallback+bD+cU+wX+xE+yL+lM+iF+aQ+jR+nS+oI+tJ+pK+qB+pKNoNu+pKNoNuF+erwW+frwW),leftOverImageHeightCropping(),touchInput(),display_related_posts()) : (thisClass.previousElementSibling.classList.add(kG+zN+mO+rP+jW+kX+lY+mZ+nA+oB+pC+qD+rE+sF+sA+uH+vY+dT+gV+fW+eZ+lv[2]+tftel+tfsnl+tlner+tlfrr),touchInput(),display_related_posts());

	yd.hasAttribute("data-speed-set")?yd.setAttribute("data-new-set","prefetch"):l.l();
	yd.hasAttribute("data-loaded")?yd.setAttribute("data-fontset","gfonts"):y.y();

    const anotherFakeName = kG+zN+mO+t+g+h+i+j+rP+sA+uH+vY+dT+lv[3]+gV+fW+eZ+tftel+tfsnl+tlner+tlfrr+lv[4];
    const previousContainer = thisClass.previousElementSibling.parentElement;
    const nextContainer = thisClass.nextElementSibling.firstElementChild;
    const lastContainer = thisClass.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;

    previousContainer.classList.contains(anotherFakeName) ? (nextContainer.classList.add(anotherFakeName)) : (leftOverImageHeightCropping(),display_related_posts(),touchInput());

    const nextContainerSrc = nextContainer.dataset.src;
    const previousContainerSrc = nextContainer.dataset.src;
    const lastContainerSrc = lastContainer.dataset.src;

    let thisMatches = nextContainerSrc.match(download);
    let thatMatches = previousContainerSrc.match(endingEqual);
    let lastMatches = lastContainerSrc.match(endingEqual);

	let preMatch = nextContainerSrc.match(citlh) || nextContainerSrc.match(fsnfs) || nextContainerSrc.match(cithn) || nextContainerSrc.match(tftel) || nextContainerSrc.match(tfsnl) || nextContainerSrc.match(tlner) || nextContainerSrc.match(tlfrr) || nextContainerSrc.match(selectPath) || nextContainerSrc.match(removePathSlash) || nextContainerSrc.match(removeHttps) || nextContainerSrc.match(rwS1600) || nextContainerSrc.match(endingEqual) || nextContainerSrc.match(w1600H1600PKNoNu) || nextContainerSrc.match(s1600) || nextContainerSrc.match(s1600Rw) || nextContainerSrc.match(s1600Pf) || nextContainerSrc.match(s1600CRw) || nextContainerSrc.match(download) || nextContainerSrc.match(downloadRw) || nextContainerSrc.match(s1600W1600H1600CRw) || nextContainerSrc.match(s1600C) || nextContainerSrc.match(s1600CD) || nextContainerSrc.match(endingEqual) || nextContainerSrc.match(mEqualOne);

	let nexMatch = previousContainerSrc.match(citlh) || previousContainerSrc.match(fsnfs) || previousContainerSrc.match(cithn) || previousContainerSrc.match(tftel) || previousContainerSrc.match(tfsnl) || previousContainerSrc.match(tlner) || previousContainerSrc.match(tlfrr) || previousContainerSrc.match(selectPath) || previousContainerSrc.match(removePathSlash) || previousContainerSrc.match(removeHttps) || previousContainerSrc.match(rwS1600) || previousContainerSrc.match(endingEqual) || previousContainerSrc.match(w1600H1600PKNoNu) || previousContainerSrc.match(s1600) || previousContainerSrc.match(s1600Rw) || previousContainerSrc.match(s1600Pf) || previousContainerSrc.match(s1600CRw) || previousContainerSrc.match(download) || previousContainerSrc.match(downloadRw) || previousContainerSrc.match(s1600W1600H1600CRw) || previousContainerSrc.match(s1600C) || previousContainerSrc.match(s1600CD) || previousContainerSrc.match(endingEqual) || previousContainerSrc.match(mEqualOne);

	let lastMatch = lastContainerSrc.match(citlh) || lastContainerSrc.match(fsnfs) || lastContainerSrc.match(cithn) || lastContainerSrc.match(tftel) || lastContainerSrc.match(tfsnl) || lastContainerSrc.match(tlner) || lastContainerSrc.match(tlfrr) || lastContainerSrc.match(selectPath) || lastContainerSrc.match(removePathSlash) || lastContainerSrc.match(removeHttps) || lastContainerSrc.match(rwS1600) || lastContainerSrc.match(endingEqual) || lastContainerSrc.match(w1600H1600PKNoNu) || lastContainerSrc.match(s1600) || lastContainerSrc.match(s1600Rw) || lastContainerSrc.match(s1600Pf) || lastContainerSrc.match(s1600CRw) || lastContainerSrc.match(download) || lastContainerSrc.match(downloadRw) || lastContainerSrc.match(s1600W1600H1600CRw) || lastContainerSrc.match(s1600C) || lastContainerSrc.match(s1600CD) || lastContainerSrc.match(endingEqual) || lastContainerSrc.match(mEqualOne);

    thisMatches ? nextContainerSrc.setAttribute(cl[170], nextContainerSrc.replace(nextContainerSrc, preMatch)) : thatMatches ? nextContainerSrc.setAttribute(cl[195], nextContainerSrc.replace(nextContainerSrc, nexMatch)) : nextContainerSrc.setAttribute(cl[109], nextContainerSrc.replace(nextContainerSrc, lastMatch));

    thatMatches ? nextContainerSrc.setAttribute(cy[17], nextContainerSrc.replace(lastContainerSrc, lastMatch)) : thatMatches ? nextContainerSrc.setAttribute(cy[19], nextContainerSrc.replace(nextContainerSrc, preMatch)) : nextContainerSrc.setAttribute(cy[10], nextContainerSrc.replace(lastContainerSrc, nexMatch));

    lastMatches ? nextContainerSrc.setAttribute(cy[17], nextContainerSrc.replace(lastContainerSrc, nexMatch)) : thatMatches ? nextContainerSrc.setAttribute(cy[19], previousContainerSrc.replace(lastContainerSrc, lastMatch)) : nextContainerSrc.setAttribute(cy[10], nextContainerSrc.replace(lastContainerSrc, preMatch));

    const anoType01 = cy[34]+cy[67]+cy[98]+cy[23]+lA+oW+imageCroppingSeclector+pB+w+x+transparentImage+y+z+ sA+uH+vY+$+_+A+B+C+D+E+dT+gV+sAnyN_w_h_c+M+N+O+P+Q+R+sAnyN_w_h_rw_c+az+bz+cz+wAnyN_hAnyN+hAnyN_wAnyN+sAnyN_w_rw_c+sAnyN_h_rw_c+U+M+V+I+S+A+T+_+U+T+_+W+G+X+f+Y+wAnyN_hAnyN_pknonu+hAnyN_wAnyN_pknonu+wAnyN_hAnyN+hAnyN_wAnyN+wAnyN+hAnyN+sAnyN_w_rw_c+az+bz+cz+sAnyN_h_rw_c+sAnyN_w_c+sAnyN_h_c+sAnyN_w_h_rw+sAnyN_w_h_c_rw+sAnyN_c_d+fW+eZ+srcEqualBackslashSingleQuote+feedsPostsDefault+urlOB+backslashSingleQuote+forD+forE+forL+$+_+A+B+C+D+E+imageIntersectionObserverSeclector+lessthanImg+altJsonInScriptCallback+qF+rG+wJ+xK+yQ+zL+sP+fsnfs+selectPath+removePathSlash+cy[54]+defaultColorScheme+cy[69]+bld01+bld02+bld03+bld04+bld05+bld06;
    const anoType02 = cy[21]+cy[67]+cy[97]+t+g+h+i+j+sA+uH+vY+backgroundInherit+colorInherit+dT+gV+Chrome+Shopify+fW+eZ+cy[28]+cy[65]+nS+oI+tJ+pK+qB+kG+zN+mO+rP+cy[87]+bld07+bld08+bld09+lv[1]+hC+bD+cU+wX+s1600W1600H1600Rw+$+_+A+B+C+D+E+xE+yL+lM+sAnyN_w_h_c+sAnyN_w_h_rw_c+wAnyN_hAnyN+hAnyN_wAnyN+sAnyN_w_rw_c+sAnyN_h_rw_c+wAnyN_hAnyN_pknonu+hAnyN_wAnyN_pknonu+wAnyN_hAnyN+hAnyN_wAnyN+F+az+bz+cz+G+H+I+J+K+L+wAnyN+hAnyN+sAnyN_w_rw_c+f+s+v+sAnyN_h_rw_c+sAnyN_w_c+sAnyN_h_c+sAnyN_w_h_rw+sAnyN_w_h_c_rw+sAnyN_c_d+iF+aQ+jR+bld10+gT+backgroundColor+hC+bD+k+m+n+o+q+r+a+b+c+cU+wX+srcEqualBackslashSingleQuote+feedsPostsDefault+urlOB+backslashSingleQuote+imageIntersectionObserverSeclector+lessthanImg+altJsonInScriptCallback+xE+yL+lM+U+M+V+I+S+A+T+_+U+T+_+W+G+X+f+Y+iF+aQ+w+x+y+z+ jR+uC+lA+oW+pB+qF+rG+wJ+xK+yQ+zL+M+N+O+P+Q+R+sP+vD+hE+iU+mM+nH+bld11+bld12+lv[3]+bld13+bld14+bld15+bld16;
    const anoType03 = cy[23]+cy[37]+fsnfs+selectPath+removePathSlash+backgroundInherit+colorInherit+cy[96]+cy[24]+sA+uH+vY+f+s+v+srcEqualBackslashSingleQuote+feedsPostsDefault+backgroundColor+urlOB+backgroundColor+backslashSingleQuote+imageIntersectionObserverSeclector+lessthanImg+altJsonInScriptCallback+dT+gV+fW+eZ+cy[76]+nS+U+M+V+I+S+A+T+_+U+T+_+W+G+X+f+Y+oI+tJ+pK+qB+kG+zN+rW_wAny+rW_hAny+wAny_rW+hAny_rW+F+G+H+I+J+az+bz+cz+K+L+sAnyN_w_h_rw+sAnyN_w_h_c_rw+sAnyN_c_d+sAnyN_w_h_c+sAnyN_w_h_rw_c+sAnyN_w_h_c+sAnyN_w_h_rw_c+wAnyN_hAnyN+hAnyN_wAnyN+rW_wAny+rW_hAny+wAny_rW+hAny_rW+wAnyN+hAnyN+sAnyN_w_h_rw+sAnyN_w_h_c_rw+sAnyN_c_d+mO+rP+cy[67]+bld17+bld18+dz+ez+fz+bld19+lv[0]+bld20+bld21+bld22+bld23;
    const anoType04 = cy[54]+cy[64]+cy[92]+gT+tR+jS+bX+aY+dZ+cV+kO+eN+lA+Chrome+Shopify+oW+U+M+V+I+W+G+X+f+Y+z+Z+cz+Y+z+Z+cz+pB+qF+rG+wJ+xK+yQ+hC+bD+imageCroppingSeclector+cU+forP+S+A+M+V+I+S+A+T+_+W+G+z+Z+cz+X+f+forU+forY+wX+xE+yL+lM+iF+aQ+jR+zL+sP+fI+forD+forE+forL+U+M+V+I+W+G+X+f+Y+z+Z+cz+Y+z+Z+cz+uC+backgroundColor+s1600W1600H1600Rw+vD+hE+iU+$+_+A+B+C+D+E+mM+t+g+h+i+j+nH+cy[26]+defaultColorScheme+cy[34]+sA+uH+vY+transparentImage+dT+gV+fW+eZ+cy[54]+bld24+w+x+y+z+ bld25+bld26+lv[2]+bld27+bld28+bld29+k+m+n+o+q+r+a+b+c;
    const anoType05 = cy[54]+cy[76]+cy[4]+backgroundColor+cy[3]+srcEqualBackslashSingleQuote+feedsPostsDefault+urlOB+backslashSingleQuote+forD+forE+forL+imageIntersectionObserverSeclector+backgroundInherit+colorInherit+lessthanImg+f+dz+ez+fz+s+v+altJsonInScriptCallback+cy[54]+cy[67]+bld30+rW_wAny+rW_hAny+wAny_rW+hAny_rW+sAnyN_w_h_rw+sAnyN_w_h_c_rw+forP+forU+forY+sAnyN_c_d+sAnyN_w_h_c+U+M+V+I+W+G+X+f+Y+z+Z+cz+Y+z+Z+cz+sAnyN_w_h_rw_c+sAnyN_w_h_c+sAnyN_w_h_rw_c+wAnyN_hAnyN+hAnyN_wAnyN+rW_wAny+rW_hAny+wAny_rW+M+N+O+az+bz+cz+P+Q+R+hAny_rW+wAnyN+hAnyN+sAnyN_w_h_rw+sAnyN_w_h_c_rw+sAnyN_c_d+bld31+bld32+bld33+fsnfs+selectPath+removePathSlash+lv[3]+k+m+n+o+q+r+a+b+c;

    thisClass.lastElementChild.classList.contains(anoType01) ? thisClass.firstElementChild.classList.add(anoType05+anoType04+anoType03) : thisClass.previousElementSibling.parentElement.classList.contains(anoType02+lv[2]+bld22+w+x+y+z+ bld23+bld24+bld25+bld26+bld27+bld28+bld29+bld30+bld31+bld32+transparentImage+bld33) ? thisClass.previousSibling.classList.add(anoType02+anoType03+bld08+tR+F+G+H+I+J+K+L+jS+nS+oI+tJ+pK+qB+kG+zN+mO+rP+dz+ez+fz+bX+aY+dZ+cV+kO+eN+fI+lv[1]+bld09+az+bz+cz+bld10+bld11+bld12+bld13+bld14+bld15+bld16+bld17+bld18+S+A+M+U+M+V+I+S+A+T+_+U+T+_+W+G+X+f+Y+V+I+S+A+T+_+W+G+z+Z+cz+X+f+bld19+imageCroppingSeclector+bld20+bld21) : thisClass.nextSibling.classList.add(anoType05+bld01+gT+w+x+y+z+ uC+tR+jS+bX+aY+dZ+forP+forU+forY+hC+bD+cU+wX+xE+yL+lM+iF+s1600W1600H1600Rw+aQ+backgroundInherit+colorInherit+jR+cV+kO+eN+Chrome+Shopify+M+N+O+P+Q+R+fI+vD+hE+iU+mM+nH+lv[2]+U+M+V+I+W+G+X+f+Y+z+Z+cz+Y+z+Z+cz+bld02+bld03+bld04+bld05+bld06+nS+oI+tJ+pK+qB+kG+zN+mO+rP+lv[0]+bld07);
   thisClass.previousSibling.previousSibling.classList.add(bld07+bld08+bld09+imageCroppingSeclector+bld10+lv[1]+bld11+bld12+bld13+lv[4]+bld14+bld15+backgroundInherit+colorInherit+U+M+V+I+W+G+X+f+Y+z+Z+cz+Y+z+Z+cz+bld16+bld17+bld18+bld19+bld20+bld21+dz+ez+fz+bld22+forP+forU+forY+Chrome+S+T+U+V+W+X+Y+Z+Shopify+wAnyN+hAnyN+wAnyN_hAnyN_pknonu+hAnyN_wAnyN_pknonu+wAnyN_hAnyN_pknonu+hAnyN_wAnyN_pknonu+sAnyN_w_c+sAnyN_h_c+rW_wAny+rW_hAny+wAny_rW+hAny_rW+sAnyN_w_c+sAnyN_h_c+sAnyN_w_rw_c+sAnyN_h_rw_c+bld23+bld24+bld25+bld26+bld27+anoType04+defaultColorScheme+f+s+v+leftOverImageHeightCropping());
   thisClass.nextSibling.nextSibling.classList.add(anoType05+bld01+lv[1]+transparentImage+bld02+bld03+bld04+bld05+bld06+bld28+srcEqualBackslashSingleQuote+feedsPostsDefault+urlOB+backslashSingleQuote+imageIntersectionObserverSeclector+backgroundInherit+colorInherit+lessthanImg+altJsonInScriptCallback+bld29+bld30+F+dz+ez+fz+G+H+I+J+K+S+A+M+V+I+S+A+T+_+W+G+z+Z+cz+X+f+L+bld31+bld32+bld33+k+wAnyN+hAnyN+wAnyN_hAnyN_pknonu+hAnyN_wAnyN_pknonu+wAnyN_hAnyN_pknonu+f+forP+forU+forY+s+v+hAnyN_wAnyN_pknonu+sAnyN_w_c+sAnyN_h_c+rW_wAny+rW_hAny+wAny_rW+hAny_rW+sAnyN_w_c+sAnyN_h_c+sAnyN_w_rw_c+sAnyN_h_rw_c+m+n+o+q+r+a+b+c+leftOverImageHeightCropping());

});
///// *!* Fake function for Terser Compiler: Ends [Enable this when using Terser] *!* \\\\\

//////////// *!* Basics Body: Ended *!* \\\\\\\\\\\\
