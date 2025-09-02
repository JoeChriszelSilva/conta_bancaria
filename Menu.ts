import readlinesync = require("readline-sync");
import { colors } from "./src/util/color";
import { Conta } from './src/model/Conta';
export function menu (){
    let opcao: number;
    while (true){

        console.log(colors.bg.black, colors.fg.yellow,
            "****************************************************");
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
        console.log("****************************************************",
            colors.reset);
        
        console.log(colors.fg.yellow,'Escolha uma opção:', colors.reset);
        opcao= readlinesync.questionInt('');

        if (opcao==9){
            console.log(colors.fg.greenstrong, 
                '\nBANCO SOL NASCENTE agradece a preferência. Volte sempre!\n');
            sobre();
            console.log(colors.reset, "");
            break;
        }
        switch (opcao){
            case 1:
                console.log(colors.fg.greenstrong, 
                    '\nCriar Conta\n', colors.reset);
                    Keypress();
                break;
            case 2:
                console.log(colors.fg.greenstrong,
                    '\nlistar todas as contas\n', colors.reset);  
                    Keypress();
                break;
            case 3:
                console.log(colors.fg.greenstrong,
                    '\nBuscar Conta por Número\n', colors.reset);
                    Keypress();
                break;
            case 4:
                console.log(colors.fg.greenstrong,
                    '\nAtualizar Dados da conta\n', colors.reset);
                    Keypress();
                break;
            case 5:
                console.log(colors.fg.greenstrong, 
                    '\nApagar Conta\n', colors.reset);
                    Keypress();
                break;
            case 6:
                console.log(colors.fg.greenstrong,
                    '\nSacar\n', colors.reset);
                    Keypress();
                break;
            case 7:
                console.log(colors.fg.greenstrong,
                    '\nDepositar\n', colors.reset);
                    Keypress();
                break;
            case 8:
                console.log(colors.fg.greenstrong,
                    '\nTransferir valores entre contas\n');
                    Keypress();
                break;
            default:
                console.log(colors.fg.greenstrong,
                    '\nOpção Inválida\n', colors.reset);
                    Keypress();
                break;


        }    
    }
}
function Keypress(): void {
    console.log(colors.reset, '');
    console.log('pressione ENTER para continuar...');
    readlinesync.question('');
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}
menu ();