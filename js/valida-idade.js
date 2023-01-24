export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity("O usuário não é maior de idade");
    } else {
        campo.setCustomValidity("");
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMaisDezoito = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMaisDezoito;
}