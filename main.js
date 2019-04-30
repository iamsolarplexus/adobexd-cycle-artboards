/*
 * Adobe XD Plugin to visually move back and forth through the artboard stack, zooming each to fill screen
 */

var Artboard = require("scenegraph").Artboard;
var viewport = require("viewport");
var currentArtboard, currentIndex, targetBoard, allArtboards;

function init(selection,root) {
    allArtboards = root.children.filter(node=>{
        if (node instanceof Artboard) {
            return node;
        }
    });

    // default currentArtboard to the first artboard in project when undefined:
    currentArtboard = currentArtboard || allArtboards[0];

    // update currentArtboard and currentIndex to last set
    allArtboards.forEach((node,idx)=>{
        if (currentArtboard == node) {
            currentIndex = idx;
        }
    });

}

function nextArtboard(selection,root) {
    init(selection,root);

    if (currentIndex + 1 >= allArtboards.length) {
        targetBoard = allArtboards[0]
    }
    else {
        targetBoard = allArtboards[currentIndex + 1];
    }
    viewport.zoomToRect(targetBoard);
    currentArtboard = targetBoard;
}

function prevArtboard(selection,root) {
    init(selection,root);

    if (currentIndex - 1 < 0) {
        targetBoard = allArtboards[allArtboards.length - 1]
    }
    else {
        targetBoard = allArtboards[currentIndex - 1];
    }
    viewport.zoomToRect(targetBoard);
    currentArtboard = targetBoard;
}

module.exports = {
    commands: {
        nextArtboard,
        prevArtboard
    }
};
