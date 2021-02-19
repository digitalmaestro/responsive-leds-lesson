let light2 = 0
let Base_level = 128
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    if (input.lightLevel() < Base_level) {
        light2 = Base_level - input.lightLevel()
        led.setBrightness(light2 + Base_level)
    }
    if (input.lightLevel() > Base_level) {
        light2 = Math.abs(Base_level - input.lightLevel())
        led.setBrightness(Base_level - light2)
    }
})
