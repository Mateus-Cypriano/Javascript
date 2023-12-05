// Finally é executada independente do resultado do try/catch;
// E pode existir com try e catch ou apenas com o try;

try {
    let a = b + 1;
} catch (error) {
    console.log("Algo deu errado " + error);
} finally {
    console.log("Executou");
}

