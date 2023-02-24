import summerBg from './assets/summer-bg.jpg'
import summerSounds from './assets/sounds/summer.mp3'
import rainBg from './assets/rainy-bg.jpg'
import rainSounds from './assets/sounds/rain.mp3'
import snowBg from './assets/winter-bg.jpg'
import snowSounds from './assets/sounds/winter.mp3'
import './index.scss'

const btnSummer = document.querySelector('.btn_summer') as HTMLDivElement
const btnRain = document.querySelector('.btn_rain') as HTMLDivElement
const btnSnow = document.querySelector('.btn_snow') as HTMLDivElement
const body = document.querySelector('body') as HTMLBodyElement
const range = document.querySelector('.range') as HTMLInputElement

let state: string = ''

interface dataState {
  img: string,
  sound: string,
  element: HTMLDivElement,
  currentTime: number
}

interface dataStateAll {
  [key: string]: dataState
}

const summerState: dataState = {
  img: summerBg,
  sound: summerSounds,
  element: btnSummer,
  currentTime: 0
}

const rainState: dataState = {
  img: rainBg,
  sound: rainSounds,
  element: btnRain,
  currentTime: 0
}

const snowState: dataState = {
  img: snowBg,
  sound: snowSounds,
  element: btnSnow,
  currentTime: 0
}

const data: dataStateAll = {
  summer: summerState,
  rain: rainState,
  snow: snowState,
}

const audio: HTMLAudioElement = new Audio()
audio.loop = true
audio.volume = 0.5

const pauseAudio = (): void => {
  audio.pause()
  if(state) {
    data[state].element.children[0].classList.remove('svg_pause')
    data[state].currentTime = audio.currentTime
    state = ''
  }
}

const playAudio = (newState: string): void => {
    if (state) {
      data[state].element.children[0].classList.remove('svg_pause')
      data[state].currentTime = audio.currentTime
    }
    state = newState
    if(state) {
      audio.src = data[state].sound
      data[state].element.children[0].classList.add('svg_pause')
      body.style.backgroundImage = `url(${data[state].img})`
      audio.play() 
      audio.currentTime = data[state].currentTime
    }
}

const changeAudioState = (newState: string): void => {
    if (state === newState) {
        pauseAudio()
    } else {
        playAudio(newState)
    }
}

range.addEventListener('input', () => {
    audio.volume = +range.value
}, false)

btnSummer.addEventListener('click', () => changeAudioState('summer'))

btnRain.addEventListener('click', () => changeAudioState('rain'))

btnSnow.addEventListener('click', () => changeAudioState('snow'))