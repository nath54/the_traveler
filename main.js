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
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 2, 2, 1, 1, 2, 2, 2, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]

function Map(nom){this.terrain=mape;
}

var map=new Map("mape");


tc=32
cam=[0,0]

function it(n){ return parseInt(n) }

function affichage(mape,perso,ennemies){
        mape=map.terrain;
        for( x = it(cam[0]/tc) ; x > it((cam[0]+tex)/tc) ; x++ ){
                for( y = it(cam[1]/tc) ; y > it((cam[y]+tey)/tc) ; y++ ){
                        if( x>=0 && y>=0 && x<mape.lenght && y<mape[0].length){
                                m=mape[x][y];
                                context.drawImage( emape[m][2] , cam[0]+x*tc, cam[1]+y*tc, tc, tc);
                        }
                }
        }
        for(e in enemies){
                context.drawImage( e.img , cam[0]+e.px , cam[1]+e.py , e.tx, e.ty);
        }
        context.drawImage( perso.img , cam[0]+perso.px , cam[1]+perso.py , perso.tx, perso.ty);
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
                this.kup="Up";
                this.kdown="Down";
                this.kleft="Left";
                this.kright="Left";
                this.katt="Space";
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
                if(aa==this.kup && dt.getTime-this.dkup>=this.tk){
                        this.dkup=dt.getTime();
                        this.py-=this.vit;
                        //verif collision
                        c=getCollisionWithMap(this);
                        if(c==true) this.py+=this.vit+1;
                }
                else if(aa==this.kdown && dt.getTime()-this.dkdown>=this.tk){
                        this.dkdown=dt.getTime();
                        this.py+=this.vit;
                        //verif collision
                        c=getCollisionWithMap(this);
                        if(c==true) this.py-=this.vit+1
                }
                else if(aa==this.kleft && dt.getTime()-this.dkleft>=this.tk){
                        this.dkleft=dt.getTime();
                        this.px-=this.vit;
                        //verif collision
                        c=getCollisionWithMap(this);
                        if(c==true) this.px+=this.vit+1;
                }
                else if(aa==this.kright && dt.getTime()-this.dkright>=this.tk){
                        this.dkright=dt.getTime();
                        this.px+=this.vit;
                        //verif collision
                        c=getCollisionWithMap(this);
                        if(c==true) this.px-=this.vit+1;
                }
                else if(aa==this.katt && dt.getTime()-this.datt>=this.tatt){
                        this.datt=dt.getTime();
                        len=getEnemiesTouches(this);
                        dgts=this.degats[0]+Math.random()*(this.degats[1]-this.degats[0]);
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


function main(){
        perso=new Perso(50,50);
        mape=new Map();
        enemies=[];
        encour=true;

        function mainboucle(){
                perso.update();
                affichage(mape,perso,enemies);
                if(encour) window.requestAnimationFrame(mainboucle);
        }
        window.requestAnimationFrame(mainboucle);
}


main()

