const FetchData = async (url)=>{
    const data = await fetch(url).then(res=>res.json()).then(data=>data).catch(error=>{
        console.log("Error Ocuured"+ error.message);
    });
    return data;
}

try{
    const homeData = FetchData('/');
    const movieData = FetchData('/movie/get');

}catch(err){
    console.log(ere.message);
}
