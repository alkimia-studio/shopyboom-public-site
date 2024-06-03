import './assets/main.css'
import 'vue3-carousel/dist/carousel.css'

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
import iconPlay from '@/components/icons/iconPlay.vue'
import iconTickFill from '@/components/icons/iconTickFill.vue'
import iconX from '@/components/icons/iconX.vue'
import iconMarket from '@/components/icons/iconMarket.vue'
import iconSpeaker from '@/components/icons/iconSpeaker.vue'
import iconWheel from '@/components/icons/iconWheel.vue'

import shapeCircle from '@/components/shapes/shapeCircle.vue'
import shapeButtonRoundClock from '@/components/shapes/shapeButtonRoundClock.vue'
import shapeButtonRoundPipe from '@/components/shapes/shapeButtonRoundPipe.vue'
import shapeButtonRoundBrush from '@/components/shapes/shapeButtonRoundBrush.vue'
import shapeButtonRoundSpeaker from '@/components/shapes/shapeButtonRoundSpeaker.vue'
import shapeText from '@/components/shapes/shapeText.vue'

import header from '@/components/subPages/header.vue'
import footer from '@/components/subPages/footer.vue'
import bellStars from '@/components/subPages/bellStars.vue'
import academy from '@/components/subPages/academy.vue'
import people from '@/components/subPages/people.vue'
import openShop from '@/components/subPages/openShop.vue'
import opportunity from '@/components/subPages/opportunity.vue'

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)

app.use(createPinia())
app.use(createHead())
app.use(router)
app.use(Vue3Lottie, { name: "Vue3Lottie" })

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
app.component('IPlay', iconPlay)
app.component('ITickFill', iconTickFill)
app.component('IX', iconX)
app.component('IMarket', iconMarket)
app.component('ISpeaker', iconSpeaker)
app.component('IWheel', iconWheel)

app.component('ShapeCircle', shapeCircle)
app.component('ShapeButtonRoundClock', shapeButtonRoundClock)
app.component('ShapeButtonRoundPipe',shapeButtonRoundPipe)
app.component('ShapeButtonRoundBrush',shapeButtonRoundBrush)
app.component('ShapeButtonRoundSpeaker',shapeButtonRoundSpeaker)
app.component('ShapeText',shapeText)

app.component('Header', header)
app.component('Footer', footer)
app.component('BellStars', bellStars)
app.component('Academy', academy)
app.component('People', people)
app.component('OpenShop', openShop)
app.component('Opportunity', opportunity)

app.component('Carousel', Carousel)
app.component('Navigation', Navigation)
app.component('Pagination', Pagination)
app.component('Slide', Slide)



app.mount('#app')
