<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import data from '@/helper/data.json'
const size = useSizeStore()
</script>
<template>
     <Stack :class="size.biggerThan(sizeType.md) ? 'pr35 pl35 pt20 pb20' : 'pr5 pl5 pt10 pb10'"
    class="width-100p backgroundapp-color-1" direction="column" justifyContent="center" alignItems="center">
    <Txt class="pb10" text-align="center" :font=2 :color=2 :xs="30" :lg="62">
      {{ data.people.title1 }}
    </Txt>
    <Grid gap="8" container :lg=4 :md=1>
      <Grid v-for="(item, index) in data.people.items" :key="index" :class="{ 'disabled': item.disabled }">
        <div class="image1 image-fitparent-width" :style="{ 'background-image': 'url(' + item.img + ')' }"></div>
        <Stack class="height-inherit" direction="column" justifyContent="flex-start" alignItems="center">
          <Txt class="mt4" :font=1 :color=2 text-align="center" :xs="16">{{ item.body1 }}</Txt>
          <Txt bold class="mt10" :font=1 :color=2 text-align="center" :xs="24">{{ item.body2 }}</Txt>
          <Txt class="mt1" :font=1 :color=2 text-align="center" :xs="20">{{ item.body3 }}</Txt>
          <Stack class="mt5" direction="row" justifyContent="center" alignItems="center">
            <Appsvg v-for="index2 in item.starCount" :key="index2" class="ml1 mr1"
              :class="item.disabled ? 'fillapp-color-3' : 'fillapp-color-7'" :xsw=30>
              <IStar />
            </Appsvg>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  </Stack>
</template>