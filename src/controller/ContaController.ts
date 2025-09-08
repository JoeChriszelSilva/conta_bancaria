import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepositorio";
import { colors } from "../util/color"


export class ContaController implements ContaRepository{


    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }
    listarTodos(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta)
        console.log(colors.fg.green, "\n Conta numero: " + conta.numero + " foi criada com sucesso!" , colors.reset)
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, calor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    public gerarNumero(): number{
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | undefined {
        
        for (let conta of this.listaContas){
            if (conta.numero === numero)
                return conta;
        }

        return undefined;
    }

}