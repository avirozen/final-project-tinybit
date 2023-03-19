radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        music.stopAllSounds()
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
        Tinybit.RGB_Car_Big2(255, 255, 255)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedNumber == 8) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 78)
        Tinybit.RGB_Car_Big2(255, 0, 0)
        music.ringTone(659)
        music.ringTone(523)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 6) {
        music.stopAllSounds()
        Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 30)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedNumber == 4) {
        music.stopAllSounds()
        Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (receivedNumber == 5) {
        music.stopAllSounds()
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
})
/**
 * קדימה
 */
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
/**
 * שמאלה
 */
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
/**
 * עצירה
 */
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(5)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
/**
 * ימינה
 */
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(6)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
/**
 * אחורה
 */
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(8)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
radio.setGroup(58)
basic.showIcon(IconNames.House)
