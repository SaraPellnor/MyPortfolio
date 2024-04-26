
export function sendEmail(data) {
  console.log(data);
  const apiEndpoint = "/api/email";
console.log("hiii");
  fetch(apiEndpoint, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.message);
    })
    .catch((err) => {
      console.log(err);
      console.log("feeeeeeel");
    });
}
