import readlinesync = require("readline-sync");

export function menu (){
    let opcao: number;
    while (true){
        console.log("****************************************************");
        console.log("                                                    ");
        console.log("              BANCO SOL NASCENTE                    ");
        console.log("                                                    ");
        console.log("****************************************************");
        console.log("                                                    ");
        console.log("               1 - Criar Conta                      ");
        console.log("               2 - Listar Todas as Contas           ");
        console.log("               3 - Buscar Conta por Número          ");
        console.log("               4 - Atualizar Dados da Conta         ");
        console.log("               5 - Apagar Conta                     ");
        console.log("               6 - Sacar                            ");
        console.log("               7 - Depositar                        ");
        console.log("               8 - Transferir Valores Entre Contas  ");
        console.log("               9 - Sair                             ");
        console.log("                                                    ");
        console.log("****************************************************");
        opcao= readlinesync.questionInt("Escolha uma opcao: ");

        if (opcao==9){
            console.log('\nBanco SOL NASCENTE agradece a preferência. Volte sempre!\n');
            
        }
        switch (opcao){
            case 1:
                console.log('\nCriar Conta\n');
                break;
            case 2:
                console.log('\nlistar todas as contas\n');  
                break;
            case 3:
                console.log('\nBuscar Conta por Número\n');
                break;
            case 4:
                console.log('\nAtualizar Dados da conta\n');
                break;
            case 5:
                console.log('\nApagar Conta\n');
                break;
            case 6:
                console.log('\nSacar\n');
                break;
            case 7:
                console.log('\nDepositar\n');
                break;
            case 8:
                console.log('\nTransferir valores entre contas\n');
                break;
            default:
                console.log('\nOpção Inválida\n');
                break;



        }    
    }
}
menu ();