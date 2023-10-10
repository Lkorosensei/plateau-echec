console.log("Script chargé !");
let maTable = document.createElement("table");
document.body.appendChild(maTable);

const maLigneLettre = ["A", "B", "C", "D", "E", "F", "G", "H"];


for (let lignes = 0; lignes <= 8; lignes++) {
    let maLigne = document.createElement("tr"); //tr
    maTable.appendChild(maLigne);
    console.log("numéro de lignes/de table : ", lignes);

    for (let cellules =0; cellules <= 8; cellules++) {
        let mesCellules = document.createElement("td"); //td
        // mesCellules.textContent = (cellules + lignes);
        maLigne.appendChild(mesCellules);
        
        if (lignes == 0 && cellules == 0) {
            mesCellules.style.color = "white"
        }
        if (lignes == 0 || cellules == 0) {
            mesCellules.style.border = "none";
            mesCellules.textContent = lignes;
            if (lignes == 0 && cellules > 0) {
                mesCellules.textContent = maLigneLettre[cellules-1];
            }
        } else {
            if ((cellules + lignes)%2 === 0) {
            mesCellules.style.backgroundColor = "black";
            mesCellules.style.color = "white";
            console.log("test");
            } else {
                mesCellules.style.backgroundColor = "white";
                mesCellules.style.color = "black";
                console.log("test2");
            }
        }

        
        
    }
}