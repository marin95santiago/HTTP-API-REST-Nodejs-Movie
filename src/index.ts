import app from './app';
import './database';

async function main () {
    app.listen(app.get('port'), () => {
        console.log(`Server is running in port ${app.get('port')}`);
    });
}

main();