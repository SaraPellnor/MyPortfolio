
export function sendEmail(data) {
  const apiEndpoint = "/api/email";
console.log("hiii");
  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
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
