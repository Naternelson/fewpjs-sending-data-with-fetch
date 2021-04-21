
// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };

// const configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     console.log(response)
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   });

  const postUrl= "http://localhost:3000/users"

  function submitData(name, email){
    const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({name: name, email: email})
      };
      return fetch(postUrl, configObj).then((r) => r.json()).then((r) => {
          const el = document.createElement("li")
          window.document.append(el)
          el.innerText = r.id
          const bodyEl = document.body.innerText
          document.body.innerHTML += r.id
        }).catch(() => alert("ERROR"))
  }