// Tutaj ustaw którymi złączkami S1-S8 masz masz podłączone serwa RoboRamienia
// w przypadku płytki sterowniczej DFRobot Micro:bit Driver Expansion Board (v1.0) 
// są to następujące łącza (w przypadku tej konfiguracji):
// S1 - 15 (tutaj podłączona baza)
// S2 - 14 (tutaj podłączone lewe serwo)
// S3 - 13 (tutaj podłączone szczęki)
// S4 - 12 (tutaj podłączone prawe serwo)
// S5 - 11
// S6 - 10
// S7 -  9
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
const MAX_SERV = 15
const MIN_SERV = 12

// increase/decrease step
const SERV_STEP = 10


const SERV_P = SERV_12 //Prawy
const SERV_S = SERV_13 //Szczęki
const SERV_L = SERV_14 //Lewy
const SERV_B = SERV_15 //Baza

const MIN_SERV_P = 20
const MAX_SERV_P = 140
const MIN_SERV_L = 20

const MAX_SERV_L = 100
const MIN_SERV_S = 80
const MAX_SERV_S = 100
const MIN_SERV_B = 20
const MAX_SERV_B = 150

basic.showIcon(IconNames.Happy)


// If you want Debug mode ON - press "AB" button during reboot
let IsDebug: boolean
if (input.buttonIsPressed(Button.AB)) IsDebug = true
else IsDebug = false

//IsDebug = true

if (IsDebug) basic.showString("RamieRobota - Debug mode")

let NumerSerwaL: number //Lewe serwo
let KatSerwaL: number
let NumerSerwaP: number //Prawe serwo
let KatSerwaP: number
let NumerSerwaS: number //Szczęki
let KatSerwaS: number
let NumerSerwaB: number //Baza
let KatSerwaB: number

// ustawiamy w pozycji "połowa" - przyda się w kalibracji
// należy zdjąć ramię serwa i nałożyć je w mniej więcj połowie zakresu roboczego
NumerSerwaL = SERV_L
KatSerwaL = 20
NumerSerwaP = SERV_P
KatSerwaP = 20
NumerSerwaS = SERV_S
KatSerwaS = 80
NumerSerwaB = SERV_B
KatSerwaB = 90

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
Servo.Servo(SERV_P, KatSerwaP) //prawy   -  20->140
Servo.Servo(SERV_S, KatSerwaS) //szczęki -  80->100
Servo.Servo(SERV_L, KatSerwaL) //lewy    -  20->100
Servo.Servo(SERV_B, KatSerwaB) //baza    -  20->150

let NumerSerwa = 13
let KatSerwa = 90

basic.pause(2000)
basic.clearScreen()

// Increases angle of servo NumerSerwa by SERV_STEP
input.onButtonPressed(Button.B, function () {

    switch (NumerSerwa) {
        case SERV_P:
            KatSerwaP += SERV_STEP
            if (KatSerwaP > MAX_SERV_P) KatSerwaP = MAX_SERV_P
            if (IsDebug) basic.showNumber(Math.round(KatSerwaP / 10))
            break;
        case SERV_L:
            KatSerwaL += SERV_STEP
            if (KatSerwaL > MAX_SERV_L) KatSerwaL = MAX_SERV_L
            if (IsDebug) basic.showNumber(Math.round(KatSerwaL / 10))
            break;
        case SERV_S:
            KatSerwaS += SERV_STEP
            if (KatSerwaS > MAX_SERV_S) KatSerwaS = MAX_SERV_S
            if (IsDebug) basic.showNumber(Math.round(KatSerwaS / 10))
            break;
        case SERV_B:
            KatSerwaB += SERV_STEP
            if (KatSerwaB > MAX_SERV_B) KatSerwaB = MAX_SERV_B
            if (IsDebug) basic.showNumber(Math.round(KatSerwaB / 10))
            break;
        default:
            KatSerwa += SERV_STEP
            if (KatSerwa > 180) KatSerwa = 180
            if (IsDebug) basic.showNumber(Math.round(KatSerwa / 10))
            Servo.Servo(NumerSerwa, KatSerwa)
    }
    Servo.Servo(SERV_P, KatSerwaP) //prawy
    Servo.Servo(SERV_S, KatSerwaS) //szczęki
    Servo.Servo(SERV_L, KatSerwaL) //lewy
    Servo.Servo(SERV_B, KatSerwaB) //baza

})

// Decreases angle of servo NumerSerwa by SERV_STEP
input.onButtonPressed(Button.A, function () {

    switch (NumerSerwa) {
        case SERV_P:
            KatSerwaP -= SERV_STEP
            if (KatSerwaP < MIN_SERV_P) KatSerwaP = MIN_SERV_P
            if (IsDebug) basic.showNumber(Math.round(KatSerwaP / 10))
            break;
        case SERV_L:
            KatSerwaL -= SERV_STEP
            if (KatSerwaL < MIN_SERV_L) KatSerwaL = MIN_SERV_L
            if (IsDebug) basic.showNumber(Math.round(KatSerwaL / 10))
            break;
        case SERV_S:
            KatSerwaS -= SERV_STEP
            if (KatSerwaS < MIN_SERV_S) KatSerwaS = MIN_SERV_S
            if (IsDebug) basic.showNumber(Math.round(KatSerwaS / 10))
            break;
        case SERV_B:
            KatSerwaB -= SERV_STEP
            if (KatSerwaB < MIN_SERV_B) KatSerwaB = MIN_SERV_B
            if (IsDebug) basic.showNumber(Math.round(KatSerwaB / 10))
            break;
        default:
            KatSerwa -= SERV_STEP
            if (KatSerwa < 0) KatSerwa = 0
            Servo.Servo(NumerSerwa, KatSerwa)
            if (IsDebug) basic.showNumber(Math.round(KatSerwa / 10))
    }
    Servo.Servo(SERV_P, KatSerwaP) //prawy
    Servo.Servo(SERV_S, KatSerwaS) //szczęki
    Servo.Servo(SERV_L, KatSerwaL) //lewy
    Servo.Servo(SERV_B, KatSerwaB) //baza
})



input.onButtonPressed(Button.AB, function () {
    NumerSerwa += 1
    if (NumerSerwa > MAX_SERV) NumerSerwa = MIN_SERV

    //if debug mode ON - display servo ID
    switch (NumerSerwa) {
        case SERV_P:
            if (IsDebug) basic.showString("P")
            break;
        case SERV_S:
            if (IsDebug) basic.showString("S")
            break;
        case SERV_L:
            if (IsDebug) basic.showString("L")
            break;
        case SERV_B:
            if (IsDebug) basic.showString("B")
            break;
        default:
            if (IsDebug) basic.showNumber(NumerSerwa)
    }
})


function RamieNaDol() {


    for (let i = 0; i < 11; i++) {

        KatSerwaP += SERV_STEP
        if (KatSerwaP > MAX_SERV_P) KatSerwaP = MAX_SERV_P
        if (IsDebug) basic.showNumber(Math.round(KatSerwaP / 10))
        KatSerwaL -= SERV_STEP
        if (KatSerwaL < MIN_SERV_L + 40) KatSerwaL = MIN_SERV_L + 40
        if (IsDebug) basic.showNumber(Math.round(KatSerwaL / 10))
        Servo.Servo(SERV_P, KatSerwaP) //prawy   -  20->140
        Servo.Servo(SERV_L, KatSerwaL) //lewy    -  20->100
        basic.pause(50)
    }

}


function RamieWGore() {


    for (let i = 0; i < 11; i++) {

        KatSerwaL += SERV_STEP
        if (KatSerwaL > MAX_SERV_L) KatSerwaL = MAX_SERV_L
        if (IsDebug) basic.showNumber(Math.round(KatSerwaL / 10))
        KatSerwaP -= SERV_STEP
        if (KatSerwaP < MIN_SERV_P) KatSerwaL = MIN_SERV_P
        if (IsDebug) basic.showNumber(Math.round(KatSerwaP / 10))
        Servo.Servo(SERV_P, KatSerwaP) //prawy   -  20->140
        Servo.Servo(SERV_L, KatSerwaL) //lewy    -  20->100
        basic.pause(50)
    }

}

function SzczekiOtworz() {


    for (let i = 0; i < 20; i++) {
        KatSerwaS -= 1
        if (KatSerwaS < MIN_SERV_S) KatSerwaS = MIN_SERV_S
        if (IsDebug) basic.showNumber(Math.round(KatSerwaS / 10))
        Servo.Servo(SERV_S, KatSerwaS) //szczęki -  80->100
        basic.pause(50)
    }

}

function SzczekiZamknij() {


    for (let i = 0; i < 20; i++) {
        KatSerwaS += 1
        if (KatSerwaS > MAX_SERV_S) KatSerwaS = MAX_SERV_S
        if (IsDebug) basic.showNumber(Math.round(KatSerwaS / 10))
        Servo.Servo(SERV_S, KatSerwaS) //szczęki -  80->100
        basic.pause(50)
    }

}

function RamieWPrawo() {
    for (let i = 0; i < 130; i++) {
        KatSerwaB -= 1
        if (KatSerwaB < MIN_SERV_B) KatSerwaB = MIN_SERV_B
        if (IsDebug) basic.showNumber(Math.round(KatSerwaB / 10))
        Servo.Servo(SERV_B, KatSerwaB) //baza    -  20->150
        basic.pause(30)
    }

}

function RamieWLewo() {
    for (let i = 0; i < 130; i++) {
        KatSerwaB += 1
        if (KatSerwaB > MAX_SERV_B) KatSerwaB = MAX_SERV_B
        if (IsDebug) basic.showNumber(Math.round(KatSerwaB / 10))
        Servo.Servo(SERV_B, KatSerwaB) //baza    -  20->150
        basic.pause(30)
    }

}


input.onGesture(Gesture.Shake, function () {

    RamieWPrawo()
})

input.onGesture(Gesture.ScreenDown, function () {

    RamieWLewo()
})


input.onGesture(Gesture.LogoDown, function () {

    SzczekiOtworz()
})


input.onGesture(Gesture.LogoUp, function () {

    SzczekiZamknij()
})