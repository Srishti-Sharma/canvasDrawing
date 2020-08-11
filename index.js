let currentMode;
const modes = {
  line: "line",
};
const addTextBox = () => {
  console.log("addTextBox");
  addText("Hello World");
};
const addLine = () => {
  console.log("addLine");
  createLine();
};

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight - 60;

// initializes canvas
function initCanvas(id) {
  return new fabric.Canvas(id, {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "rgb(216, 238, 227)",
  });
}

// adds image to canvas
let url =
  "https://i.pinimg.com/564x/30/77/ce/3077ce71fe49efae45dad1f75ca814b0.jpg";
let flowerUrl =
  "https://i.pinimg.com/474x/7b/a7/68/7ba76834e47b96717061b0c9451a875e.jpg";

function addImageToCanvas(url, canvas) {
  let height = 300;
  let width = 500;
  console.log("windowWidth ", windowWidth, " windowHeight ", windowHeight);
  fabric.Image.fromURL(flowerUrl, (img) => {
    img.set({
      height: height,
      width: width,
      left: windowWidth / 3,
      top: windowHeight / 4,
    });
    canvas.add(img);
  });
}

const generateRange = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

// adds text to canvas

let content = "Hello World";

function addText(content) {
  let left = 150;
  let top = 100;
  let horPos = generateRange(left, windowWidth - 100);
  let verPos = generateRange(top, windowHeight - 100);
  var text = new fabric.Text(content, {
    left: horPos,
    top: verPos,
  });
  canvas.add(text);
}

function createLine() {
  let maxWidth = windowWidth - 100;
  let minWidth = 200;
  let maxHeight = windowHeight - 100;
  let minHeight = 100;

  let widthPos = generateRange(minWidth, maxWidth);
  let heightPos = generateRange(minHeight, maxHeight);

  console.log("widthPos = ", widthPos, " HeightPos ", heightPos);
  let x1 = widthPos;
  let x2 = widthPos + 150;
  let y1 = heightPos;
  let y2 = heightPos + 100;
  let points = [x1, y1, x2, y2];

  let line = new fabric.Line(points, {
    fill: "#4FC3F7",
    left: 110,
    opacity: 0.7,
    stroke: "blue",
    strokeWidth: 1,
    originX: "center",
    originY: "center",
  });
  canvas.add(line);
  canvas.renderAll();
}

const canvas = initCanvas("canvas");
addImageToCanvas(url, canvas);

canvas.renderAll();

const saveCanvas = () => {
  var json = canvas.toJSON();
  json = JSON.stringify(json);
  alert(json);
  canvas.loadFromJSON(json, function () {
    canvas.renderAll();
  });
};
