const entry = document.querySelector("#entry");
const out = document.querySelector("#out");

const myFunc = (text) => {
  const lines = text.split("\n");
  const header = lines[0].split(",");
  const numProps = header.length;
  let stringArrayJson = lines.length == 1 ? "" : "[";

  // let arrayOut;
  for (let i = 1; i < lines.length; i++) {
    let lineOut = "{";
    let line = lines[i].split(",");
    for (let j = 0; j < numProps; j++) {
      lineOut += "'" + header[j] + "':" + "'" + line[j] + "'";
      lineOut += j != numProps - 1 ? "," : "";
    }
    lineOut += i != lines.length - 1 ? "},\n" : "}";
    stringArrayJson += lineOut;
  }
  stringArrayJson += lines.length == 1 ? "" : "]";
  return stringArrayJson;
};

entry.addEventListener("change", (event) => {
  event.preventDefault();
  entryContent = entry.value.replaceAll(" ", "");
  out.value = myFunc(entryContent);
});

