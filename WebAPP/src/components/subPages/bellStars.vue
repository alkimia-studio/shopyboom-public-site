<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import data from '@/helper/data.json'
</script>
<template>
      <Stack class="backgroundapp-color-3 width-100p" direction="column" justifyContent="center" alignItems="center">
    <div class="width-100p">
      <ShapeContainer class="backgroundapp-color-3" :xlh="100" :lgh="100" :mdh="130" :smh="130" :xsh="120">
        <Shape page="home" part="part9" shape-name="3stars" stick-v="right">
          <img src="/svgs/3stars.svg" />
        </Shape>
      </ShapeContainer>
    </div>
    <Txt text-align="center" :line-height=140 :font=2 :color=1 :xs=60 :lg=109>{{ data.bellStars.title1 }}</Txt>
    <Txt text-align="center" :font=1 :color=2 :xs=24 :lg=34>{{ data.bellStars.body1 }}</Txt>
    <div class="mt8">
      <Button1 :border=0 :color="2" :background="8" :hover-color="3" :hover-background="21" class="pr10 pl10">
        <Txt :font=1 :color=-1 :xs=16>{{ data.bellStars.buttonRound }}</Txt>
      </Button1>
    </div>
    <div class="width-100p">
      <ShapeContainer class="backgroundapp-color-3" :xlh="100" :lgh="120" :mdh="200" :smh="220" :xsh="180">
        <Shape page="home" part="part9" shape-name="bellCropped" stick-v="left">
          <img src="/svgs/bellCropped.svg" />
        </Shape>
      </ShapeContainer>
    </div>
  </Stack>
</template>