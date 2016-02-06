
//calculando IMC somente pelo evento atrav´s do javascript
var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosImcs;

botao.addEventListener("click", function(){

     //pega todas as tr's com classe paciente, array
    var trPacientes = document.getElementsByClassName("paciente");


    percorreArray(trPacientes, function(pacienteTr){

            var pacienteTr = trPacientes[posicaoAtual]; //Pega o paciente na posição, se for 0, pega o primeiro e assim por diante

            var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];  
            var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
            var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];


            var pacienteAtual = {nome : tdNome.textContent,//chave valor
                                 peso : tdPeso.textContent, 
                                 altura : tdAltura.textContent,
                                 pegaImc : function(){ //função anonima, não é global


                                        var ehDiferenteDeZero = (this.altura !== 0);//true or false  

                                        if(ehDiferenteDeZero){                       //THIS REPRESENTA O OBJETO ONDE VOCÊ ESTA CHAMANDO A FUNÇÃO

                                           var imc = this.peso / (this.altura * this.altura);
                                           return imc;

                                        }else{
                                            console.log("peso não divisível por 0");
                                        }




                                 }};//Calcula o Imc

            var imc = pacienteAtual.pegaImc();

            var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
            tdImc.textContent = imc;
            console.log(imc);  



        });


});
botao.addEventListener("click", function(){
    alert("Calculando IMCS");
});

