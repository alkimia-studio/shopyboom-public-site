<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import data from '@/helper/data.json'
const size = useSizeStore()
</script>
<template>
  <footer :class="size.biggerThan(sizeType.md) ? 'pr35 pl35 pt30 pb22' : 'pr5 pl5 pt15 pb8'"
    class="footerapp backgroundapp-color-1 width-100p">
    <Stack class="width-inherit" direction="column" justifyContent="flex-start" alignItems="flex-start">
      <Stack direction="row" justifyContent="flex-start" alignItems="center">
        <Appsvg>
          <IShopyBoom />
        </Appsvg>
        <Txt href="/" class="ml2" :font=1 :color=2 :xs=26>{{ data.header.sitename }}</Txt>
      </Stack>
      <Grid  class="mt15 width-inherit" container :lg=4 :xs=1>
        <Grid :lg=1 :xs=1>
          <Stack class="mb8" direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Txt class="mt2" v-for="(item,index) in data.footer.column1.part1" :key="index" :color=2 :font=1 :xs=16 :href="item.url">{{ item.text }}</Txt>
          </Stack>
          <Stack class="mb8" direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Txt class="mt2" v-for="(item,index) in data.footer.column1.part2" :key="index" :color=2 :font=1 :xs=16 :href="item.url">{{ item.text }}</Txt>
          </Stack>
        </Grid>
        <Grid :lg=1 :xs=1>
          <Stack class="mb8" direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Txt class="mt2" v-for="(item,index) in data.footer.column2" :key="index" :color=2 :font=1 :xs=16 :href="item.url">{{ item.text }}</Txt>
          </Stack>
        </Grid>
        <Grid :lg=1 :xs=1>
          <Stack class="mb8" direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Txt class="mt2" v-for="(item,index) in data.footer.column3" :key="index" :color=2 :font=1 :xs=16 :href="item.url">{{ item.text }}</Txt>
          </Stack>
        </Grid>
        <Grid :lg=1 :xs=1>
          <Stack class="mb8" direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Txt class="mt2" v-for="(item,index) in data.footer.column4.part1" :key="index" :color=2 :font=1 :xs=16 :href="item.url">{{ item.text }}</Txt>
          </Stack>
          <Stack class="mb8" direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Txt class="mt2" v-for="(item,index) in data.footer.column4.part2" :key="index" :color=2 :font=1 :xs=16 :href="item.url">{{ item.text }}</Txt>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  </footer>
</template>
