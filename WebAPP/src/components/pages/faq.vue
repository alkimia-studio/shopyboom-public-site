<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import { useHead } from '@unhead/vue'
import data from '@/helper/data.json'
const size = useSizeStore()
useHead({
  title: data.faq.head.title,
  meta: [
    {
      name: 'description',
      content: data.faq.head.description,
    }
  ]
})
</script>
<template>
  <Stack
    class="backgroundapp-color-1 pt40 pb40 pr10 p10 width-100p"
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
  <Anim delay="200" when="pageload" class="opacity-0" in="animate__fadeIn opacity-1" out="" count="1">
    <Txt text-align="center" :font="2" :color="3" :lg="100" :xs="56">{{
      data.faq.part1.title1
    }}</Txt>
    </Anim>
    <Anim delay="400" when="pageload" class="opacity-0" in="animate__fadeIn opacity-1" out="" count="1">
    <Txt text-align="center" :font="1" :color="2" :lg="34" :xs="24">{{
      data.faq.part1.title2
    }}</Txt>
    </Anim>
  </Stack>
  <Stack
    :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35 pt20 pb20' : 'pr5 pl5 pt20 pb20'"
    direction="column"
    justifyContent="flex-start"
    class="backgroundapp-color-2"
    alignItems="flex-start">
  <Anim delay="600" when="pageload" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0">
    <Txt text-align="center" class="mb20" :xs="24" :md="32" :font="1" :color="1">{{
      data.faq.part2.title1
    }}</Txt>
    </Anim>
    <Accordion1 v-for="(item, index) in data.faq.part2.items" :key="index" :title="item.question">
      <Txt :font="1" :color="1" :xs="16"> {{ item.answer }}</Txt>
    </Accordion1>
  </Stack>
  <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0">
    <OpenShop bellStars />
  </Anim>
  <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0">
    <Opportunity />
  </Anim>
</template>
