export const sendEmail = async (data) => {
  const apiEndpoint = "/api/email";

  try {
    const res = await fetch(apiEndpoint, {
      method: "GET",
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    alert(resData.message);
  } catch (error) {
    console.log(error);
  }
};
