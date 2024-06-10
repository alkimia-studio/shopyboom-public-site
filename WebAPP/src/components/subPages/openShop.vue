<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import data from '@/helper/data.json'
const props = defineProps({
  bellStars: { type: Boolean, default: false }
});
const size = useSizeStore()
</script>
<template>
  <Stack :class="{'pt20 pb20': !props.bellStars}" class="backgroundapp-color-3 width-100p" direction="column" justifyContent="center"
    alignItems="center">
    <div v-if="props.bellStars" class="width-100p">
      <ShapeContainer class="backgroundapp-color-3" :xlh="100" :lgh="100" :mdh="130" :smh="130" :xsh="120">
        <Shape page="bellStars" part="part1" shape-name="3stars" stick-v="right">
          <img src="/svgs/3stars.svg" />
        </Shape>
      </ShapeContainer>
    </div>
    <Txt text-align="center" :line-height=140 :font=2 :color=1 :xs=60 :lg=109>{{ data.openShop.title1 }}</Txt>
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Txt class="word-no-break pr1 pl1" text-align="center" :font=1 :color=2 :xs=24 :lg=34 bold>{{ data.openShop.body1
        }}</Txt>
      <Txt class="word-no-break pr1 pl1" text-align="center" :font=1 :color=2 :xs=24 :lg=34 underline href="#">{{
      data.openShop.body2 }}</Txt>
      <Txt class="word-no-break pr1 pl1" text-align="center" :font=1 :color=2 :xs=24 :lg=34 bold>{{ data.openShop.body3
        }}</Txt>
    </Stack>
    <div class="mt8">
      <Button1 :border=0 :color="2" :background="8" :hover-color="3" :hover-background="7" class="pr10 pl10">
        <Txt bold :font=1 :color=-1 :xs=16>{{ data.openShop.buttonRound }}</Txt>
      </Button1>
    </div>
    <div v-if="props.bellStars" class="width-100p">
      <ShapeContainer class="backgroundapp-color-3" :xlh="100" :lgh="120" :mdh="200" :smh="220" :xsh="180">
        <Shape page="bellStars" part="part1" shape-name="bellCropped" stick-v="left">
          <img src="/svgs/bellCropped.svg" />
        </Shape>
      </ShapeContainer>
    </div>
  </Stack>
</template>