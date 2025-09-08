import readlinesync = require("readline-sync");
import { colors } from "./src/util/color";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main (){

    let contas: ContaController = new ContaController();

    let opcal, numero, agencia, tipo, saldo, limite, valor, aniversario,numeroDestino: number;
    let titular: string;
    const tipoConta = ["Conta Corrente", "Conta Poupaca"]

    let opcao: number;

// objeto da classe Conta Corrente(teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(10500);
    contacorrente.visualizar();
    contacorrente.depositar(5000);
    contacorrente.visualizar();

// objeto da classe conta poupança (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 1, "victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();



    while (true){

        console.log(colors.bg.black, colors.fg.greenstrong,
            "\n****************************************************");
        console.log("")
        console.log("              BANCO SOL NASCENTE                    ");
        console.log("")
        console.log("****************************************************");
        console.log("               1 - Criar Conta                      ");
        console.log("               2 - Listar Todas as Contas           ");
        console.log("               3 - Buscar Conta por Número          ");
        console.log("               4 - Atualizar Dados da Conta         ");
        console.log("               5 - Apagar Conta                     ");
        console.log("               6 - Sacar                            ");
        console.log("               7 - Depositar                        ");
        console.log("               8 - Transferir Valores Entre Contas  ");
        console.log("               9 - Sair                             ");
        console.log("\n****************************************************\n",
            colors.reset);
        
        console.log(colors.fg.redstrong,colors.bg.black,'Escolha uma opção:', colors.reset);
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
                console.log(colors.fg.greenstrong,'\nCriar Conta\n', colors.reset);
                
                console.log("Digite o numero da agencia: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o nome do titular da conta: ");
                titular = readlinesync.question("");

                console.log("Digite o tipo de conta: ");
                tipo = readlinesync.keyInSelect(tipoConta, "", {cancel : false}) + 1;

                console.log("\n Digite o saldo da Conta (R$): ");
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1: 
                    console.log("Digite o limite da Conta (R$): ");
                    limite = readlinesync.questionFloat("");
                    contas.cadastrar(
                        new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                    break;
                    case 2:
                        console.log("Digite o dia do aniversario da conta poupança: ");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }       

                Keypress();
            break;
            case 2:
                console.log(colors.fg.greenstrong, "\n\n Listar todas as contas\n\n", colors.reset);

                contas.listarTodos();

                Keypress();
                break;
            case 3:
                console.log(colors.fg.greenstrong,
                    '\nBuscar Conta por Número\n', colors.reset);
                    console.log("Digite o numero da conta: ")
                    numero = readlinesync.questionInt("");
                    contas.procurarPorNumero(numero);
                   
                    Keypress();
                break;
            case 4:
                console.log(colors.fg.greenstrong,
                    '\nAtualizar Dados da conta\n', colors.reset);

                    console.log("Digite o número da Conta: ");
                    numero = readlinesync.questionInt("")

                    let conta = contas.buscarNoArray(numero);

                    if (conta != null) {
                        console.log("Digite o numero da agência: ");
                        agencia = readlinesync.questionInt("");

                        console.log("Digite o Nome do titular da conta: ");
                        titular = readlinesync.question("");

                        tipo = conta.tipo;

                        console.log("Digite o saldo da conta (R$): ");
                        saldo = readlinesync.questionFloat("");
                        
                        switch(tipo){
                            case 1:
                                 console.log("Digite o limite da conta (R$): ");
                                 limite = readlinesync.questionFloat("");
                                 contas.atualizar(
                                    new ContaCorrente (numero, agencia, tipo, titular, saldo, limite));
                                break;
                            case 2:
                                 console.log("Digite o dia do aniversario da conta poupaça:  ");
                                 aniversario = readlinesync.questionFloat("");
                                 contas.atualizar(
                                    new ContaPoupanca (numero, agencia, tipo, titular, saldo, aniversario));
                                break;        
                        }
                    }else {
                        console.log(colors.fg.red, "\nA conta numero: " + numero + " não fou encontrada!", colors.reset);
                    }

                    Keypress();
                break;
            case 5:
                console.log(colors.fg.greenstrong, "\nApagar Conta\n', colors.reset");
                    
                console.log ("Digite o  numero da conta: ")
                numero = readlinesync.questionInt("");
                contas.deletar(numero);

                    
                    Keypress();
                break;
            case 6:
                console.log(colors.fg.greenstrong,
                    '\nSacar\n', colors.reset);

                console.log ("Digite o  numero da conta: ")
                numero = readlinesync.questionInt("");
            
                
                console.log ("Digite o valor do saque (R$): ")
                valor = readlinesync.questionInt("");

                contas.sacar(numero, valor)
            
                    
                    
                    Keypress();
                break;
            case 7:
                console.log(colors.fg.greenstrong,
                    '\nDepositar\n', colors.reset);
            

                console.log ("Digite o  numero da conta: ")
                numero = readlinesync.questionInt("");
            
                
                console.log ("Digite o valor do deposito (R$): ")
                valor = readlinesync.questionInt("");

                contas.depositar(numero, valor);

                    
                    Keypress();
                break;
            case 8:
                console.log(colors.fg.greenstrong,
                    '\nTransferir valores entre contas\n');
                                

                console.log ("Digite o  numero da conta de Origem: ")
                numero = readlinesync.questionInt("");

                
                console.log ("Digite o  numero da conta de Destino: ")
                numeroDestino = readlinesync.questionInt("");
            
                
                console.log ("Digite o valor do deposito (R$): ")
                valor = readlinesync.questionInt("");

                contas.transferir(numero,numeroDestino, valor);

                    
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
    console.log(colors.reset, "");
    console.log("pressione ENTER para continuar...");
    readlinesync.question('');
}

export function sobre(): void {
    console.log(colors.fg.gray, colors.bg.black ,"\n*****************************************************\n");
    console.log("   Projeto Desenvolvido por: Joe Chriszel");
    console.log("   Generation Brasil - generation@generation.org");
    console.log("   github.com/conteudoGeneration");
    console.log("\n*****************************************************", colors.reset);
}
