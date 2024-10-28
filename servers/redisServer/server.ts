import { createClient } from 'redis'

async function init(){

    const client = createClient();

    client.on('error', err => console.log('Redis Error: ', err));
    
    await client.connect();

}

init();
