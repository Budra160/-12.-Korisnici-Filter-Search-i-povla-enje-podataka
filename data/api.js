export async function getKorisnici(){
    try{

        let link = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(link);

        if(!response.ok)
            throw new Error('API se nije uspio dohvatiti');

        const data = await response.json();
        
        let niz = [];
        data.forEach(element =>{
            niz.push(element);
        })
        return niz;

    }
    catch(err){
        console.log(err);

    }
}


