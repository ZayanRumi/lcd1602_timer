input.onButtonPressed(Button.A, function () {
    Timer += 1
    I2C_LCD1602.ShowNumber(Timer, 9, 0)
})
input.onButtonPressed(Button.B, function () {
    while (Timer > 0) {
        I2C_LCD1602.ShowNumber(Timer, 9, 0)
        basic.pause(100)
        Timer += 0 - 0.1
    }
})
let Timer = 0
I2C_LCD1602.LcdInit(0)
Timer = 0
