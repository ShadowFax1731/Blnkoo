function copyCode1() {
  // Get the code block content
  const codeElement = document.getElementById("codeBlock1");
  const text = codeElement.innerText;

  // Create a temporary textarea to hold the code and copy it to the clipboard
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // Change the icon to indicate success
  const copyBtn = document.getElementById("copyBtn1");
  const icon = copyBtn.querySelector("i");

  // Set the icon to a checkmark
  icon.classList.remove("fa-copy");
  icon.classList.add("fa-check");

  // Change the icon back to the original "copy" icon after 2 seconds
  setTimeout(() => {
    icon.classList.remove("fa-check");
    icon.classList.add("fa-copy");
  }, 2000); // 2 seconds delay
}

function copyCode2() {
  // Get the code block content
  const codeElement = document.getElementById("codeBlock2");
  const text = codeElement.innerText;

  // Create a temporary textarea to hold the code and copy it to the clipboard
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // Change the icon to indicate success
  const copyBtn = document.getElementById("copyBtn2");
  const icon = copyBtn.querySelector("i");

  // Set the icon to a checkmark
  icon.classList.remove("fa-copy");
  icon.classList.add("fa-check");

  // Change the icon back to the original "copy" icon after 2 seconds
  setTimeout(() => {
    icon.classList.remove("fa-check");
    icon.classList.add("fa-copy");
  }, 2000); // 2 seconds delay
}


function copyCode3() {
  // Get the code block content
  const codeElement = document.getElementById("codeBlock3");
  const text = codeElement.innerText;

  // Create a temporary textarea to hold the code and copy it to the clipboard
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // Change the icon to indicate success
  const copyBtn = document.getElementById("copyBtn3");
  const icon = copyBtn.querySelector("i");

  // Set the icon to a checkmark
  icon.classList.remove("fa-copy");
  icon.classList.add("fa-check");

  // Change the icon back to the original "copy" icon after 2 seconds
  setTimeout(() => {
    icon.classList.remove("fa-check");
    icon.classList.add("fa-copy");
  }, 2000); // 2 seconds delay
}

function copyCode4() {
  // Get the code block content
  const codeElement = document.getElementById("codeBlock4");
  const text = codeElement.innerText;

  // Create a temporary textarea to hold the code and copy it to the clipboard
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // Change the icon to indicate success
  const copyBtn = document.getElementById("copyBtn4");
  const icon = copyBtn.querySelector("i");

  // Set the icon to a checkmark
  icon.classList.remove("fa-copy");
  icon.classList.add("fa-check");

  // Change the icon back to the original "copy" icon after 2 seconds
  setTimeout(() => {
    icon.classList.remove("fa-check");
    icon.classList.add("fa-copy");
  }, 2000); // 2 seconds delay
}

function copyCode5() {
  // Get the code block content
  const codeElement = document.getElementById("codeBlock5");
  const text = codeElement.innerText;

  // Create a temporary textarea to hold the code and copy it to the clipboard
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // Change the icon to indicate success
  const copyBtn = document.getElementById("copyBtn5");
  const icon = copyBtn.querySelector("i");

  // Set the icon to a checkmark
  icon.classList.remove("fa-copy");
  icon.classList.add("fa-check");

  // Change the icon back to the original "copy" icon after 2 seconds
  setTimeout(() => {
    icon.classList.remove("fa-check");
    icon.classList.add("fa-copy");
  }, 2000); // 2 seconds delay
}