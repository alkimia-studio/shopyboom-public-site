import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/components/base/app.vue'
import router from '@/helper/router'
import { createHead } from '@unhead/vue'

import txt from '@/components/subComponents/txt.vue'
import stack from '@/components/subComponents/stack.vue'
import banner1 from '@/components/subComponents/banner1.vue'
import grid from '@/components/subComponents/grid.vue'
import modal from '@/components/subComponents/modal.vue'
import button1 from '@/components/subComponents/button1.vue'
import appsvg from '@/components/subComponents/appsvg.vue'
import shape from '@/components/subComponents/shape.vue'
import shapeContainer from '@/components/subComponents/shapeContainer.vue'

import iconArrowDown from '@/components/icons/iconArrowDown.vue'
import iconShopyBoom from '@/components/icons/iconShopyBoom.vue'
import iconStudyHat from '@/components/icons/iconStudyHat.vue'
import iconStar from '@/components/icons/iconStar.vue'

import shapeCircle from '@/components/shapes/shapeCircle.vue'
import shapeButtonRoundClock from '@/components/shapes/shapeButtonRoundClock.vue'
import shapeButtonRoundPipe from '@/components/shapes/shapeButtonRoundPipe.vue'
import shapeButtonRoundBrush from '@/components/shapes/shapeButtonRoundBrush.vue'
import shapeButtonRoundSpeaker from '@/components/shapes/shapeButtonRoundSpeaker.vue'
import shapeText from '@/components/shapes/shapeText.vue'

import header from '@/components/subPages/header.vue'
import footer from '@/components/subPages/footer.vue'

const app = createApp(App)

app.use(createPinia())
app.use(createHead())
app.use(router)

app.component('Txt', txt)
app.component('Stack', stack)
app.component('Banner1', banner1)
app.component('Grid', grid)
app.component('Modal', modal)
app.component('Button1', button1)
app.component('Appsvg', appsvg)
app.component('Shape', shape)
app.component('ShapeContainer', shapeContainer)

app.component('IArrowDown', iconArrowDown)
app.component('IShopyBoom', iconShopyBoom)
app.component('IStudyHat', iconStudyHat)
app.component('IStar', iconStar)

app.component('ShapeCircle', shapeCircle)
app.component('ShapeButtonRoundClock', shapeButtonRoundClock)
app.component('ShapeButtonRoundPipe',shapeButtonRoundPipe)
app.component('ShapeButtonRoundBrush',shapeButtonRoundBrush)
app.component('ShapeButtonRoundSpeaker',shapeButtonRoundSpeaker)
app.component('ShapeText',shapeText)

app.component('Header', header)
app.component('Footer', footer)

app.mount('#app')
