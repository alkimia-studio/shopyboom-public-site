<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import { useHead } from '@unhead/vue'
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
</script>
<template>
    <Stack class="backgroundapp-color-1 pt40 pb40 pr10 p10 width-100p" direction="column" justifyContent="center"
        alignItems="center">
        <Txt text-align="center" :font=2 :color=3 :lg="100" :xs="56">{{ data.faq.part1.title1 }}</Txt>
        <Txt text-align="center" :font=1 :color=2 :lg="34" :xs="24">{{ data.faq.part1.title2 }}</Txt>
    </Stack>
    <Stack :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35 pt20 pb20' : 'pr5 pl5 pt20 pb20'" direction="column"
        justifyContent="flex-start" class="backgroundapp-color-2" alignItems="flex-start">
        <Txt text-align="center" class="mb20" :xs="24" :md="32" :font=1 :color="1">{{ data.faq.part2.title1 }}</Txt>
        <Accordion1 v-for="(item,index) in data.faq.part2.items" :key="index" :title="item.question">
            <Txt :font="1" :color="1" :xs="16"> {{ item.answer }}</Txt>
        </Accordion1>
    </Stack>
    <OpenShop bellStars />
    <Opportunity />
</template>