export class ContaCorrente {
    agencia;
    cliente;

    _saldo = 0;
  
    sacar(valor) { // método chamado em POO
      if (this._saldo >= valor) { // Saldo dessa conta corrente, e não de uma conta específica. Valor de saque
        this._saldo -= valor;
        return valor;
      } // Definição do escoppo
    }
  
    depositar(valor) {
      if(valor <= 0) {
          return;
        }
      this._saldo += valor;
    }

    transferir(valor, conta) {
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado);
    }
  }