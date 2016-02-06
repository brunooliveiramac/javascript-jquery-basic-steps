function percorreArray(trPacientes, comportamento){
    
        for(posicaoAtual = 0; posicaoAtual <= trPacientes.length - 1; posicaoAtual ++){   
            var pacienteAtual = trPacientes[posicaoAtual];
            
            comportamento(pacienteAtual);
            
        }

    
}