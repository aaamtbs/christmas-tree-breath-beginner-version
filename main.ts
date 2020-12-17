input.onButtonPressed(Button.A, function () {
    brightness += -10
})
input.onButtonPressed(Button.B, function () {
    brightness += 10
})
let brightness = 0
let tree = ChristmasTree.create()
tree.changeMode(LEDMode.Free)
let direction = 1
basic.forever(function () {
    brightness = brightness + direction
    if (brightness >= 50) {
        direction = -1
    }
    if (brightness <= 0) {
        direction = 1
    }
    tree.setTreeColorAndBrightness(ChristmasTree.hue(94), brightness)
    tree.update()
})
