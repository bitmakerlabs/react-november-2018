export const getIdeas = (name) =>{
    return new Promise((resolve,reject)=>{
        fetch(`https://react-idea-board-backend.herokuapp.com/user/${name}`)
        .then(e=>e.ok?resolve(e):reject(e))
        .catch(e=>console.log('ERR::',e))
    })
}