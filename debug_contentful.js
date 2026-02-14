import { createClient } from 'contentful';

const client = createClient({
    space: 'f30o17mmk4x4',
    accessToken: 'Wuvm6B9ODhLsm4qnExryZXK-ucIajaMPjArl0LSd9HM',
});

async function run() {
    try {
        const response = await client.getEntries({
            content_type: 'parfumes',
            limit: 1
        });
        if (response.items.length > 0) {
            console.log(JSON.stringify(response.items[0].fields, null, 2));
        } else {
            console.log("No items found.");
        }
    } catch (error) {
        console.error(error);
    }
}

run();
