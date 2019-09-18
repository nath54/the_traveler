canvas=document.getElementById("canvas");
context=canvas.getContext("2d");

tex=1280;
tey=720;

//GET IMAGES
is1=document.getElementById("is1");
is2=document.getElementById("is2");
im1=document.getElementById("im1");
imp1=document.getElementById("imp1");

p1a1=document.getElementById("p1_a1");
p1a2=document.getElementById("p1_a2");
p1a3=document.getElementById("p1_a3");
p1a4=document.getElementById("p1_a4");
p1a5=document.getElementById("p1_a5");
p1a6=document.getElementById("p1_a6");
p1a7=document.getElementById("p1_a7");
p1b1=document.getElementById("p1_b1");
p1b2=document.getElementById("p1_b2");
p1b3=document.getElementById("p1_b3");
p1b4=document.getElementById("p1_b4");
p1b5=document.getElementById("p1_b5");
p1b6=document.getElementById("p1_b6");
p1b7=document.getElementById("p1_b7");
p1b8=document.getElementById("p1_b8");
p1c1=document.getElementById("p1_c1");
p1c2=document.getElementById("p1_c2");
p1c3=document.getElementById("p1_c3");
p1c4=document.getElementById("p1_c4");
p1c5=document.getElementById("p1_c5");
p1c6=document.getElementById("p1_c6");
p1c7=document.getElementById("p1_c7");
p1c8=document.getElementById("p1_c8");
p1c9=document.getElementById("p1_c9");
p1d1=document.getElementById("p1_d1");
p1d2=document.getElementById("p1_d2");
p1d3=document.getElementById("p1_d3");
p1d4=document.getElementById("p1_d4");
p1d5=document.getElementById("p1_d5");
p1d6=document.getElementById("p1_d6");
p1e1=document.getElementById("p1_e1");
p1e2=document.getElementById("p1_e2");
p1e3=document.getElementById("p1_e3");
p1e4=document.getElementById("p1_e4");
p1e5=document.getElementById("p1_e5");
p1e6=document.getElementById("p1_e6");
p1e7=document.getElementById("p1_e7");
p1e8=document.getElementById("p1_e8");
p1e9=document.getElementById("p1_e9");
p1e10=document.getElementById("p1_e10");
p1e11=document.getElementById("p1_e11");
p1e12=document.getElementById("p1_e12");
p1e13=document.getElementById("p1_e13");
p1f1=document.getElementById("p1_f1");
p1f2=document.getElementById("p1_f2");
p1f3=document.getElementById("p1_f3");
p1f4=document.getElementById("p1_f4");
p1f5=document.getElementById("p1_f5");
p1f6=document.getElementById("p1_f6");

//ELEMENTS MAPE

const emape=[
[0,"herbe",is1],
[0,"ground0",is2],
[1,"catacombe0",im1]
];

var mape=[
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 2, 2, 1, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]

function Map(nom){this.terrain=mape;
}

var map=new Map("mape");




keys=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "];
kpress=[false       ,   false           ,false           , false             , false];

tc=32
cam=[0,0]


//0=nom , 1=vie , 2=mana , 3=degats , 4=portee , 5=t regen vie , 6=t regen mana , 7=t att, 8=vitesse , 9=dist reconnaitre ennemis , 10=esquive , 11=defense , 12=anims 
var prs=[
["Yui",100,100,[1,7],tc,500,500,500,3   ,  100 , 80 , 1 , [ [p1a1,p1a2,p1a3,p1a4,p1a5,p1a6,p1a7] , [p1b1,p1b2,p1b3,p1b4,p1b5,p1b6,p1b7,p1b8] , [p1c1,p1c2,p1c3,p1c4,p1c5,p1c6,p1c7,p1c8,p1c9] , [p1d1,p1d2,p1d3,p1d4,p1d5,p1d6] , [p1e1,p1e2,p1e3,p1e4,p1e5,p1e6,p1e7,p1e8,p1e9,p1e10,p1e11,p1e12,p1e13] , [p1f1,p1f2,p1f3,p1f4,p1f5,p1f6] , [p1a1] ] ]
];

function int(n){ return parseInt(n); }

function randomchoice(lst){ return lst[int(Math.random()*lst.length)]; }

function range(start, end) {
    var lst = [];
    for ( i = start; i <= end; i++) lst.push(i);
    return lst;
}

function rcollision( r1 , r2 ){
    if (r1[0] < r2[0] + r2[0] && r1[0] + r1[2] > r2[0] && r1[1] < r2[1] + r2[3] && r1[3] + r1[1] > r2[1]) return false;
    return false;
}


function affichage(mape,perso,bots){
        mape=map.terrain;
        context.fillStyle=" rgb(0,0,0) ";
        context.fillRect(0,0,tex,tey);
        for( x of range( int(cam[0]/tc) , int((cam[0]+tex)/tc) ) ){
                for( y of range( int(cam[1]/tc) , int((cam[1]+tey)/tc) ) ){
                        if( x>=0 && y>=0 && x<mape[0].length && y<mape.length){
                                m=mape[y][x];
                                context.drawImage( emape[m][2] , cam[0]+x*tc, cam[1]+y*tc, tc, tc);
                        }
                }
        }
        for(x=0 ; x<bots.length ; x++){
            var ee=bots[x];
            var e = ee.p;
            try{
                context.drawImage( e.img , 0 , 64*e.sens , 64 ,64, cam[0]+e.px , cam[1]+e.py , e.tx, e.ty);
                //vie de l'ennemie:
                if( e.vie < e.vie_tot ){
                    context.fillStyle = "rgb(200,0,0)";
                    context.strokeStyle = " rgb(20,0,0) ";
                    if( e.vie > 0 ) context.fillRect( cam[0]+e.px, cam[1]+e.py-10, int(e.vie/e.vie_tot*e.tx), 5 );
                    context.strokeRect( cam[0]+e.px, cam[1]+e.py-10, e.tx, 5);
                }
            }
            catch{
            }
        }
        context.drawImage( perso.img , 0 ,64*perso.sens ,64 ,64 , cam[0]+perso.px , cam[1]+perso.py , perso.tx, perso.ty);
        //vie du personnage:
        context.fillStyle = "rgb(200,0,0)";
        context.strokeStyle = " rgb(20,0,0) ";
        if( perso.vie>0 ) context.fillRect( 15, 15, int(perso.vie/perso.vie_tot*200), 20 );
        context.strokeRect( 15, 15, 200, 20);
        //mana du personnage:
        context.fillStyle = "rgb(0,100,200)";
        context.strokeStyle = " rgb(0,0,20) ";
        if( perso.mana>0 ) context.fillRect( 15, 40, int(perso.mana/perso.mana_tot*200), 5 );
        context.strokeRect( 15, 40, 200, 5);
}

function getCollisionWithMap(perso){
        iscollision=false;
        for( x of range(int(perso.px/tc)-1,int(perso.px/tc)+1) ){
            for( y of range(int(perso.py/tc)-1,int(perso.py/tc)+1) ){
                m=map.terrain[y][x];
                if( emape[m][0] == 1 ){
                    if( rcollision( (perso.px,perso.py,perso.tx,perso.ty) , (x*tc,y*tc,tc,tc) ) ){
                        iscollision=true;
                    }
                }
            }
        }
        return iscollision;
}

function dist( p1,p2){ return Math.sqrt( Math.pow( (p1[0]-p2[0]),2) + Math.pow((p1[1]-p2[1]),2) ); }

function getEnemiesTouches(perso,enemies,pr){
        px=perso.px+perso.tx/2;
        py=perso.py+perso.ty/2;
        lst=[];
        for( e of enemies ){
            if( dist([px,py],[e.px+e.tx/2,e.py+e.ty/2]) < perso.portee && perso.tipe != e.tipe && e.vie>0){
                    lst.push( e );
            }
        }
        if( dist([px,py],[pr.px+pr.tx/2,pr.py+pr.ty/2]) < perso.portee && perso.tipe!=pr.tipe && pr.vie>0){
            lst.push( pr );
        }
        return lst;
}

class Perso{
        constructor(px,py,tp,isia,tipe,prs,isimo){
                var dt=new Date();
                //location
                this.px=px;
                this.py=py;
                this.tx=tc;
                this.ty=tc;
                //mouvement
                this.vit=prs[tp][8];
                //time
                this.t=1;
                this.mort=false;
                this.tk=1;
                this.dbg=dt.getTime();
                this.dkup=dt.getTime();
                this.dkdown=dt.getTime();
                this.dkleft=dt.getTime();
                this.dkright=dt.getTime();
                this.dregen_vie=dt.getTime();
                this.dregen_mana=dt.getTime();
                this.tregen_vie=prs[tp][5];
                this.tregen_mana=prs[tp][6];
                this.datt=dt.getTime();
                this.dupdate=dt.getTime();
                this.dan=dt.getTime();
                this.tanim=100;
                //keys
                this.kup="ArrowUp";
                this.kdown="ArrowDown";
                this.kleft="ArrowLeft";
                this.kright="ArrowRight";
                this.katt=" ";
                //data
                this.tp=tp;
                this.tipe=tipe;  //0=gentil , 1=neutre , 2=méchant 
                this.isia=isia;
                this.nom=prs[tp][0];
                this.vie_tot=prs[tp][1];
                this.vie=this.vie_tot;
                this.mana_tot=prs[tp][2];
                this.mana=this.mana_tot;
                this.degats=prs[tp][3];
                this.portee=prs[tp][4];
                this.tatt=prs[tp][7];
                this.esquive=prs[tp][10];
                this.dist_reco_en=prs[tp][9];
                this.def=prs[tp][11];
                this.is_imobil=isimo; // pour les bots ( si le bot bouge ou pas )
                //images
                this.sens=0;
                var anims=prs[tp][12];
                this.an_1=anims[0];
                this.an_2=anims[1];
                this.an_3=anims[2];
                this.an_4=anims[3];
                this.an_5=anims[4];
                this.an_6=anims[5];
                this.an_7=anims[6];
                this.imgs=this.an_7;
                this.an=0;
                this.img=this.imgs[this.an];
        }
        bouger(aa,enemies,perso){
            if( !this.mort){
                var dt=new Date();
                if(aa==this.kup && dt.getTime()-this.dkup>=this.tk){
                        this.dkup=dt.getTime();
                        this.py-=this.vit;
                        //verif collision
                        var c=getCollisionWithMap(this);
                        if(c==true) this.py+=this.vit;
                        this.sens=0;
                        if( this.imgs != this.an_3 && this.imgs!=this.an_4 && this.imgs!=this.an_5 ){
                            this.imgs=this.an_3;
                            this.an=0;
                        }
                }
                else if(aa==this.kdown && dt.getTime()-this.dkdown>=this.tk){
                        this.dkdown=dt.getTime();
                        this.py+=this.vit;
                        //verif collision
                        var c=getCollisionWithMap(this);
                        if(c==true) this.py-=this.vit;
                        this.sens=2;
                        if( this.imgs != this.an_3 && this.imgs!=this.an_4 && this.imgs!=this.an_5 ){
                            this.imgs=this.an_3;
                            this.an=0;
                        }
                }
                else if(aa==this.kleft && dt.getTime()-this.dkleft>=this.tk){
                        this.dkleft=dt.getTime();
                        this.px-=this.vit;
                        //verif collision
                        var c=getCollisionWithMap(this);
                        if(c==true) this.px+=this.vit;
                        this.sens=1;
                        if( this.imgs != this.an_3  && this.imgs!=this.an_4 && this.imgs!=this.an_5){
                            this.imgs=this.an_3;
                            this.an=0;
                        }
                }
                else if(aa==this.kright && dt.getTime()-this.dkright>=this.tk){
                        this.dkright=dt.getTime();
                        this.px+=this.vit;
                        //verif collision
                        var c=getCollisionWithMap(this);
                        if(c==true) this.px-=this.vit;
                        this.sens=3;
                        if( this.imgs != this.an_3 && this.imgs!=this.an_4  && this.imgs!=this.an_5){
                            this.imgs=this.an_3;
                            this.an=0;
                        }
                }
                else if(aa==this.katt && dt.getTime()-this.datt>=this.tatt){
                        this.datt=dt.getTime();
                        var len=getEnemiesTouches(this,enemies,perso);
                        var dgts=this.degats[0]+int(Math.random()*(this.degats[1]-this.degats[0]));
                        for( var l of len ){
                                aa=int(Math.random()*100);
                                if( aa <= l.esquive && l.def<dgts){
                                    l.vie-=dgts-l.def;
                                }
                        }
                        if( this.imgs!=this.an_4){
                            this.imgs=this.an_4;
                            this.an=0;
                        }
                }
            }
        }
        update(enemies,perso){
                var dt=new Date();
                if( !this.mort && this.vie<0 ){
                    this.mort=true;
                    this.sens=0;
                    this.imgs=this.an_6;
                    this.an=0;
                }
                if( dt.getTime()-this.dan>=this.tanim){
                    this.dan=dt.getTime();
                    if( !this.mort || this.an<this.imgs.length-1) this.an+=1;
                    if( this.an>=this.imgs.length ){
                        this.an=0;
                        if( this.imgs!=this.an_7 && this.imgs!=this.an_6) this.imgs=this.an_7;
                    }
                    this.img=this.imgs[this.an];
                }
                if( !this.mort && dt.getTime()-this.dupdate>=this.t){
                        this.dupdate=dt.getTime();
                        if( this.px < 0 ) this.px=0;
                        if( this.py < 0 ) this.py=0;
                        if( this.px > tex-this.tx ) this.px=tex-this.tx
                        if( this.py > tey-this.ty ) this.py=tey-this.ty
                        if( this.vie<this.vie_tot && dt.getTime()-this.dregen_vie>=this.tregen_vie){
                            this.vie+=1;
                            this.dregen_vie=dt.getTime();
                        }
                        if( this.mana<this.mana_tot && dt.getTime()-this.dregen_mana>=this.tregen_mana){
                            this.mana+=1;
                            this.dregen_mana=dt.getTime();
                        }
                }
            //partie bot
            if( this.isia ){
                if( this.tipe == 2 ){
                    var px=perso.px+perso.tx/2;
                    var py=perso.py+perso.ty/2;
                    var mx=this.px+this.tx/2;
                    var my=this.py+this.ty/2;
                    var dd=dist([px,py],[mx,my])
                    if( dd <= this.dist_reco_en ){
                        if( dd <= this.portee ){
                            this.bouger(" ",enemies,perso);
                        }
                        else{
                            bouger_ia( this , [this.px,this.py] , [px,py] , enemies , perso );
                        }
                    }
                }
                if( !this.is_imobil ){
                    var mvs=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];
                    var mvp=[0,1,2,3];
                    for( x=0 ; x==20 ; x++ ) mvp.push( this.sens );
                    var m=randomchoice(mvp);
                    this.bouger( mvs,enemies,perso );
                }
        }
        }
}

function bouger_ia( b , p1 , p2 , enemies ,perso){ //p1=position du bot , p2=position de la cible
    if( true ){
        if( p1[0] < p2[0] ) b.bouger( "ArrowRight" ,enemies,perso);
        else if( p1[0] > p2[0] ) b.bouger("ArrowLeft",enemies,perso);
        if( p1[1] < p2[1] ) b.bouger("ArrowDown",enemies,perso);
        else if( p1[1] > p2[1] ) b.bouger("ArrowUp",enemies,perso);
    }
}

class Bot{
    constructor(p){
        this.p=p;
    }
}

document.addEventListener('keydown', (event) => {
    const nomTouche = event.key;
    kpress[ keys.indexOf(nomTouche) ] = true;
}, false);

document.addEventListener('keyup', (event) => {
    const nomTouche = event.key;
    kpress[ keys.indexOf(nomTouche) ] = false;
}, false);

function main(){
        perso=new Perso(400,450,0,false,0,prs,false);
        mape=new Map();
        var enemies=[];
        var bots=[];
        
        for( x=0 ; x<10 ; x++ ){
            var rx=100+Math.random()*500;
            var ry=100+Math.random()*500;
            e=new Perso(rx,ry,0,true,2,prs,false);
            enemies.push( e );
            bb=new Bot(enemies[x]);
            bots.push( bb );
        }
        
        encour=true;

        function mainboucle(){
                perso.update(enemies,perso);
                for(x=0;x<keys.length;x++){
                        if( kpress[x] ){
                            perso.bouger( keys[x] , enemies , perso);
                        }
                }
                for ( var b of bots ){
                    b.p.update(enemies,perso);
                }
                cam=[-perso.px+tex/2,-perso.py+tey/2];
                affichage(mape,perso,bots);
                if(encour) window.requestAnimationFrame(mainboucle);
        }
        window.requestAnimationFrame(mainboucle);
}


main()

