basic.showIcon(IconNames.Duck)
Servo.Servo(0, 90)
Servo.Servo(1, 90)
Servo.Servo(2, 90)
Servo.Servo(3, 90)
Servo.Servo(4, 90)
Servo.Servo(5, 90)
Servo.Servo(6, 90)
Servo.Servo(7, 90)
Servo.Servo(8, 90)
Servo.Servo(9, 90)
Servo.Servo(10, 90)
Servo.Servo(11, 90)
Servo.Servo(12, 90) //prawy   -  20->140
Servo.Servo(13, 80) //szczęki -  80->100
Servo.Servo(14, 90) //lewy    -  20->100
Servo.Servo(15, 90) //baza

let NumerSerwa: number
let KatSerwa: number

NumerSerwa = 13
KatSerwa = 90

input.onButtonPressed(Button.A, function () {
    KatSerwa += 10

    switch (NumerSerwa) {
        case 12:
            if (KatSerwa > 140) KatSerwa = 20
            break;
        case 13:
            if (KatSerwa > 100) KatSerwa = 80
            break;
        case 14:
            if (KatSerwa > 100) KatSerwa = 20
            break;
        case 15:
            if (KatSerwa > 150) KatSerwa = 30
            break;

        case 0:
            break;
        default:
            if (KatSerwa > 180) KatSerwa = 0
    }
    Servo.Servo(NumerSerwa, KatSerwa)
    basic.showNumber(Math.round(KatSerwa / 10))
})

input.onButtonPressed(Button.B, function () {
    NumerSerwa += 1
    if (NumerSerwa > 15) NumerSerwa = 12
    switch (NumerSerwa) {
        case 12:
            basic.showString("P")
            break;
        case 13:
            basic.showString("S")
            break;
        case 14:
            basic.showString("L")
            break;
        case 15:
            basic.showString("B")
            break;
        case 0:
            break;
        default:
            basic.showNumber(NumerSerwa)
    }

})
