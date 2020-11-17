# JavaScript - Programando a Orientação a Objetos

## Repetição de código

```javascript
const cliente1Nome = "Ricardo";
const cliente1CPF = 11122233309;
const cliente1Agencia = 1001;
const cliente1Saldo = 0;

const cliente2Nome = "Alice";
const cliente2CPF = 88822233309;
const cliente2Agencia = 1001;
const cliente2Saldo = 0;

console.log(cliente1Nome);
```

### Como criar um molde para cada cliente ao invés de repetir o código?

```javascript
{
    const nome;
    const cpf;
    const agencia;
    const saldo;
}
```

Quando criamos uma estrutura que será replicada, chamamos de **classe**

### Como criar uma classe?

```javascript
class Cliente {
  // Aqui dentro temos os atributos
}
```

**Para começar uma definição de uma classe nós iniciamos com a palavra reservada `class NomeDaClasse{}` e logo após**

### Como criamos um novo **Cliente** da nossa classe?

```javascript
const cliente1 = new Cliente();
```

### Como criar um outro cliente?

```javascript
const cliente1 = new Cliente(); // cliente1 é uma instância da classe Cliente
const cliente2 = new Cliente(); // cliente2 é uma instância da classe Cliente

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 123456789;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;
```
