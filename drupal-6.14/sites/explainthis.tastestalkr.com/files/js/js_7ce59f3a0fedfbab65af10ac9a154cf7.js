// $Id: jquery.js,v 1.12.2.3 2008/06/25 09:38:39 goba Exp $ 

/*
 * jQuery 1.2.6 - New Wave Javascript
 *
 * Copyright (c) 2008 John Resig (jquery.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Date: 2008-05-24 14:22:17 -0400 (Sat, 24 May 2008)
 * Rev: 5685
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H(){J w=1b.4M,3m$=1b.$;J D=1b.4M=1b.$=H(a,b){I 2B D.17.5j(a,b)};J u=/^[^<]*(<(.|\\s)+>)[^>]*$|^#(\\w+)$/,62=/^.[^:#\\[\\.]*$/,12;D.17=D.44={5j:H(d,b){d=d||S;G(d.16){7[0]=d;7.K=1;I 7}G(1j d=="23"){J c=u.2D(d);G(c&&(c[1]||!b)){G(c[1])d=D.4h([c[1]],b);N{J a=S.61(c[3]);G(a){G(a.2v!=c[3])I D().2q(d);I D(a)}d=[]}}N I D(b).2q(d)}N G(D.1D(d))I D(S)[D.17.27?"27":"43"](d);I 7.6Y(D.2d(d))},5w:"1.2.6",8G:H(){I 7.K},K:0,3p:H(a){I a==12?D.2d(7):7[a]},2I:H(b){J a=D(b);a.5n=7;I a},6Y:H(a){7.K=0;2p.44.1p.1w(7,a);I 7},P:H(a,b){I D.P(7,a,b)},5i:H(b){J a=-1;I D.2L(b&&b.5w?b[0]:b,7)},1K:H(c,a,b){J d=c;G(c.1q==56)G(a===12)I 7[0]&&D[b||"1K"](7[0],c);N{d={};d[c]=a}I 7.P(H(i){R(c 1n d)D.1K(b?7.V:7,c,D.1i(7,d[c],b,i,c))})},1g:H(b,a){G((b==\'2h\'||b==\'1Z\')&&3d(a)<0)a=12;I 7.1K(b,a,"2a")},1r:H(b){G(1j b!="49"&&b!=U)I 7.4E().3v((7[0]&&7[0].2z||S).5F(b));J a="";D.P(b||7,H(){D.P(7.3t,H(){G(7.16!=8)a+=7.16!=1?7.76:D.17.1r([7])})});I a},5z:H(b){G(7[0])D(b,7[0].2z).5y().39(7[0]).2l(H(){J a=7;1B(a.1x)a=a.1x;I a}).3v(7);I 7},8Y:H(a){I 7.P(H(){D(7).6Q().5z(a)})},8R:H(a){I 7.P(H(){D(7).5z(a)})},3v:H(){I 7.3W(19,M,Q,H(a){G(7.16==1)7.3U(a)})},6F:H(){I 7.3W(19,M,M,H(a){G(7.16==1)7.39(a,7.1x)})},6E:H(){I 7.3W(19,Q,Q,H(a){7.1d.39(a,7)})},5q:H(){I 7.3W(19,Q,M,H(a){7.1d.39(a,7.2H)})},3l:H(){I 7.5n||D([])},2q:H(b){J c=D.2l(7,H(a){I D.2q(b,a)});I 7.2I(/[^+>] [^+>]/.11(b)||b.1h("..")>-1?D.4r(c):c)},5y:H(e){J f=7.2l(H(){G(D.14.1f&&!D.4n(7)){J a=7.6o(M),5h=S.3h("1v");5h.3U(a);I D.4h([5h.4H])[0]}N I 7.6o(M)});J d=f.2q("*").5c().P(H(){G(7[E]!=12)7[E]=U});G(e===M)7.2q("*").5c().P(H(i){G(7.16==3)I;J c=D.L(7,"3w");R(J a 1n c)R(J b 1n c[a])D.W.1e(d[i],a,c[a][b],c[a][b].L)});I f},1E:H(b){I 7.2I(D.1D(b)&&D.3C(7,H(a,i){I b.1k(a,i)})||D.3g(b,7))},4Y:H(b){G(b.1q==56)G(62.11(b))I 7.2I(D.3g(b,7,M));N b=D.3g(b,7);J a=b.K&&b[b.K-1]!==12&&!b.16;I 7.1E(H(){I a?D.2L(7,b)<0:7!=b})},1e:H(a){I 7.2I(D.4r(D.2R(7.3p(),1j a==\'23\'?D(a):D.2d(a))))},3F:H(a){I!!a&&D.3g(a,7).K>0},7T:H(a){I 7.3F("."+a)},6e:H(b){G(b==12){G(7.K){J c=7[0];G(D.Y(c,"2A")){J e=c.64,63=[],15=c.15,2V=c.O=="2A-2V";G(e<0)I U;R(J i=2V?e:0,2f=2V?e+1:15.K;i<2f;i++){J d=15[i];G(d.2W){b=D.14.1f&&!d.at.2x.an?d.1r:d.2x;G(2V)I b;63.1p(b)}}I 63}N I(7[0].2x||"").1o(/\\r/g,"")}I 12}G(b.1q==4L)b+=\'\';I 7.P(H(){G(7.16!=1)I;G(b.1q==2p&&/5O|5L/.11(7.O))7.4J=(D.2L(7.2x,b)>=0||D.2L(7.34,b)>=0);N G(D.Y(7,"2A")){J a=D.2d(b);D("9R",7).P(H(){7.2W=(D.2L(7.2x,a)>=0||D.2L(7.1r,a)>=0)});G(!a.K)7.64=-1}N 7.2x=b})},2K:H(a){I a==12?(7[0]?7[0].4H:U):7.4E().3v(a)},7b:H(a){I 7.5q(a).21()},79:H(i){I 7.3s(i,i+1)},3s:H(){I 7.2I(2p.44.3s.1w(7,19))},2l:H(b){I 7.2I(D.2l(7,H(a,i){I b.1k(a,i,a)}))},5c:H(){I 7.1e(7.5n)},L:H(d,b){J a=d.1R(".");a[1]=a[1]?"."+a[1]:"";G(b===12){J c=7.5C("9z"+a[1]+"!",[a[0]]);G(c===12&&7.K)c=D.L(7[0],d);I c===12&&a[1]?7.L(a[0]):c}N I 7.1P("9u"+a[1]+"!",[a[0],b]).P(H(){D.L(7,d,b)})},3b:H(a){I 7.P(H(){D.3b(7,a)})},3W:H(g,f,h,d){J e=7.K>1,3x;I 7.P(H(){G(!3x){3x=D.4h(g,7.2z);G(h)3x.9o()}J b=7;G(f&&D.Y(7,"1T")&&D.Y(3x[0],"4F"))b=7.3H("22")[0]||7.3U(7.2z.3h("22"));J c=D([]);D.P(3x,H(){J a=e?D(7).5y(M)[0]:7;G(D.Y(a,"1m"))c=c.1e(a);N{G(a.16==1)c=c.1e(D("1m",a).21());d.1k(b,a)}});c.P(6T)})}};D.17.5j.44=D.17;H 6T(i,a){G(a.4d)D.3Y({1a:a.4d,31:Q,1O:"1m"});N D.5u(a.1r||a.6O||a.4H||"");G(a.1d)a.1d.37(a)}H 1z(){I+2B 8J}D.1l=D.17.1l=H(){J b=19[0]||{},i=1,K=19.K,4x=Q,15;G(b.1q==8I){4x=b;b=19[1]||{};i=2}G(1j b!="49"&&1j b!="H")b={};G(K==i){b=7;--i}R(;i<K;i++)G((15=19[i])!=U)R(J c 1n 15){J a=b[c],2w=15[c];G(b===2w)6M;G(4x&&2w&&1j 2w=="49"&&!2w.16)b[c]=D.1l(4x,a||(2w.K!=U?[]:{}),2w);N G(2w!==12)b[c]=2w}I b};J E="4M"+1z(),6K=0,5r={},6G=/z-?5i|8B-?8A|1y|6B|8v-?1Z/i,3P=S.3P||{};D.1l({8u:H(a){1b.$=3m$;G(a)1b.4M=w;I D},1D:H(a){I!!a&&1j a!="23"&&!a.Y&&a.1q!=2p&&/^[\\s[]?H/.11(a+"")},4n:H(a){I a.1C&&!a.1c||a.2j&&a.2z&&!a.2z.1c},5u:H(a){a=D.3k(a);G(a){J b=S.3H("6w")[0]||S.1C,1m=S.3h("1m");1m.O="1r/4t";G(D.14.1f)1m.1r=a;N 1m.3U(S.5F(a));b.39(1m,b.1x);b.37(1m)}},Y:H(b,a){I b.Y&&b.Y.2r()==a.2r()},1Y:{},L:H(c,d,b){c=c==1b?5r:c;J a=c[E];G(!a)a=c[E]=++6K;G(d&&!D.1Y[a])D.1Y[a]={};G(b!==12)D.1Y[a][d]=b;I d?D.1Y[a][d]:a},3b:H(c,b){c=c==1b?5r:c;J a=c[E];G(b){G(D.1Y[a]){2U D.1Y[a][b];b="";R(b 1n D.1Y[a])1X;G(!b)D.3b(c)}}N{1U{2U c[E]}1V(e){G(c.5l)c.5l(E)}2U D.1Y[a]}},P:H(d,a,c){J e,i=0,K=d.K;G(c){G(K==12){R(e 1n d)G(a.1w(d[e],c)===Q)1X}N R(;i<K;)G(a.1w(d[i++],c)===Q)1X}N{G(K==12){R(e 1n d)G(a.1k(d[e],e,d[e])===Q)1X}N R(J b=d[0];i<K&&a.1k(b,i,b)!==Q;b=d[++i]){}}I d},1i:H(b,a,c,i,d){G(D.1D(a))a=a.1k(b,i);I a&&a.1q==4L&&c=="2a"&&!6G.11(d)?a+"2X":a},1F:{1e:H(c,b){D.P((b||"").1R(/\\s+/),H(i,a){G(c.16==1&&!D.1F.3T(c.1F,a))c.1F+=(c.1F?" ":"")+a})},21:H(c,b){G(c.16==1)c.1F=b!=12?D.3C(c.1F.1R(/\\s+/),H(a){I!D.1F.3T(b,a)}).6s(" "):""},3T:H(b,a){I D.2L(a,(b.1F||b).6r().1R(/\\s+/))>-1}},6q:H(b,c,a){J e={};R(J d 1n c){e[d]=b.V[d];b.V[d]=c[d]}a.1k(b);R(J d 1n c)b.V[d]=e[d]},1g:H(d,e,c){G(e=="2h"||e=="1Z"){J b,3X={30:"5x",5g:"1G",18:"3I"},35=e=="2h"?["5e","6k"]:["5G","6i"];H 5b(){b=e=="2h"?d.8f:d.8c;J a=0,2C=0;D.P(35,H(){a+=3d(D.2a(d,"57"+7,M))||0;2C+=3d(D.2a(d,"2C"+7+"4b",M))||0});b-=29.83(a+2C)}G(D(d).3F(":4j"))5b();N D.6q(d,3X,5b);I 29.2f(0,b)}I D.2a(d,e,c)},2a:H(f,l,k){J e,V=f.V;H 3E(b){G(!D.14.2k)I Q;J a=3P.54(b,U);I!a||a.52("3E")==""}G(l=="1y"&&D.14.1f){e=D.1K(V,"1y");I e==""?"1":e}G(D.14.2G&&l=="18"){J d=V.50;V.50="0 7Y 7W";V.50=d}G(l.1I(/4i/i))l=y;G(!k&&V&&V[l])e=V[l];N G(3P.54){G(l.1I(/4i/i))l="4i";l=l.1o(/([A-Z])/g,"-$1").3y();J c=3P.54(f,U);G(c&&!3E(f))e=c.52(l);N{J g=[],2E=[],a=f,i=0;R(;a&&3E(a);a=a.1d)2E.6h(a);R(;i<2E.K;i++)G(3E(2E[i])){g[i]=2E[i].V.18;2E[i].V.18="3I"}e=l=="18"&&g[2E.K-1]!=U?"2F":(c&&c.52(l))||"";R(i=0;i<g.K;i++)G(g[i]!=U)2E[i].V.18=g[i]}G(l=="1y"&&e=="")e="1"}N G(f.4g){J h=l.1o(/\\-(\\w)/g,H(a,b){I b.2r()});e=f.4g[l]||f.4g[h];G(!/^\\d+(2X)?$/i.11(e)&&/^\\d/.11(e)){J j=V.1A,66=f.65.1A;f.65.1A=f.4g.1A;V.1A=e||0;e=V.aM+"2X";V.1A=j;f.65.1A=66}}I e},4h:H(l,h){J k=[];h=h||S;G(1j h.3h==\'12\')h=h.2z||h[0]&&h[0].2z||S;D.P(l,H(i,d){G(!d)I;G(d.1q==4L)d+=\'\';G(1j d=="23"){d=d.1o(/(<(\\w+)[^>]*?)\\/>/g,H(b,a,c){I c.1I(/^(aK|4f|7E|aG|4T|7A|aB|3n|az|ay|av)$/i)?b:a+"></"+c+">"});J f=D.3k(d).3y(),1v=h.3h("1v");J e=!f.1h("<au")&&[1,"<2A 7w=\'7w\'>","</2A>"]||!f.1h("<ar")&&[1,"<7v>","</7v>"]||f.1I(/^<(aq|22|am|ak|ai)/)&&[1,"<1T>","</1T>"]||!f.1h("<4F")&&[2,"<1T><22>","</22></1T>"]||(!f.1h("<af")||!f.1h("<ad"))&&[3,"<1T><22><4F>","</4F></22></1T>"]||!f.1h("<7E")&&[2,"<1T><22></22><7q>","</7q></1T>"]||D.14.1f&&[1,"1v<1v>","</1v>"]||[0,"",""];1v.4H=e[1]+d+e[2];1B(e[0]--)1v=1v.5T;G(D.14.1f){J g=!f.1h("<1T")&&f.1h("<22")<0?1v.1x&&1v.1x.3t:e[1]=="<1T>"&&f.1h("<22")<0?1v.3t:[];R(J j=g.K-1;j>=0;--j)G(D.Y(g[j],"22")&&!g[j].3t.K)g[j].1d.37(g[j]);G(/^\\s/.11(d))1v.39(h.5F(d.1I(/^\\s*/)[0]),1v.1x)}d=D.2d(1v.3t)}G(d.K===0&&(!D.Y(d,"3V")&&!D.Y(d,"2A")))I;G(d[0]==12||D.Y(d,"3V")||d.15)k.1p(d);N k=D.2R(k,d)});I k},1K:H(d,f,c){G(!d||d.16==3||d.16==8)I 12;J e=!D.4n(d),40=c!==12,1f=D.14.1f;f=e&&D.3X[f]||f;G(d.2j){J g=/5Q|4d|V/.11(f);G(f=="2W"&&D.14.2k)d.1d.64;G(f 1n d&&e&&!g){G(40){G(f=="O"&&D.Y(d,"4T")&&d.1d)7p"O a3 a1\'t 9V 9U";d[f]=c}G(D.Y(d,"3V")&&d.7i(f))I d.7i(f).76;I d[f]}G(1f&&e&&f=="V")I D.1K(d.V,"9T",c);G(40)d.9Q(f,""+c);J h=1f&&e&&g?d.4G(f,2):d.4G(f);I h===U?12:h}G(1f&&f=="1y"){G(40){d.6B=1;d.1E=(d.1E||"").1o(/7f\\([^)]*\\)/,"")+(3r(c)+\'\'=="9L"?"":"7f(1y="+c*7a+")")}I d.1E&&d.1E.1h("1y=")>=0?(3d(d.1E.1I(/1y=([^)]*)/)[1])/7a)+\'\':""}f=f.1o(/-([a-z])/9H,H(a,b){I b.2r()});G(40)d[f]=c;I d[f]},3k:H(a){I(a||"").1o(/^\\s+|\\s+$/g,"")},2d:H(b){J a=[];G(b!=U){J i=b.K;G(i==U||b.1R||b.4I||b.1k)a[0]=b;N 1B(i)a[--i]=b[i]}I a},2L:H(b,a){R(J i=0,K=a.K;i<K;i++)G(a[i]===b)I i;I-1},2R:H(a,b){J i=0,T,2S=a.K;G(D.14.1f){1B(T=b[i++])G(T.16!=8)a[2S++]=T}N 1B(T=b[i++])a[2S++]=T;I a},4r:H(a){J c=[],2o={};1U{R(J i=0,K=a.K;i<K;i++){J b=D.L(a[i]);G(!2o[b]){2o[b]=M;c.1p(a[i])}}}1V(e){c=a}I c},3C:H(c,a,d){J b=[];R(J i=0,K=c.K;i<K;i++)G(!d!=!a(c[i],i))b.1p(c[i]);I b},2l:H(d,a){J c=[];R(J i=0,K=d.K;i<K;i++){J b=a(d[i],i);G(b!=U)c[c.K]=b}I c.7d.1w([],c)}});J v=9B.9A.3y();D.14={5B:(v.1I(/.+(?:9y|9x|9w|9v)[\\/: ]([\\d.]+)/)||[])[1],2k:/75/.11(v),2G:/2G/.11(v),1f:/1f/.11(v)&&!/2G/.11(v),42:/42/.11(v)&&!/(9s|75)/.11(v)};J y=D.14.1f?"7o":"72";D.1l({71:!D.14.1f||S.70=="6Z",3X:{"R":"9n","9k":"1F","4i":y,72:y,7o:y,9h:"9f",9e:"9d",9b:"99"}});D.P({6W:H(a){I a.1d},97:H(a){I D.4S(a,"1d")},95:H(a){I D.3a(a,2,"2H")},91:H(a){I D.3a(a,2,"4l")},8Z:H(a){I D.4S(a,"2H")},8X:H(a){I D.4S(a,"4l")},8W:H(a){I D.5v(a.1d.1x,a)},8V:H(a){I D.5v(a.1x)},6Q:H(a){I D.Y(a,"8U")?a.8T||a.8S.S:D.2d(a.3t)}},H(c,d){D.17[c]=H(b){J a=D.2l(7,d);G(b&&1j b=="23")a=D.3g(b,a);I 7.2I(D.4r(a))}});D.P({6P:"3v",8Q:"6F",39:"6E",8P:"5q",8O:"7b"},H(c,b){D.17[c]=H(){J a=19;I 7.P(H(){R(J i=0,K=a.K;i<K;i++)D(a[i])[b](7)})}});D.P({8N:H(a){D.1K(7,a,"");G(7.16==1)7.5l(a)},8M:H(a){D.1F.1e(7,a)},8L:H(a){D.1F.21(7,a)},8K:H(a){D.1F[D.1F.3T(7,a)?"21":"1e"](7,a)},21:H(a){G(!a||D.1E(a,[7]).r.K){D("*",7).1e(7).P(H(){D.W.21(7);D.3b(7)});G(7.1d)7.1d.37(7)}},4E:H(){D(">*",7).21();1B(7.1x)7.37(7.1x)}},H(a,b){D.17[a]=H(){I 7.P(b,19)}});D.P(["6N","4b"],H(i,c){J b=c.3y();D.17[b]=H(a){I 7[0]==1b?D.14.2G&&S.1c["5t"+c]||D.14.2k&&1b["5s"+c]||S.70=="6Z"&&S.1C["5t"+c]||S.1c["5t"+c]:7[0]==S?29.2f(29.2f(S.1c["4y"+c],S.1C["4y"+c]),29.2f(S.1c["2i"+c],S.1C["2i"+c])):a==12?(7.K?D.1g(7[0],b):U):7.1g(b,a.1q==56?a:a+"2X")}});H 25(a,b){I a[0]&&3r(D.2a(a[0],b,M),10)||0}J C=D.14.2k&&3r(D.14.5B)<8H?"(?:[\\\\w*3m-]|\\\\\\\\.)":"(?:[\\\\w\\8F-\\8E*3m-]|\\\\\\\\.)",6L=2B 4v("^>\\\\s*("+C+"+)"),6J=2B 4v("^("+C+"+)(#)("+C+"+)"),6I=2B 4v("^([#.]?)("+C+"*)");D.1l({6H:{"":H(a,i,m){I m[2]=="*"||D.Y(a,m[2])},"#":H(a,i,m){I a.4G("2v")==m[2]},":":{8D:H(a,i,m){I i<m[3]-0},8C:H(a,i,m){I i>m[3]-0},3a:H(a,i,m){I m[3]-0==i},79:H(a,i,m){I m[3]-0==i},3o:H(a,i){I i==0},3S:H(a,i,m,r){I i==r.K-1},6D:H(a,i){I i%2==0},6C:H(a,i){I i%2},"3o-4u":H(a){I a.1d.3H("*")[0]==a},"3S-4u":H(a){I D.3a(a.1d.5T,1,"4l")==a},"8z-4u":H(a){I!D.3a(a.1d.5T,2,"4l")},6W:H(a){I a.1x},4E:H(a){I!a.1x},8y:H(a,i,m){I(a.6O||a.8x||D(a).1r()||"").1h(m[3])>=0},4j:H(a){I"1G"!=a.O&&D.1g(a,"18")!="2F"&&D.1g(a,"5g")!="1G"},1G:H(a){I"1G"==a.O||D.1g(a,"18")=="2F"||D.1g(a,"5g")=="1G"},8w:H(a){I!a.3R},3R:H(a){I a.3R},4J:H(a){I a.4J},2W:H(a){I a.2W||D.1K(a,"2W")},1r:H(a){I"1r"==a.O},5O:H(a){I"5O"==a.O},5L:H(a){I"5L"==a.O},5p:H(a){I"5p"==a.O},3Q:H(a){I"3Q"==a.O},5o:H(a){I"5o"==a.O},6A:H(a){I"6A"==a.O},6z:H(a){I"6z"==a.O},2s:H(a){I"2s"==a.O||D.Y(a,"2s")},4T:H(a){I/4T|2A|6y|2s/i.11(a.Y)},3T:H(a,i,m){I D.2q(m[3],a).K},8t:H(a){I/h\\d/i.11(a.Y)},8s:H(a){I D.3C(D.3O,H(b){I a==b.T}).K}}},6x:[/^(\\[) *@?([\\w-]+) *([!*$^~=]*) *(\'?"?)(.*?)\\4 *\\]/,/^(:)([\\w-]+)\\("?\'?(.*?(\\(.*?\\))?[^(]*?)"?\'?\\)/,2B 4v("^([:.#]*)("+C+"+)")],3g:H(a,c,b){J d,1t=[];1B(a&&a!=d){d=a;J f=D.1E(a,c,b);a=f.t.1o(/^\\s*,\\s*/,"");1t=b?c=f.r:D.2R(1t,f.r)}I 1t},2q:H(t,o){G(1j t!="23")I[t];G(o&&o.16!=1&&o.16!=9)I[];o=o||S;J d=[o],2o=[],3S,Y;1B(t&&3S!=t){J r=[];3S=t;t=D.3k(t);J l=Q,3j=6L,m=3j.2D(t);G(m){Y=m[1].2r();R(J i=0;d[i];i++)R(J c=d[i].1x;c;c=c.2H)G(c.16==1&&(Y=="*"||c.Y.2r()==Y))r.1p(c);d=r;t=t.1o(3j,"");G(t.1h(" ")==0)6M;l=M}N{3j=/^([>+~])\\s*(\\w*)/i;G((m=3j.2D(t))!=U){r=[];J k={};Y=m[2].2r();m=m[1];R(J j=0,3i=d.K;j<3i;j++){J n=m=="~"||m=="+"?d[j].2H:d[j].1x;R(;n;n=n.2H)G(n.16==1){J g=D.L(n);G(m=="~"&&k[g])1X;G(!Y||n.Y.2r()==Y){G(m=="~")k[g]=M;r.1p(n)}G(m=="+")1X}}d=r;t=D.3k(t.1o(3j,""));l=M}}G(t&&!l){G(!t.1h(",")){G(o==d[0])d.4s();2o=D.2R(2o,d);r=d=[o];t=" "+t.6v(1,t.K)}N{J h=6J;J m=h.2D(t);G(m){m=[0,m[2],m[3],m[1]]}N{h=6I;m=h.2D(t)}m[2]=m[2].1o(/\\\\/g,"");J f=d[d.K-1];G(m[1]=="#"&&f&&f.61&&!D.4n(f)){J p=f.61(m[2]);G((D.14.1f||D.14.2G)&&p&&1j p.2v=="23"&&p.2v!=m[2])p=D(\'[@2v="\'+m[2]+\'"]\',f)[0];d=r=p&&(!m[3]||D.Y(p,m[3]))?[p]:[]}N{R(J i=0;d[i];i++){J a=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];G(a=="*"&&d[i].Y.3y()=="49")a="3n";r=D.2R(r,d[i].3H(a))}G(m[1]==".")r=D.5m(r,m[2]);G(m[1]=="#"){J e=[];R(J i=0;r[i];i++)G(r[i].4G("2v")==m[2]){e=[r[i]];1X}r=e}d=r}t=t.1o(h,"")}}G(t){J b=D.1E(t,r);d=r=b.r;t=D.3k(b.t)}}G(t)d=[];G(d&&o==d[0])d.4s();2o=D.2R(2o,d);I 2o},5m:H(r,m,a){m=" "+m+" ";J c=[];R(J i=0;r[i];i++){J b=(" "+r[i].1F+" ").1h(m)>=0;G(!a&&b||a&&!b)c.1p(r[i])}I c},1E:H(t,r,h){J d;1B(t&&t!=d){d=t;J p=D.6x,m;R(J i=0;p[i];i++){m=p[i].2D(t);G(m){t=t.8r(m[0].K);m[2]=m[2].1o(/\\\\/g,"");1X}}G(!m)1X;G(m[1]==":"&&m[2]=="4Y")r=62.11(m[3])?D.1E(m[3],r,M).r:D(r).4Y(m[3]);N G(m[1]==".")r=D.5m(r,m[2],h);N G(m[1]=="["){J g=[],O=m[3];R(J i=0,3i=r.K;i<3i;i++){J a=r[i],z=a[D.3X[m[2]]||m[2]];G(z==U||/5Q|4d|2W/.11(m[2]))z=D.1K(a,m[2])||\'\';G((O==""&&!!z||O=="="&&z==m[5]||O=="!="&&z!=m[5]||O=="^="&&z&&!z.1h(m[5])||O=="$="&&z.6v(z.K-m[5].K)==m[5]||(O=="*="||O=="~=")&&z.1h(m[5])>=0)^h)g.1p(a)}r=g}N G(m[1]==":"&&m[2]=="3a-4u"){J e={},g=[],11=/(-?)(\\d*)n((?:\\+|-)?\\d*)/.2D(m[3]=="6D"&&"2n"||m[3]=="6C"&&"2n+1"||!/\\D/.11(m[3])&&"8q+"+m[3]||m[3]),3o=(11[1]+(11[2]||1))-0,d=11[3]-0;R(J i=0,3i=r.K;i<3i;i++){J j=r[i],1d=j.1d,2v=D.L(1d);G(!e[2v]){J c=1;R(J n=1d.1x;n;n=n.2H)G(n.16==1)n.4q=c++;e[2v]=M}J b=Q;G(3o==0){G(j.4q==d)b=M}N G((j.4q-d)%3o==0&&(j.4q-d)/3o>=0)b=M;G(b^h)g.1p(j)}r=g}N{J f=D.6H[m[1]];G(1j f=="49")f=f[m[2]];G(1j f=="23")f=6u("Q||H(a,i){I "+f+";}");r=D.3C(r,H(a,i){I f(a,i,m,r)},h)}}I{r:r,t:t}},4S:H(b,c){J a=[],1t=b[c];1B(1t&&1t!=S){G(1t.16==1)a.1p(1t);1t=1t[c]}I a},3a:H(a,e,c,b){e=e||1;J d=0;R(;a;a=a[c])G(a.16==1&&++d==e)1X;I a},5v:H(n,a){J r=[];R(;n;n=n.2H){G(n.16==1&&n!=a)r.1p(n)}I r}});D.W={1e:H(f,i,g,e){G(f.16==3||f.16==8)I;G(D.14.1f&&f.4I)f=1b;G(!g.24)g.24=7.24++;G(e!=12){J h=g;g=7.3M(h,H(){I h.1w(7,19)});g.L=e}J j=D.L(f,"3w")||D.L(f,"3w",{}),1H=D.L(f,"1H")||D.L(f,"1H",H(){G(1j D!="12"&&!D.W.5k)I D.W.1H.1w(19.3L.T,19)});1H.T=f;D.P(i.1R(/\\s+/),H(c,b){J a=b.1R(".");b=a[0];g.O=a[1];J d=j[b];G(!d){d=j[b]={};G(!D.W.2t[b]||D.W.2t[b].4p.1k(f)===Q){G(f.3K)f.3K(b,1H,Q);N G(f.6t)f.6t("4o"+b,1H)}}d[g.24]=g;D.W.26[b]=M});f=U},24:1,26:{},21:H(e,h,f){G(e.16==3||e.16==8)I;J i=D.L(e,"3w"),1L,5i;G(i){G(h==12||(1j h=="23"&&h.8p(0)=="."))R(J g 1n i)7.21(e,g+(h||""));N{G(h.O){f=h.2y;h=h.O}D.P(h.1R(/\\s+/),H(b,a){J c=a.1R(".");a=c[0];G(i[a]){G(f)2U i[a][f.24];N R(f 1n i[a])G(!c[1]||i[a][f].O==c[1])2U i[a][f];R(1L 1n i[a])1X;G(!1L){G(!D.W.2t[a]||D.W.2t[a].4A.1k(e)===Q){G(e.6p)e.6p(a,D.L(e,"1H"),Q);N G(e.6n)e.6n("4o"+a,D.L(e,"1H"))}1L=U;2U i[a]}}})}R(1L 1n i)1X;G(!1L){J d=D.L(e,"1H");G(d)d.T=U;D.3b(e,"3w");D.3b(e,"1H")}}},1P:H(h,c,f,g,i){c=D.2d(c);G(h.1h("!")>=0){h=h.3s(0,-1);J a=M}G(!f){G(7.26[h])D("*").1e([1b,S]).1P(h,c)}N{G(f.16==3||f.16==8)I 12;J b,1L,17=D.1D(f[h]||U),W=!c[0]||!c[0].32;G(W){c.6h({O:h,2J:f,32:H(){},3J:H(){},4C:1z()});c[0][E]=M}c[0].O=h;G(a)c[0].6m=M;J d=D.L(f,"1H");G(d)b=d.1w(f,c);G((!17||(D.Y(f,\'a\')&&h=="4V"))&&f["4o"+h]&&f["4o"+h].1w(f,c)===Q)b=Q;G(W)c.4s();G(i&&D.1D(i)){1L=i.1w(f,b==U?c:c.7d(b));G(1L!==12)b=1L}G(17&&g!==Q&&b!==Q&&!(D.Y(f,\'a\')&&h=="4V")){7.5k=M;1U{f[h]()}1V(e){}}7.5k=Q}I b},1H:H(b){J a,1L,38,5f,4m;b=19[0]=D.W.6l(b||1b.W);38=b.O.1R(".");b.O=38[0];38=38[1];5f=!38&&!b.6m;4m=(D.L(7,"3w")||{})[b.O];R(J j 1n 4m){J c=4m[j];G(5f||c.O==38){b.2y=c;b.L=c.L;1L=c.1w(7,19);G(a!==Q)a=1L;G(1L===Q){b.32();b.3J()}}}I a},6l:H(b){G(b[E]==M)I b;J d=b;b={8o:d};J c="8n 8m 8l 8k 2s 8j 47 5d 6j 5E 8i L 8h 8g 4K 2y 5a 59 8e 8b 58 6f 8a 88 4k 87 86 84 6d 2J 4C 6c O 82 81 35".1R(" ");R(J i=c.K;i;i--)b[c[i]]=d[c[i]];b[E]=M;b.32=H(){G(d.32)d.32();d.80=Q};b.3J=H(){G(d.3J)d.3J();d.7Z=M};b.4C=b.4C||1z();G(!b.2J)b.2J=b.6d||S;G(b.2J.16==3)b.2J=b.2J.1d;G(!b.4k&&b.4K)b.4k=b.4K==b.2J?b.6c:b.4K;G(b.58==U&&b.5d!=U){J a=S.1C,1c=S.1c;b.58=b.5d+(a&&a.2e||1c&&1c.2e||0)-(a.6b||0);b.6f=b.6j+(a&&a.2c||1c&&1c.2c||0)-(a.6a||0)}G(!b.35&&((b.47||b.47===0)?b.47:b.5a))b.35=b.47||b.5a;G(!b.59&&b.5E)b.59=b.5E;G(!b.35&&b.2s)b.35=(b.2s&1?1:(b.2s&2?3:(b.2s&4?2:0)));I b},3M:H(a,b){b.24=a.24=a.24||b.24||7.24++;I b},2t:{27:{4p:H(){55();I},4A:H(){I}},3D:{4p:H(){G(D.14.1f)I Q;D(7).2O("53",D.W.2t.3D.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("53",D.W.2t.3D.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3D";I D.W.1H.1w(7,19)}},3N:{4p:H(){G(D.14.1f)I Q;D(7).2O("51",D.W.2t.3N.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("51",D.W.2t.3N.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3N";I D.W.1H.1w(7,19)}}}};D.17.1l({2O:H(c,a,b){I c=="4X"?7.2V(c,a,b):7.P(H(){D.W.1e(7,c,b||a,b&&a)})},2V:H(d,b,c){J e=D.W.3M(c||b,H(a){D(7).4e(a,e);I(c||b).1w(7,19)});I 7.P(H(){D.W.1e(7,d,e,c&&b)})},4e:H(a,b){I 7.P(H(){D.W.21(7,a,b)})},1P:H(c,a,b){I 7.P(H(){D.W.1P(c,a,7,M,b)})},5C:H(c,a,b){I 7[0]&&D.W.1P(c,a,7[0],Q,b)},2m:H(b){J c=19,i=1;1B(i<c.K)D.W.3M(b,c[i++]);I 7.4V(D.W.3M(b,H(a){7.4Z=(7.4Z||0)%i;a.32();I c[7.4Z++].1w(7,19)||Q}))},7X:H(a,b){I 7.2O(\'3D\',a).2O(\'3N\',b)},27:H(a){55();G(D.2Q)a.1k(S,D);N D.3A.1p(H(){I a.1k(7,D)});I 7}});D.1l({2Q:Q,3A:[],27:H(){G(!D.2Q){D.2Q=M;G(D.3A){D.P(D.3A,H(){7.1k(S)});D.3A=U}D(S).5C("27")}}});J x=Q;H 55(){G(x)I;x=M;G(S.3K&&!D.14.2G)S.3K("69",D.27,Q);G(D.14.1f&&1b==1S)(H(){G(D.2Q)I;1U{S.1C.7V("1A")}1V(3e){3B(19.3L,0);I}D.27()})();G(D.14.2G)S.3K("69",H(){G(D.2Q)I;R(J i=0;i<S.4W.K;i++)G(S.4W[i].3R){3B(19.3L,0);I}D.27()},Q);G(D.14.2k){J a;(H(){G(D.2Q)I;G(S.3f!="68"&&S.3f!="1J"){3B(19.3L,0);I}G(a===12)a=D("V, 7A[7U=7S]").K;G(S.4W.K!=a){3B(19.3L,0);I}D.27()})()}D.W.1e(1b,"43",D.27)}D.P(("7R,7Q,43,85,4y,4X,4V,7P,"+"7O,7N,89,53,51,7M,2A,"+"5o,7L,7K,8d,3e").1R(","),H(i,b){D.17[b]=H(a){I a?7.2O(b,a):7.1P(b)}});J F=H(a,c){J b=a.4k;1B(b&&b!=c)1U{b=b.1d}1V(3e){b=c}I b==c};D(1b).2O("4X",H(){D("*").1e(S).4e()});D.17.1l({67:D.17.43,43:H(g,d,c){G(1j g!=\'23\')I 7.67(g);J e=g.1h(" ");G(e>=0){J i=g.3s(e,g.K);g=g.3s(0,e)}c=c||H(){};J f="2P";G(d)G(D.1D(d)){c=d;d=U}N{d=D.3n(d);f="6g"}J h=7;D.3Y({1a:g,O:f,1O:"2K",L:d,1J:H(a,b){G(b=="1W"||b=="7J")h.2K(i?D("<1v/>").3v(a.4U.1o(/<1m(.|\\s)*?\\/1m>/g,"")).2q(i):a.4U);h.P(c,[a.4U,b,a])}});I 7},aL:H(){I D.3n(7.7I())},7I:H(){I 7.2l(H(){I D.Y(7,"3V")?D.2d(7.aH):7}).1E(H(){I 7.34&&!7.3R&&(7.4J||/2A|6y/i.11(7.Y)||/1r|1G|3Q/i.11(7.O))}).2l(H(i,c){J b=D(7).6e();I b==U?U:b.1q==2p?D.2l(b,H(a,i){I{34:c.34,2x:a}}):{34:c.34,2x:b}}).3p()}});D.P("7H,7G,7F,7D,7C,7B".1R(","),H(i,o){D.17[o]=H(f){I 7.2O(o,f)}});J B=1z();D.1l({3p:H(d,b,a,c){G(D.1D(b)){a=b;b=U}I D.3Y({O:"2P",1a:d,L:b,1W:a,1O:c})},aE:H(b,a){I D.3p(b,U,a,"1m")},aD:H(c,b,a){I D.3p(c,b,a,"3z")},aC:H(d,b,a,c){G(D.1D(b)){a=b;b={}}I D.3Y({O:"6g",1a:d,L:b,1W:a,1O:c})},aA:H(a){D.1l(D.60,a)},60:{1a:5Z.5Q,26:M,O:"2P",2T:0,7z:"4R/x-ax-3V-aw",7x:M,31:M,L:U,5Y:U,3Q:U,4Q:{2N:"4R/2N, 1r/2N",2K:"1r/2K",1m:"1r/4t, 4R/4t",3z:"4R/3z, 1r/4t",1r:"1r/as",4w:"*/*"}},4z:{},3Y:H(s){s=D.1l(M,s,D.1l(M,{},D.60,s));J g,2Z=/=\\?(&|$)/g,1u,L,O=s.O.2r();G(s.L&&s.7x&&1j s.L!="23")s.L=D.3n(s.L);G(s.1O=="4P"){G(O=="2P"){G(!s.1a.1I(2Z))s.1a+=(s.1a.1I(/\\?/)?"&":"?")+(s.4P||"7u")+"=?"}N G(!s.L||!s.L.1I(2Z))s.L=(s.L?s.L+"&":"")+(s.4P||"7u")+"=?";s.1O="3z"}G(s.1O=="3z"&&(s.L&&s.L.1I(2Z)||s.1a.1I(2Z))){g="4P"+B++;G(s.L)s.L=(s.L+"").1o(2Z,"="+g+"$1");s.1a=s.1a.1o(2Z,"="+g+"$1");s.1O="1m";1b[g]=H(a){L=a;1W();1J();1b[g]=12;1U{2U 1b[g]}1V(e){}G(i)i.37(h)}}G(s.1O=="1m"&&s.1Y==U)s.1Y=Q;G(s.1Y===Q&&O=="2P"){J j=1z();J k=s.1a.1o(/(\\?|&)3m=.*?(&|$)/,"$ap="+j+"$2");s.1a=k+((k==s.1a)?(s.1a.1I(/\\?/)?"&":"?")+"3m="+j:"")}G(s.L&&O=="2P"){s.1a+=(s.1a.1I(/\\?/)?"&":"?")+s.L;s.L=U}G(s.26&&!D.4O++)D.W.1P("7H");J n=/^(?:\\w+:)?\\/\\/([^\\/?#]+)/;G(s.1O=="1m"&&O=="2P"&&n.11(s.1a)&&n.2D(s.1a)[1]!=5Z.al){J i=S.3H("6w")[0];J h=S.3h("1m");h.4d=s.1a;G(s.7t)h.aj=s.7t;G(!g){J l=Q;h.ah=h.ag=H(){G(!l&&(!7.3f||7.3f=="68"||7.3f=="1J")){l=M;1W();1J();i.37(h)}}}i.3U(h);I 12}J m=Q;J c=1b.7s?2B 7s("ae.ac"):2B 7r();G(s.5Y)c.6R(O,s.1a,s.31,s.5Y,s.3Q);N c.6R(O,s.1a,s.31);1U{G(s.L)c.4B("ab-aa",s.7z);G(s.5S)c.4B("a9-5R-a8",D.4z[s.1a]||"a7, a6 a5 a4 5N:5N:5N a2");c.4B("X-9Z-9Y","7r");c.4B("9W",s.1O&&s.4Q[s.1O]?s.4Q[s.1O]+", */*":s.4Q.4w)}1V(e){}G(s.7m&&s.7m(c,s)===Q){s.26&&D.4O--;c.7l();I Q}G(s.26)D.W.1P("7B",[c,s]);J d=H(a){G(!m&&c&&(c.3f==4||a=="2T")){m=M;G(f){7k(f);f=U}1u=a=="2T"&&"2T"||!D.7j(c)&&"3e"||s.5S&&D.7h(c,s.1a)&&"7J"||"1W";G(1u=="1W"){1U{L=D.6X(c,s.1O,s.9S)}1V(e){1u="5J"}}G(1u=="1W"){J b;1U{b=c.5I("7g-5R")}1V(e){}G(s.5S&&b)D.4z[s.1a]=b;G(!g)1W()}N D.5H(s,c,1u);1J();G(s.31)c=U}};G(s.31){J f=4I(d,13);G(s.2T>0)3B(H(){G(c){c.7l();G(!m)d("2T")}},s.2T)}1U{c.9P(s.L)}1V(e){D.5H(s,c,U,e)}G(!s.31)d();H 1W(){G(s.1W)s.1W(L,1u);G(s.26)D.W.1P("7C",[c,s])}H 1J(){G(s.1J)s.1J(c,1u);G(s.26)D.W.1P("7F",[c,s]);G(s.26&&!--D.4O)D.W.1P("7G")}I c},5H:H(s,a,b,e){G(s.3e)s.3e(a,b,e);G(s.26)D.W.1P("7D",[a,s,e])},4O:0,7j:H(a){1U{I!a.1u&&5Z.9O=="5p:"||(a.1u>=7e&&a.1u<9N)||a.1u==7c||a.1u==9K||D.14.2k&&a.1u==12}1V(e){}I Q},7h:H(a,c){1U{J b=a.5I("7g-5R");I a.1u==7c||b==D.4z[c]||D.14.2k&&a.1u==12}1V(e){}I Q},6X:H(a,c,b){J d=a.5I("9J-O"),2N=c=="2N"||!c&&d&&d.1h("2N")>=0,L=2N?a.9I:a.4U;G(2N&&L.1C.2j=="5J")7p"5J";G(b)L=b(L,c);G(c=="1m")D.5u(L);G(c=="3z")L=6u("("+L+")");I L},3n:H(a){J s=[];G(a.1q==2p||a.5w)D.P(a,H(){s.1p(3u(7.34)+"="+3u(7.2x))});N R(J j 1n a)G(a[j]&&a[j].1q==2p)D.P(a[j],H(){s.1p(3u(j)+"="+3u(7))});N s.1p(3u(j)+"="+3u(D.1D(a[j])?a[j]():a[j]));I s.6s("&").1o(/%20/g,"+")}});D.17.1l({1N:H(c,b){I c?7.2g({1Z:"1N",2h:"1N",1y:"1N"},c,b):7.1E(":1G").P(H(){7.V.18=7.5D||"";G(D.1g(7,"18")=="2F"){J a=D("<"+7.2j+" />").6P("1c");7.V.18=a.1g("18");G(7.V.18=="2F")7.V.18="3I";a.21()}}).3l()},1M:H(b,a){I b?7.2g({1Z:"1M",2h:"1M",1y:"1M"},b,a):7.1E(":4j").P(H(){7.5D=7.5D||D.1g(7,"18");7.V.18="2F"}).3l()},78:D.17.2m,2m:H(a,b){I D.1D(a)&&D.1D(b)?7.78.1w(7,19):a?7.2g({1Z:"2m",2h:"2m",1y:"2m"},a,b):7.P(H(){D(7)[D(7).3F(":1G")?"1N":"1M"]()})},9G:H(b,a){I 7.2g({1Z:"1N"},b,a)},9F:H(b,a){I 7.2g({1Z:"1M"},b,a)},9E:H(b,a){I 7.2g({1Z:"2m"},b,a)},9D:H(b,a){I 7.2g({1y:"1N"},b,a)},9M:H(b,a){I 7.2g({1y:"1M"},b,a)},9C:H(c,a,b){I 7.2g({1y:a},c,b)},2g:H(k,j,i,g){J h=D.77(j,i,g);I 7[h.36===Q?"P":"36"](H(){G(7.16!=1)I Q;J f=D.1l({},h),p,1G=D(7).3F(":1G"),46=7;R(p 1n k){G(k[p]=="1M"&&1G||k[p]=="1N"&&!1G)I f.1J.1k(7);G(p=="1Z"||p=="2h"){f.18=D.1g(7,"18");f.33=7.V.33}}G(f.33!=U)7.V.33="1G";f.45=D.1l({},k);D.P(k,H(c,a){J e=2B D.28(46,f,c);G(/2m|1N|1M/.11(a))e[a=="2m"?1G?"1N":"1M":a](k);N{J b=a.6r().1I(/^([+-]=)?([\\d+-.]+)(.*)$/),2b=e.1t(M)||0;G(b){J d=3d(b[2]),2M=b[3]||"2X";G(2M!="2X"){46.V[c]=(d||1)+2M;2b=((d||1)/e.1t(M))*2b;46.V[c]=2b+2M}G(b[1])d=((b[1]=="-="?-1:1)*d)+2b;e.3G(2b,d,2M)}N e.3G(2b,a,"")}});I M})},36:H(a,b){G(D.1D(a)||(a&&a.1q==2p)){b=a;a="28"}G(!a||(1j a=="23"&&!b))I A(7[0],a);I 7.P(H(){G(b.1q==2p)A(7,a,b);N{A(7,a).1p(b);G(A(7,a).K==1)b.1k(7)}})},9X:H(b,c){J a=D.3O;G(b)7.36([]);7.P(H(){R(J i=a.K-1;i>=0;i--)G(a[i].T==7){G(c)a[i](M);a.7n(i,1)}});G(!c)7.5A();I 7}});J A=H(b,c,a){G(b){c=c||"28";J q=D.L(b,c+"36");G(!q||a)q=D.L(b,c+"36",D.2d(a))}I q};D.17.5A=H(a){a=a||"28";I 7.P(H(){J q=A(7,a);q.4s();G(q.K)q[0].1k(7)})};D.1l({77:H(b,a,c){J d=b&&b.1q==a0?b:{1J:c||!c&&a||D.1D(b)&&b,2u:b,41:c&&a||a&&a.1q!=9t&&a};d.2u=(d.2u&&d.2u.1q==4L?d.2u:D.28.5K[d.2u])||D.28.5K.74;d.5M=d.1J;d.1J=H(){G(d.36!==Q)D(7).5A();G(D.1D(d.5M))d.5M.1k(7)};I d},41:{73:H(p,n,b,a){I b+a*p},5P:H(p,n,b,a){I((-29.9r(p*29.9q)/2)+0.5)*a+b}},3O:[],48:U,28:H(b,c,a){7.15=c;7.T=b;7.1i=a;G(!c.3Z)c.3Z={}}});D.28.44={4D:H(){G(7.15.2Y)7.15.2Y.1k(7.T,7.1z,7);(D.28.2Y[7.1i]||D.28.2Y.4w)(7);G(7.1i=="1Z"||7.1i=="2h")7.T.V.18="3I"},1t:H(a){G(7.T[7.1i]!=U&&7.T.V[7.1i]==U)I 7.T[7.1i];J r=3d(D.1g(7.T,7.1i,a));I r&&r>-9p?r:3d(D.2a(7.T,7.1i))||0},3G:H(c,b,d){7.5V=1z();7.2b=c;7.3l=b;7.2M=d||7.2M||"2X";7.1z=7.2b;7.2S=7.4N=0;7.4D();J e=7;H t(a){I e.2Y(a)}t.T=7.T;D.3O.1p(t);G(D.48==U){D.48=4I(H(){J a=D.3O;R(J i=0;i<a.K;i++)G(!a[i]())a.7n(i--,1);G(!a.K){7k(D.48);D.48=U}},13)}},1N:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1N=M;7.3G(0,7.1t());G(7.1i=="2h"||7.1i=="1Z")7.T.V[7.1i]="9m";D(7.T).1N()},1M:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1M=M;7.3G(7.1t(),0)},2Y:H(a){J t=1z();G(a||t>7.15.2u+7.5V){7.1z=7.3l;7.2S=7.4N=1;7.4D();7.15.45[7.1i]=M;J b=M;R(J i 1n 7.15.45)G(7.15.45[i]!==M)b=Q;G(b){G(7.15.18!=U){7.T.V.33=7.15.33;7.T.V.18=7.15.18;G(D.1g(7.T,"18")=="2F")7.T.V.18="3I"}G(7.15.1M)7.T.V.18="2F";G(7.15.1M||7.15.1N)R(J p 1n 7.15.45)D.1K(7.T.V,p,7.15.3Z[p])}G(b)7.15.1J.1k(7.T);I Q}N{J n=t-7.5V;7.4N=n/7.15.2u;7.2S=D.41[7.15.41||(D.41.5P?"5P":"73")](7.4N,n,0,1,7.15.2u);7.1z=7.2b+((7.3l-7.2b)*7.2S);7.4D()}I M}};D.1l(D.28,{5K:{9l:9j,9i:7e,74:9g},2Y:{2e:H(a){a.T.2e=a.1z},2c:H(a){a.T.2c=a.1z},1y:H(a){D.1K(a.T.V,"1y",a.1z)},4w:H(a){a.T.V[a.1i]=a.1z+a.2M}}});D.17.2i=H(){J b=0,1S=0,T=7[0],3q;G(T)ao(D.14){J d=T.1d,4a=T,1s=T.1s,1Q=T.2z,5U=2k&&3r(5B)<9c&&!/9a/i.11(v),1g=D.2a,3c=1g(T,"30")=="3c";G(T.7y){J c=T.7y();1e(c.1A+29.2f(1Q.1C.2e,1Q.1c.2e),c.1S+29.2f(1Q.1C.2c,1Q.1c.2c));1e(-1Q.1C.6b,-1Q.1C.6a)}N{1e(T.5X,T.5W);1B(1s){1e(1s.5X,1s.5W);G(42&&!/^t(98|d|h)$/i.11(1s.2j)||2k&&!5U)2C(1s);G(!3c&&1g(1s,"30")=="3c")3c=M;4a=/^1c$/i.11(1s.2j)?4a:1s;1s=1s.1s}1B(d&&d.2j&&!/^1c|2K$/i.11(d.2j)){G(!/^96|1T.*$/i.11(1g(d,"18")))1e(-d.2e,-d.2c);G(42&&1g(d,"33")!="4j")2C(d);d=d.1d}G((5U&&(3c||1g(4a,"30")=="5x"))||(42&&1g(4a,"30")!="5x"))1e(-1Q.1c.5X,-1Q.1c.5W);G(3c)1e(29.2f(1Q.1C.2e,1Q.1c.2e),29.2f(1Q.1C.2c,1Q.1c.2c))}3q={1S:1S,1A:b}}H 2C(a){1e(D.2a(a,"6V",M),D.2a(a,"6U",M))}H 1e(l,t){b+=3r(l,10)||0;1S+=3r(t,10)||0}I 3q};D.17.1l({30:H(){J a=0,1S=0,3q;G(7[0]){J b=7.1s(),2i=7.2i(),4c=/^1c|2K$/i.11(b[0].2j)?{1S:0,1A:0}:b.2i();2i.1S-=25(7,\'94\');2i.1A-=25(7,\'aF\');4c.1S+=25(b,\'6U\');4c.1A+=25(b,\'6V\');3q={1S:2i.1S-4c.1S,1A:2i.1A-4c.1A}}I 3q},1s:H(){J a=7[0].1s;1B(a&&(!/^1c|2K$/i.11(a.2j)&&D.1g(a,\'30\')==\'93\'))a=a.1s;I D(a)}});D.P([\'5e\',\'5G\'],H(i,b){J c=\'4y\'+b;D.17[c]=H(a){G(!7[0])I;I a!=12?7.P(H(){7==1b||7==S?1b.92(!i?a:D(1b).2e(),i?a:D(1b).2c()):7[c]=a}):7[0]==1b||7[0]==S?46[i?\'aI\':\'aJ\']||D.71&&S.1C[c]||S.1c[c]:7[0][c]}});D.P(["6N","4b"],H(i,b){J c=i?"5e":"5G",4f=i?"6k":"6i";D.17["5s"+b]=H(){I 7[b.3y()]()+25(7,"57"+c)+25(7,"57"+4f)};D.17["90"+b]=H(a){I 7["5s"+b]()+25(7,"2C"+c+"4b")+25(7,"2C"+4f+"4b")+(a?25(7,"6S"+c)+25(7,"6S"+4f):0)}})})();',62,669,'|||||||this|||||||||||||||||||||||||||||||||||if|function|return|var|length|data|true|else|type|each|false|for|document|elem|null|style|event||nodeName|||test|undefined||browser|options|nodeType|fn|display|arguments|url|window|body|parentNode|add|msie|css|indexOf|prop|typeof|call|extend|script|in|replace|push|constructor|text|offsetParent|cur|status|div|apply|firstChild|opacity|now|left|while|documentElement|isFunction|filter|className|hidden|handle|match|complete|attr|ret|hide|show|dataType|trigger|doc|split|top|table|try|catch|success|break|cache|height||remove|tbody|string|guid|num|global|ready|fx|Math|curCSS|start|scrollTop|makeArray|scrollLeft|max|animate|width|offset|tagName|safari|map|toggle||done|Array|find|toUpperCase|button|special|duration|id|copy|value|handler|ownerDocument|select|new|border|exec|stack|none|opera|nextSibling|pushStack|target|html|inArray|unit|xml|bind|GET|isReady|merge|pos|timeout|delete|one|selected|px|step|jsre|position|async|preventDefault|overflow|name|which|queue|removeChild|namespace|insertBefore|nth|removeData|fixed|parseFloat|error|readyState|multiFilter|createElement|rl|re|trim|end|_|param|first|get|results|parseInt|slice|childNodes|encodeURIComponent|append|events|elems|toLowerCase|json|readyList|setTimeout|grep|mouseenter|color|is|custom|getElementsByTagName|block|stopPropagation|addEventListener|callee|proxy|mouseleave|timers|defaultView|password|disabled|last|has|appendChild|form|domManip|props|ajax|orig|set|easing|mozilla|load|prototype|curAnim|self|charCode|timerId|object|offsetChild|Width|parentOffset|src|unbind|br|currentStyle|clean|float|visible|relatedTarget|previousSibling|handlers|isXMLDoc|on|setup|nodeIndex|unique|shift|javascript|child|RegExp|_default|deep|scroll|lastModified|teardown|setRequestHeader|timeStamp|update|empty|tr|getAttribute|innerHTML|setInterval|checked|fromElement|Number|jQuery|state|active|jsonp|accepts|application|dir|input|responseText|click|styleSheets|unload|not|lastToggle|outline|mouseout|getPropertyValue|mouseover|getComputedStyle|bindReady|String|padding|pageX|metaKey|keyCode|getWH|andSelf|clientX|Left|all|visibility|container|index|init|triggered|removeAttribute|classFilter|prevObject|submit|file|after|windowData|inner|client|globalEval|sibling|jquery|absolute|clone|wrapAll|dequeue|version|triggerHandler|oldblock|ctrlKey|createTextNode|Top|handleError|getResponseHeader|parsererror|speeds|checkbox|old|00|radio|swing|href|Modified|ifModified|lastChild|safari2|startTime|offsetTop|offsetLeft|username|location|ajaxSettings|getElementById|isSimple|values|selectedIndex|runtimeStyle|rsLeft|_load|loaded|DOMContentLoaded|clientTop|clientLeft|toElement|srcElement|val|pageY|POST|unshift|Bottom|clientY|Right|fix|exclusive|detachEvent|cloneNode|removeEventListener|swap|toString|join|attachEvent|eval|substr|head|parse|textarea|reset|image|zoom|odd|even|before|prepend|exclude|expr|quickClass|quickID|uuid|quickChild|continue|Height|textContent|appendTo|contents|open|margin|evalScript|borderTopWidth|borderLeftWidth|parent|httpData|setArray|CSS1Compat|compatMode|boxModel|cssFloat|linear|def|webkit|nodeValue|speed|_toggle|eq|100|replaceWith|304|concat|200|alpha|Last|httpNotModified|getAttributeNode|httpSuccess|clearInterval|abort|beforeSend|splice|styleFloat|throw|colgroup|XMLHttpRequest|ActiveXObject|scriptCharset|callback|fieldset|multiple|processData|getBoundingClientRect|contentType|link|ajaxSend|ajaxSuccess|ajaxError|col|ajaxComplete|ajaxStop|ajaxStart|serializeArray|notmodified|keypress|keydown|change|mouseup|mousedown|dblclick|focus|blur|stylesheet|hasClass|rel|doScroll|black|hover|solid|cancelBubble|returnValue|wheelDelta|view|round|shiftKey|resize|screenY|screenX|relatedNode|mousemove|prevValue|originalTarget|offsetHeight|keyup|newValue|offsetWidth|eventPhase|detail|currentTarget|cancelable|bubbles|attrName|attrChange|altKey|originalEvent|charAt|0n|substring|animated|header|noConflict|line|enabled|innerText|contains|only|weight|font|gt|lt|uFFFF|u0128|size|417|Boolean|Date|toggleClass|removeClass|addClass|removeAttr|replaceAll|insertAfter|prependTo|wrap|contentWindow|contentDocument|iframe|children|siblings|prevAll|wrapInner|nextAll|outer|prev|scrollTo|static|marginTop|next|inline|parents|able|cellSpacing|adobeair|cellspacing|522|maxLength|maxlength|readOnly|400|readonly|fast|600|class|slow|1px|htmlFor|reverse|10000|PI|cos|compatible|Function|setData|ie|ra|it|rv|getData|userAgent|navigator|fadeTo|fadeIn|slideToggle|slideUp|slideDown|ig|responseXML|content|1223|NaN|fadeOut|300|protocol|send|setAttribute|option|dataFilter|cssText|changed|be|Accept|stop|With|Requested|Object|can|GMT|property|1970|Jan|01|Thu|Since|If|Type|Content|XMLHTTP|th|Microsoft|td|onreadystatechange|onload|cap|charset|colg|host|tfoot|specified|with|1_|thead|leg|plain|attributes|opt|embed|urlencoded|www|area|hr|ajaxSetup|meta|post|getJSON|getScript|marginLeft|img|elements|pageYOffset|pageXOffset|abbr|serialize|pixelLeft'.split('|'),0,{}));// $Id: drupal.js,v 1.41.2.4 2009/07/21 08:59:10 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;// $Id: ajax_vote_up_down.js,v 1.6.2.7 2009/08/26 19:28:01 ingo86 Exp $

/**
 * Pre-processing for the vote database object creation.
 */
Drupal.behaviors.voteUpDownAutoAttach = function () {
  var vdb = [];
  $('span.vote-up-inact, span.vote-down-inact, span.vote-up-act, span.vote-down-act').each(function () {
    // Read in the path to the PHP handler.
    var uri = $(this).attr('title');
    // Remove the title, so no tooltip will displayed.
    $(this).removeAttr('title');
    // Remove the href link.
    //$(this).html('');
    // Create an object with this uri, so that we can attach events to it.
    if (!vdb[uri]) {
      vdb[uri] = new Drupal.VDB(this, uri);
    }
  });
}

/**
 * The Vote database object
 */
Drupal.VDB = function (elt, uri) {
  var db = this;
  this.elt = elt;
  this.uri = uri;
  this.id = $(elt).attr('id');
  this.dir1 = this.id.indexOf('vote_up') > -1 ? 'up' : 'down';
  this.dir2 = this.dir1 == 'up' ? 'down' : 'up';
  $(elt).click(function (event) {
    // Ajax POST request for the voting data
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: db.uri,
      success: function (data) {
        // Extract the cid so we can change other elements for the same cid
        var cid = db.id.match(/[0-9]+$/);
        var pid = 'vote_points_' + cid;
        // Update the voting arrows
        $('#' + db.id + '.vote-' + db.dir1 + '-inact').removeClass('vote-' + db.dir1 + '-inact').addClass('vote-' + db.dir1 + '-act');
        if (!$('#' + 'vote_' + db.dir2 + '_' + cid).hasClass(db.dir2 + '-inact')) {
          $('#' + 'vote_' + db.dir2 + '_' + cid).removeClass('vote-' + db.dir2 + '-act').addClass('vote-' + db.dir2 + '-inact');
        }
        // Update the points
        $('#' + pid).html(data);
      },
      error: function (xmlhttp) {
        alert('An HTTP '+ xmlhttp.status +' error occured. Your vote was not submitted!\n');
    }
    });
  });
};// $Id: flag.js,v 1.1.2.7.2.4 2009/10/28 00:01:32 quicksketch Exp $

/**
 * Terminology:
 *
 *   "Link" means "Everything which is in flag.tpl.php" --and this may contain
 *   much more than the <A> element. On the other hand, when we speak
 *   specifically of the <A> element, we say "element" or "the <A> element".
 */

/**
 * The main behavior to perform AJAX toggling of links.
 */
Drupal.flagLink = function(context) {
  /**
   * Helper function. Updates a link's HTML with a new one.
   *
   * @param element
   *   The <A> element.
   * @return
   *   The new link.
   */
  function updateLink(element, newHtml) {
    var $newLink = $(newHtml);

    // Initially hide the message so we can fade it in.
    $('.flag-message', $newLink).css('display', 'none');

    // Reattach the behavior to the new <A> element. This element
    // is either whithin the wrapper or it is the outer element itself.
    var $nucleus = $newLink.is('a') ? $newLink : $('a.flag', $newLink);
    $nucleus.addClass('flag-processed').click(flagClick);

    // Find the wrapper of the old link.
    var $wrapper = $(element).parents('.flag-wrapper:first');
    if ($wrapper.length == 0) {
      // If no ancestor wrapper was found, or if the 'flag-wrapper' class is
      // attached to the <a> element itself, then take the element itself.
      $wrapper = $(element);
    }
    // Replace the old link with the new one.
    $wrapper.after($newLink).remove();
    Drupal.attachBehaviors($newLink.get(0));

    $('.flag-message', $newLink).fadeIn();
    setTimeout(function(){ $('.flag-message', $newLink).fadeOut() }, 3000);
    return $newLink.get(0);
  }

  /**
   * A click handler that is attached to all <A class="flag"> elements.
   */
  function flagClick() {
    // 'this' won't point to the element when it's inside the ajax closures,
    // so we reference it using a variable.
    var element = this;

    // While waiting for a server response, the wrapper will have a
    // 'flag-waiting' class. Themers are thus able to style the link
    // differently, e.g., by displaying a throbber.
    var $wrapper = $(element).parents('.flag-wrapper');
    if ($wrapper.is('.flag-waiting')) {
      // Guard against double-clicks.
      return false;
    }
    $wrapper.addClass('flag-waiting');

    // Hide any other active messages.
    $('span.flag-message:visible').fadeOut();

    // Send POST request
    $.ajax({
      type: 'POST',
      url: element.href,
      data: { js: true },
      dataType: 'json',
      success: function (data) {
        if (data.status) {
          // Success.
          data.link = $wrapper.get(0);
          $.event.trigger('flagGlobalBeforeLinkUpdate', [data]);
          if (!data.preventDefault) { // A handler may cancel updating the link.
            data.link = updateLink(element, data.newLink);
          }
          $.event.trigger('flagGlobalAfterLinkUpdate', [data]);
        }
        else {
          // Failure.
          alert(data.errorMessage);
          $wrapper.removeClass('flag-waiting');
        }
      },
      error: function (xmlhttp) {
        alert('An HTTP error '+ xmlhttp.status +' occurred.\n'+ element.href);
        $wrapper.removeClass('flag-waiting');
      }
    });
    return false;
  }

  $('a.flag-link-toggle:not(.flag-processed)').addClass('flag-processed').click(flagClick);
};

/**
 * A behvior specifically for anonymous users. Update links to the proper state.
 */
Drupal.flagAnonymousLinks = function(context) {
  // Swap in current links. Cookies are set by PHP's setcookie() upon flagging.

  // Build a list of user-flags.
  var userFlags = Drupal.flagCookie('flags');
  if (userFlags) {
    userFlags = userFlags.split('+');
    for (var n in userFlags) {
      var flagInfo = userFlags[n].split('_');
      var flagName = flagInfo[0];
      var contentId = flagInfo[1];
      // User flags always default to off and the JavaScript toggles them on.
      $('.flag-' + flagName + '-' + contentId, context).after(Drupal.settings.flag.templates[flagName + '_' + contentId]).remove();
    }
  }

  // Build a list of global flags.
  var globalFlags = document.cookie.match(/flag_global_([a-z0-9\-]+)_([0-9]+)=([01])/ig);
  if (globalFlags) {
    for (var n in globalFlags) {
      var flagInfo = globalFlags[n].match(/flag_global_([a-z0-9\-]+)_([0-9]+)=([01])/i);
      var flagName = flagInfo[1];
      var contentId = flagInfo[2];
      var flagState = (flagInfo[3] == '1') ? 'flag' : 'unflag';
      // Global flags are tricky, they may or may not be flagged in the page
      // cache. The template always contains the opposite of the current state.
      // So when checking global flag cookies, we need to make sure that we
      // don't swap out the link when it's already in the correct state.
      $('.flag-' + flagName + '-' + contentId, context).each(function() {
        if ($(this).find('.' + flagState + '-action').size()) {
          $(this).after(Drupal.settings.flag.templates[flagName + '_' + contentId]).remove();
        }
      });
    }
  }
}

/**
 * Utility function used to set Flag cookies.
 *
 * Note this is a direct copy of the jQuery cookie library.
 * Written by Klaus Hartl.
 */
Drupal.flagCookie = function(name, value, options) {
  if (typeof value != 'undefined') { // name and value given, set cookie
    options = options || {};
    if (value === null) {
      value = '';
      options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
      options.expires = -1;
    }
    var expires = '';
    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
      var date;
      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
      } else {
        date = options.expires;
      }
      expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
    }
    // NOTE Needed to parenthesize options.path and options.domain
    // in the following expressions, otherwise they evaluate to undefined
    // in the packed version for some reason...
    var path = options.path ? '; path=' + (options.path) : '';
    var domain = options.domain ? '; domain=' + (options.domain) : '';
    var secure = options.secure ? '; secure' : '';
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
  } else { // only name given, get cookie
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
};

Drupal.behaviors.flagLink = function(context) {
  // For anonymous users, swap out links with their current state for the user.
  if (Drupal.settings.flag && Drupal.settings.flag.templates) {
    Drupal.flagAnonymousLinks(context);
  }

  // On load, bind the click behavior for all links on the page.
  Drupal.flagLink(context);
};
;// $Id: pathauto.js,v 1.4.2.1 2009/04/18 17:10:10 freso Exp $
if (Drupal.jsEnabled) {
  $(document).ready(function() {
    if ($("#edit-pathauto-perform-alias").size() && $("#edit-pathauto-perform-alias").attr("checked")) {
      // Disable input and hide its description.
      $("#edit-path").attr("disabled","disabled");
      $("#edit-path-wrapper > div.description").hide(0);
    }
    $("#edit-pathauto-perform-alias").bind("click", function() {
      if ($("#edit-pathauto-perform-alias").attr("checked")) {
        // Auto-alias checked; disable input.
        $("#edit-path").attr("disabled","disabled");
        $("#edit-path-wrapper > div[class=description]").slideUp('fast');
      }
      else {
        // Auto-alias unchecked; enable input.
        $("#edit-path").removeAttr("disabled");
        $("#edit-path")[0].focus();
        $("#edit-path-wrapper > div[class=description]").slideDown('fast');
      }
    });
  });
}
;// $Id: bueditor.js,v 1.20.2.12 2009/09/09 15:51:00 ufku Exp $

//Global container
var BUE = {
  'preset': {push: function(arr) {this[arr[0]] = arr[1];}},
  'instances': [],
  'popups': {},
  'dialog': {},
  'templates': {},
  'mode': (window.getSelection || document.getSelection) ? 1 : (document.selection && document.selection.createRange ? 2 : 0 )
};

//Get editor settings from Drupal.settings and process preset textareas.
BUE.behavior = function(context) {
  if (Drupal.settings.BUE) {
    $.each(Drupal.settings.BUE.templates||{}, function (id, tpl) {
      BUE.templates[id] = BUE.templates[id] || $.extend({}, tpl);
    });
    Drupal.settings.BUE.templates = {};
    $.each(Drupal.settings.BUE.preset||{}, function (id, tplid) {
      BUE.preset[id] = BUE.preset[id] || tplid;
    });
    Drupal.settings.BUE.preset = {};
  }
  $.each(BUE.preset, function (tid, tplid) {
    BUE.processTextarea($('#'+ tid, context).get(0), tplid);
  });
};

//editor settle.
BUE.initiate = function () {
  (Drupal.behaviors.BUE = BUE.behavior)(document);
  //set editor quickPop.
  var qp = BUE.quickPop = BUE.createPopup('bue-quickpop');
  $(qp.rows[0]).hide();
  qp.oldopen = qp.open;
  qp.open = function(content, effect) {
    qp.oldopen(null, content, effect);
    $(document).mousedown(qpToEnd);
    function qpToEnd() {$(document).mouseup(qpEnd);}
    function qpEnd() {$(document).unbind('mousedown', qpToEnd).unbind('mouseup', qpEnd); qp.close();}
  };
  //set editor dialog
  BUE.dialog.popup = BUE.createPopup('bue-dialog');
  BUE.dialog.popup.close = function (effect) {BUE.dialog.close(effect);}
  //fix enter key triggering button click on autocomplete fields.
  $('input.form-autocomplete').keydown(function(e) {return e.keyCode != 13});
};

//integrate editor template into textarea T
BUE.processTextarea = function (T, tplid) {
  var T = typeof(T) == 'string' ? $('#'+ T).get(0) : T;
  if (!BUE.templates[tplid] || !T || !T.tagName || T.tagName != 'TEXTAREA' || $(T).is(':hidden')) return false;
  if (T.editor) return T.editor;
  var E = new BUE.instance(T, tplid);
  $(T).focus(function () {
    if (!(BUE.active == this.editor || BUE.dialog.editor)) {
      BUE.active.accesskeys(false);
      BUE.active = this.editor;
      BUE.active.accesskeys(true);
    }
  });
  $.each(E.buttons, function(i) {
    var arr = this.id.split('-');
    this.eindex = arr[1];
    this.bid = arr[3];
    this.bindex = i;
    this.onclick = function(){return BUE.buttonClick(this.eindex, this.bindex)};
  });
  if (E.index == 0) {
    BUE.active = E;
  }
  else if (BUE.active.textArea.disabled) {
    BUE.active.accesskeys(false);
    BUE.active = E;
  }
  else {
    E.accesskeys(false);
  }
  return E;
};

//create an editor instance
BUE.instance = function (T, tplid) {
  this.index = BUE.instances.length;
  this.textArea = T;
  this.textArea.editor = BUE.instances[this.index] = this;
  this.tpl = BUE.templates[tplid];
  this.UI = $(BUE.theme(tplid).replace(/\%n/g, this.index)).insertBefore(T);
  this.buttons = $('input.bue', this.UI).get();
  this.bindex = null;
  this.safeToPreview = T.value.indexOf('<') == -1;
  this.focus = function () {
    this.textArea.focus();
    return this;
  };
  this.getContent = function () {
    return BUE.processText(this.textArea.value);
  };
  this.setContent = function (content) {
    var st = this.textArea.scrollTop;
    this.textArea.value = content;
    this.textArea.scrollTop = st;
    return this;
  };
  this.getSelection = function () {
    var pos = this.posSelection();
    return this.getContent().substring(pos.start, pos.end);
  };
  this.replaceSelection = function (txt, cursor) {
    var txt = BUE.processText(txt);
    var pos = this.posSelection();
    var content = this.getContent();
    this.setContent(content.substr(0, pos.start) + txt + content.substr(pos.end));
    var end = cursor == 'start' ? pos.start : pos.start+txt.length;
    var start = cursor == 'end' ? end : pos.start;
    this.makeSelection(start, end);
    return this;
  };
  this.tagSelection = function (left, right, cursor) {
    var left = BUE.processText(left);
    var right = BUE.processText(right);
    var llen = left.length;
    var pos = this.posSelection();
    var content = this.getContent();
    this.setContent(content.substr(0, pos.start) + left + content.substring(pos.start, pos.end) + right + content.substr(pos.end));
    var end = cursor=='start' ? pos.start+llen : pos.end+llen;
    var start = cursor=='end' ? end : pos.start+llen;
    this.makeSelection(start, end);
    return this;
  };
  this.makeSelection = function (start, end) {
    if (end < start) end = start;
    BUE.selMake(this.textArea, start, end);
    if (BUE.dialog.esp) BUE.dialog.esp = {'start': start, 'end': end};
    return this;
  };
  this.posSelection = function () {
    return BUE.dialog.esp ? BUE.dialog.esp : BUE.selPos(this.textArea);
  };
  this.buttonsDisabled = function (state, bindex) {
    for (var i=0; B = this.buttons[i]; i++) {
      B.disabled = i == bindex ? !state : state;
    }
    return this;
  };
  this.accesskeys = function (state) {
    for (var i=0; B = this.buttons[i]; i++) {
      B.accessKey = state ? this.tpl.buttons[B.bid][3] : '';
    }
    return this;
  };
};

//execute button's click event
BUE.buttonClick = function (eindex, bindex) { try {
  var E = BUE.active = BUE.instances[eindex];
  var domB = E.buttons[bindex];
  var tplB = E.tpl.buttons[domB.bid];
  var content = tplB[1];
  E.bindex = bindex;
  BUE.dialog.close();
  if (tplB[4]) {//execute button script.
    tplB[4](E);
  }
  else if (content) {//or insert content
    var arr = content.split('%TEXT%');
    if (arr.length == 2) E.tagSelection(arr[0], arr[1]);
    else E.replaceSelection(arr.length == 1 ? content : arr.join(E.getSelection()), 'end');
  }
  if (!$(domB).hasClass('stay-clicked')) E.focus();
  } catch (e) {alert(e.name +': '+ e.message);}
  return false;
};

//return html of editor template buttons
BUE.theme = function (tplid) {
  if (!BUE.templates[tplid]) return '';
  var ET = BUE.templates[tplid];
  if (ET.html) return ET.html;
  ET.html = '<div class="editor-container" id="editor-%n">';
  //B(0-title, 1-content, 2-icon or caption, 3-accesskey) and 4-function for js buttons
  for (var i = 0; B = ET.buttons[i]; i++) {
    var img = B[2].search(/\.(png|gif|jpg)$/i) != -1 ? ((new Image()).src = ET.iconpath +'/'+ B[2]) : null;
    B[4] = B[1].substr(0, 3) == 'js:' ? new Function('E', B[1].substr(3)) : null;//set functions for js buttons
    if (B[0].substr(0, 4) == 'tpl:') {//theme button.
      ET.html += B[4] ? B[4]() : B[1];
      ET.html += B[2] ? ('<span class="separator">'+ (img ? '<img src="'+ img +'" />' : B[2]) +'</span>') : '';
    }
    else {//functional button
      var attr = img ? ['image', 'image', 'src="'+ img +'" alt="'+ B[2] +'"'] : ['button', 'text', 'value="'+ B[2] +'"'];
      ET.html += '<input id="editor-%n-button-'+ i +'" title="'+ B[0] +'" accesskey="'+ B[3] +'" type="'+ attr[0] +'" class="bue editor-'+ attr[1] +'-button" '+ attr[2] +' tabindex="-1" />';
    }
  }
  ET.html += '</div>'; 
  return ET.html;
};

//general popup&dialog html
BUE.popHtml = '<table class="editor-popup" id="%id" style="position: absolute; display: none;"><tbody><tr class="head even"><td class="title">%tt</td><td class="close"><a>x</a></td></tr><tr class="body odd"><td colspan="2" class="cnt">%ct</td></tr></tbody></table>';

//create/open editor popup object
BUE.openPopup = function (id, title, content, effect) {
  var popup = BUE.createPopup(id);
  popup.open(title, content, effect);
  return popup;
}
BUE.createPopup = function (id, title, content) {
  if (BUE.popups[id]) {
    return BUE.popups[id];
  }
  var html = BUE.popHtml.replace('%id', id).replace('%tt', title||'').replace('%ct', content||'');
  var popup = BUE.popups[id] = $(html).appendTo(document.body).get(0);
  $(popup.rows[0]).mousedown(function (e) {
    var X = e.pageX;
    var Y = e.pageY;
    var pos = $(popup).offset();
    $(document).mousemove(doDrag).mouseup(endDrag);
    function doDrag(e) {
      popup.style.left = (pos.left+e.pageX-X) +'px';
      popup.style.top = (pos.top+e.pageY-Y) +'px';
      return false;
    }
    function endDrag(e) {
      $(document).unbind('mousemove', doDrag).unbind('mouseup', endDrag);
    }
  });
  $(popup.rows[0].cells[1].firstChild).click(function() {popup.close();});
  popup.open = function (title, content, effect) {
    if (typeof(title) == 'string') this.rows[0].cells[0].innerHTML = title;
    if (typeof(content) == 'string') this.rows[1].cells[0].innerHTML = content;
    var pos = $(BUE.active.buttons[BUE.active.bindex]).offset();
    this.style.left = pos.left-20 +'px';
    this.style.top = pos.top+10 +'px';
    this.editor = BUE.active;
    $(this)[effect||'show']();
  };
  popup.close = function (effect) {
    $(this)[effect||'hide']();
  };
  return popup;
};

//dialog functions
BUE.dialog.open = function (title, content, effect) {
  if (this.editor) this.close();
  this.editor = BUE.active;
  this.editor.buttonsDisabled(true);
  $(this.editor.buttons[this.editor.bindex]).addClass('stay-clicked');
  this.esp = this.editor.posSelection();
  this.popup.open(title, content, effect);
  this.oldfocus = this.editor.textArea.onfocus;
  this.editor.textArea.onfocus = function () {this.blur();};
};
BUE.dialog.close = function (effect) {
  if (this.editor) {
    this.editor.textArea.onfocus = this.oldfocus;
    this.editor.buttonsDisabled(false);
    $(this.editor.buttons[this.editor.bindex]).removeClass('stay-clicked');
    if (this.editor == BUE.active) {// restore previous states
      if (BUE.mode == 2) this.editor.makeSelection(this.esp.start, this.esp.end); // selection for IE
      else this.editor.focus(); // focus for FF
    }
    this.editor = null;
    this.esp = null;
    $(this.popup)[effect||'hide']();
  }
};

// browser specific functions.
BUE.processText = function (text) {return text;};//this is the default process
if (BUE.mode == 0) {//mode 0 - selection handling not-supported
  BUE.selPos = function (T) {return {'start': T.value.length, 'end': T.value.length};};
  BUE.selMake = function (T, start, end) {};
}
else if (BUE.mode == 1) {//mode 1 - Firefox, opera, safari.
  BUE.selPos = function (T) { return {'start': T.selectionStart||0, 'end': T.selectionEnd||0};};
  BUE.selMake = function (T, start, end) {T.setSelectionRange(start, end);};
}
else if (BUE.mode == 2) {//mode 2 - IE.
  BUE.selPos = function (T) {
    T.focus();
    var val = T.value.replace(/\r\n/g, '\n');
    var mark = '~`^'; //dummy text.
    for (var i = 0; val.indexOf(mark) != -1; i++) mark += mark.charAt(i); //make sure mark is unique.
    var mlen = mark.length;
    var range = document.selection.createRange();
    var bm = range.getBookmark();
    var slen = range.text.replace(/\r\n/g, '\n').length;
    range.text = mark;
    var tmp = T.value.replace(/\r\n/g, '\n');
    var start = tmp.indexOf(mark);
    for (var i = 0; tmp.charAt(start+i+mlen) == '\n'; i++);
    var end = start+slen;
    for (; val.charAt(end) == '\n'; end++);
    end -= i;
    T.value = val;
    if (start == end && !val.charAt(end)) range.collapse(false);//bookmark has problems with a cursor at the end
    else range.moveToBookmark(bm);
    range.select();
    return {'start': start, 'end': end};
  };
  BUE.selMake = function (T, start, end) {
    range = T.createTextRange();
    range.collapse();
    range.moveEnd('character', end);
    range.moveStart('character', start);
    range.select();
  };
  BUE.processText = function (text) {return text.replace(/\r\n/g, '\n')};
}

$(document).ready(BUE.initiate);
var editor = editor || BUE;//not to break old button scripts.
;// $Id: markdowneditor.js,v 1.1.2.1.2.6 2009/02/04 21:32:12 solipsist Exp $

/**
 * @file
 * MarkdownEditor JS library for BUEditor.
 *
 * @author Jakob Persson <jakob@nodeone.se>
 * @author Adam Bergmark
 */


/*******************************************************************************
 * IMPORTED HELPERS
 *******************************************************************************/

Cactus = window.Cactus || {};
Cactus.Addon = Cactus.Addon || {};
Cactus.DOM = Cactus.DOM || {};

Cactus.Addon.Function = (function () {

  /**
   * @param Object scope The scope to call the function in
   * @param mixed *args Arguments to pass to the function
   *          bind is called on
   * @return Function(arg1)
   *  @param mixed *args  Additional arguments to concatenate
   *            to the outer args before calling the function
   *
   * Called on a function A, bind returns a function B
   * which executes A in the scope of the first argument
   * given to bind, passing the rest of bind's arguments
   * concatenated with the arguments to B as arguments to A.
   *
   * Implementation notes:
   * apply is retrieved through Function.prototype since setTimeout
   * has no properties in safari 2 (fixed in webkit nightly - 2007-x).
   */
  Function.prototype.bind = function (scope, arg1) {
    var args = Array.prototype.slice.call (arguments, 1);
    var func = this;
    return function () {
      return Function.prototype.apply.call (
        func,
        scope,
        args.concat (
          Array.prototype.slice.call (arguments)));
    };
  };

  /**
   * Executes a function and returns the specified value afterwards.
   * This is useful when a function does not normally
   * return a value. Example of usage would be
   * if you bind a function to a DOM event but want the event to return
   * false afterwards in order to halt the event.
   * This would be writtes like this:
   * foo.bar.bind (foo).returning (false);
   *
   * Any arguments passed to the function returned will be
   * relayed to the inner function.
   *
   * Concise explanation:
   * Applied to a function A and given an argument V, returning returns a function
   * B that executes A in the global scope applying arguments sent to B to A,
   * followed by B returning V.
   *
   * @param mixed value  The value to return after executing the function
   * @return Function  A function that executes the function and
   *           then returns the value specified.
   *     @param mixed *args  arguments that are passed through to the inner
   *               function.
   */
  Function.prototype.returning = function (value) {
    var func = this;
    return function () {
      func.apply (null, arguments);
      return value;
    };
  };

  /**
   * Applied to a function F, wait returns a function G that sets a timeout that
   * executes F after the specified delay. Any additional arguments passed to G
   * are forwarded to F.
   *
   * @param natural delay
   *   The delay in milli seconds before calling the function F.
   * @return Function
   *   The new function, that when executed sets a timeout to call F.
   */
  Function.prototype.wait = function (delay) {
    delay = delay || 0;
    return Function.prototype.bind.call(setTimeout, null, this, delay);
  };
})();

Cactus.DOM.Array = (function () {
  /**
   * Empties an array, use this function when there are several
   * references to an array and you can't modify all of them to
   * point to a new array instance.
   *
   * @param Array array
   */
  Array.empty = function (array) {
    array.length = 0;
  };

  /**
   * Removes the specified element from the given array. If removeAll is set
   * element is removed from every index in the array, should it exist
   * under several indices. Otherwise only the first occurence is removed.
   * The function returns true if it found a match, otherwise false.
   * Any indices to the right of the index are shifted to the left
   *
   * @param Array array
   *   The array to remove the element from.
   * @param mixed element
   *   The element to remove.
   * @param optional boolean removeAll = true
   *   If more than one matching element should be removed (if found).
   * @return boolean
   *   The index of the element that was removed, -1 if nothing was removed.
   */
  Array.remove = function (array, element, removeAll) {

    removeAll = removeAll === undefined ? false : !!removeAll
    var newArray = [];
    var removed  = -1;

    function shouldRemove (matchingElements) {
      return matchingElements && (removeAll || removed === -1);
    }
    /*
     * Append the elements we want to keep to newArray
     */
    for (var i = 0; i < array.length; i++) {
      if (shouldRemove (element === array [i])) {
	removed = i;
      } else {
	newArray.push (array[i]);
      }
    }
    /*
     * Move contents of newArray to array
     */
    if (array.length > newArray.length) {
      Array.empty (array);
      while (newArray.length) {
	array.push (newArray.shift());
      }
    }

    return removed;
  };
}) ();

/**
 * @creation 2006
 *
 * ClassNames is a singleton which provides static methods for modifying CSS
 * class names for HTML Elements.
 */
Cactus.DOM.ClassNames = (function () {
    function ClassNames () {

    } ClassNames.prototype = {
	/**
         * Adds a class to an object. But only if the class doesn't already
         * exist on the object
         *
         * @param HTMLElement o
         * @param string className
         */
	add : function (o, className) {
            // Only add if the className isn't already added
	    if (!this.has(o, className)) {
		// If the className property is empty, we can simply overwrite
		// it.
		if (!o.className) {
		    o.className = className;
		    // if it isn't empty, we have to prepend a space so that
		    // "a" and "b" becomes "a b".
		} else {
		    o.className += " " + className;
		}
	    }
	},
	/**
         * Checks if a given className is as a className of o. It assumes that
         * class names are separated by spaces and all other characters will be
         * counted as part of class names.
         *
         * @param HTMLElement o
         * @param string className
         * @return boolean
         */
	has : function (o, className) {
	    return RegExp("(?:^| )" + className + "(?: |$)").test (o.className);
	},
	/**
         * Removes a class from o
         *
         * @param HTMLElement o
         * @param string className
         */
	del : function (o, className) {
	    /*
             * Make sure the class exists, so we don't waste time doing
             * what isn't necessary
             */
	    if (this.has (o, className)) {
		var classNames = this.get (o);
		Array.remove (classNames, className);
		o.className = classNames.join(" ");
	    }
	},
	/**
         * Returns an array containing all classnames of an element
         *
         * @param HTMLElement o
         * @return Array
         */
	get : function (o) {
	    return o.className.split (/\s+/);
	}
    };
    return new ClassNames();
})();

Cactus.DOM.tag = (function () {
  /**
   * Checks if a collection can be iterated through using
   * numeric indices and the length property
   *
   * @param mixed collection
   * @return boolean
   */
  var isArrayLike = function (collection) {
    return !! (collection &&
           (typeof collection === "object") &&
           ("length" in collection) &&
           isFinite (collection.length) &&
           (collection !== window) &&
           !("tagName" in collection));
  };

  function append (o, contents) {
    if (typeof (contents) === "string" || typeof contents === "number") {
      o.appendChild (document.createTextNode (contents));
    } else if (isArrayLike (contents)) {
      if (o.tagName.toLowerCase() === "select") {
        for (var i = 0, option; i < contents.length; i++) {
          option = contents[i];
          o.appendChild (option);
          if (option._selected) {
            option._selected = undefined;
            o.selectedIndex = i;
          }
        }
      } else {
        for (var j = 0; j < contents.length; j++) {
          append (o, contents[j]);
        }
      }
    } else if (contents) {
      o.appendChild (contents);
    }
  }

  /**
   * @param string name  the tag name of the element created.
   * @param optional Hash attributes  cantains html attributes to assign to
   *                  the elements, among other things.
   * @param optional mixed contents
   *         string: a text node with the value is appended to the el.
   *         HTMLElement: the element is appended to the new element
   *         Array<HTMLElement>: all elements are appended.
   */
  function tag (name, attributes, contents) {
    var isIE = false /*@cc_on || true @*/;

    if (!attributes) {
      attributes = {};
    }

    // Due to an IE bug the  name attribute won't be set unless we
    // make this ugly hack.
    var o;
    if (attributes.name && isIE) {
      o = document.createElement ("<" + name + ' name="' + attributes.name + '">');
      delete attributes.name;
    } else {
      o = document.createElement (name);
    }

    if (contents === null || contents === undefined) {
      contents = [];
    }
    else if (!isArrayLike(contents)) {
      contents = [contents];
    }

    var style = attributes.style;
    if (style) {
      for (var p in style) if (style.hasOwnProperty (p)) {
        o.style [p] = style [p];
      }
    }
    delete attributes.style;

    for (var q in attributes) if (attributes.hasOwnProperty (q)) {
      // opera  will set  selected=undefined if  it's set  on an
      // option  that  isn't appended  to  a  select  so we  set
      // _selected instead and then  check for the value when we
      // append to a select.
      if (q === "selected") {
        o._selected = attributes.selected;
      } else {
        o [q] = attributes [q];
      }
    }

    if (contents !== undefined && contents !== null) {
      append (o, contents);
    }

    return o;
  }
  return tag;
})();


/*******************************************************************************
 * MARKDOWN EDITOR
 ******************************************************************************/

window.markdownEditor = window.markdownEditor || {};

/**
 * Localization function, this can be overwritten if localization is available.
 * By default it always returns the argument it gets.
 *
 * @param string
 *  The string to localize.
 * @param args
 *  String arguments to be replaced.
 * @return
 *  The localized string.
 */
markdownEditor.t = Drupal.t || function (string, args) {
  return string;
};

// Whether development options should be enabled.
// This is used to prevent CSS caching.
markdownEditor.development = true;

/*******************************************************************************
 * SETTINGS
 ******************************************************************************/

// Settings for the script.
markdownEditor.settings = {};

/**
 * @return
 *   Whether the IMCE module is enabled.
 */
markdownEditor.settings.isIMCEEnabled = function () {
  return typeof markdownEditor.settings.IMCEPath !== 'undefined';
};

/**
 * Loads the style sheet for the editor dialog.
 * It is only loaded once, and is called by the various buttons that use dialogs.
 */
markdownEditor.settings.addStyleSheet = (function () {
  // Create a persistant variable only accessible to this function.
  var added = false;
  var tag = Cactus.DOM.tag;

  /**
   * Adds a link element to the document's head.
   *
   * @param url
   *   The URL of the css file to add.
   */
  function addCSS (url) {
    // Prevent caching by appending a random GET parameter.
    if (markdownEditor.development) {
      url += "?" + Math.random();
    }
    // Create a link element to include the CSS file.
    document.getElementsByTagName("head")[0].appendChild(tag("link", {
      rel : "stylesheet",
      href : url
    }));
  }

  // Persistant variable for the returned function.
  var added = false;

  // Returns a function that adds the CSS files once only.
  return function () {
    if (!added) {
      addCSS(markdownEditor.settings.cssPath);

      // Add the IE stylesheet in IE.
      if (markdownEditor.extras.browser.ie) {
        addCSS(markdownEditor.settings.cssPath.replace(/\.css$/, "-ie.css"));
      }

      added = true;
    }
  };
})();


/*******************************************************************************
 * EXTRAS
 ******************************************************************************/

markdownEditor.extras = {

  /**
   * Gets the first available descendant of the parent with the specified
   * class name.
   *
   * @param className
   *   The classname to look for. Matches where an element has several class
   *   names is supported.
   * @param parent
   *   Optional. An ancestor of the element to look for. Defaults to the
   *   document object.
   * @return
   *   A HTMLElement. null if no element is found.
   */
  getElementByClassName : function (className, parent) {
    return markdownEditor.extras.getElementsByClassName(className, parent)[0];
  },

  /**
   * Gets all descendants of the parent with the specified class name.
   *
   * @param className
   *   The classname of the elements to look for.
   * @param parent
   *   The parent element to search under, default is document.
   * @return
   *   An array of all found elements, an empty array if none is found.
   */
  getElementsByClassName : function (className, parent) {
    parent = parent || document;
    var elements = parent.getElementsByTagName("*");
    var foundElements = [];
    for (var i = 0; i < elements.length; i++) {
      // Match the  class name, boundaries are  either the start
      // or end of the string, or a space.
      if (new RegExp("(^| )" + className + "( |$)").test(elements[i].className)) {
        foundElements.push(elements[i]);
      }
    }

    return foundElements;
  }

};

/**
 * Browser sniffer.
 */
markdownEditor.extras.browser = {
  ie : /*@cc_on !@*/ false
};

markdownEditor.extras.string = {

  /**
   * Repeats a string a given amount of times.
   * Example: repeat("xy", 3) => "xyxyxy"
   *
   * @param string
   *  The string to repeat.
   * @param count
   *   Natural number. The amount of times to repeat the string.
   * @return
   *  The repeated string.
   */
  repeat : function (string, count) {
    var finalString = "";
    for (var i = 0; i < count; i++) {
      finalString += string;
    }
    return finalString;
  }
};

markdownEditor.extras.collection = {

  /**
   * Executes the given function on every item in the collection, and returns
   * an array of all the results.
   *
   * @param collection
   *   An object with a length property and numbered indices.
   * @param func
   *   The function to execute on every item.
   * @return
   *   An array of func results.
   */
  map : function (collection, func) {
    var results = [];
    // Loop through each item and push the result into the results array.
    for (var i = 0; i < collection.length; i++) {
      results.push(func(collection[i]));
    }
    return results;
  },

  /**
   * Checks which index an object has in a collection.
   * The first match is returned.
   *
   * @param collection
   *   The collection to search through.
   * @param object
   *   The object to look for.
   * @return
   *   The index of the object, or -1 if the object isn't found.
   */
  indexOf : function (collection, object) {
    for (var i = 0; i < collection.length; i++) {
      // If  the object  matches in  the current  iteration, the
      // index is returned.
      if (object === collection[i]) {
        return i;
      }
    }
    return -1;
  }
};

markdownEditor.extras.dom = {

  /**
   * Inserts a node after another one.
   *
   * @param newNode
   *   The node to add.
   * @param previousNode
   *   The node that will become the previousSibling of newNode.
   */
  insertAfter : function (newNode, previousNode) {
    // Insert before the next sibling if it exists.
    if (previousNode.nextSibling) {
      previousNode.parentNode.insertBefore(newNode, previousNode.nextSibling);
    }
    // Otherwise append.
    else {
      previousNode.parentNode.appendChild(newNode);
    }
  },

  /**
   * Inserts an element before another one, or append it if the next element
   * doesn't exist.
   *
   * @param newNode
   *   The node to add.
   * @param nextNode
   *   The node to add the new node before, may be falsy to indicate that
   *   an append to the parent should be done.
   * @param parent
   *   The parent of the nodes, if unspecified the parent of nextNode is
   *   retrieved.
   */
  insertBefore : function (newNode, nextNode, parent) {
    parent = parent || nextNode.parentNode;

    // Insert before nextNode if it exists.
    if (nextNode) {
      parent.insertBefore(newNode, nextNode);
    }
    // Otherwise append to the parent.
    else {
      parent.appendChild(newNode);
    }
  }

};


/*******************************************************************************
 * DIALOG
 ******************************************************************************/

markdownEditor.dialog = {

  /**
   * Gets the element containing the dialog's contents.
   *
   * @return
   *  An HTMLElement.
   */
  getContent : function () {
    return markdownEditor.extras.getElementByClassName("cnt", BUE.dialog.popup);
  },

  /**
   * Gets the first form element inside the dialog.
   *
   * @return
   *   A HTMLFormElemnt, or null if none is found.
   */
  getForm : function () {
    return markdownEditor.dialog.getContent().getElementsByTagName("form")[0];
  },

  /**
   * Wipes the dialog clean.
   */
  clear : function () {
    var content = markdownEditor.dialog.getContent();
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  },

  /**
   * Clears and closes the dialog.
   */
  close : function () {
    markdownEditor.dialog.clearWidth();
    markdownEditor.dialog.clear();
    BUE.dialog.close();
  },

  /**
   * Clears and opens the dialog. Also attaches event listeners for submitting
   * and closing the dialog.
   *
   * @param title
   *   The title of the dialog.
   * @param cssID
   *   The ID to assign to the dialog, for styling with CSS.
   * @param HTMLContents
   *   A string of contents to insert into the dialog.
   */
  open : function (title, cssID, HTMLContents) {
    markdownEditor.dialog.clear();

    cssID = cssID || "markdowneditor-dialog";
    if (!/^markdowneditor-dialog/.test(cssID)) {
      cssID = "markdowneditor-dialog-" + cssID;
    }

    markdownEditor.dialog.getContent().id = cssID;
    // Event keycodes.
    var keys = {
      esc : 27,
      enter : 13
    };

    // Open the dialog and set any content specified.
    BUE.dialog.open(title, HTMLContents || "");

    // Create a keylistener to enable  the user to close or submit the
    // dialog by pressing enter or escape.
    markdownEditor.dialog.getContent().onkeydown = function (e) {
      e = e || window.event;
      var target = e.target || e.srcElement;

      switch (e.keyCode) {

        // Close the dialog if esc is pressed.
        case keys.esc:
          markdownEditor.dialog.close();
          break;

        // Submit any existing form if enter is pressed.
        case keys.enter:

          // Don't submit if enter was pressed inside a textarea.
          if (target && target.tagName.toLowerCase() === "textarea") {
            break;
          }

          // Submit the dialog by calling the onsubmit handler.
          var form = markdownEditor.dialog.getContent().getElementsByTagName("form")[0];
          if (form && form.onsubmit) {
            form.onsubmit();
            return false;
          }
          break;
      }

    };
  },

  /**
   * Creates a form containing a table with label/form element pairs on each
   * row. Table headers can be specified. Each form element is assigned a
   * unique ID so label elements can be associated with them.
   *
   * This function can not create forms with more than two columns. The amount
   * of rows is arbitrary.
   *
   * @param *arguments
   *   Each argument corresponds to a label/form element pair or a table
   *   header row.
   * @return
   *   A HTMLFormElement with a table of form elements and associated labels.
   */
  createForm : function () {
    var tag = Cactus.DOM.tag;

    var rows = [];
    for (var i = 0; i < arguments.length; i++) {

      var element = arguments[i];

      // If the row contains table headers, add them.
      if (element.headers) {
        var tr = tag("tr");
        for (var j = 0; j < element.headers.length; j++) {
          tr.appendChild(tag("th", null, element.headers[i]));
        }
        rows.push(tr);
      }
      // Otherwise create a label/form element pair.
      else {
        element.tagName = element.tagName || "input";
        element.attributes = element.attributes || {};

        // Set the default type for inputs, if none is specified.
        if (element.tagName === "input" && !element.attributes.type) {
          element.attributes.type = "text";
        }

        // Add the  ID into the attributes hash,  unless an ID
        // is specified already.
        element.attributes.id = element.attributes.id || "dialog_element_" + i;

        // Add the ID as the name, if no name is specified.
        element.attributes.name = element.attributes.name || element.attributes.id;

        // Create the form element.
        var formElement = tag(element.tagName, element.attributes, element.contents);

        // If  the  element  is  a  select  and  options  were
        // specified  they  are   created  and  added  to  the
        // select. If  a selected  option was specified  it is
        // marked as selected in the select element.
        if (element.tagName === "select" && element.options) {
          var optionIndex = 0;

          // Options are  passed in as a hash  where the key
          // is the option value and the value is the option
          // text.
          for (var value in element.options) if (element.options.hasOwnProperty(value)) {

            // Append the option.
            formElement.appendChild(tag("option", { value : value }, element.options[value]));

            // If this  element is the  selected one, mark
            // it as such in the select.
            if (element.selected == value) {
              formElement.selectedIndex = optionIndex;
            }
            optionIndex++;
          }
          delete optionIndex;
        }

        // If  the element  is  mandatory, a  red asterisk  is
        // appended to the label, and a class name is added to
        // the element.
        if (element.mandatory) {
          element.label = [element.label, tag("span", { style : { color : "red" } }, "*")];
          element.attributes.className = "mandatory";
        }
				
        // Create the label element.
        var label = tag("label", { htmlFor : element.attributes.id }, element.label);

        // Create  the table  row, the  label is  also created
        // here and is associated with the form element.
        rows.push(tag("tr", null, [
          tag("td", { className : "td-label" }, label),
          tag("td", { className : "td-element" }, formElement)
        ]));
      }
    }

    // Create the form and table/tbody and return the whole structure.
    return tag("form", {
      id : "markdowneditor-dialog-form",
      onsubmit : function () { return false; }
    }, tag("fieldset", null, tag("table", null, tag("tbody", null, rows))));
  },

  /**
   * Sets the onsubmit handler for a form, the form submission is
   * automatically halted.
   *
   * @param form
   *   The HTMLFormElement to assign the event to.
   * @param onsubmit
   *   The function to add as the onsubmit handler.
   */
  setOnsubmit : function (form, onsubmit) {
    form.onsubmit = onsubmit.wait(0).returning(false);
  },

  /**
   * Adds an submit button to the dialog.
   *
   * @param form
   *   The form that the button should be added to.
   * @param onclick
   *   A function that should run when the button is clicked.
   * @param title
   *   An optional localized title of the button. Defaults to t("OK").
   */
  addSubmitButton : function (form, onclick, title) {
    var tag = Cactus.DOM.tag;
    var t = markdownEditor.t;

    title = title || t("OK");

    // Extract the  function with a  timeout so errors  won't keep
    // the function from halting propagation.
    var button = tag("input", {
      type : "button",
      value : title,
      className : "markdowneditor-dialog-submit",
      onclick : onclick.wait(0).returning(false)
    });

    form.appendChild(button);

    return button;
  },

  /**
   * Adds a cancel button that closes the dialog when clicked.
   *
   * @param form
   *   The form that the button should be added to.
   * @param title
   *   An optional localized title for the button. Defaults to t("Cancel").
   * @param prepend
   *   Whether the button should be prepended to the dialog contents, if
   *   false, or if the argument is omitted the button is appended.
   *   Defaults to false.
   * @param confirmation
   *   Whether the user should be prompted to confirm the action.
   *   Defaults to false.
   * @return
   *   The button that was added.
   */
  addCancelButton : function (form, title, prepend, confirmation) {
    var tag = Cactus.DOM.tag;
    var t = markdownEditor.t;
    prepend = !!prepend;
    confirmation = !!confirmation;
    title = title || t("Cancel");

    // Append or prepend the button and set the onclick handler.
    var button = tag("input", {
      type : "button",
      value : title,
      className : "markdowneditor-dialog-cancel",
      onclick : function () {
        // Close the dialog  if no confirmation is needed  or the user
        // confirms.
        if (!confirmation || confirm(t("Any changes will be lost. Are you sure you want to cancel?"))) {
          markdownEditor.dialog.close();
        }
        return false;
      }
    });

    // Add the button to the start of the dialog if prepend is set.
    if (prepend) {
      form.insertBefore(button, form.firstChild);
    }
    // Otherwise append to the end of the dialog.
    else {
      form.appendChild(button);
    }

    return button;
  },

  /**
   * Adds a help button to the dialog, the button closes the dialog and opens
   * the help dialog and scrolls to the appropriate position.
   *
   * @param form
   *   The dialog form to add the button to.
   * @param helpSection
   *   The ID in the dialog to set as the anchor and scroll to.
   *   This argument is unused at the moment, but may be added later on.
   */
  addHelpButton : function (form, helpSection) {
    var tag = Cactus.DOM.tag;
    var t = markdownEditor.t;

    // Create the button.
    var button = tag("input", {
      type : "button",
      value : t("?"),
      className : "markdowneditor-dialog-help-button",
      onclick : markdownEditor.help
    });

    form.appendChild(button);
  },

  /**
   * Gets the title of the dialog.
   *
   * @return
   *   The string title.
   */
  getTitle : function () {
    return BUE.dialog.popup.rows[0].cells[0].innerHTML;
  },

  /**
   * @return
   *   The HTML list containing error messages in the editor dialog.
   */
  _getErrorContainer : function () {
    var tag = Cactus.DOM.tag;

    var errors = document.getElementById("markdowneditor-dialog-errors");

    // Lazy initialization for the element.
    if (!errors) {
      var content = markdownEditor.dialog.getContent();
      errors = tag("ul", { id : "markdowneditor-dialog-errors", style : { display : "none" } });

      // Insert the element into the dialog.
      if (content.childNodes.length) {
        content.insertBefore(errors, content.firstChild);
      }
      else {
        content.appendChild(errors);
      }
    }

    return errors;
  },

  /**
   * Adds an error message to the error list.
   *
   * @param message
   *   The message to display, it can take the same arguments as
   *   Cactus.DOM.tag does for its content attribute.
   */
  addError : function (message) {
    var t = markdownEditor.t;
    var tag = Cactus.DOM.tag;

    message = message || t("An unspecified error occured");

    // Add a LI with the message to the error container.
    var container = markdownEditor.dialog._getErrorContainer();
    container.style.display = "block";
    container.appendChild(tag("li", { className : "error" }, message));
  },

  /**
   * Removes all messages from the error container.
   */
  clearErrors : function () {
    // Clear the contents.
    markdownEditor.dialog._getErrorContainer().innerHTML = "";
  },

  /**
   * Adds a button that opens an IMCE dialog, but only if IMCE is marked as
   * enabled.
   *
   * @param parent
   *   The element to append the button to.
   * @param resultElement
   *   The element to put the result from the IMCE window in.
   */
  addIMCELink : function (parent, resultElement) {
    // Do nothing if IMCE is disabled.
    if (!markdownEditor.settings.isIMCEEnabled()) return;

    var tag = Cactus.DOM.tag;
    var t = markdownEditor.t;
    var windowName = "icmeBrowse";

    // Create a function that only opens the IMCE window if the target
    // of the event is the IMCE link.
    var triggerFunction = function (e) {
      e = e || window.event;
      var target = e.target || e.srcElement;
      if (target !== this) return false;

      // Open the window.
      MDEImceWindow = window.open(markdownEditor.settings.IMCEPath, "icmeBrowse", "width=640, height=480");
      MDEImceWindow['imceOnLoad'] = markdownEditor.dialog.imceWindowLoad;//set a function to be executed when imce loads.
      return false;
    };

    // Append the button and assign its onclick handler that opens the
    // IMCE browse window.
    parent.appendChild(tag("div", null, tag("input", {
      type : "button",
      className : "imce-button",
      value : t("Browse..."),
      onclick : triggerFunction
    })));
  },

  /**
   * Display "send to bueditor" link and bind function to IMCE window unload event
   * @param {Object} win
   */
  imceWindowLoad : function (win) {
		win.imce.setSendTo(markdownEditor.t('Send to @app', {'@app': 'BUEditor'}), markdownEditor.dialog.imceWindowFinish);
    // TODO: Do not use jQuery here:
		$(window).unload(function() {
      if (MDEImceWindow && !MDEImceWindow.closed) MDEImceWindow.close();
    });
  },
	
	/**
	 * Fill BUE dialog fields and close IMCE window
	 * @param {Object} file
	 * @param {Object} win
	 */
	imceWindowFinish : function (file, win) {
	  var el = document.forms['markdowneditor-dialog-form'].elements;
	  var val = {'text' : file.name, 'title' : file.name, 'href' : file.url}
	  for (var i in val) {
	    if (!el[i].value) el[i].value = val[i];
	  }
	  win.blur();//or close()
	  el[el.length-1].focus();//focus on last element.
	},

  /**
   * Gives focus to the first form element in the dialog.
   */
  focusFirst : function () {
    // Get all elements form the dialog.
    var elements = markdownEditor.dialog.getContent().getElementsByTagName("*");
    var element = null;

    // Loop through the elements and try to find a form element.
    for (var i = 0; i < elements.length; i++) {
      if (/^(button|input|textarea|select)$/.test(elements[i].tagName.toLowerCase())) {
        element = elements[i];
        break;
      }
    }

    // If a form element was found, it's given focus.
    if (element) {
      element.focus();
    }
  },

  /**
   * Clears any width settings that were set by setWidth.
   */
  clearWidth : function () {
    var dialog = document.getElementById("bue-dialog");

    if (markdownEditor.extras.browser.ie) {
      dialog.style.width = "";
    }
    else {
      dialog.style.maxWidth = "";
    }
  },

  /**
   * Sets the maximum width of the dialog, useful for dialogs containing text.
   */
  setWidth : function () {
    var dialog = document.getElementById("bue-dialog");
    var isIE = /*@cc_on !@*/ false;

    // maxWidth is width in IE.
    if (markdownEditor.extras.browser.ie) {
      dialog.style.width = "600px";
    }
    else {
      dialog.style.maxWidth = "600px";
    }
  }
};


/*******************************************************************************
 * SELECTION
 ******************************************************************************/

markdownEditor.selection = {

  /**
   * Selects all characters to the end of the the line the end of the selection
   * belongs to.
   */
  selectToEndOfLine : function () {
    var content = BUE.active.getContent();
    var end = BUE.active.posSelection().end;
    while (content.charAt(end) !== "\n" && end < content.length) {
      end++;
    }
    BUE.active.makeSelection(BUE.active.posSelection().start, end);
  },

  /**
   * Returns a given line from the current selection
   *
   * @param lineNumber
   *   An natural number representing the line number.
   * @return
   *   A string. The line with the given line number.
   *   Returns undefined if the line doesn't exist.
   */
  getLine : function (lineNumber) {
    return BUE.active.getSelection().split(/(\r\n?|\n)/)[lineNumber];
  },

  /**
   * Excludes all preceeding and succeeding line breaks from the current
   * selection.
   */
  excludeLineBreaks : function () {
    var pos;
    if (/^(\n+)/.test(BUE.active.getSelection())) {
      pos = BUE.active.posSelection();
      BUE.active.makeSelection(Math.min(pos.start + RegExp.$1.length, pos.end), pos.end);
    }

    if (/(\n+)$/.test(BUE.active.getSelection())) {
      pos = BUE.active.posSelection();
      BUE.active.makeSelection(pos.start, Math.max(pos.start, pos.end - RegExp.$1.length));
    }
  },

  /**
   * Inserts characters around the current selection, the contents of the
   * selection is left unchanged.
   *
   * @param string
   *   The string to insert around the selection.
   */
  insertAround : function (string) {
    mSelection = markdownEditor.selection;

    mSelection.insertBefore(string);
    mSelection.insertAfter(string);
  },

  /**
   * Inserts characters before the current selection, the contents of the
   * selection is left unchanged
   *
   * @param string
   *   The string to insert before the selection.
   */
  insertBefore : function (string) {
    markdownEditor.selection.replace(/^/, string);
    var pos = BUE.active.posSelection();
    BUE.active.makeSelection(pos.start + string.length, pos.end);
  },

  /**
   * Inserts characters after the current selection, the contents of the
   * selection is left unchanged
   *
   * @param string
   *   The string to insert after the selection.
   */
  insertAfter : function (string) {
    markdownEditor.selection.replace(/$/, string);
    var pos = BUE.active.posSelection();
    BUE.active.makeSelection(pos.start, pos.end - string.length);
  },

  /**
   * Checks if the selection is empty.
   *
   * @return
   *   Whether nothing is selected.
   */
  isEmpty : function () {
    return BUE.active.getSelection() === "";
  },

  /**
   * Gets the remaining characters on the same line to the left of where the
   * selection starts.
   *
   * @return
   *   A string of the prefixing characters, or "" if there is no prefix.
   */
  getPrefix : function () {
    var content = BUE.active.getContent();
    var pos = BUE.active.posSelection();

    // If the selection starts at the first character of the document,
    // no prefix exists.
    if (pos.start === 0) return "";

    // The position where  the prefix ends is one step  to the left of
    // where the selection starts.
    var prefixEnd = pos.start - 1;

    // Loop to the  left, and stop when a line break  is found or when
    // the start of the document is reached.
    for (var i = prefixEnd; i > 0; i--) {
      if (/[\r\n]/.test(content.charAt(i))) {
        i++;
        break;
      }
    }
    // The prefix  is the leftmost value  of the end of  the prefix or
    // the start of the line.
    i = Math.min(i, prefixEnd);

    // Add one to prefixEnd to  include the rightmost character to the
    // left of the selection.
    return content.substring(i, prefixEnd + 1).replace(/[\r\n]/g, "");

  },

  /**
   * Gets the remaining characters on the same line to the right of where the
   * selection ends.
   *
   * @return
   *   A string of the suffixing character, or "" if there is no suffix.
   */
  getSuffix : function () {
    var content = BUE.active.getContent();

    // The suffix starts where the selection ends.
    var suffixStart = BUE.active.posSelection().end;

    // Start at the  start of the suffix, and loop  until a line break
    // or the end of the document is reached.
    for (var i = suffixStart; i < content.length - 1; i++) {
      // Match a line break.
      if (/[\r\n]/.test(content.charAt(i))) {
        // decrement  i  since this  character  isn't  a  part of  the
        // suffix.
        i--;
        break;
      }
    }

    // Add one to i since  substring ends it selection before the i'th
    // character.
    return content.substring(suffixStart, i + 1);
  },

  /**
   * @return
   *   Whether the selection has a prefix.
   */
  hasPrefix : function () {
    return markdownEditor.selection.getPrefix() !== "";
  },

  /**
   * @return
   *   Whether the selection has a suffix.
   */
  hasSuffix : function () {
    return markdownEditor.selection.getSuffix() !== "";
  },

  /**
   * Inserts a  space if the caret  was positioned next to  a non white
   * space character, both before and after the selection. The spaces are then
   * excluded from the selection. The space is not added to the start or end if
   * the selection is at the start or end of a line, respectively.
   */
  space : function () {

    // If the selection is not prefixed with a space and the selection
    // is not at the start of a row.
    if (!/(^|[ \t])$/m.test(markdownEditor.selection.getPrefix())) {
      // Insert a space at the start of the selection.
      markdownEditor.selection.replace(/^/, " ");

      // Make the  current selection exclude  the space that  was just
      // inserted.
      var pos = BUE.active.posSelection();
      if (pos.start === pos.end) {
        pos.end++;
      }
      BUE.active.makeSelection(pos.start + 1, pos.end);
      delete pos;
    }

    // If the selection is not suffixed with a space and the selection
    // is not ath the end of a row.
    if (!/^([ \t]|$)/m.test(markdownEditor.selection.getSuffix())) {

      // Suffix the selection with a space.
      markdownEditor.selection.replace(/$/, " ");

      // Adjust  the selection  to  exclude the  space  that was  just
      // inserted.
      var pos = BUE.active.posSelection();
      if (pos.end > pos.start) {
        pos.end--;
      }
      BUE.active.makeSelection(pos.start, pos.end);
      delete pos;
    }
  },

  /**
   * Inserts line breaks before and after the current selection if the selection
   * has a prefix or suffix respectively. The line breaks are then excluded from
   * the selection. Any preceeding spaces are removed.
   */
  lineBreak : function () {
    var selection = markdownEditor.selection;
    var getPos = BUE.active.posSelection.bind(BUE.active);
    var getContent = BUE.active.getContent.bind(BUE.active);


    // Remove any prefixing spaces.
    var content = getContent();
    var charactersToRemove = 0;
    for (var i = getPos().start - 1; i >= 0; i--) {
      if (content.charAt(i) === " ") {
        charactersToRemove++;
      }
      else {
        break;
      }
    }
    delete content;

    if (charactersToRemove) {
      BUE.active.makeSelection(getPos().start - charactersToRemove, getPos().end);
      selection.replace(new RegExp ("^ {" + charactersToRemove + "}"), "");
    }

    // Remove any suffixing spaces.
    var content = getContent();
    charactersToRemove = 0;
    for (var j = getPos().end; j < content.length; j++) {
      if (content.charAt(j) === " ") {
        charactersToRemove++;
      }
      else {
        break;
      }
    }
    delete content;

    if (charactersToRemove) {
      BUE.active.makeSelection(getPos().start, getPos().end + charactersToRemove);
      selection.replace(new RegExp(" {" + charactersToRemove + "}$"), "");
    }

    // If  the first  row of  the selection  has a  prefix, or  if the
    // previous  two characters  aren't linebreaks  we want  to insert
    // line breaks.
    var charactersBeforeSelection = getContent().substring(0, getPos().start);
    if (selection.hasPrefix() || (getPos().start !== 0 && !/\n\n$/.test(charactersBeforeSelection))) {

      // Loop and  include any prefixing line breaks  in the selection
      // so we only get 2 of them in total after the insertion.
      var content = getContent();
      for (var i = getPos().start - 1; content.charAt(i) === "\n"; i--) {
        BUE.active.makeSelection(getPos().start - 1, getPos().end);
      }
      delete content;

      // Replace the start of the  selection with two line breaks, and
      // adjust the selection to exclude those line breaks.
      selection.replace(/^\n{0,2}/, "\n\n");
      var pos = getPos();
      BUE.active.makeSelection(Math.min(pos.start + 2, pos.end), pos.end);
      delete pos;
    }

    var lastCharacterIndex = getContent().length - 1;
    var charactersAfterSelection = getContent().substring(getPos().start);
    if (selection.hasSuffix() || (getPos().end !== lastCharacterIndex && !/^\n\n/.test(charactersAfterSelection))) {

      // Loop and  include any suffixing line breaks  in the selection
      // so we can calculate the amount.
      var content = getContent();
      for (var i = getPos().end; content.charAt(i) === "\n"; i++) {
        BUE.active.makeSelection(getPos().start, getPos().end + 1);
      }
      delete content;

      selection.replace(/\n{0,2}$/, "\n\n");

      var pos = getPos();
      BUE.active.makeSelection(pos.start, Math.max(pos.end - 2, pos.start));
      delete pos;
    }
  },

  /**
   * Checks if the selection is prefixed with a substring.
   *
   * @param substring
   *   The prefix to look for.
   * @return
   *   A boolean.
   */
  startsWith : function (substring) {
    return BUE.active.getSelection().substring(0, substring.length) === substring;
  },

  /**
   * Checks if the selection is suffixed with a substring.
   *
   * @param substring
   *   The suffix to look for.
   * @return
   *   A boolean.
   */
  endsWith : function (substring) {
    var selection = BUE.active.getSelection();
    return selection.substring(selection.length - substring.length) === substring;
  },

  /**
   * Checks if the selection is prefixed and suffixed with a substring.
   *
   * @param prefix
   *   The prefix to look for
   * @param suffix
   *   The suffix to look for, if not specified the prefix is used as
   *   the suffix as well.
   * @return
   *   A boolean.
   */
  surroundedBy : function (prefix, suffix) {
    if (!(1 in arguments)) {
      suffix = prefix;
    }
    return markdownEditor.selection.startsWith(prefix) && markdownEditor.selection.endsWith(suffix);
  },

  /**
   * Puts the caret at the end of the current selection.
   */
  caretAtEnd : function () {
    var pos = BUE.active.posSelection();
    BUE.active.makeSelection(pos.end, pos.end);
  },

  /**
   * Surrounds the selection by a prefix and suffix.
   * The inserted characters are made part of the selection.
   *
   * @param prefix
   *   The string to prepend to the selection.
   * @param suffix
   *   The string to append to the selection, prefix is used as suffix if
   *   suffix is left out.
   */
  wrap : function (prefix, suffix) {
    // If suffix isn't specified, it defaults to the prefix.
    if (!(1 in arguments)) {
      suffix = prefix;
    }
    markdownEditor.selection.replaceAll(prefix + BUE.active.getSelection() + suffix);
  },

  /**
   * If the  selection starts with empty rows,  they are removed
   * from the  selection since the behavior  would be unexpected
   * otherwise. The same is done if it ends with empty rows.
   */
  trim : function () {
    // Match  newlines and line  breaks, and  make sure  the match
    // ends with  a line break,  otherwise spaces in front  of the
    // first row will be excluded.
    if (/^([\r\n\s]*[\r\n])/.test(BUE.active.getSelection())) {
      var pos = BUE.active.posSelection();
      BUE.active.makeSelection(pos.start + RegExp.$1.length, pos.end);
    }

    // Equivalent as above, but for the end of the line.
    if (/([\r\n][\r\n\s]*)$/.test(BUE.active.getSelection())) {
      var pos = BUE.active.posSelection();
      BUE.active.makeSelection(pos.start, pos.end - RegExp.$1.length);
    }
  },

  /**
   * Adds the given prefix to every row of the current selection.
   *
   * @param prefix
   *   The string to prefix rows with.
   */
  prefixRows : function (prefix) {
    markdownEditor.selection.replace(/^/gm, prefix);
  },

  /**
   * Adds the given suffix to every row of the current selection.
   *
   * @param suffix
   *   The string to append to every row.
   */
  suffixRows : function (suffix) {
    markdownEditor.selection.replace(/$/gm, suffix);
  },

  /**
   * Replaces the whole selection with the given replacement.
   *
   * @param replacement
   *   The string to insert.
   * @param caret
   *   Optional. Specifies where the caret should be positioned afterwards,
   *   see replace.
   */
  replaceAll : function (replacement, caret) {
    markdownEditor.selection.replace(/^[\s\S]*$/, replacement, caret);
  },

  /**
   * Does a search in the current selection and replaces matches.
   * Behaves exactly like String:replace in how it replaces.
   *
   * @param search
   *   String or RegExp, passed directly to String:replace.
   * @param replacement
   *   String or Function, passed directly to String:replace.
   * @param caret
   *   Optional. Where the caret should be positioned after the replacement,
   *   valid values are "start" and "end".
   *   If omitted, the previous selection is maintained.
   */
  replace : function (search, replacement, caret) {
    // Only pass caret if it's specified, we don't make any assumption
    // on how replaceSelection handles optional arguments.
    if (caret) {
      BUE.active.replaceSelection(BUE.active.getSelection().replace(search, replacement), caret);
    }
    else {
      BUE.active.replaceSelection(BUE.active.getSelection().replace(search, replacement));
    }
  }
};


/*******************************************************************************
 * LINK
 ******************************************************************************/

/**
 * Displays a dialog where the user can create a link. The reference is added to
 * the reference section of the BUE.
 */
markdownEditor.link = function () {
  var t = markdownEditor.t;
  var tag = Cactus.DOM.tag;
  var createForm = markdownEditor.dialog.createForm;
  var mDialog = markdownEditor.dialog;

  // Default values for form fields.
  var hrefValue = "";
  var referenceValue = "";
  var titleValue = "";
  var textValue = BUE.active.getSelection();
  var inlineValue = null;

  // Create the dialog form.
  var form = createForm(
    { label : t("Text"), mandatory : true, attributes : { name : "text", value : textValue } },
    { label : t("Description"), attributes : { name : "title", value : titleValue } },
    { label : t("Reference"), attributes : { name : "reference", value : referenceValue } },
    { label : t("URL"), mandatory : true, attributes : { name : "href", value : hrefValue } },
    { label : t("Inline"), attributes : { name : "inline", type : "checkbox", checked: "checked", value: inlineValue } }
  );

  // Add a submit handler and various buttons.
  var submitFunction = markdownEditor.link._process.bind(null, form, "Links");
  mDialog.setOnsubmit(form, submitFunction);
  mDialog.addIMCELink(form.elements.href.parentNode, form.elements.href);
  mDialog.addCancelButton(form);
  mDialog.addSubmitButton(form, submitFunction);
  mDialog.addHelpButton(form, "link");

  // Open the dialog and add display the form.
  mDialog.open(t("Insert link"), "link");
  mDialog.getContent().appendChild(form);
  mDialog.focusFirst();
};

// Processes the form submission.
markdownEditor.link._process = function (form) {
  var Reference = markdownEditor.Reference;
  var t = markdownEditor.t;

  var referenceType = "Links";
  var text = form.elements.text.value;
  var reference = form.elements.reference.value || text;
  var href = form.elements.href.value;
  var title = form.elements.title.value;
  var inline = form.elements.inline.checked || false;

  // Validate input.
  markdownEditor.dialog.clearErrors();
  var valid = true;
  if (!text) {
    markdownEditor.dialog.addError(t("Text is a required field."));
    valid = false;
  }
  if (!href) {
    markdownEditor.dialog.addError(t("URL is a required field."));
    valid = false;
  }
  if (!valid) {
    return;
  }

  if (inline) {
    // Insert inline link after caret position
    var replaceString = "[" + text + "](" + href + ( title ? ' "' + title + '"' : '' ) + ")";
    markdownEditor.selection.replaceAll(replaceString);
    BUE.dialog.close();
  }
  else {
    // The text inserted at the caret position.
    var textString = text !== reference ? "[" + text + "][" + reference + "]" : "[" + reference + "][]";
    // The reference to add to the reference section of the BUE.
    var ref = new Reference(referenceType, reference, href + (title ? ' "' + title + '"' : ""));
    markdownEditor.references._callback(textString, ref);
  }
};


/*******************************************************************************
* IMAGE
******************************************************************************/

/**
 * Displays a dialog where the user can add an inline image. The reference is
 * added to the reference section of the BUE. The IMCE dialog is integrated
 * if IMCE is enabled.
 */
markdownEditor.image = function () {
  var t = markdownEditor.t;
  var tag = Cactus.DOM.tag;
  var createForm = markdownEditor.dialog.createForm;

  // Default values for form fields.
  var hrefValue = "";
  var referenceValue = "";
  var titleValue = "";
  var textValue = BUE.active.getSelection();

  // Creating the form for the dialog.
  var form = createForm(
    { label : t("Short Desc."), mandatory : true, attributes : { name : "text", value : textValue } },
    { label : t("Long Desc."), attributes : { name : "title", value : titleValue } },
    { label : t("Reference"), attributes : { name : "reference", value : referenceValue } },
    { label : t("URL"), mandatory : true, attributes : { name : "href", value : hrefValue } }
  );

  // Create an onsubmit handler and various buttons.
  var submitFunction = markdownEditor.image._process.bind(null, form, "Images");
  var mDialog = markdownEditor.dialog;
  mDialog.setOnsubmit(form, submitFunction);
  mDialog.addIMCELink(form.elements.href.parentNode, form.elements.href);
  mDialog.addCancelButton(form);
  mDialog.addSubmitButton(form, submitFunction);
  mDialog.addHelpButton(form, "image");

  // Open the dialog and display the form.
  mDialog.open(t("Insert image"), "image");
  mDialog.getContent().appendChild(form);
  mDialog.focusFirst();
};

/**
 * Handles submissions for adding images.
 *
 * @param form
 *   The form element of the dialog.
 */
markdownEditor.image._process = function (form) {
  var Reference = markdownEditor.Reference;
  var t = markdownEditor.t;

  var referenceType = "Images";
  var text = form.elements.text.value;
  var reference = form.elements.reference.value || text;
  var href = form.elements.href.value;
  var title = form.elements.title.value;

  // Validate input.
  markdownEditor.dialog.clearErrors();
  var valid = true;
  if (!text) {
    markdownEditor.dialog.addError(t("Text is a required field."));
    valid = false;
  }
  if (!href) {
    markdownEditor.dialog.addError(t("URL is a required field."));
    valid = false;
  }
  if (!valid) {
    return;
  }

  // The text added at the caret position.
  var textString = text ? "![" + text + "][" + reference + "]" : "![" + reference + "]";
  // The reference to add to the reference section.
  var ref = new Reference(referenceType, reference, href + (title ? ' "' + title + '"' : ""));

  markdownEditor.references._callback(textString, ref);
};


/*******************************************************************************
 * FOOTNOTE
 ******************************************************************************/

/**
 * Opens a dialog that lets the user create a footnote and its associated
 * reference. A default reference name is specified.
 */
markdownEditor.footnote = function () {
  var tag = Cactus.DOM.tag;
  var t = markdownEditor.t;
  var createForm = markdownEditor.dialog.createForm;
  var mDialog = markdownEditor.dialog;

  var referenceValue = "";
  var textValue = "";

  var contents = BUE.active.getContent();

  // Get the first available reference number.
  for (var i = 1; new RegExp("\\[\\^" + i + "\\]", "m").test(contents); i++);
  referenceValue = i;

  // Create the dialog form.
  var form = createForm(
    { label : t("Reference"), mandatory : true, attributes : { name : "reference", value : referenceValue } },
    { label : t("Text"), tagName : "textarea", attributes : { name : "text", value : textValue } }
  );

  // Create the onsubmit function
  var submitFunction = markdownEditor.footnote._process.bind(null, form, "Footnotes");

  // Add buttons.
  mDialog.setOnsubmit(form, submitFunction);
  mDialog.addCancelButton(form);
  mDialog.addSubmitButton(form, submitFunction);
  mDialog.addHelpButton(form, "footnote");

  // Open the dialog and display the form.
  mDialog.open(t("Insert footnote"), "footnote");
  mDialog.getContent().appendChild(form);
  mDialog.focusFirst();
};

/**
 * Handles the submission when creating footnotes.
 *
 * @param form
 *   The HTMLFormElement of the dialog.
 */
markdownEditor.footnote._process = function (form) {
  var Reference = markdownEditor.Reference;
  var t = markdownEditor.t;

  var referenceType = "Notes";
  var reference = form.elements.reference.value;
  var text = form.elements.text.value;

  // Validate input.
  markdownEditor.dialog.clearErrors();
  if (!reference) {
    markdownEditor.dialog.addError(t("Reference is a required field."));
    return;
  }

  // The text to insert at the caret position.
  var textString = "[^" + reference + "]";
  // The reference to add to the reference section.
  var ref = new Reference(referenceType, reference, text);
  ref.setPrefix("[^");

  window.r = ref;

  markdownEditor.references._callback(textString, ref, false, t("You cannot make two references to the same footnote."), false);
};


/*******************************************************************************
 * ABBREVIATION
 ******************************************************************************/

/**
 * Opens a dialog that lets the user add an abbreviation along with its
 * definiton.
 */
markdownEditor.abbreviation = function () {
  var tag = Cactus.DOM.tag;
  var t = markdownEditor.t;
  var createForm = markdownEditor.dialog.createForm;

  // Default values for the form elements.
  var abbreviationValue = BUE.active.getSelection();
  var textValue = "";

  // Create the dialog form.
  var form = createForm(
    { label : t("Abbreviation"),  mandatory : true, attributes : { name : "abbreviation", value : abbreviationValue } },
    { label : t("Definition"), attributes : { name : "text", value : textValue } }
  );

  // Create the submit button and  have it assign an onclick handler
  // that processes the form submission. Also add a cancel button.
  var submitFunction = markdownEditor.abbreviation._process.bind(null, form, "Abbreviations");
  var mDialog = markdownEditor.dialog;
  mDialog.setOnsubmit(form, submitFunction);
  mDialog.addCancelButton(form);
  mDialog.addSubmitButton(form, submitFunction);
  mDialog.addHelpButton(form, "abbreviation");

  // Open the dialog and display the form.
  mDialog.open(t("Insert abbreviation"), "abbreviation");
  mDialog.getContent().appendChild(form);
  mDialog.focusFirst();
};

/**
 * Handles submissions when adding abbreviations.
 *
 * @param form
 *   The HTMLFormElement of the dialog.
 */
markdownEditor.abbreviation._process = function (form) {
  var Reference = markdownEditor.Reference;
  var t = markdownEditor.t;

  var referenceType = "Abbreviations";
  var abbreviation = form.elements.abbreviation.value;
  // The text to be inserted at the caret position.
  var text = form.elements.text.value;
  if (!text) {
    text = abbreviation;
  }

  // Validate input.
  markdownEditor.dialog.clearErrors();
  if (!abbreviation) {
    markdownEditor.dialog.addError(t("Abbreviation is a required field"));
    return;
  }

  // The reference to be added to the reference section.
  var ref = new Reference(referenceType, abbreviation, text);
  ref.setPrefix("*[");

  markdownEditor.references._callback(abbreviation, ref);
};


/*******************************************************************************
 * AUTO LINK
 ******************************************************************************/

/**
 * Turns the selection into an auto link. An auto link is just an URL inside
 * angle brackets, <http://www.example.com>.
 */
markdownEditor.autoLink = function () {
  var mSelection = markdownEditor.selection;

  // Insert brackets around the caret if nothing is selected.
  if (mSelection.isEmpty()) {
    mSelection.space();
    mSelection.insertBefore("<");
    mSelection.insertAfter(">");
  }
  // If the selection is an auto link, the angle brackets are removed.
  else if (mSelection.surroundedBy("<", ">")) {
    mSelection.replace(/^<([\s\S]+)>/m, "$1");
  }
  // Otherwise angle brackets are added around the selection.
  else {
    mSelection.wrap("<", ">");
  }
};


/*******************************************************************************
 * UNORDERED LIST
 ******************************************************************************/

/**
 * Toggles the current selection into or out of being an unordered list, it can
 * also convert from an ordered list into an unordered.
 */
markdownEditor.unorderedList = function () {

  var mSelection = markdownEditor.selection;

  mSelection.trim();

  // Remove OL enumeration if it's present
  if (/^\d+\. /.test(BUE.active.getSelection())) {
    mSelection.replace(/^\d+\. /gm, "");
    mSelection.replace(/^ {4}/gm, "");
  }

  // If the selection is an unordered list.
  if (/^\* /m.test(BUE.active.getSelection())) {
    // Remove the list characters.
    mSelection.replace(/^\* +/gm, "");
    mSelection.replace(/^ {4}/gm, "");
  }
  // If the selection is empty, insert a list item and put the caret
  // at the end of the insertion.
  else if (BUE.active.getSelection() === "") {
    mSelection.replaceAll("*   ");
  }
  // Append an asterisk to every row that isn't indented.
  // Does not prefix empty rows.
  else {
    var lines = BUE.active.getSelection().split(/\r?\n|\r/);
    var newLines = [];

    var prefixReg = /^(?: {4}|> )/;

    newLines.push("*   " + lines[0]);

    // Gets the current prefix of the  line, a prefix in this sense is
    // only a block quote "> " or a code block " ".
    function getLinePrefix(line) {
      var match = prefixReg.exec(line);
      return match ? match[0] : "";
    }

    for (var i = 1, line; i < lines.length; i++) {
      var linePrefix = getLinePrefix(lines[i]);
      var previousLinePrefix = getLinePrefix(lines[i - 1]);

      // Do nothing with empty lines.
      if (lines[i] === "") {
        newLines.push(lines[i]);
      }
      // If the line has no prefix, it should be prefixed.
      else if (!linePrefix) {
        newLines.push("*   " + lines[i]);
      }
      // A prefix should be added if the line  does not have the
      // same prefix as  the previous line. For example  a block quote
      // line below  another one  means that they  both belong  to the
      // same list item.
      else if (lines[i] !== "" && linePrefix !== previousLinePrefix && previousLinePrefix) {
        newLines.push("*   " + lines[i]);
      }
      // We've concluded  that the line belongs to  the previous line,
      // so we just indent it.
      else {
        newLines.push("    " + lines[i]);
      }
    }

    mSelection.replaceAll(newLines.join("\n"));
  }

  mSelection.lineBreak();
  mSelection.caretAtEnd();
};


/*******************************************************************************
 * ORDERED LIST
 ******************************************************************************/

/**
 * Turns the selection into an ordered list, if the selection is alreadf an
 * ordered list the enumeration is removed. The function can also turn an
 * unordered list into an ordered one.
 */
markdownEditor.orderedList = function () {
  var mSelection = markdownEditor.selection;

  mSelection.trim();

  // If the selection is an unordered list, we remove the bullets.
  if (/^\* /.test(BUE.active.getSelection())) {
    mSelection.replace(/^\* {3}/gm, "");
    mSelection.replace(/^ {4}/gm, "");
  }

  // If  the list  is  formatted  as ordered  already,  we remove  the
  // enumeration.
  if (/^ *\d+\./.test(BUE.active.getSelection())) {
    mSelection.replace(/^ *\d+\.\s*/gm, "");
    mSelection.replace(/^ {4}/gm, "");
  }
  // If the selection  is empty, insert a list item  and put the caret
  // at the end of the insertion.
  else if (BUE.active.getSelection() === "") {
    mSelection.replaceAll("1.  ");
  }
  // Insert numbers for  every row of the selection,  if the selection
  // is an unordered list the asterisks are removed in the process.
  else {
    var prefixCounter = 1;
    // Get the number prefix for the next row. An internal counter is kept.
    function createLinePrefix() {
      return (prefixCounter++) + ".  ";
    }

    var lines = BUE.active.getSelection().split(/\r?\n|\r/);
    var newLines = [];

    // Matches a code block or block quote line.
    var prefixReg = /^(?: {4}|> )/;

    newLines.push(createLinePrefix() + lines[0]);

    function getLinePrefix(line) {
      var match = prefixReg.exec(line);
      return match ? match[0] : null;
    }

    // Handle each line separately.
    for (var i = 1, line; i < lines.length; i++) {
      var linePrefix = getLinePrefix(lines[i]);
      var previousLinePrefix = getLinePrefix(lines[i - 1]);

      // Skip empty lines.
      if (lines[i] === "") {
        newLines.push(lines[i]);
      }
      // A prefix should  only be added if the line  does not have the
      // same prefix as  the previous line. For example  a block quote
      // line below  another one  means that they  both belong  to the
      // same list item.
      else if (!linePrefix || (lines[i] !== "" && linePrefix !== previousLinePrefix)) {
        newLines.push(createLinePrefix() + lines[i]);
      }
      // The line belongs to the previous line, so it's indented to match this.
      else {
        newLines.push("    " + lines[i]);
      }
    }

    mSelection.replaceAll(newLines.join("\n"));
  }

  mSelection.lineBreak();
  mSelection.caretAtEnd();
};


/*******************************************************************************
 * HEADER
 ******************************************************************************/

/**
 * Gives the user a dialog for creating headers. Selected headers can also be
 * modified.
 */
markdownEditor.header = function () {
  var t = markdownEditor.t;
  var tag = Cactus.DOM.tag;
  var createForm = markdownEditor.dialog.createForm;

  var headerValue, textValue, idValue;

  var selection = BUE.active.getSelection();

  // If a header is selected, we extract the values.
  // If a value is unavailable, a default value is specified.
  if (/(#+)\s*(\S*)\s*\{#([^\}]+)\}/.test(selection)) {
    headerValue = RegExp.$1.length || "2";
    textValue = RegExp.$2 || "";
    idValue = RegExp.$3 || "";
  }
  // Otherwise we assign default values.
  else {
    headerValue = 2;
    textValue = BUE.active.getSelection();
    idValue = "";
  }

  // Available header depths. Used to create the select in the dialog form.
  var options = {
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6
  };

  // Create the dialog form.
  var form = createForm(
    { label : t("Header Level"), tagName : "select", options : options, selected : headerValue, attributes : { name : "header_type" } },
    { label : t("Text"), mandatory : true, attributes : { name : "text", value : textValue } },
    { label : t("ID"), attributes : { name : "id", value : idValue } }
  );

  // Create a submit button  and add an onclick/onsubmit handler. Also
  // create a cancel button.
  var mDialog = markdownEditor.dialog;
  var submitFunction = markdownEditor.header._callback.bind(null, form);

  mDialog.setOnsubmit(form, submitFunction);
  // The event is passed on through the submit button to onsubmit.
  mDialog.addCancelButton(form);
  var submitButton = mDialog.addSubmitButton(form, function () {});
  submitButton.onmousedown = submitFunction;
  mDialog.addHelpButton(form, "header");

  // Create the dialog and display the form.
  mDialog.open(t("Insert header"), "header");
  mDialog.getContent().appendChild(form);
  mDialog.focusFirst();
};

/**
 * Handles submissions when adding headers
 *
 * @param form
 *   The HTMLFormElement of the dialog.
 */
markdownEditor.header._callback = function (form) {
  var t = markdownEditor.t;

  // Try to parse the integer value, default to 2 if that isn't possible.
  var headerType = parseInt(form.elements.header_type.value, 10) || 2;
  var text = form.elements.text.value;
  var id = form.elements.id.value ? " {#" + form.elements.id.value + "}" : "";

  // Validate input.
  markdownEditor.dialog.clearErrors();
  if (!text) {
    markdownEditor.dialog.addError(t("Text is a required field"));
    return;
  }

  // Add one # for every form level (2 becomes ##, 3 becomes ###).
  var headerHashes = markdownEditor.extras.string.repeat("#", headerType);

  // Insert the information and close the dialog.
  BUE.active.replaceSelection(headerHashes + " " + text + " " + id);
  markdownEditor.selection.lineBreak();
  markdownEditor.selection.caretAtEnd();
  BUE.dialog.close();
};


/*******************************************************************************
 * INLINE CODE
 ******************************************************************************/

/**
 * Wraps the selection with backticks, or unwraps if the selection is wrapped
 * already.
 */
markdownEditor.codeInline = function () {
  if (markdownEditor.selection.isEmpty()) {
    markdownEditor.selection.space();
    markdownEditor.selection.insertAround("`");
  }
  // If the selection is already code, the back ticks are removed.
  else if (markdownEditor.selection.surroundedBy("`")) {
    markdownEditor.selection.replace(/^\`([\s\S]+)\`/m, "$1");
  }
  // Otherwise back ticks are added around the selection.
  else {
    BUE.active.replaceSelection("`" + BUE.active.getSelection() + "`");
  }
};


/*******************************************************************************
 * EMPHASIS
 ******************************************************************************/

/**
 * Wraps the selection with asterisks or unwraps if the selection is emphasized
 * already.
 */
markdownEditor.emphasis = function () {
  if (markdownEditor.selection.isEmpty()) {
    markdownEditor.selection.space();
    markdownEditor.selection.insertAround("*");
  }
  // If the selection is emphasized, the asterisks are removed.
  else if (markdownEditor.selection.surroundedBy("*")) {
    markdownEditor.selection.replace(/^\*([\s\S]+)\*/m, "$1");
  }
  // Otherwise asterisks are added around the selection.
  else {
    markdownEditor.selection.wrap("*");
  }
};


/*******************************************************************************
 * STRONG EMPHASIS
 ******************************************************************************/

/**
 * Wraps the selection with double asterisks, or unwraps if it's already
 * emphasized.
 */
markdownEditor.strongEmphasis = function () {
  if (markdownEditor.selection.isEmpty()) {
    markdownEditor.selection.space();
    markdownEditor.selection.insertAround("**");
  }
  // If the selection is emphasized, the asterisks are removed.
  if (markdownEditor.selection.surroundedBy("**")) {
    markdownEditor.selection.replace(/^\*+([\s\S]+?)\*+$/, "$1");
  }
  // Otherwise asterisks are added around the selection.
  else {
		markdownEditor.selection.replace(/^\**([\s\S]+?)\**$/, "**$1**");
  }
};


/*******************************************************************************
 * BLOCK QUOTES
 ******************************************************************************/

/**
 * Toggles block quoting of the selection.
 */
markdownEditor.blockQuote = function () {
  var mSelection =  markdownEditor.selection;

  mSelection.excludeLineBreaks();

  // Remove ">" in the beginning of rows if they are there.
  if (mSelection.startsWith(">")) {
    mSelection.replace(/^>\s?/gm, "");
  }
  // Otherwise "> " is prepended  to every row, existing code blocks
  // are removed in the process.
  else {
    mSelection.prefixRows("> ");
  }

  mSelection.lineBreak();
  mSelection.caretAtEnd();
};


/*******************************************************************************
 * HORIZONTAL RULER
 ******************************************************************************/

/**
 * Inserts a horizontal ruler in its own paragraph.
 */
markdownEditor.horizontalRuler = function () {
  var selection = markdownEditor.selection;
  selection.replaceAll("---------");
  selection.lineBreak();
  selection.caretAtEnd();
};


/*******************************************************************************
 * CODE BLOCK
 ******************************************************************************/

/**
 * Toggles a code block for the selection.
 */
markdownEditor.codeBlock = function () {
  var mSelection = markdownEditor.selection;

  mSelection.excludeLineBreaks();

  if (mSelection.startsWith("    ")) {
    mSelection.replace(/^ {4}/gm, "");
  }
  else {
    mSelection.prefixRows("    ");
  }

  // Make sure  the block  is located  on its own  row, and  place the
  // caret at the end.
  mSelection.selectToEndOfLine();
  mSelection.lineBreak();
  mSelection.caretAtEnd();
};


/*******************************************************************************
 * LINE BREAK
 ******************************************************************************/

/**
 * Inserts a line break.
 */
markdownEditor.lineBreak = function () {
  // Replace selection with two spaces and a line break.
  markdownEditor.selection.replaceAll("  \n", "end");
};


/*******************************************************************************
 * HELP
 ******************************************************************************/

/**
 * Displays help for using the buttons.
 *
 * each button has a section and an ID so it can be linked to.
 */
markdownEditor.help = function () {
  window.open(markdownEditor.settings.helpPath);
};


/*******************************************************************************
 * TABLE
 ******************************************************************************/

/**
 * Creates a dynamic table dialog for creating a Markdown Extra table.
 *
 * Implementation:
 * The table used to structure the form has at least three rows and at least
 * one column. The first row contains table headings, the second one contains
 * alignments for the content cells. Finally, the rest of the rows (the amount
 * of these is dynamic) contain the actual table data. The table will end up
 * being structured like it is in the dialog.
 */
markdownEditor.Table = (function() {
  var tag = Cactus.DOM.tag;
  var t = markdownEditor.t;
  var string = markdownEditor.extras.string;
  var collection = markdownEditor.extras.collection;
  var dom = markdownEditor.extras.dom;
  var ClassNames = Cactus.DOM.ClassNames;

  function Table () {
    this.createForm();
    this.columns = this.startingColumns;
    this.openDialog();
  } Table.prototype = {
    // The amount of rows to display when the dialog opens.
    startingRows : 2,
    // The amount of columns to display when the dialog opens.
    startingColumns : 2,

    // The amount of content rows and content columns currently in the dialog.
    rows : 0,
    columns : 0,

    // References to the form elements.
    form : null,
    table : null,
    tbody : null,

    /**
     * @return
     *   A TD with an input box for a table header.
     */
    createHeaderCell : function () {
      return tag("td", null, tag("input", {
        type : "text",
        name : "header"
      }));
    },

    /**
     * Creates a cell for choosing the alignment of a column, consists of a
     * select with four values, "none" (or ""), "lef", "center" and "right".
     *
     * @return
     *   A TD with three radio buttons along with their labels.
     */
    createAlignmentCell : function () {
      return tag("td", { className : "alignment-cell" }, tag("select", null, [
        tag("option", { value : "none", selected : true }, t("")),
        tag("option", { value : "left" }, t("Left")),
        tag("option", { value : "center" }, t("Center")),
        tag("option", { value : "right" }, t("Right"))
      ]));
    },

    /**
     * Creates a cell for setting the value of a table cell.
     *
     * @return
     *   A TD with an input.
     */
    createContentCell : function () {
      return tag("td", null, [
        tag("input", {
          type : "text"
        })
      ]);
    },

    /**
     * Removes a content row from the table if there are at least 2 rows
     * already.
     *
     * @param row
     *   The row to remove.
     */
    removeRow : function (row) {
      if (this.rows >= 2) {
        this.tbody.removeChild(row);
        this.rows--;

        if (this.rows === 1) {
          this.getRemoveRowButton(this.getContentRows()[0]).disabled = true;
        }

      }
    },

    /**
     * Gets the remove button for the given row.
     *
     * @param row
     *   The row to find the button on.
     * @return
     *   The button that removes the specified row.
     */
    getRemoveRowButton : function (row) {
      var cell = row.cells[row.cells.length - 1];
      var buttons = cell.getElementsByTagName("button");
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === "-") {
          return buttons[i];
        }
      }
      throw new Error("No button found");
    },

    /**
     * Adds a content row to the document.
     *
     * @param previousRow
     *   The row that will be the previousSibling of the row created.
     */
    addRow : function (previousRow) {
      if (this.rows === 1) {
        this.getRemoveRowButton(this.getContentRows()[0]).disabled = false;
      }

      if (this.tbody.lastChild === previousRow) {
        this.tbody.appendChild(this.createContentRow());
      }
      else {
        this.tbody.insertBefore(this.createContentRow(), previousRow.nextSibling);
      }
    },

    /**
     * Creates a row of content cells, takes into account the current number
     * of columns.
     *
     * @return
     *   A TR containing content cells.
     */
    createContentRow : function () {
      var cells = [tag("th")];
      var columns = this.columns || this.startingColumns;
      for (var i = 0; i < columns; i++) {
        cells.push(this.createContentCell());
      }

      var modificationContainer = tag("div", {
        className : "row-modification-container"
      });

      cells.push(tag("td", { className : "row-modification-cell" }, modificationContainer));

      var row = tag("tr", {
        className : "content-row"
      }, cells);


      // Add buttons for adding and removing rows.
      modificationContainer.appendChild(this.createRemoveRowButton(row));
      modificationContainer.appendChild(this.createAddRowButton(row));

      this.rows++;
      return row;
    },

    /**
     * Adds a button for adding rows.
     *
     * @param previousRow
     *   The row to insert new rows after if the button is clicked.
     * @param title
     *   An optional title text for the button.
     * @return
     *   A button that adds a row below another one.
     */
    createAddRowButton : function (previousRow, title) {
      title = title || t("Insert a row below this row.");
      var addButton = tag("button", {
        title : title,
        className : "add-row-button"
      }, "+");
      addButton.onclick = this.addRow.bind(this, previousRow).wait(0).returning(false);
      return addButton;
    },

    /**
     * Creates a button for removing the given row.
     *
     * @param row
     *   The row to remove when the button is clicked.
     * @param title
     *   An optional title for the button.
     */
    createRemoveRowButton : function (row, title) {
      title = title || t("Remove this row.");

      return tag("button", {
        title : title,
        className : "remove-row-button",
        onclick : this.removeRow.bind(this, row).wait(0).returning(false)
      }, "-");
    },

    /**
     * Creates a button for adding a column after the given cell.
     *
     * @param cell
     *   The column this cell belongs to will be the column that the new column
     *   is inserted after.
     * @param title
     *   An optional title for the button.
     * @return
     *   The HTMLButtonElement created.
     */
    createAddColumnButton : function (cell, title) {
      title = title || t("Insert a new column to the right of this column.");
      var addButton = tag("button", { title : title }, "+");
      addButton.onclick = this.addColumn.bind(this, cell).wait(0).returning(false);
      return addButton;
    },

    /**
     * Creates a button that adds a column before the given cell's column.
     *
     * @param cell
     *   The table cell whose column the new column is added before.
     * @param title
     *   Optional. The localized text of the button.
     * @return
     *   A HTMLButtonElement that can add a new column.
     */
    createPrependColumnButton : function (cell, title) {
      title = title || t("Insert a new column to the left of this column.");
      return tag("button", {
        className : "prepend-column-button",
        title : title,
        onclick : this.prependColumn.bind(this, cell).wait(0).returning(false)
      }, "+");
    },

    /**
     * Creates a button for removing  the column the given cell belongs to.
     *
     * @param cell
     *   When clicked the column this cell belongs to will be removed.
     * @return
     *   The HTMLButtonElement created.
     */
    createRemoveColumnButton : function (cell) {
      var removeButton = tag("button", { title : t("Remove this column.") }, "-");
      removeButton.onclick = this.removeColumn.bind(this, cell).wait(0).returning(false);
      return removeButton;
    },

    /**
     * Creates a cell with buttons for adding and removing rows.
     *
     * @return
     *   A TD with two buttons.
     */
    createColumnModificationCell : function () {
      var td = tag("td", {
        className : "column-modification-cell"
      });
      td.appendChild(this.createPrependColumnButton(td));
      td.appendChild(this.createRemoveColumnButton(td));
      td.appendChild(this.createAddColumnButton(td));
      return td;
    },

    /**
     * Adds a row of buttons for adding and removing columns.
     */
    addColumnModificationRow : function () {
      var row = tag("tr", {
        className : "column-modification-row"
      });
      var cells = [];

      // Add an empty column on the left side.
      var td = tag("td", null, null);
      row.appendChild(td);

      // Add a modification cell for every starting column of the table.
      for (var i = 0; i < this.startingColumns; i++) {
        row.appendChild(this.createColumnModificationCell(row));
      }
      this.tbody.appendChild(row);
    },

    /**
     * Creates the form and the initial table for the dialog.
     */
    createForm : function () {
      // Create the two top rows.
      var headers = [tag("th", null, t("Headers"))];
      var alignments = [tag("th", null, t("Col Align"))];
      for (var i = 0; i < this.startingColumns; i++) {
        headers.push(this.createHeaderCell());
        alignments.push(this.createAlignmentCell());
      }

      // cell for the + button.
      headers.push(tag("td"));

      // Add a tbody for all the table's contents.
      var alignmentRow = tag("tr", {
        className : "alignment-row"
      }, alignments);

      var headerRow = tag("tr", {
        className : "header-row"
      }, headers);
      this.tbody = tag("tbody", null, [
        alignmentRow,
        headerRow
      ]);

      // Add a + button to the last alignment cell.
      var removeButton = this.createRemoveRowButton(headerRow, "");
      removeButton.onclick = function () {};
      removeButton.disabled = true;
      headers[headers.length - 1].appendChild(removeButton);
      headers[headers.length - 1].appendChild(this.createAddRowButton(headerRow, t("Insert a new row above the first row.")));

      // Add all default content rows.
      for (var j = 0; j < this.startingRows; j++) {
        this.tbody.appendChild(this.createContentRow());
      }

      // Add a row with +/- buttons for adding and removing columns.
      this.addColumnModificationRow();

      // Set the table and form to instance variables.
      this.table = tag("table", null, this.tbody);
      this.fieldset = tag("fieldset", null, this.table);
      this.form = tag("form", null, this.fieldset);
      this.setFirstAlignmentColumnBehavior();
    },

    /**
     * Sets a CSS class name for the first alignment column and removes it from
     * the second one if it exists.
     */
    setFirstAlignmentColumnBehavior : function () {
      var modificationRow = this.getColumnModificationRow();

      // Add the classname  to the first cell, and  remove it from the
      // second.
      ClassNames.add(modificationRow.cells[1], "first");
      if (modificationRow.cells [2]) {
        ClassNames.del(modificationRow.cells[2], "first");
      }
    },

    /**
     * Removes the column the given cell belongs to
     *
     * @param cell
     *   A table cell whose column is removed.
     */
    removeColumn : function (cell) {
      if (this.columns > 1) {
        // Get the index of the column to remove.
        var cellIndex = collection.indexOf(this.getColumnModificationRow().cells, cell);

        // Loop through and remove the cell on each row.
        var rows = this.table.rows;
        for (var i = 0; i < rows.length; i++) {
          rows[i].removeChild(rows[i].cells[cellIndex]);
        }
        this.columns--;

        // Disable the button if this column is the last one.
        if (this.columns === 1) {
          this.getRemoveColumnButton(this.getColumnModificationRow().cells[1]).disabled = true;
        }
      }

      this.setFirstAlignmentColumnBehavior();
    },

    /**
     * Gets the button that removes a column from a cell.
     *
     * @param cell
     *   The cell to look for the button in.
     * @return
     *   The button that removes columns.
     */
    getRemoveColumnButton : function (cell) {
      var buttons = cell.getElementsByTagName("button");
      // Fetch the button with the correct title.
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === "-") {
          return buttons[i];
        }
      }
      throw new Error("No button found.");
    },

    /**
     * @return
     *   The table row containing column modification buttons.
     */
    getColumnModificationRow : function () {
      return this.table.rows[this.table.rows.length - 1];
    },

    /**
     * @return
     *   The row containing header inputs.
     */
    getHeaderRow : function () {
      return this.table.rows[1];
    },

    /**
     * @return
     *   The row containing alignment selects.
     */
    getAlignmentRow : function () {
      return this.table.rows[0];
    },

    /**
     * @return
     *   The rows containing table content inputs.
     */
    getContentRows : function () {
      var rows = [];
      // The first two  rows are headers and alignments,  and the last
      // one is +/- buttons.
      for (var i = 2; i < this.table.rows.length - 1; i++) {
        rows.push(this.table.rows[i]);
      }
      return rows;
    },

    /**
     * Adds a new column after the given cell's column.
     *
     * @param cell
     *   The column this cell belongs to will be the previous sibling of the new
     *   one.
     */
    addColumn : function (cell) {
      if (this.columns === 1) {
        this.getRemoveColumnButton(this.getColumnModificationRow().cells[1]).disabled = false;
      }

      var cellIndex = collection.indexOf(this.getColumnModificationRow().childNodes, cell);

      var previousHeaderCell = this.getHeaderRow().cells[cellIndex];
      var previousAlignmentCell = this.getAlignmentRow().cells[cellIndex];
      var previousColumnModificationCell = this.getColumnModificationRow().cells[cellIndex];


      // Insert header and alignment.
      dom.insertAfter(this.createHeaderCell(), previousHeaderCell);
      dom.insertAfter(this.createAlignmentCell(), previousAlignmentCell);

      // Insert rows.
      var contentRows = this.getContentRows();
      for (var i = 0; i < contentRows.length; i++) {
        // Offset of 2 since header cells and alignment cells are above the content cells.
        dom.insertAfter(this.createContentCell(), contentRows[i].cells[cellIndex]);
      }

      // Insert a column modification cell.
      dom.insertAfter(this.createColumnModificationCell(), previousColumnModificationCell);

      this.columns++;

      this.setFirstAlignmentColumnBehavior();
    },

    prependColumn : function (cell) {
      this.addColumn(cell.previousSibling);
    },

    // If  the   form  was  submitted,   to  prevent  the   user  from
    // accidentally submitting twice.
    submitted : false,

    /**
     * Handles submissions, extracts the data from the form and serializes and
     * inserts into the document.
     */
    submitHandler : function () {
      // Make sure only one submit is triggered.
      if (this.submitted) return;

      this.submitted = true;

      // Get data from the dialog.
      var headers = [];
      var alignments = [];


      // Fetch headers and alignments.
      var headerElements = this.table.rows[1].getElementsByTagName("input");
      var alignmentElements = this.table.rows[0].getElementsByTagName("select");
      for (var i = 0; i < headerElements.length; i++) {
        headers.push(headerElements[i].value);
        var select = alignmentElements[i];
        alignments.push(select.options[select.selectedIndex].value);
      }
      delete headerElements;
      delete alignmentElements;

      // Fetch all content.
      var contentRows = [];
      var row, rowElements;
      for (var j = 2; j < this.table.rows.length; j++) {
        row = this.table.rows[j];
        rowElements = row.getElementsByTagName("input");
        contentRows.push([]);
        for (var k = 0; k < rowElements.length; k++) {
          contentRows[contentRows.length - 1].push(rowElements[k].value);
        }
      }
      delete row;
      delete rowElements;

      // Transform into the markdown extra string.
      var tableString = "";
      var headerString = "| " + headers.join(" | ") + " |";
      var alignmentString = "";
      var rowStrings = [];
      var rowString = "";

      // Gather the header/content separators, with their alignment.
      for (var l = 0; l < headers.length; l++) {
        var dashes = string.repeat("-", Math.max(headers[l].length, 3));
        switch (alignments[l]) {
          case "none":
            // Don't modify the string.
            break;
          case "right":
            // Suffix with a colon.
            dashes = dashes.replace(/(.+)-$/, "$1:");
            break;
          case "left":
            // Prefix with a colon.
            dashes = dashes.replace(/^-(.+)/, ":$1");
            break;
          case "center":
            // Surround by colons.
            dashes = dashes.replace(/^-(.+)-$/, ":$1:");
            break;
        }
        alignmentString += "| " + dashes + " ";
      }
      alignmentString += "|";

      // Format all the content rows.
      for (var m = 0; m < this.rows; m++) {
        rowStrings.push("| " + contentRows[m].join(" | ") + " |");
      }
      // Join the rows into a string.
      rowString = rowStrings.join("\n");

      // Create the final table string.
      tableString = headerString + "\n" + alignmentString + "\n" + rowString;

      // Insert the table and close the dialog.
      markdownEditor.selection.replaceAll(tableString);
      markdownEditor.selection.lineBreak();
      markdownEditor.selection.caretAtEnd();
      BUE.dialog.close();
    },

    /**
     * Opens the dialog, appends the content and creates buttons.
     */
    openDialog : function () {
      var mDialog = markdownEditor.dialog;

      // Add buttons.
      mDialog.addCancelButton(this.form);
      mDialog.setOnsubmit(this.form, this.submitHandler.bind(this));
      mDialog.addSubmitButton(this.form, this.submitHandler.bind(this));
      mDialog.addHelpButton(this.form, "table");

      // Open and setup the dialog.
      mDialog.open(t("Insert table"), "table");
      mDialog.getContent().appendChild(this.form);
      mDialog.focusFirst();

      var tmp = document.getElementById("bue-dialog");
      function f () {
        tmp.style.left = parseInt(tmp.style.left) + 1 + "px";
      }
      setTimeout(f, 1);
      setTimeout(f, 250);
    }
  };

  return Table;
})();


/*******************************************************************************
 * DEFINITION LIST
 ******************************************************************************/

/**
 * Gives the user a dynamic form in a dialog for adding definition lists.
 * Rows can be added and removed.
 */
markdownEditor.DefinitionList = (function () {
  var t = markdownEditor.t;
  var tag = Cactus.DOM.tag;
  var dom = markdownEditor.extras.dom;
  var mDialog = markdownEditor.dialog;
  var ClassNames = Cactus.DOM.ClassNames;
  var getElementByClassName = markdownEditor.extras.getElementByClassName;
  var getElementsByClassName = markdownEditor.extras.getElementsByClassName;

  function DefinitionList () {
    this.createForm();
    this.openDialog();
  } DefinitionList.prototype = {
    // Current number of rows of the dialog.
    rows : 0,
    // Default amount of rows.
    startingRows : 2,

    form : null,

    /**
     * Creates the default dialog contents.
     */
    createForm : function () {

      this.fieldset = tag("fieldset");

      this.form = tag("form", {
        onsubmit : this.process.bind(this).wait(0).returning(false)
      }, this.fieldset);

      this.contentContainer = tag("div", {
        className : "content-container"
      });

      this.fieldset.appendChild(this.contentContainer);

      this.contentContainer.appendChild(this.createHeaderRow());

      // Create the default content rows.
      for (var i = 0; i < this.startingRows; i++) {
        this.contentContainer.appendChild(this.createContentRow());
      }
      this.setFirstRowBehavior();

      // Add buttons.
      mDialog.addCancelButton(this.form);
      mDialog.addSubmitButton(this.form, this.process.bind(this));
      mDialog.addHelpButton(this.form, "definition-list");

    },

    createHeaderRow : function () {
      return tag("div", {
        className : "header-row"
      }, [tag("div", {
        className : "header-cell"
      }, t("Term")), tag("div", {
        className : "header-cell"
      }, t("Definition"))]);
    },

    /**
     * Creates a content row, a div with an input and textarea representing a dt
     * and dd combo. Buttons for adding a new row and removing the current one
     * are added.
     *
     * @return
     *   The created div.
     */
    createContentRow : function () {
      var row = tag("div", {
        className : "content-row"
      });
      // Append the different parts of the row.
      row.appendChild(this.createTitleCell());
      row.appendChild(this.createDescriptionCell());
      row.appendChild(this.createModificationCell(row));

      this.rows++;
      return row;
    },

    // The default value for title inputs.
    titleCellDefaultValue : "",

    /**
     * @return
     *   A new element holding an input for a title text.
     */
    createTitleCell : function () {
      var self = this;
      // Create  a div  with an  input, the  input's default  value is
      // cleared when it gains focus.
      return tag("div", {
        className : "title-cell"
      }, tag("input", {
        value : this.titleCellDefaultValue,
        type : "text",
        className : "title-cell-input",
        onfocus : function () {
          if (this.value === self.titleCellDefaultValue) {
            this.value = "";
          }
        }
      }));
    },

    // The default value for description textareas.
    descriptionCellDefaultValue : "",

    /**
     * @return
     *   A new element holding a textarea for a definition text.
     */
    createDescriptionCell : function () {
      var self = this;
      // Create a div with a textarea, the textarea's default value is
      // cleared when the element gains focus.
      return tag("div", {
        className : "description-cell"
      }, tag("textarea", {
        value : this.descriptionCellDefaultValue,
        onfocus : function () {
          if (this.value === self.descriptionCellDefaultValue) {
            this.value = "";
          }
        }
      }));
    },

    /**
     * @param row
     *   The content row this modification cell belongs to.
     * @return
     *   A new element containing buttons for adding and removing rows.
     */
    createModificationCell : function (row) {
      return tag("div", {
        className : "modification"
      }, [
        this.createPrependRowButton(row),
        this.createRemoveRowButton(row),
        this.createAddRowButton(row)
      ]);
    },

    /**
     * Creates a button for removing the given row.
     *
     * @param row
     *   The row to remove when the button is clicked.
     * @param title
     *   An optional title for the button.
     * @return
     *   The created HTMLButtonElement.
     */
    createRemoveRowButton : function (row, title) {
      title = title || t("Remove this row.");
      return tag("input", {
        type : "button",
        title : title,
        value : "-",
        className : "remove-row-button",
        onclick : this.removeRow.bind(this, row).wait(0).returning(false)
      });
    },

    /**
     * Creates a button for adding a row after the given row.
     *
     * @param row
     *   The row to add new rows after.
     * @param title
     *   An optional title for the button.
     * @param append
     *   Whether the new row should be appended if row is null.
     * @return
     *   The created HTMLButtonElement.
     */
    createAddRowButton : function (row, title, append) {
      title = title || t("Add a row below this row.");
      return tag("input", {
        type : "button",
        title : title,
        className : "add-row-button",
        value : "+",
        onclick : this.addRow.bind(this, row, append).wait(0).returning(false)
      });
    },

    /**
     * Creates a button that inserts a row above the given one.
     *
     * @param row
     *   The row to add new rows before.
     * @param title
     *   An optional title for the button.
     * @return
     *   The created button.
     */
    createPrependRowButton : function (row, title) {
      title = title || t("Add a row above this row.");
      return tag("input", {
        type : "button",
        className : "prepend-row-button",
        title : title,
        onclick : this.prependRow.bind(this, row).wait(0).returning(false),
        value : "+"
      });
    },

    /**
     * @return
     *   The content containers.
     */
    getContentRows : function () {
      return markdownEditor.extras.getElementsByClassName("content-row", this.form);
    },

    /**
     * @param row
     *   The row whose modification cell that's wanted.
     * @return
     *   The cell of the row that contains buttons for modifying rows.
     */
    getModificationCell : function (row) {
      return markdownEditor.extras.getElementByClassName("modification", row);
    },

    /**
     * Gets the "remove row" button for a row.
     *
     * @param row
     *   The row to get the button from.
     * @return
     *   The "remove row" button.
     */
    getRemoveButton : function (row) {
      var button = getElementByClassName("remove-row-button", this.getModificationCell(row));

      if (!button) {
        throw new Error("No button found");
      }

      return button;
    },

    /**
     * Removes the given row from the table.
     *
     * @param row
     *   The row to remove
     */
    removeRow : function (row) {
      // Only remove  a row if there  will be at least  one left after
      // the removal.
      if (this.rows > 1) {
        this.contentContainer.removeChild(row);
        this.rows--;

        if (this.rows === 1) {
          this.getRemoveButton(this.getContentRows()[0]).disabled = true;
        }
        this.setFirstRowBehavior();
      }
    },

    /**
     * Adds special behavior to the first row, and makes sure no other rows
     * still have this behavior.
     */
    setFirstRowBehavior : function () {
      var firstRowClassName = "first";
      var contentRows = this.getContentRows();

      // Set to the first element if it doesn't have the class name already.
      if (contentRows[0]) {
        ClassNames.add(contentRows[0], firstRowClassName);

        if (contentRows[1]) {
          // Remove the behavior from the second element.
          ClassNames.del(contentRows[1], firstRowClassName);
        }
      }
    },

    /**
     * Adds a content row to the dialog.
     *
     * @param previousRow
     *   The row to insert the new row after.
     * @param append
     *   If true  the row will be appended to the document, otherwise it's added
     *   after the given row, or before the first row if previousRow is null.
     */
    addRow : function (previousRow, append) {
      if (this.rows === 1) {
        this.getRemoveButton(this.getContentRows()[0]).disabled = false;
      }

      // Append if append was set.
      if (append) {
        this.contentContainer.appendChild(this.createContentRow());
      }
      // prepend if there is no previousRow.
      else if (!previousRow) {
        dom.insertBefore(this.createContentRow(), this.contentContainer.firstChild, this.contentContainer);
        this.setFirstRowBehavior();
      }
      // Otherwise insert after the previousRow.
      else {
        dom.insertAfter(this.createContentRow(), previousRow);
      }

      this.setFirstRowBehavior();
    },

    /**
     * Adds a new row above the given row
     *
     * @param nextRow
     *   The row to add the new row above.
     */
    prependRow : function (nextRow) {
      // Enable the remove row button if there is only one row, since
      // another button will be added.
      if (this.rows === 1) {
        this.getRemoveButton(this.getContentRows()[0]).disabled = false;
      }

      // Insert the new row.
      dom.insertBefore(this.createContentRow(), nextRow);

      this.setFirstRowBehavior();
    },

    /**
     * Opens the dialog and appends the contents.
     */
    openDialog : function () {
      mDialog.open(t("Insert definition list"), "definition-list");
      mDialog.getContent().appendChild(this.form);
      mDialog.focusFirst();
    },

    /**
     * Handles form submissions. Serializes the information to markdown syntax
     * and inserts it into the document.
     */
    process :  function () {
      var dts = [];
      var dds = [];

      var titleElements = getElementsByClassName("title-cell-input", this.contentContainer);
      var descriptionElements = this.contentContainer.getElementsByTagName("textarea");

      for (var i = 0; i < titleElements.length; i++) {
        // Don't add the values if both form elements are empty.
        if (!((titleElements[i].value === "" || titleElements[i].value === this.titleCellDefaultValue) && (descriptionElements[i].value === "" || descriptionElements[i].value === this.descriptionCellDefaultValue))) {
          dts.push(titleElements[i].value);
          dds.push(descriptionElements[i].value);
        }
      }

      // Serialize the information into markdown extra syntax.
      var lines = [];
      for (var j = 0; j < dts.length; j++) {
        dds[j] = ":   " + dds[j];
        lines.push(dts[j] + "\n" + dds[j].replace(/^(?!: {3})/gm, "    "));
      }

      // Insert the data and close the dialog.
      BUE.active.replaceSelection(lines.join("\n\n"));
      markdownEditor.selection.lineBreak();
      markdownEditor.selection.caretAtEnd();
      BUE.dialog.close();
    }
  };

  return DefinitionList;
}) ();


/*******************************************************************************
 * REFERENCES
 ******************************************************************************/

markdownEditor.Reference = (function () {

  /**
   * Represents a reference stored at the bottom of a markdown document.
   * A Reference consists of a type, which are Links, Abbreviatons and so on,
   * an identifier which is the actual reference name, and text which is the
   * data the reference defines.
   *
   * @param type
   *   The type of reference, Abbreviations, Links, Footnotes or Images.
   * @param identifier
   *   The name of the referenc.
   * @param text
   *   The information the reference defines.
   */
  function Reference(type, identifier, text) {
    this.type = type;
    this.identifier = identifier;
    this.text = text;
  } Reference.prototype = {

    // Instance variables.
    prefix : "[",
    infix : "]: ",
    type : null,
    identifier : null,
    text : null,

    /**
     * @return
     *   The string representation of a reference, this is the string that's
     *   valid inside markdown documents.
     */
    toString : function () {
      return this.prefix + this.identifier + this.infix + this.text;
    },

    /**
     * Setter for prefix
     *
     * @param prefix
     *   A string, the prefix of the reference string.
     */
    setPrefix : function (prefix) {
      this.prefix = prefix;
    },

    /**
     * Setter for suffix
     *
     * @param suffix
     *   The new suffix for the reference string.
     */
    setSuffix : function (suffix) {
      this.suffix = suffix;
    },

    /**
     * Checks if two references are equal, meaning all properties are equal.
     *
     * @param reference
     *   The reference to compare to.
     * @return
     *   A boolean signifying whether the references are equal.
     */
    equals : function (reference) {
      return this.type === reference.type && this.identifier === reference.identifier && this.text === reference.text;
    }
  };

  /**
   * Unserializes a reference string. Extracts the correct prefix.
   *
   * @param referenceString
   *   The serialized reference.
   * @param type
   *   The type of reference, matching the type property of a Reference.
   */
  Reference.fromString = function (referenceString, type) {
    // Matches  a  serialized  reference,  also  extracts  the  prefix
    // format.
    if (!/^(\*?\[\^?)([^\]]+)\]: ([\s\S]*)$/.test(referenceString)) {
      throw new Error("String does not match a serialized Reference.");
    }
    var reference = new Reference(type, RegExp.$2, RegExp.$3);
    reference.setPrefix(RegExp.$1);
    return reference;
  };

  return Reference;
})();

markdownEditor.references = (function () {
  var Reference = markdownEditor.Reference;
  var collection = markdownEditor.extras.collection;

  // The available reference types,  in the order they should appear
  // in the document.
  var order = ["Abbreviations", "Notes", "Links", "Images"];

  /**
   * A singleton for working with references.
   */
  function References() {

  } References.prototype = {

    // Instance variables.
    headerPrefix : "<!-- ",
    headerSuffix : " -->",
    references : null,

    /**
     * Fetches any existing references from the document.
     *
     * @return
     *   A hash where each property is a reference header and the values are
     *   arrays of References.
     */
    parseReferences : function () {
      var lines = BUE.active.getContent().split(/\r?\n|\r/);

      // Available reference types.
      var references = {
        "Abbreviations" : "",
        "Links" : "",
        "Images" : "",
        "Notes" : ""
      };
      var line;
      var currentReference = null;
      for (var i = 0; i < lines.length; i++) {
        line = lines[i];

        // If this line is a reference header.
        if (/^<!-- (\S+) -->$/.test(line)) {
          if (RegExp.$1 in references) {
            currentReference = RegExp.$1;
          }
        }
        // If this line is below  a reference header it's a reference
        // or part of one.
        else if (currentReference) {
          references[currentReference] += line + "\n";
        }

      }

      // Convert to Reference instances.
      for (var type in references) if (references.hasOwnProperty(type)) {
        // If the contents is empty,  just replace with an empty array
        // and do nothing else.
        if (references[type] === "") {
          references[type] = [];
          continue;
        }

        // Fetch all  separate references  from the stored  string, it
        // also matches multi-line references.
        var referenceStrings = references[type].match(/(?:^|\n).?\[([^\]])+\]:[^\[]+(?=^\[|\n|$)/g) || [];
        references[type] = [];

        // Loop  through each  reference string  and convert  it  to a
        // Reference.
        for (var j = 0; j < referenceStrings.length; j++) {
          references[type].push(Reference.fromString(referenceStrings[j].replace(/\n+$/, "").replace(/^\n+/, ""), type));
        }
      }

      this.references = references;
      return references;
    },

    /**
     * Gets all references of a given type.
     *
     * @param type
     *   The reference type.
     * @return
     *   An Array of References.
     */
    getReferences : function (type) {
      return this.parseReferences()[type];
    },

    /**
     * Checks if the given reference is stored under the given type. The
     * match is attempted using only the identifier.
     *
     * @param reference
     *   The reference to look for.
     * @return
     *   Boolean signifying whether the reference exists.
     */
    hasReference : function (reference) {
      var references = this.getReferences(reference.type);
      for (var i = 0; i < references.length; i++) {
        if (references[i].identifier === reference.identifier) {
          return true;
        }
      }
      return false;
    },

    /**
     * Checks if the given header exists in the document.
     *
     * @param header
     *   The string name of the header.
     * @return
     *   Whether the header exists in the document.
     */
    hasHeader : function (header) {
      return new RegExp(this.headerPrefix + header + this.headerSuffix).test(BUE.active.getContent());
    },

    /**
     * Prints the references into the textarea.
     *
     *   The reference type.
     * @param references
     *   An Array of reference lines.
     */
    _printReferences : function (references) {
      // Remove existing references.
      this._clearReferences();
      var textArea = BUE.active.textArea;

      // Replace trailing line breaks with three line breaks.
      textArea.value = textArea.value.replace(/\n+$/, "\n\n\n");

      // Loop through all reference headers.
      for (var i = 0; i < order.length; i++) {
        var iReferences = this.references[order[i]];
        // If the reference header exists and has References under it.
        if (iReferences && iReferences.length > 0) {
          // Insert the header.
          textArea.value += this.headerPrefix + order[i] + this.headerSuffix + "\n";
          // Loop through references and insert.
          for (var j = 0; j < iReferences.length; j++) {
            textArea.value += iReferences[j].toString() + "\n";
          }

          textArea.value += "\n\n";
        }
      }

      // Make sure all headers have 3 line breaks in front of them.
      for (var k = 0; k < order.length; k++) {
        if (this.hasHeader(order[k])) {
          BUE.active.setContent(BUE.active.getContent().replace(new RegExp("\n*(?=<!-- " + order[k] + " -->)"), "\n\n"));
        }
      }

      // Truncate trailing white space.
      textArea.value = textArea.value.replace(/[\s\n\r]*$/, "\n");
    },

    /**
     * Removes all reference data from the document.
     */
    _clearReferences : function () {
      var content = BUE.active.getContent();
      var index;

      // Try to find the index of the first header.
      for (var i = 0; i < order.length; i++) {
        index = content.search(new RegExp(this.headerPrefix + order[i] + this.headerSuffix));
        if (index >= 0) {
          break;
        }
      }

      // If no reference data exists, nothing needs to be done.
      if (index == -1) return;

      // Set the content to itself but excluding the references.
      BUE.active.setContent(content.substring(0, index));
    },

    /**
     * Replaces a reference with the new specified text. This function
     * modifies the textarea.
     *
     * @type reference
     *   The Reference to replace to.
     */
    _replaceReference : function (reference) {
      var references = this.getReferences(reference.type);
      for (var i = 0; i < references.length; i++) {
        if (reference.identifier === references[i].identifier) {
          references[i].text = reference.text;
        }
      }

      this._printReferences(reference.type, references);
    },

    /**
     * Adds the reference at the end of the content area for its type.
     *
     * @param reference
     *   The reference to add to the textarea.
     */
    _pushReference : function (reference) {
      var references = this.getReferences(reference.type);
      references.push(reference);
      this._printReferences(reference.type, references);
    },

    /**
     * Adds a reference at the appropriate location in the textarea.
     *
     * @param reference
     *   The reference to add.
     */
    addReference : function (reference) {

      var references = this.getReferences(reference.type);

      if (this.hasReference(reference)) {
        this._replaceReference(reference);
      }
      else {
        this._pushReference(reference);
      }
    },

    /**
     * Tries to find a reference matching the given identifier from the
     * BUE.
     *
     * @param type
     *   A reference type.
     * @param identifier
     *   The identifier to look for.
     * @return
     *   The found Reference, or null if none is found.
     */
    getByIdentifier : function (type, identifier) {
      // Get the references of the given type and loop through them.
      var references = this.getReferences(type);
      for (var i = 0; i < references.length; i++) {
        if (references[i].identifier === identifier) {
          // Found the reference.
          return references[i];
        }
      }

      // Nothing was found.
      return null;
    },

    /**
     * Callback for adding references to the textarea.
     * If the reference exists the user is prompted for whether the reference
     * should be overwritten.
     *
     * @param textString
     *   The text string to add at the current selection. This text is the
     *   markup refering to the reference.
     * @param reference
     *   The reference to attempt to add.
     * @param allowOverride
     *   Whether the reference may override another reference with the same
     *   identifier. Default value is true.
     * @param message
     *   The message to display if the reference already exists. Has default
     *   values.
     * @param space
     *   Whether spaces should be added around the inserted text if it's next
     *   to non-whitespace characters. Defaults to true.
     */
    _callback : function (textString, reference, allowOverride, message, space) {
      var references = markdownEditor.references;
      var t = markdownEditor.t;

      // Only evaluates to false if allowOverride === false.
      allowOverride = !!allowOverride;
      space = !!(space === undefined || space);
      message = message || null;

      // Store the current selection, since it may be modified before we read it
      // otherwise.
      var selection = BUE.active.posSelection();

      // If there exists a reference by this name already.
      if (references.hasReference(reference)) {
        // If the user may choose to overwrite the existing reference.
        if (allowOverride) {
          // If the  reference doesn't  match the existing  one, and
          // the user does not want to overwrite it.
          if (!references.getByIdentifier(reference.type, reference.identifier).equals(reference) && !confirm(message || t("There is a reference with this name, should it be overwritten?"))) {
            // Let the user modify the dialog further.
            return;
          }
        }
        // The  user may not  modify an  existing reference,  an error
        // message is sent  and the user is returned  to the dialog to
        // modiy the reference name.
        else {
          markdownEditor.dialog.addError(message || t("There is an existing reference by that name, you may not modify it. Please choose a different name for the reference."));
          return;
        }
      }

      // Add the reference to the BUE.
      references.addReference(reference);

      // Select the initial selection, replace data and close the dialog.
      BUE.active.makeSelection(selection.start, selection.end);

      BUE.active.replaceSelection(textString);
      if (space) {
        markdownEditor.selection.space();
      }
      BUE.dialog.close();
    }

  };

  return new References();
})();


;// $Id: autocomplete.js,v 1.23 2008/01/04 11:53:21 goba Exp $

/**
 * Attaches the autocomplete behavior to all required fields
 */
Drupal.behaviors.autocomplete = function (context) {
  var acdb = [];
  $('input.autocomplete:not(.autocomplete-processed)', context).each(function () {
    var uri = this.value;
    if (!acdb[uri]) {
      acdb[uri] = new Drupal.ACDB(uri);
    }
    var input = $('#' + this.id.substr(0, this.id.length - 13))
      .attr('autocomplete', 'OFF')[0];
    $(input.form).submit(Drupal.autocompleteSubmit);
    new Drupal.jsAC(input, acdb[uri]);
    $(this).addClass('autocomplete-processed');
  });
};

/**
 * Prevents the form from submitting if the suggestions popup is open
 * and closes the suggestions popup when doing so.
 */
Drupal.autocompleteSubmit = function () {
  return $('#autocomplete').each(function () {
    this.owner.hidePopup();
  }).size() == 0;
};

/**
 * An AutoComplete object
 */
Drupal.jsAC = function (input, db) {
  var ac = this;
  this.input = input;
  this.db = db;

  $(this.input)
    .keydown(function (event) { return ac.onkeydown(this, event); })
    .keyup(function (event) { ac.onkeyup(this, event); })
    .blur(function () { ac.hidePopup(); ac.db.cancel(); });

};

/**
 * Handler for the "keydown" event
 */
Drupal.jsAC.prototype.onkeydown = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 40: // down arrow
      this.selectDown();
      return false;
    case 38: // up arrow
      this.selectUp();
      return false;
    default: // all other keys
      return true;
  }
};

/**
 * Handler for the "keyup" event
 */
Drupal.jsAC.prototype.onkeyup = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 16: // shift
    case 17: // ctrl
    case 18: // alt
    case 20: // caps lock
    case 33: // page up
    case 34: // page down
    case 35: // end
    case 36: // home
    case 37: // left arrow
    case 38: // up arrow
    case 39: // right arrow
    case 40: // down arrow
      return true;

    case 9:  // tab
    case 13: // enter
    case 27: // esc
      this.hidePopup(e.keyCode);
      return true;

    default: // all other keys
      if (input.value.length > 0)
        this.populatePopup();
      else
        this.hidePopup(e.keyCode);
      return true;
  }
};

/**
 * Puts the currently highlighted suggestion into the autocomplete field
 */
Drupal.jsAC.prototype.select = function (node) {
  this.input.value = node.autocompleteValue;
};

/**
 * Highlights the next suggestion
 */
Drupal.jsAC.prototype.selectDown = function () {
  if (this.selected && this.selected.nextSibling) {
    this.highlight(this.selected.nextSibling);
  }
  else {
    var lis = $('li', this.popup);
    if (lis.size() > 0) {
      this.highlight(lis.get(0));
    }
  }
};

/**
 * Highlights the previous suggestion
 */
Drupal.jsAC.prototype.selectUp = function () {
  if (this.selected && this.selected.previousSibling) {
    this.highlight(this.selected.previousSibling);
  }
};

/**
 * Highlights a suggestion
 */
Drupal.jsAC.prototype.highlight = function (node) {
  if (this.selected) {
    $(this.selected).removeClass('selected');
  }
  $(node).addClass('selected');
  this.selected = node;
};

/**
 * Unhighlights a suggestion
 */
Drupal.jsAC.prototype.unhighlight = function (node) {
  $(node).removeClass('selected');
  this.selected = false;
};

/**
 * Hides the autocomplete suggestions
 */
Drupal.jsAC.prototype.hidePopup = function (keycode) {
  // Select item if the right key or mousebutton was pressed
  if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
    this.input.value = this.selected.autocompleteValue;
  }
  // Hide popup
  var popup = this.popup;
  if (popup) {
    this.popup = null;
    $(popup).fadeOut('fast', function() { $(popup).remove(); });
  }
  this.selected = false;
};

/**
 * Positions the suggestions popup and starts a search
 */
Drupal.jsAC.prototype.populatePopup = function () {
  // Show popup
  if (this.popup) {
    $(this.popup).remove();
  }
  this.selected = false;
  this.popup = document.createElement('div');
  this.popup.id = 'autocomplete';
  this.popup.owner = this;
  $(this.popup).css({
    marginTop: this.input.offsetHeight +'px',
    width: (this.input.offsetWidth - 4) +'px',
    display: 'none'
  });
  $(this.input).before(this.popup);

  // Do search
  this.db.owner = this;
  this.db.search(this.input.value);
};

/**
 * Fills the suggestion popup with any matches received
 */
Drupal.jsAC.prototype.found = function (matches) {
  // If no value in the textfield, do not show the popup.
  if (!this.input.value.length) {
    return false;
  }

  // Prepare matches
  var ul = document.createElement('ul');
  var ac = this;
  for (key in matches) {
    var li = document.createElement('li');
    $(li)
      .html('<div>'+ matches[key] +'</div>')
      .mousedown(function () { ac.select(this); })
      .mouseover(function () { ac.highlight(this); })
      .mouseout(function () { ac.unhighlight(this); });
    li.autocompleteValue = key;
    $(ul).append(li);
  }

  // Show popup with matches, if any
  if (this.popup) {
    if (ul.childNodes.length > 0) {
      $(this.popup).empty().append(ul).show();
    }
    else {
      $(this.popup).css({visibility: 'hidden'});
      this.hidePopup();
    }
  }
};

Drupal.jsAC.prototype.setStatus = function (status) {
  switch (status) {
    case 'begin':
      $(this.input).addClass('throbbing');
      break;
    case 'cancel':
    case 'error':
    case 'found':
      $(this.input).removeClass('throbbing');
      break;
  }
};

/**
 * An AutoComplete DataBase object
 */
Drupal.ACDB = function (uri) {
  this.uri = uri;
  this.delay = 300;
  this.cache = {};
};

/**
 * Performs a cached and delayed search
 */
Drupal.ACDB.prototype.search = function (searchString) {
  var db = this;
  this.searchString = searchString;

  // See if this key has been searched for before
  if (this.cache[searchString]) {
    return this.owner.found(this.cache[searchString]);
  }

  // Initiate delayed search
  if (this.timer) {
    clearTimeout(this.timer);
  }
  this.timer = setTimeout(function() {
    db.owner.setStatus('begin');

    // Ajax GET request for autocompletion
    $.ajax({
      type: "GET",
      url: db.uri +'/'+ Drupal.encodeURIComponent(searchString),
      dataType: 'json',
      success: function (matches) {
        if (typeof matches['status'] == 'undefined' || matches['status'] != 0) {
          db.cache[searchString] = matches;
          // Verify if these are still the matches the user wants to see
          if (db.searchString == searchString) {
            db.owner.found(matches);
          }
          db.owner.setStatus('found');
        }
      },
      error: function (xmlhttp) {
        alert(Drupal.ahahError(xmlhttp, db.uri));
      }
    });
  }, this.delay);
};

/**
 * Cancels the current autocomplete request
 */
Drupal.ACDB.prototype.cancel = function() {
  if (this.owner) this.owner.setStatus('cancel');
  if (this.timer) clearTimeout(this.timer);
  this.searchString = '';
};
;// $Id: collapse.js,v 1.17 2008/01/29 10:58:25 goba Exp $

/**
 * Toggle the visibility of a fieldset using smooth animations
 */
Drupal.toggleFieldset = function(fieldset) {
  if ($(fieldset).is('.collapsed')) {
    // Action div containers are processed separately because of a IE bug
    // that alters the default submit button behavior.
    var content = $('> div:not(.action)', fieldset);
    $(fieldset).removeClass('collapsed');
    content.hide();
    content.slideDown( {
      duration: 'fast',
      easing: 'linear',
      complete: function() {
        Drupal.collapseScrollIntoView(this.parentNode);
        this.parentNode.animating = false;
        $('div.action', fieldset).show();
      },
      step: function() {
        // Scroll the fieldset into view
        Drupal.collapseScrollIntoView(this.parentNode);
      }
    });
  }
  else {
    $('div.action', fieldset).hide();
    var content = $('> div:not(.action)', fieldset).slideUp('fast', function() {
      $(this.parentNode).addClass('collapsed');
      this.parentNode.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = self.innerHeight || document.documentElement.clientHeight || $('body')[0].clientHeight || 0;
  var offset = self.pageYOffset || document.documentElement.scrollTop || $('body')[0].scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    } else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = function (context) {
  $('fieldset.collapsible > legend:not(.collapse-processed)', context).each(function() {
    var fieldset = $(this.parentNode);
    // Expand if there are errors inside
    if ($('input.error, textarea.error, select.error', fieldset).size() > 0) {
      fieldset.removeClass('collapsed');
    }

    // Turn the legend into a clickable link and wrap the contents of the fieldset
    // in a div for easier animation
    var text = this.innerHTML;
      $(this).empty().append($('<a href="#">'+ text +'</a>').click(function() {
        var fieldset = $(this).parents('fieldset:first')[0];
        // Don't animate multiple times
        if (!fieldset.animating) {
          fieldset.animating = true;
          Drupal.toggleFieldset(fieldset);
        }
        return false;
      }))
      .after($('<div class="fieldset-wrapper"></div>')
      .append(fieldset.children(':not(legend):not(.action)')))
      .addClass('collapse-processed');
  });
};
;// $Id: textarea.js,v 1.22 2008/01/17 19:31:56 goba Exp $

Drupal.behaviors.textarea = function(context) {
  $('textarea.resizable:not(.textarea-processed)', context).each(function() {
    // Avoid non-processed teasers.
    if ($(this).is(('textarea.teaser:not(.teaser-processed)'))) {
      return false;  
    }
    var textarea = $(this).addClass('textarea-processed'), staticOffset = null;

    // When wrapping the text area, work around an IE margin bug.  See:
    // http://jaspan.com/ie-inherited-margin-bug-form-elements-and-haslayout
    $(this).wrap('<div class="resizable-textarea"><span></span></div>')
      .parent().append($('<div class="grippie"></div>').mousedown(startDrag));

    var grippie = $('div.grippie', $(this).parent())[0];
    grippie.style.marginRight = (grippie.offsetWidth - $(this)[0].offsetWidth) +'px';

    function startDrag(e) {
      staticOffset = textarea.height() - e.pageY;
      textarea.css('opacity', 0.25);
      $(document).mousemove(performDrag).mouseup(endDrag);
      return false;
    }

    function performDrag(e) {
      textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
      return false;
    }

    function endDrag(e) {
      $(document).unbind("mousemove", performDrag).unbind("mouseup", endDrag);
      textarea.css('opacity', 1);
    }
  });
};
;$(document).ready(function() {
    var chars;
    $("#question_title").bind("keyup",function(e){
        var chars,
            current_total,
            text_box_value,
            text_lenght;
        chars = $(".char_count:first");
        current_total = chars.text();
        text_box_value = $(this).val();
        text_length = text_box_value.length;
        current_total = 140 - text_length;
        if(current_total < 0){
            chars.css("color","red");
        } else {
            chars.css("color","");
        }
        
        chars.text(current_total);
    });
    
    chars = $("label[for=edit-title] span.char_count:first");
    
    if(chars.length == 0){
        var title_text = $("#edit-title").val();
	if(title_text) {
        var current_left = 140 - title_text.length;
        $("label[for=edit-title]").append("&nbsp; Char Count: &nbsp;<span class='char_count'>"+current_left+"</span>");
        
        chars = $("label[for=edit-title] span.char_count:first");
        
        if(current_left < 0){
            chars.css("color","red");
        } else {
            chars.css("color","");
        }
	}
    }
    
    $("#edit-title").bind("keyup",function(e){
        var chars,
            current_total,
            text_box_value,
            text_lenght;
        chars = $("label[for=edit-title] span.char_count:first");
        current_total = chars.text();
        text_box_value = $(this).val();
        text_length = text_box_value.length;
        current_total = 140 - text_length;
        if(current_total < 0){
            chars.css("color","red");
        } else {
            chars.css("color","");
        }
        
        chars.text(current_total);

	return true;
    });
});
;