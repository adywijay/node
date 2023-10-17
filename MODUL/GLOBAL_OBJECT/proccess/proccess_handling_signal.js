process.on('SIGINT', () => {
    console.log('Proses diinterupsi (SIGINT)');
    process.exit();
});

/**
 * Interupsi program ketika terdapat interupsi Ctrl + c
 */