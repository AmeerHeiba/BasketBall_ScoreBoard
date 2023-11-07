let teamAscore = 0;
let teamBscore = 0;
let history = [["Game ID",0,0]];

let historySc=document.getElementById("historySc");
let randomID=0;
scoreScreenTA = document.getElementById("Score_ScreenA");
scoreScreenTB = document.getElementById("Score_ScreenB");

function TeamAloop(x)
{

    teamAscore +=x;
    scoreScreenTA.innerHTML=(teamAscore);

}

function TeamBloop(x)
{


    teamBscore +=x;
    scoreScreenTB.innerHTML=(teamBscore);

}

function addPoint(team)
{

    if (team == 1)
    {
        TeamAloop(1);
    }
    else if (team == 2) 
    {

        TeamBloop(1);

    } else 
    
    {
        console.log("eRROR");
    }

}

function dedPoint(team)
{
    if (team == 1)
    {
        TeamAloop(-1);
    }
    else if (team == 2) 
    {

        TeamBloop(-1);
        
    } else 
    
    {
        console.log("eRROR");
    }

}

function add2Point(team)
{

    if (team == 1)
    {
    TeamAloop(2);
    }
    else if (team == 2) 
    {

        TeamBloop(2);
        
    } else 
    
    {
        console.log("eRROR");
    }

}

function add3Point(team)
{

    if (team == 1)
    {
        TeamAloop(3);
    }
    else if (team == 2) 
    {

        TeamBloop(3);
        
    } else 
    
    {
        console.log("eRROR");
    }

}


function saveGame()
{
    randomID = Math.ceil(Math.random() * 100);
    history.push([randomID,teamAscore,teamBscore]);
    console.table(history);
    historySc.innerHTML="Saved!";

}

function newGame()
{
    teamAscore = 0;
    teamBscore = 0;
    scoreScreenTA.innerHTML=0;
    scoreScreenTB.innerHTML=0;

}