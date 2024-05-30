<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import data from '@/helper/data.json'
const size = useSizeStore()
</script>
<template>
      <Stack class="backgroundapp-color-3 width-100p pt20 pb20" direction="column" justifyContent="center" alignItems="center">
    <Txt text-align="center" :line-height=140 :font=2 :color=1 :xs=60 :lg=109>{{ data.openShop.title1 }}</Txt>
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Txt class="word-no-break pr1 pl1" text-align="center" :font=1 :color=2 :xs=24 :lg=34 bold>{{ data.openShop.body1 }}</Txt>
      <Txt class="word-no-break pr1 pl1" text-align="center" :font=1 :color=2 :xs=24 :lg=34 underline href="#">{{ data.openShop.body2 }}</Txt>
      <Txt class="word-no-break pr1 pl1" text-align="center" :font=1 :color=2 :xs=24 :lg=34 bold>{{ data.openShop.body3 }}</Txt>
    </Stack>
    <div class="mt8">
      <Button1 :border=0 :color="2" :background="8" :hover-color="3" :hover-background="21" class="pt5 pb5 pr10 pl10">
        <Txt :font=1 :color=-1 :xs=16>{{ data.openShop.buttonRound }}</Txt>
      </Button1>
    </div>
  </Stack>
</template>