<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import { Bars3BottomRightIcon } from '@heroicons/vue/24/solid'
import data from '@/helper/data.json'
import { usePageStore } from '@/helper/page';
const size = useSizeStore()
const pages = usePageStore()
</script>
<template>
  <header class="headerapp">
    <Stack class="pl4 pr4 pt3 pb3 width-100p backgroundapp-color-1" direction="row" justifyContent="space-between"
      alignItems="center">
      <Stack direction="row" justifyContent="flex-start" alignItems="center">
        <Appsvg>
          <IShopyBoom />
        </Appsvg>
        <Txt href="/" class="ml2" :font=1 :color=2 :xs=26>{{ data.header.sitename }}</Txt>
      </Stack>
      <Stack v-if="size.biggerThan(sizeType.md)" class="mr10" direction="row-reverse" justifyContent="flex-start"
        alignItems="center">
        <Button1 :border=0 :color="2" :background="8" :hover-color="3" :hover-background="21" class="pt5 pb5 pr10 pl10">
          <Txt :font=1 :color=-1 :xs=16>{{ data.header.login }}</Txt>
        </Button1>
        <Txt v-for="(item, index) in pages.getListPage()" class="mr14 ml5 word-no-break" :key="index" :href="item.url"
          :color="item.active ? 3 : 2" :hover=3 :font=1 :xs=18>{{ item.text }}</Txt>
      </Stack>
      <Appsvg v-else :xs=1 :width=42 :color=2>
        <Bars3BottomRightIcon />
      </Appsvg>
    </Stack>
  </header>
</template>
