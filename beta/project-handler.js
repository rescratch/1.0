var vm = new window.VirtualMachine();
var canvas = document.getElementById('stage');
var debug = document.getElementById('debug');
var storage = new Scratch.Storage();

// Instantiate the renderer
const renderer = new window.ScratchRender(canvas);

// Connect to debug canvas
renderer.setDebugCanvas(debug);

// Start drawing
function drawStep() {
    renderer.draw();
    requestAnimationFrame(drawStep);
}

var getAssetUrl = function (asset) {
    var assetUrlParts = [
        'https://assets.example.com/path/to/assets/',
        asset.assetId,
        '.',
        asset.dataFormat,
        '/get/'
    ];
    return assetUrlParts.join('');
};

storage.addWebStore(
    [AssetType.ImageVector, AssetType.ImageBitmap, AssetType.Sound],
    getAssetUrl);

vm.attachStorage(storage);
drawStep();
const svgRenderer = new SvgRenderer();

const svgData = "<svg>...</svg>";
const scale = 1;
const quirksMode = false; // If true, emulate Scratch 2.0 SVG rendering "quirks"

svgRenderer.loadSVG(svgData, quirksMode, () => {
    svgRenderer.draw(scale);
    doSomethingWith(svgRenderer.canvas);
});
vm.start();
