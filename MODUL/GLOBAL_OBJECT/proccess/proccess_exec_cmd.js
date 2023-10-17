const { exec } = require('child_process');

exec('ls -lrth', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error}`);
        return;
    }
    console.log(`Output: ${stdout}`);
});
