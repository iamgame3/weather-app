// eslint-disable-next-line import/no-mutable-exports
let cel = true;

const createTempToggle = async () => {
  const tempToggleButton = document.querySelector(".temp-toggle");
  const submitButton = document.querySelector(".submit-button");

  tempToggleButton.addEventListener("click", () => {
    if (cel) {
      cel = false;
    } else cel = true;
    submitButton.click();
  });
};

export { createTempToggle, cel };
