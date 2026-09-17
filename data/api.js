export async function getKorisnici(){
    try{

        let link = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(link);

        if(!response.ok)
            throw new Error('API se nije uspio dohvatiti');

        const data = await response.json();

        return data;

    }
    catch(err){
        console.log(err);

    }
}
