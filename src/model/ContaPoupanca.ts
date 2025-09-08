import { Conta } from "./Conta"

export class ContaPoupanca extends Conta {

    private _aniversario : number;

    constructor (numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversario: number){
        super (numero, agencia, tipo, titular, saldo);
        this._aniversario = aniversario;
    }

    public get aniversario(){
        return this._aniversario;
    }

    public set aniversario( aniversario: number) {
        this._aniversario = aniversario;
        console.log("Dia do aniversario: " + this._aniversario);

    }

   public visualizar(): void {
       super.visualizar();
       console.log("dia do aniversario: " + this._aniversario);
   }
}