canvas=document.getElementById("canvas");
context=canvas.getContext("2d");

tex=1280;
tey=720;

//GET IMAGES
is1=document.getElementById("is1");
is2=document.getElementById("is2");
im1=document.getElementById("im1");
imp1=document.getElementById("imp1");

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

function int(n){ return parseInt(n) }

function range(start, end) {
    var lst = [];
    for (let i = start; i <= end; i++) lst.push(i);
    return lst;
}

function affichage(mape,perso,ennemies){
        mape=map.terrain;
        context.fillStyle=" rgb(0,0,0) ";
        context.fillRect(0,0,tex,tey);
        for( x in range( int(cam[0]/tc) , int((cam[0]+tex)/tc) ) ){
                for( y in range( int(cam[1]/tc) , int((cam[1]+tey)/tc) ) ){
                        if( x>=0 && y>=0 && x<mape.length && y<mape[0].length){
                                m=mape[x][y];
                                context.drawImage( emape[m][2] , cam[0]+x*tc, cam[1]+y*tc, tc, tc);
                        }
                }
        }
        for(e in enemies){
                context.drawImage( e.img , cam[0]+e.px , cam[1]+e.py , e.tx, e.ty);
               //vie de l'ennemie:
                context.fillStyle = "rgb(200,0,0)";
                context.strokeStyle = " rgb(20,0,0) ";
                context.fillRect( cam[0]+e.px, cam[1]+e.py-10, int(e.vie/e.vie_tot*e.tx), 5 );
                context.strokeRect( cam[0]+e.px, cam[1]+e.py-10, e.tx, 5);
        }
        context.drawImage( perso.img , cam[0]+perso.px , cam[1]+perso.py , perso.tx, perso.ty);
        //vie du personnage:
        context.fillStyle = "rgb(200,0,0)";
        context.strokeStyle = " rgb(20,0,0) ";
        context.fillRect( 15, 15, int(perso.vie/perso.vie_tot*200), 20 );
        context.strokeRect( 15, 15, 200, 20);
        //mana du personnage:
        context.fillStyle = "rgb(0,100,200)";
        context.strokeStyle = " rgb(0,0,20) ";
        context.fillRect( 15, 40, int(perso.mana/perso.mana_tot*200), 5 );
        context.strokeRect( 15, 40, 200, 5);
}

function getCollisionWithMap(perso){
        iscollision=false;
        return iscollision;
}

function getEnemiesTouches(perso,enemies){
        px=perso.px+perso.tx/2;
        py=perso.py+perso.ty/2;
        lst=[];
        for( e in enemies ){
                cx=e.px+e.tx/2;
                cy=e.py+e.ty/2;
                if( Math.sqrt( (cx-px)**2 + (cy-py)**2) ) lst.push( e )

        }
        return lst;
}

class Perso{
        constructor(px,py){
                var dt=new Date();
                //location
                this.px=px;
                this.py=py;
                this.tx=tc;
                this.ty=tc;
                //mouvement
                this.vit=5;
                //time
                this.t=0.01;
                this.tk=0.01;
                this.dbg=dt.getTime();
                this.dkup=dt.getTime();
                this.dkdown=dt.getTime();
                this.dkleft=dt.getTime();
                this.dkright=dt.getTime();
                this.dregen_vie=dt.getTime();
                this.dregen_mana=dt.getTime();
                this.tregen_vie=1;
                this.tregen_mana=1;
                this.datt=dt.getTime();
                this.dupdate=dt.getTime();
                //keys
                this.kup="ArrowUp";
                this.kdown="ArrowDown";
                this.kleft="ArrowLeft";
                this.kright="ArrowRight";
                this.katt=" ";
                //data
                this.vie_tot=100;
                this.vie=this.vie_tot;
                this.mana_tot=100;
                this.mana=this.mana_tot;
                this.degats=[1,15];
                this.portee=tc;
                this.tatt=0.5;
                //images
                this.img=imp1;
        }
        bouger(aa){
                var dt=new Date();
                if(aa==this.kup && dt.getTime()-this.dkup>=this.tk){
                        this.dkup=dt.getTime();
                        this.py-=this.vit;
                        //verif collision
                        var c=getCollisionWithMap(this);
                        if(c==true) this.py+=this.vit+1;
                }
                else if(aa==this.kdown && dt.getTime()-this.dkdown>=this.tk){
                        this.dkdown=dt.getTime();
                        this.py+=this.vit;
                        //verif collision
                        var c=getCollisionWithMap(this);
                        if(c==true) this.py-=this.vit+1
                }
                else if(aa==this.kleft && dt.getTime()-this.dkleft>=this.tk){
                        this.dkleft=dt.getTime();
                        this.px-=this.vit;
                        //verif collision
                        var c=getCollisionWithMap(this);
                        if(c==true) this.px+=this.vit+1;
                }
                else if(aa==this.kright && dt.getTime()-this.dkright>=this.tk){
                        this.dkright=dt.getTime();
                        this.px+=this.vit;
                        //verif collision
                        var c=getCollisionWithMap(this);
                        if(c==true) this.px-=this.vit+1;
                }
                else if(aa==this.katt && dt.getTime()-this.datt>=this.tatt){
                        this.datt=dt.getTime();
                        var len=getEnemiesTouches(this);
                        var dgts=this.degats[0]+Math.random()*(this.degats[1]-this.degats[0]);
                        for( l in len ){
                                aa=Math.random()*100;
                                if( aa <= l.esquive && l.def<dgts) l.vie=dgts-l.def;
                        }
                }
        }
        update(){
                var dt=new Date();
                if( dt.getTime()-this.dupdate>=this.t){
                        this.dupdate=dt.getTime();
                        if( this.vie<this.vie_tot && dt.getTime()-this.dregen_vie>=this.tregen_vie) this.vie+=1;
                        if( this.mana<this.mana_tot && dt.getTime()-this.dregen_mana>=this.tregen_mana) this.mana+=1;
                }
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
        perso=new Perso(400,450);
        mape=new Map();
        enemies=[];
        encour=true;

        function mainboucle(){
                perso.update();
                for(x=0;x<keys.length;x++){
                        if( kpress[x] ){
                            perso.bouger( keys[x] );
                        }
                }
                cam=[-perso.px+tex/2,-perso.py+tey/2];
                affichage(mape,perso,enemies);
                if(encour) window.requestAnimationFrame(mainboucle);
        }
        window.requestAnimationFrame(mainboucle);
}


main()

