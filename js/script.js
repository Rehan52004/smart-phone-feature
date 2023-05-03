let data1 = document.getElementById("specification");
let data2 = document.getElementById("osinfo");

function speciFication() {
  data1.style.display = "block";
  data2.style.display = "none";
}

function osInfo() {
  data1.style.display = "none";
  data2.style.display = "block";
}

let preValue = [""];

let installedApps = [];

let systemApps = [
  "Contact",
  "Google",
  "Google Chrome",
  "Youtube",
  "Phone",
  "Play Store",
  "Message",
  "Files",
];

let i = 0;
function install() {
  let input = document.getElementById("search-input");
  let appname = input.value;

  if (systemApps.some((val) => appname.toUpperCase() === val.toUpperCase())) {
    alert("already installed");
  }

  if (
    appname !== "" &&
    !preValue.includes(appname.toUpperCase()) &&
    !systemApps.some((val) => appname.toUpperCase() === val.toUpperCase())
  ) {
    let ul = document.getElementById("installedapps");
    let li = document.createElement("li");
    li.setAttribute("id", `${i}`);
    li.innerText = appname;
    ul.appendChild(li);

    let select = document.getElementById("uninstallapps");
    let option = document.createElement("option");
    option.innerText = appname;
    select.appendChild(option);

    installedApps[i] = appname;
    i += 1;
    preValue[i] = appname.toUpperCase();

    input.value = "";
  } else {
    alert("already installed or input different app name");
    input.value = "";
  }
}

function uninstall() {
  let select = document.getElementById("uninstallapps");
  let text = select.options[select.selectedIndex];
  for (let i = 0; i < installedApps.length; i++) {
    if (
      select.value === installedApps[i] &&
      document.getElementById(`${i}`).innerText === installedApps[i]
    ) {
      document.getElementById(`${i}`).style.display = "none";
      text.style.display = "none";
      select.value = "";
    }
  }
}
