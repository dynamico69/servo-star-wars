input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 134)
})
