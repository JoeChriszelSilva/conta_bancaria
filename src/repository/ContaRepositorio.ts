import { Conta } from "../model/Conta"

export interface ContaRepository {
    // crudd da conta
    procurarPorNumero( numero: number): void;
    listarTodos(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number):void

    //Métodos bancários
    sacar(numero: number, calor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;

}