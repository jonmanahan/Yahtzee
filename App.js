export async function App() {
    let exit = false;
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const awaitingUserInput = async () => {
        while(!exit) {
            console.log('1. Play\r\n');
            console.log('2. Exit\r\n');
        }
    }
}