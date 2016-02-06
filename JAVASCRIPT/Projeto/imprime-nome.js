var trPacientes = document.getElementsByClassName("paciente");


percorreArray(trPacientes,function(pacienteTr){  
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
    
    
    console.log(pacienteAtual.nome);

});



      
