var canvas = new fabric.Canvas("canvas", {
  width: 500,
  height: 500,
  backgroundColor: "pink",
  selection: false,
});
var line;
var isDrawing;

canvas.on("mouse:down", function (o) {
  isDrawing = true;
  var pointer = canvas.getPointer(o.e);
  var points = [pointer.x, pointer.y, pointer.x, pointer.y];

  line = new fabric.Line(points, {
    strokeWidth: 3,
    stroke: "black",
  });
  canvas.add(line);
});

canvas.on("mouse:move", function (o) {
  if (isDrawing) {
    var pointer = canvas.getPointer(o.e);
    line.set({ x2: pointer.x, y2: pointer.y });
    canvas.renderAll();
  }
});

canvas.on("mouse:up", function (o) {
  isDrawing = false;
});
