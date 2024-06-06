<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import { useHead } from '@unhead/vue'
import { ChevronRightIcon, ArrowLongDownIcon } from '@heroicons/vue/24/solid'
import data from '@/helper/data.json'
const size = useSizeStore()
useHead({
  title: 'this is title',
  meta: [
    {
      name: 'description',
      content: 'My page description'
    }
  ]
})
const shapeContainerMinHeight = {
  xlh: 1,
  lgh: 1,
  mdh: 400,
  smh: 380,
  xsh: 210
}
</script>
<template>
  <Banner1 src="/images/image1.jpg" class="backgroundapp-color-11" :opacity=0.35>
    <Txt :class="size.biggerThan(sizeType.md) ? 'pt40' : size.biggerThan(sizeType.sm) ? 'pt30' : size.biggerThan(sizeType.xs) ? 'pt35' : 'pt25'
      " :font="1" :color="2" :xl="31" :lg="26" text-align="center" v-if="size.biggerThan(sizeType.md)">{{
          data.home.part1.title1 }}</Txt>
    <Txt :font="1" :color="2" :xl="31" :lg="26" text-align="center" v-if="size.biggerThan(sizeType.md)">{{
      data.home.part1.title2 }}</Txt>
    <Txt :font="2" :color="2" :xl="93" :lg="81" :md="60" :sm="40" :xs="30" text-align="center" bold>{{
      data.home.part1.title3 }}</Txt>
    <Txt :font="2" :color="3" :xl="134" :lg="110" :md="80" :sm="70" :xs="60" text-align="center" bold>{{
      data.home.part1.title4 }}</Txt>
    <Txt :font="1" :color="5" :xl="33" :lg="28" :md="24" :sm="21" :xs="18" text-align="center">{{ data.home.part1.title5
      }}</Txt>
    <Button1 :border=0 :color="21" :background="3" :hover-color="3" :hover-background="7" class="mt10 pr15 pl15">
      <Txt bold :font=1 :color=-1 :xs=18>{{ data.home.part1.button1 }}</Txt>
    </Button1>
    <ShapeContainer :xlh="100" :lgh="100" :mdh="100" :smh="100" :xsh="100">
      <Shape page="home" part="part1" shape-name="arrow" stick-v="center" stick-h="center">
        <Appsvg class="fillapp-color-3" :xsw="50" :xmw="60" :mdw=70 :lgw=70 :xlw=80>
          <ArrowLongDownIcon class="fillapp-color-2 arrow" />
        </Appsvg>
      </Shape>
    </ShapeContainer>

  </Banner1>
  <Stack :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35' : 'pr5 pl5'" direction="column" justifyContent="flex-start"
    alignItems="flex-start">
    <Grid class="mt20" container :xl=2 :lg=1>
      <Grid :xl=1 :lg=1>
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Txt :font=1 :color=1 :lg=74 :md=50 :xs=30>{{ data.home.part2.left.title1 }}</Txt>
          <Txt :font=2 :color=3 :lg=80 :md=64 :xs=42>{{ data.header.sitename }}</Txt>
        </Stack>
      </Grid>
      <Grid :xl=1 :lg=1>
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Txt :font=1 :color=1 :md=24 :xs=18>{{ data.home.part2.right.title1 }}</Txt>
          <Stack class="mt8 hr1 width-100p" direction="column" justifyContent="flex-start" alignItems="flex-start">
          </Stack>
          <Stack class="width-100p" v-for="(item, index) in data.home.part2.right.links" direction="column"
            justifyContent="flex-start" alignItems="flex-start">
            <a class="pt4 pb4 width-100p" :href="item.url">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Txt :font=1 :color=1 :md=24 :xs=18 bold>{{ item.text }}</Txt>
                <Appsvg :color=3 :xsw=35>
                  <ChevronRightIcon />
                </Appsvg>
              </Stack>
            </a>
            <hr class="width-100p" />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
    <Stack :direction="size.biggerThan(sizeType.sm) ? 'row' : 'column'" class="width-100p pt30 pb30"
      justifyContent="center" alignItems="center">
      <Txt class="pr2 word-no-break" :text-align="size.biggerThan(sizeType.sm) ? 'right' : 'center'" :font=1 :color=1
        :lg=48 :md=30 :sm=30 :xs=24>{{
          data.home.part3.title1 }}</Txt>
      <Txt :class="size.biggerThan(sizeType.sm) ? '' : 'mt6'" class="pl2"
        :text-align="size.biggerThan(sizeType.sm) ? 'left' : 'center'" :font=1 :color=1 :lg=48 :md=30 :sm=30 :xs=24
        bold>{{ data.header.sitename }}</Txt>
    </Stack>
  </Stack>
  <Stack :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35' : 'pr5 pl5'" direction="column" justifyContent="flex-start"
    class="backgroundapp-color-2 pb30" alignItems="flex-start">
    <Grid :gap=0 class="mt20 width-100p" direction="rtl" container :lg=8 :md=1>
      <Grid class="direction-ltr" :lg=5 :md=1>
        <ShapeContainer :xlh="shapeContainerMinHeight.xlh" :lgh="shapeContainerMinHeight.lgh"
          :mdh="shapeContainerMinHeight.mdh" :smh="shapeContainerMinHeight.smh" :xsh="shapeContainerMinHeight.xsh">
          <Shape page="home" part="part4" shape-name="window"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/window.svg" />
          </Shape>
          <Shape page="home" part="part4" shape-name="circleNumber3"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeCircle text="3" :color=1 />
          </Shape>
          <Shape page="home" part="part4" shape-name="circleNumber2"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeCircle text="2" :color=1 style="opacity: 0.59" />
          </Shape>
          <Shape page="home" part="part4" shape-name="circleNumber1"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeCircle text="1" :color=1 style="opacity: 0.28" />
          </Shape>
          <Shape page="home" part="part4" shape-name="pipeStar"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/pipeStar.svg" />
          </Shape>
          <Shape page="home" part="part4" shape-name="buttonRoundClock"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeButtonRoundClock :text="data.home.part4.right.buttonRound" />
          </Shape>
          <Shape page="home" part="part4" shape-name="marketBasket"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/marketBasket.svg" />
          </Shape>
        </ShapeContainer>
      </Grid>
      <Grid class="direction-ltr" :class="size.biggerThan(sizeType.md) ? '' : 'mt4'" :lg=3 :md=1>
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Txt bold line-height="82" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'"
            class="word-no-break" :font=1 :color=1 :xl=72 :lg=46 :md=50 :xs=30>{{ data.home.part4.left.title1 }}</Txt>
          <Stack :class="size.biggerThan(sizeType.md) ? '' : 'width-100p'" direction="row"
            :justifyContent="size.biggerThan(sizeType.md) ? 'flex-start' : 'center'"
            :alignItems="size.biggerThan(sizeType.md) ? 'flex-start' : 'center'">
            <Txt line-height="normal" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'right'" :font=2 :color=3
              :xl=72 :lg=46 :md=50 :xs=30>{{ data.home.part4.left.title2 }}</Txt>
            <Txt bold line-height="48" class="ml2 word-no-break" :font=1 :color=1 :xl=72 :lg=46 :md=50 :xs=30>{{
              data.home.part4.left.title3 }}</Txt>
          </Stack>
          <Txt bold line-height="80" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1
            :xl=72 :lg=46 :md=50 :xs=30>{{ data.home.part4.left.title4 }}</Txt>
          <Txt class="mt2" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1 :md=24
            :xs=18>
            {{ data.home.part4.left.body1 }}</Txt>
        </Stack>
      </Grid>
    </Grid>
    <Grid :gap=0 class="mt60 width-100p" direction="ltr" container :lg=8 :md=1>
      <Grid :lg=5 :md=1>
        <ShapeContainer :xlh="shapeContainerMinHeight.xlh" :lgh="shapeContainerMinHeight.lgh"
          :mdh="shapeContainerMinHeight.mdh" :smh="shapeContainerMinHeight.smh" :xsh="shapeContainerMinHeight.xsh">
          <Shape page="home" part="part5" shape-name="window"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/window.svg" />
          </Shape>
          <Shape page="home" part="part5" shape-name="picture"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/picture.svg" />
          </Shape>
          <Shape page="home" part="part5" shape-name="bars" :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/bars.svg" />
          </Shape>
          <Shape page="home" part="part5" shape-name="star1"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/iCanSeeYourStar.svg" />
          </Shape>
          <Shape page="home" part="part5" shape-name="star2"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/iCanSeeYourStar.svg" />
          </Shape>
          <Shape page="home" part="part5" shape-name="star3"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/iCanSeeYourStar.svg" />
          </Shape>
          <Shape page="home" part="part5" shape-name="circleArrowLeft"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/circleArrowLeft.svg" />
          </Shape>
          <Shape page="home" part="part5" shape-name="camera"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/camera.svg" />
          </Shape>
          <Shape page="home" part="part5" shape-name="buttonRoundPipe"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <ShapeButtonRoundPipe :text="data.home.part5.left.buttonRound" />
          </Shape>
        </ShapeContainer>
      </Grid>
      <Grid :class="size.biggerThan(sizeType.md) ? '' : 'mt4'" :lg=3 :md=1>
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Txt bold line-height="82" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'"
            class="word-no-break" :font=1 :color=1 :xl=72 :lg=46 :md=50 :xs=30>{{ data.home.part5.right.title1 }}</Txt>
          <Txt bold line-height="82" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'"
            class="word-no-break" :font=1 :color=1 :xl=72 :lg=46 :md=50 :xs=30>{{ data.home.part5.right.title2 }}</Txt>
          <Txt line-height="82" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" class="word-no-break"
            :font=2 :color=3 :xl=72 :lg=46 :md=50 :xs=30>{{ data.home.part5.right.title3 }}</Txt>
          <Txt class="mt2" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1 :md=24
            :xs=18>
            {{ data.home.part5.right.body1 }}</Txt>
        </Stack>
      </Grid>
    </Grid>
    <Grid :gap=0 class="mt60 width-100p" direction="rtl" container :lg=8 :md=1>
      <Grid class="direction-ltr" :lg=5 :md=1>
        <ShapeContainer :xlh="shapeContainerMinHeight.xlh" :lgh="shapeContainerMinHeight.lgh"
          :mdh="shapeContainerMinHeight.mdh" :smh="shapeContainerMinHeight.smh" :xsh="shapeContainerMinHeight.xsh">
          <Shape page="home" part="part6" shape-name="window"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/window.svg" />
          </Shape>
          <Shape page="home" part="part6" shape-name="brush"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/brush.svg" />
          </Shape>
          <Shape page="home" part="part6" shape-name="color1"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeCircle :color=3 />
          </Shape>
          <Shape page="home" part="part6" shape-name="color2"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeCircle :color=1 />
          </Shape>
          <Shape page="home" part="part6" shape-name="color3"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeCircle :color=5 />
          </Shape>
          <Shape page="home" part="part6" shape-name="color4"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeCircle :color=7 />
          </Shape>
          <Shape page="home" part="part6" shape-name="color5"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeCircle :color=2 />
          </Shape>
          <Shape page="home" part="part6" shape-name="color6"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeCircle style="opacity: 0.53" :color="21" />
          </Shape>
          <Shape page="home" part="part6" shape-name="boxRunning"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/boxRunning.svg" />
          </Shape>
          <Shape page="home" part="part6" shape-name="boxFood"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/boxFood.svg" />
          </Shape>
          <Shape page="home" part="part6" shape-name="boxDog"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/boxDog.svg" />
          </Shape>
          <Shape page="home" part="part6" shape-name="buttonRoundBrush"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeButtonRoundBrush :text="data.home.part6.right.buttonRound" />
          </Shape>
        </ShapeContainer>
      </Grid>
      <Grid class="direction-ltr" :class="size.biggerThan(sizeType.md) ? '' : 'mt4'" :lg=3 :md=1>
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Stack :class="size.biggerThan(sizeType.md) ? '' : 'width-100p'" direction="row"
            :justifyContent="size.biggerThan(sizeType.md) ? 'flex-start' : 'center'"
            :alignItems="size.biggerThan(sizeType.md) ? 'flex-start' : 'center'">
            <Txt line-height="normal" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'right'" :font=2 :color=3
              :xl=72 :lg=46 :md=50 :xs=30>{{ data.home.part6.left.title1 }}</Txt>
            <Txt bold line-height="48" class="ml2 word-no-break" :font=1 :color=1 :xl=72 :lg=46 :md=50 :xs=30>{{
              data.home.part6.left.title2 }}</Txt>
          </Stack>
          <Txt bold line-height="82" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'"
            class="word-no-break" :font=1 :color=1 :xl=72 :lg=46 :md=50 :xs=30>{{ data.home.part6.left.title3 }}</Txt>
          <Txt bold line-height="80" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1
            :xl=72 :lg=46 :md=50 :xs=30>{{ data.home.part6.left.title4 }}</Txt>
          <Txt class="mt2" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1 :md=24
            :xs=18>
            {{ data.home.part6.left.body1 }}</Txt>
        </Stack>
      </Grid>
    </Grid>
    <Grid :gap=0 class="mt60 width-100p" direction="ltr" container :lg=8 :md=1>
      <Grid :lg=5 :md=1>
        <ShapeContainer :xlh="shapeContainerMinHeight.xlh" :lgh="shapeContainerMinHeight.lgh"
          :mdh="shapeContainerMinHeight.mdh" :smh="shapeContainerMinHeight.smh" :xsh="shapeContainerMinHeight.xsh">
          <Shape page="home" part="part7" shape-name="window"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/window.svg" />
          </Shape>
          <Shape page="home" part="part7" shape-name="bars2"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/bars2.svg" />
          </Shape>
          <Shape page="home" part="part7" shape-name="star1"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/iCanSeeYourStar.svg" />
          </Shape>
          <Shape page="home" part="part7" shape-name="star2"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/iCanSeeYourStar.svg" />
          </Shape>
          <Shape page="home" part="part7" shape-name="star3"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/iCanSeeYourStar.svg" />
          </Shape>
          <Shape page="home" part="part7" shape-name="circleArrowRight"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img style="transform: rotate(180deg);" src="/svgs/circleArrowLeft.svg" />
          </Shape>
          <Shape page="home" part="part7" shape-name="truck"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <img src="/svgs/truck.svg" />
          </Shape>
          <Shape page="home" part="part7" shape-name="buttonRoundPipe"
            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
            <ShapeButtonRoundPipe2 :text="data.home.part7.left.buttonRound" />
          </Shape>
        </ShapeContainer>
      </Grid>
      <Grid :class="size.biggerThan(sizeType.md) ? '' : 'mt4'" :lg=3 :md=1>
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Txt bold line-height="82" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'"
            class="word-no-break" :font=1 :color=1 :xl=72 :lg=46 :md=50 :xs=30>{{ data.home.part7.right.title1 }}</Txt>
          <Stack :class="size.biggerThan(sizeType.md) ? '' : 'width-100p'" direction="row"
            :justifyContent="size.biggerThan(sizeType.md) ? 'flex-start' : 'center'"
            :alignItems="size.biggerThan(sizeType.md) ? 'flex-start' : 'center'">
            <Txt line-height="48" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'right'" :font=1 :color=1 :xl=72
              :lg=46 :md=50 :xs=30>{{ data.home.part7.right.title2 }}</Txt>
            <Txt line-height="normal" class="ml2 word-no-break" :xl=72 :font=2 :color=3 :lg=46 :md=50 :xs=30>{{
              data.home.part7.right.title3 }}</Txt>
          </Stack>
          <Txt class="mt2" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1 :md=24
            :xs=18>
            {{ data.home.part7.right.body1 }}</Txt>
        </Stack>
      </Grid>
    </Grid>
    <Grid :gap=0 class="mt60 width-100p" direction="rtl" container :lg=8 :md=1>
      <Grid class="direction-ltr" :lg=5 :md=1>
        <ShapeContainer :xlh="shapeContainerMinHeight.xlh" :lgh="shapeContainerMinHeight.lgh"
          :mdh="shapeContainerMinHeight.mdh" :smh="shapeContainerMinHeight.smh" :xsh="shapeContainerMinHeight.xsh">
          <Shape page="home" part="part8" shape-name="window"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/window.svg" />
          </Shape>
          <Shape page="home" part="part8" shape-name="boxEnvelop"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/boxEnvelop.svg" />
          </Shape>
          <Shape page="home" part="part8" shape-name="boxEarth"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/boxEarth.svg" />
          </Shape>
          <Shape page="home" part="part8" shape-name="boxTag"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/boxTag.svg" />
          </Shape>
          <Shape page="home" part="part8" shape-name="buttonRoundSpeaker"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeButtonRoundSpeaker :text="data.home.part8.right.buttonRound" />
          </Shape>
          <Shape page="home" part="part8" shape-name="snow"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <img src="/svgs/snow.svg" />
          </Shape>
          <Shape page="home" part="part8" shape-name="text1"
            :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeText :color=5 :font=1 :text="data.home.part8.right.text1" />
          </Shape>
        </ShapeContainer>
      </Grid>
      <Grid class="direction-ltr" :class="size.biggerThan(sizeType.md) ? '' : 'mt4'" :lg=3 :md=1>
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Stack :class="size.biggerThan(sizeType.md) ? '' : 'width-100p'" direction="row"
            :justifyContent="size.biggerThan(sizeType.md) ? 'flex-start' : 'center'"
            :alignItems="size.biggerThan(sizeType.md) ? 'flex-start' : 'center'">
            <Txt line-height="normal" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'right'" :font=2 :color=3
              :xl=72 :lg=46 :md=50 :xs=30>{{ data.home.part8.left.title1 }}</Txt>
            <Txt bold line-height="48" class="ml2 word-no-break" :font=1 :color=1 :xl=72 :lg=46 :md=50 :xs=30>{{
              data.home.part8.left.title2 }}</Txt>
          </Stack>
          <Txt bold line-height="82" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'"
            class="word-no-break" :font=1 :color=1 :xl=72 :lg=46 :md=50 :xs=30>{{ data.home.part8.left.title3 }}</Txt>
          <Txt bold line-height="80" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1
            :xl=72 :lg=46 :md=50 :xs=24>{{ data.home.part8.left.title4 }}</Txt>
          <Txt class="mt2" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1 :md=24
            :xs=18>
            {{ data.home.part8.left.body1 }}</Txt>
        </Stack>
      </Grid>
    </Grid>
  </Stack>
  <BellStars />
  <Academy />
  <People />
  <OpenShop />
  <Opportunity />
</template>
