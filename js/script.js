/* Lista della spesa con ciclo while: Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */


// Selezionare elemento lista in HTML
const lista = document.querySelector("lista");
// Definisco la lista della spesa preesistende 
const arreySpesa = ["sedano", "carote", "cipolle", "riso basmati", "funghi porcini", "burro", "grana padano"];
// Scorro la lista della spesa
let i = 0;
while (i < arreySpesa.length) {
    // Mi salvo ogni elemento della lista
    let alimento = arreySpesa[i];
    console.log(alimento);
    i++;
    // Creo il List Item da inserire nella lista
    const voceAlimentoLi = document.createElement("li");
    // Inserico dentro LI lelemento array salvato
    voceAlimentoLi.append(lista);
    // Inserco il LI nella UL selezionata ad inizio script
}
    