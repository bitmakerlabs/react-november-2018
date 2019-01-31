export const getIdeas = name => {
  return new Promise((resolve, reject) => {
    fetch(`https://react-idea-board-backend.herokuapp.com/user/${name}`)
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR::", e));
  });
};

export const updateIdea = (name, data) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://react-idea-board-backend.herokuapp.com/update/${name}/ideas/${
        data.key
      }`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: data.title,
          description: data.description
        })
      }
    )
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("fetch ERR::", e));
  });
};

export const DeleteIdea = (name, data) => {
  return new Promise((resolve, reject) => {
    fetch("https://react-idea-board-backend.herokuapp.com/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: data.key,
        name
      })
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("fetch ERR::", e));
  });
};

export const getUser = () =>{
    return new Promise((resolve,reject)=>{
        fetch('https://react-idea-board-backend.herokuapp.com/list/')
        .then(e=>e.ok? resolve(e):reject(e))
        .catch(e=>console.log('Fetch ERR:::',e))
    })
}


export const CreateIdea = name => {
  return new Promise((resolve, reject) => {
    fetch(`https://react-idea-board-backend.herokuapp.com/create/${name}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: "",
        title: ""
      })
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("fetch ERR::", e));
  });
};
