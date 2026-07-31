console.log(`video 64`);

const ham = () => {
    const a = 40, b = 0;

    if (b === 0) {
        throw new Error(`dcm dell chia cho 0 dc`);
    }
    return a / b;
}

try {
    console.log(ham());
} catch (error) {
    console.log(error);
} finally {
    console.log(`finally`);
}