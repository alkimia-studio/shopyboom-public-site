<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import { useHead } from '@unhead/vue'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import data from '@/helper/data.json'
import { Cordinate } from '@/helper/model';

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
</script>
<template>
  <Banner1 src="/images/image1.png">
    <Txt :font="1" :color="2" :xl="31" :lg="26" text-align="center" v-if="size.biggerThan(sizeType.md)">{{
      data.home.part1.title1 }}</Txt>
    <Txt :font="1" :color="2" :xl="31" :lg="26" text-align="center" v-if="size.biggerThan(sizeType.md)">{{
      data.home.part1.title2 }}</Txt>
    <Txt :font="2" :color="2" :xl="93" :lg="81" :md="60" :sm="40" :xs="30" text-align="center" bold>{{
      data.home.part1.title3 }}</Txt>
    <Txt :font="2" :color="3" :xl="134" :lg="110" :md="80" :sm="70" :xs="60" text-align="center" bold>{{
      data.home.part1.title4 }}</Txt>
    <Txt :font="1" :color="5" :xl="33" :lg="28" :md="24" :sm="21" :xs="18" text-align="center">{{ data.home.part1.title5
      }}</Txt>
    <Button1 :border=0 :color="21" :background="3" :hover-color="3" :hover-background="21"
      class="mt10 pt5 pb5 pr15 pl15">
      <Txt :font=1 :color=-1 :xs=18>{{ data.home.part1.button1 }}</Txt>
    </Button1>
    <Appsvg class="fillapp-color-3"
      :class="size.biggerThan(sizeType.lg) ? 'mt30' : size.biggerThan(sizeType.md) ? 'mt20' : 'mt10'"
      v-if="size.biggerThan(sizeType.sm)" :md=1.5 :lg=1.8 :xl=2>
      <IArrowDown class="fillapp-color-2" />
    </Appsvg>
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
            <Stack class="pt4 pb4 width-100p" direction="row" justifyContent="space-between" alignItems="center">
              <Txt :font=1 :color=1 :md=24 :xs=18 bold>{{ item.text }}</Txt>
              <a :href="item.url">
                <Appsvg :color=3 :xs=1>
                  <ChevronRightIcon />
                </Appsvg>
              </a>
            </Stack>
            <hr class="width-100p" />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
    <Stack direction="row" class="width-100p p30" justifyContent="center" alignItems="center">
      <Txt class="pr2" :font=1 :color=1 :md=48 :xs=24>{{ data.home.part3.title1 }}</Txt>
      <Txt class="pl2" :font=1 :color=1 :md=48 :xs=24 bold>{{ data.header.sitename }}</Txt>
    </Stack>
  </Stack>
  <Stack :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35' : 'pr5 pl5'" direction="column" justifyContent="flex-start"
    class="backgroundapp-color-2" alignItems="flex-start">
    <Grid :gap=0 class="mt20" direction="rtl" container :lg=8 :xs=1>
      <Grid class="direction-ltr" :lg=5 :xs=1>
        <Shape container>
          <Shape 
          :xlw=700 :xlc="new Cordinate(140, -274)"
          :lgw=650 :lgc="new Cordinate(140, -260)" 
          :mdw=1500 :mdc="new Cordinate(0, -240)" 
          :smw=600 :smc="new Cordinate(0, -240)" 
          :xsw=250 :xsc="new Cordinate(0, -240)"
          :stick="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeWindow />
          </Shape>
          <Shape 
          :xlw=130 :xlc="new Cordinate(-270, -70)" 
          :lgw=110 :lgc="new Cordinate(-268, -50)" 
          :mdw=130 :mdc="new Cordinate(-168, -40)" 
          :smw=90 :smc="new Cordinate(-120, -40)" 
          :xsw=45 :xsc="new Cordinate(-46, -6)" 
          :stick="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeCircleNumber number="3" color="#333333" />
          </Shape>
          <Shape 
          :xlw=130 :xlc="new Cordinate(-375, -70)" 
          :lgw=110 :lgc="new Cordinate(-343, -50)" 
          :mdw=130 :mdc="new Cordinate(-275, -40)" 
          :smw=90 :smc="new Cordinate(-195, -40)" 
          :xsw=45 :xsc="new Cordinate(-81, -6)" 
          :stick="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeCircleNumber style="opacity: 0.59" number="2" color="#333333" />
          </Shape>
          <Shape 
          :xlw=130 :xlc="new Cordinate(-480, -70)" 
          :lgw=110 :lgc="new Cordinate(-418, -50)" 
          :mdw=130 :mdc="new Cordinate(-382, -40)" 
          :smw=90 :smc="new Cordinate(-270, -40)" 
          :xsw=45 :xsc="new Cordinate(-116, -6)" 
          :stick="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeCircleNumber style="opacity: 0.28" number="1" color="#333333" />
          </Shape>
          <Shape 
          :xlw=180 :xlc="new Cordinate(-350, 23)" 
          :lgw=140 :lgc="new Cordinate(-324, 44)" 
          :mdw=160 :mdc="new Cordinate(-275, 96)" 
          :smw=120 :smc="new Cordinate(-195, 57)" 
          :xsw=60 :xsc="new Cordinate(-81, 7)" 
          :stick="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapePipeStar />
          </Shape>
          <Shape 
          :xlw=320 :xlc="new Cordinate(134, -86)" 
          :lgw=270 :lgc="new Cordinate(130, -62)" 
          :mdw=340 :mdc="new Cordinate(230, -53)" 
          :smw=250 :smc="new Cordinate(163, -54)" 
          :xsw=110 :xsc="new Cordinate(68, -23)"
          :stick="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeButtonRoundClock :text="data.home.part4.right.buttonRound" />
          </Shape>
          <Shape 
          :xlw=110 :xlc="new Cordinate(-158, 53)" 
          :lgw=100 :lgc="new Cordinate(-140, 83)" 
          :mdw=110 :mdc="new Cordinate(-11, 123)" 
          :smw=95 :smc="new Cordinate(-11, 100)" 
          :xsw=39 :xsc="new Cordinate(-11, 60)"
          :stick="size.biggerThan(sizeType.md) ? 'right' : 'center'">
            <ShapeMarketBasket />
          </Shape>
        </Shape>
      </Grid>
      <Grid :class="size.biggerThan(sizeType.md) ? '' : 'mt4'" :lg=3 :xs=1>
        <Stack class="direction-ltr" direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Txt line-height="82" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" class="word-no-break"
            :font=1 :color=1 :xl=50 :lg=46 :md=50 :xs=30>{{ data.home.part4.left.title1 }}</Txt>
          <Stack :class="size.biggerThan(sizeType.md) ? '' : 'width-100p'" direction="row"
            :justifyContent="size.biggerThan(sizeType.md) ? 'flex-start' : 'center'"
            :alignItems="size.biggerThan(sizeType.md) ? 'flex-start' : 'center'">
            <Txt line-height="48" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'right'" :font=2 :color=3 :xl=50
              :lg=46 :md=50 :xs=30>{{ data.home.part4.left.title2 }}</Txt>
            <Txt line-height="48" class="ml2 word-no-break" :font=1 :color=1 :xl=50 :lg=46 :md=50 :xs=30>{{
              data.home.part4.left.title3 }}</Txt>
          </Stack>
          <Txt line-height="80" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1 :xl=50
            :lg=46 :md=50 :xs=30>{{ data.home.part4.left.title4 }}</Txt>
          <Txt class="mt2" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1 :md=24 :xs=18>
            {{ data.home.part4.left.body1 }}</Txt>
        </Stack>
      </Grid>
    </Grid>
  </Stack>
</template>
