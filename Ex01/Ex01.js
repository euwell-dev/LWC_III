import { LightningElement } from 'lwc';

export default class LWC_ultimo extends LightningElement {

    nome;
    peso;
    altura;
    imc;

    handleNome(event) {
        this.nome = event.detail.value;
    }

    handlePeso(event) {
        this.peso = event.detail.value;
    }

    handleAltura(event) {
        this.altura = event.detail.value;
    }

    calcularIMC() {
        if (this.peso && this.altura) {
            const alturaMetros = this.altura / 100;
            this.imc = this.peso / (alturaMetros * alturaMetros);
        }
    }
}
