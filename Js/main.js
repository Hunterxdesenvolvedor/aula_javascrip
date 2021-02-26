
function clicar(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por ligar</b>";
    //console.log (document.getElementById("agradecimento")); 
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.youtube.com/watch?v=2-sugilOoio");
    //window.location.href = "https://www.youtube.com/watch?v=2-sugilOoio";

}

function trocar(elemento){
    //document.getElementById("mousemouve").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar (elemento){
    //document.getElementById("mousemouve").innerHTML = "Passar o mouse aqui";
    elemento.innerHTML = "Passar o mouse aqui";
}

function load() {
alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*

function soma(n1, n2){
    return n1 + n2;
}
var validade =0;

function validaIdade(idade){
    var validar = true
    if (idade >=18) {
        validar = true
    }else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade")
console.log(validaIdade(idade));

*/





/*function soma (n1, n2){
    return n1 + n2;
}
    function setReplace(frase, nome, novo_nome){
       return frase.replace("nome, novo_nome")
    }


alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/



/*
var d = new Date();
alert(d.getHours();)
alert(d.getMonth()+1);
alert(d.getMinutes());
*/


/*
var count;
for(count=0; count<=5; count++){
    alert(count);
};
*/




/*
var count =0; 
while (count <=5){
    console.log(count);
    alert(count);
    count++;
}
*/

/*var idade = prompt("Qual sua idade");
if(idade >=18) {
    alert ("maior de idade")
}else {
    alert("menor de idade");
};
*/



/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome: "maça", cor:"vermelho"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "Uva", "Manga"];
//lista.push("uva")
//lista.pop("");

//console.log(lista[0]);
//console.log(lista.toString()[0])
//console.log(lista.join("-"))

//var nome = "Kelvin Barros";
//var n1 = 5;
//var n2 =3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + "anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log (frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));

