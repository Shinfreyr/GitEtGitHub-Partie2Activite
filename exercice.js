//mise en place des variables
var nombreN=Number(prompt("Entrez un nombre"));
var i=0;
var j=0;

var tableauFs=[]; // char[][]
var tableauLs=[]; // char[]

//Boucle de création du carré
while (i<nombreN){
    //première et dernière ligne du carré
    if(i===0||i===nombreN-1){
        j=0;
        while(j<nombreN){
            tableauLs.push("#");
            j++;
        }
    }
    //autres lignes
    else{
        j=0;
        while(j<nombreN){
            if(j===0||j===nombreN-1){
                tableauLs.push("#");
                j++;
            }
            else{
                tableauLs.push("*");
                j++;
            }
        }
    }
    //envois du tableau Ligne dans le tableau final
    tableauFs.push(tableauLs);
    tableauLs=[];
    i++;
}

//affichage du tableau
tableauFs.forEach(function (tableauF){
    console.log(tableauF);
});