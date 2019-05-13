# adobexd-goToNextArtboard
This Adobe XD Plugin allows users to go to next or previous artboards using keyboard shortcuts:

* <kbd>Ctrl+Alt+A</kbd> to go to previous artboard (<kbd>Cmd+Option+A</kbd> on Mac)
* <kbd>Ctrl+Alt+D</kbd> to go to next artboard (<kbd>Cmd+Option+D</kbd> on Mac)

It starts from the currently selected artboard (or selected element's artboard).  To allow for several movements at a time, "current selection" is used for the first movement, and isn't used again until a new selection is detected.  

Notes:
* Each movement finishes by zooming the artboard to fit. This is the fastest way to finish the movement (other movements allowed by API have a panning animation).
* PageUp / PageDown aren't available to plugin developers as of this release*
