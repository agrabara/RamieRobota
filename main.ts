// Tutaj ustaw którymi złączkami S1-S8 masz masz podłączone serwa RoboRamienia
// w przypadku płytki sterowniczej DFRobot Micro:bit Driver Expansion Board (v1.0) 
// są to następujące łącza (w przypadku tej konfiguracji):
// S0 - 0 (tutaj podłączone pierwsze biodro)
// S2 - 14 (tutaj podłączone lewe serwo)
// S3 - 13 (tutaj podłączone szczęki)
// S4 - 12 (tutaj podłączone prawe serwo)
// S5 - 11
// S6 - 10
// S7 -  7 (tutaj jest podłączone pierwsze kolano)
// S8 -  8

const SERV_0 = 0
const SERV_1 = 1
const SERV_2 = 2
const SERV_3 = 3
const SERV_4 = 4
const SERV_5 = 5
const SERV_6 = 6
const SERV_7 = 7
const SERV_8 = 8
const SERV_9 = 9
const SERV_10 = 10
const SERV_11 = 11
const SERV_12 = 12
const SERV_13 = 13
const SERV_14 = 14
const SERV_15 = 15

// setup min and max numer of servos to be changed using AB buttons 
const MAX_SERV = 7
const MIN_SERV = 0

// increase/decrease step
const SERV_STEP = 10


const SERV_B1 = SERV_0 //Biodro 1
const SERV_K1 = SERV_6 //Kolano 1


const MAX_SERV_B1 = 160
const MIN_SERV_B1 = 20
const MAX_SERV_K1 = 140
const MIN_SERV_K1 = 20

basic.showIcon(IconNames.Happy)


// If you want Debug mode ON - press "AB" button during reboot
let IsDebug: boolean
if (input.buttonIsPressed(Button.AB)) IsDebug = true
else IsDebug = false

//IsDebug = true

if (IsDebug) basic.showString("RamieRobota - Debug mode")

let NumerSerwaB1: number //Biodro 1
let KatSerwaB1: number
let NumerSerwaK1: number //Kolano 1
let KatSerwaK1: number

// ustawiamy w pozycji "połowa" - przyda się w kalibracji
// należy zdjąć ramię serwa i nałożyć je w mniej więcj połowie zakresu roboczego
NumerSerwaB1 = SERV_B1
KatSerwaB1 = 90
NumerSerwaK1 = SERV_K1
KatSerwaK1 = 90

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
Servo.Servo(12, 90)
Servo.Servo(13, 90)
Servo.Servo(14, 90)
Servo.Servo(15, 90)

let NumerSerwa = 13
let KatSerwa = 90

basic.pause(2000)
basic.clearScreen()


function NogaPrzodGora(NumerNogi: number) {
    //basic.showString("G")
    if (NumerNogi <= 2) {
        Servo.Servo(SERV_B1 + NumerNogi, MAX_SERV_B1)
    } else {
        Servo.Servo(SERV_B1 + NumerNogi, MIN_SERV_B1)
    }
    Servo.Servo(SERV_K1 + NumerNogi, MAX_SERV_K1)
    basic.pause(30)
}
function NogaTylDol(NumerNogi: number) {
    //basic.showString("D")
    if (NumerNogi <= 2) {
        Servo.Servo(SERV_B1 + NumerNogi, MIN_SERV_B1)
    } else {
        Servo.Servo(SERV_B1 + NumerNogi, MAX_SERV_B1)
    }
    Servo.Servo(SERV_K1 + NumerNogi, MIN_SERV_K1)
    basic.pause(30)
}
function NogaTylGora(NumerNogi: number) {
    //basic.showString("TG")
    if (NumerNogi <= 2) {
        Servo.Servo(SERV_B1 + NumerNogi, MIN_SERV_B1)
    } else {
        Servo.Servo(SERV_B1 + NumerNogi, MAX_SERV_B1)
    }
    Servo.Servo(SERV_K1 + NumerNogi, MAX_SERV_K1)
    basic.pause(30)
}
function NogaPrzodDol(NumerNogi: number) {
    //basic.showString("PD")
    if (NumerNogi <= 2) {
        Servo.Servo(SERV_B1 + NumerNogi, MAX_SERV_B1)
    } else {
        Servo.Servo(SERV_B1 + NumerNogi, MIN_SERV_B1)
    }
    Servo.Servo(SERV_K1 + NumerNogi, MIN_SERV_K1)
    basic.pause(30)
}

input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < 16; i++) {
        NogaPrzodGora(0)
        NogaPrzodGora(1)
        NogaPrzodGora(2)
        NogaPrzodGora(3)
        NogaPrzodGora(4)
        NogaPrzodGora(5)
        basic.pause(500)
        NogaTylGora(0)
        NogaTylGora(1)
        NogaTylGora(2)
        NogaTylGora(3)
        NogaTylGora(4)
        NogaTylGora(5)
        basic.pause(500)
        NogaPrzodGora(0)
        NogaPrzodGora(1)
        NogaPrzodGora(2)
        NogaPrzodGora(3)
        NogaPrzodGora(4)
        NogaPrzodGora(5)
        basic.pause(500)
        NogaTylGora(0)
        NogaTylGora(1)
        NogaTylGora(2)
        NogaTylGora(3)
        NogaTylGora(4)
        NogaTylGora(5)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let i = 0; i < 16; i++) {
        NogaPrzodGora(0)
        NogaPrzodGora(1)
        NogaPrzodGora(2)
        NogaPrzodGora(3)
        NogaPrzodGora(4)
        NogaPrzodGora(5)
        basic.pause(500)
        NogaPrzodDol(0)
        NogaPrzodDol(1)
        NogaPrzodDol(2)
        NogaPrzodDol(3)
        NogaPrzodDol(4)
        NogaPrzodDol(5)
        basic.pause(500)
        NogaTylDol(0)
        NogaTylDol(1)
        NogaTylDol(2)
        NogaTylDol(3)
        NogaTylDol(4)
        NogaTylDol(5)
        basic.pause(500)
        NogaTylGora(0)
        NogaTylGora(1)
        NogaTylGora(2)
        NogaTylGora(3)
        NogaTylGora(4)
        NogaTylGora(5)
        basic.pause(500)
    }

})
input.onGesture(Gesture.Shake, function () {


})


