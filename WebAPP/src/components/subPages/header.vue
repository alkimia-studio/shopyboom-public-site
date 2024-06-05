<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import { XMarkIcon, Bars3BottomRightIcon } from '@heroicons/vue/24/solid'
import data from '@/helper/data.json'
import { usePageStore } from '@/helper/page';
import { ref } from 'vue';
const size = useSizeStore()
const pages = usePageStore()
const openBarIsOpen = ref(false)
</script>
<template>
  <header v-if="!openBarIsOpen" class="headerapp">
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
        <Button1 :border=0 :color="2" :background="8" :hover-color="3" :hover-background="21" class="pr10 pl10">
          <Txt :font=1 :color=-1 :xs=16>{{ data.header.login }}</Txt>
        </Button1>
        <Txt v-for="(item, index) in pages.getListPage()" class="mr14 ml5 word-no-break" :key="index" :href="item.url"
          :color="item.active ? 3 : 2" bold :hover=3 :font=1 :xs=18>{{ item.text }}</Txt>
      </Stack>
      <Appsvg v-else :xs=1 :width=42 :color=2>
        <Bars3BottomRightIcon class="cursor-pointer" @click="openBarIsOpen=true" />
      </Appsvg>
    </Stack>
  </header>
  <div v-else class="openBar backgroundapp-color-1">
    <Stack class="openbar-content" direction="column" justifyContent="flex-start" alignItems="center">
      <Stack class="width-100p height-fit-content mt5 pr4" direction="row-reverse" justifyContent="space-between"
        alignItems="center">
        <Appsvg  :xs=1 :width=42 :color=2>
          <XMarkIcon  class="cursor-pointer" @click="openBarIsOpen=false" />
        </Appsvg>
      </Stack>
      <Stack class="width-100p mt10 hr1 pr22 pl22" direction="column" justifyContent="flex-start" alignItems="center">
        <div class="width-100p text-align-center mb4"  @click="openBarIsOpen=false" v-for="(item, index) in pages.getListPage()" :key="index">
          <Txt text-align="center" class="mb8 word-no-break" :href="item.url"
          :color="item.active ? 3 : 2" :hover=3 :font=2 :xs=28>{{ item.text }}</Txt>
          <hr class="width-100p mt4 borderapp-color-2" />
        </div>
        <div class="width-100p mt4">
          <Button1 :border=0 :color="1" :background="2" :hover-color="3" :hover-background="21" class="mt4 pt7 pb6">
            <Txt text-align="center" :font=2 :color=-1 bold :xs=26>{{ data.header.login }}</Txt>
          </Button1>
        </div>
      </Stack>
    </Stack>
  </div>
</template>
