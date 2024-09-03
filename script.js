document
  .getElementById("generate-advice")
  .addEventListener("click", function () {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const adviceText = data.slip.advice.toUpperCase();
        document.getElementById("advice-text").innerText = adviceText;
      })
      .catch((error) => {
        document.getElementById("advice-text").innerText =
          "ERROR FETCHING ADVICE: DEFAULT ADVICE IS TO STAY HYDRATED";
      });
  });
