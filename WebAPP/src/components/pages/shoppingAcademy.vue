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
        <Txt text-align="center" :font=2 :color=3 :lg="100" :xs="56">{{ data.shoppingAcademy.part1.title1 }}</Txt>
        <Txt text-align="center" :font=1 :color=2 :lg="34" :xs="24">{{ data.shoppingAcademy.part1.title2 }}</Txt>
    </Stack>
    <Stack :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35 pt20' : 'pr5 pl5 pt20'" direction="column"
        justifyContent="flex-start" class="backgroundapp-color-2" alignItems="flex-start">
        <Grid :class="size.biggerThan(sizeType.lg) ? 'mt40' : ''" container :lg="2" :xs="1">
            <Grid :lg="1" :xs="1">
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Txt bold :font=1 :color=1 :xs="35" :lg="60">
                        {{ data.shoppingAcademy.part2.left.title1 }}
                    </Txt>
                </Stack>
            </Grid>
            <Grid :lg="1" :xs="1">
                <Stack class="height-100p" direction="column" justifyContent="center" alignItems="center">
                    <Txt :font=1 :color=1 :md=20 :xs=16>
                        {{ data.shoppingAcademy.part2.right.body1 }}
                    </Txt>
                </Stack>
            </Grid>
        </Grid>
        <Grid class="mt34 pb20" v-if="size.biggerThan(sizeType.md)" :gap="10" container :lg="4" :xs="1">
            <Grid v-for="(item, index) in data.shoppingAcademy.part2.items" :key="index" :lg="1" :xs="1">
                <div class="position-relative">
                    <div class="backgroundapp-color-1 image2-border-radius">
                        <div class="image2 image-fitparent-width image2-border-radius"
                            :style="{ 'background-image': 'url(' + item.img + ')' }">
                        </div>
                    </div>
                    <Appsvg :color="7" :hover="3" class="absolute-center cursor-pointer" :xsw=40 :lgw=55>
                        <IPlay />
                    </Appsvg>
                </div>
                <Stack class="height-inherit p3" direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Txt bold class="mt5" :font=1 :color=1 text-align="left" :xs="20">{{ item.title1 }}</Txt>
                    <Txt class="mt3" :font=1 :color=1 text-align="left" :xs="14">{{ item.body1 }}</Txt>
                </Stack>
            </Grid>
        </Grid>
    </Stack>
    <swiper-container v-if="!size.biggerThan(sizeType.md)"
        :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35' : 'pr5 pl5'" class="mt10 backgroundapp-color-2"
        :slides-per-view="size.biggerThan(sizeType.xs) ? 2 : 1" speed="500" space-between="16">
        <swiper-slide class="height-inherit" v-for="(item, index) in data.shoppingAcademy.part2.items" :key="index">
            <div>
                <div class="position-relative">
                    <div class="backgroundapp-color-1 image2-border-radius">
                        <div class="image2 image-fitparent-width image2-border-radius"
                            :style="{ 'background-image': 'url(' + item.img + ')' }">
                        </div>
                    </div>
                    <Appsvg :color="7" :hover="3" class="absolute-center cursor-pointer" :xsw=40 :lgw=55>
                        <IPlay />
                    </Appsvg>
                </div>
                <Stack class="height-inherit p3" direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Txt bold class="mt5" :font=1 :color=1 text-align="left" :xs="20">{{ item.title1 }}</Txt>
                    <Txt class="mt3" :font=1 :color=1 text-align="left" :xs="14">{{ item.body1 }}</Txt>
                </Stack>
            </div>
        </swiper-slide>
    </swiper-container>
    <Stack :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35' : 'pr5 pl5 '" direction="column"
        justifyContent="flex-start" class="backgroundapp-color-2" alignItems="flex-start">
        <Grid class="mt40" container :lg="2" :xs="1">
            <Grid :lg="1" :xs="1">
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Txt bold :font=1 :color=1 :xs="35" :lg="60">
                        {{ data.shoppingAcademy.part3.left.title1 }}
                    </Txt>
                </Stack>
            </Grid>
            <Grid :lg="1" :xs="1">
                <Stack class="height-100p" direction="column" justifyContent="center" alignItems="center">
                    <Txt :font=1 :color=1 :md=20 :xs=16>
                        {{ data.shoppingAcademy.part3.right.body1 }}
                    </Txt>
                </Stack>
            </Grid>
        </Grid>
        <Grid class="mt34" v-if="size.biggerThan(sizeType.md)" :gap="10" container :lg="4" :xs="1">
            <Grid v-for="(item, index) in data.shoppingAcademy.part3.items" :key="index" :lg="1" :xs="1">
                <div class="position-relative">
                    <div class="backgroundapp-color-1 image2-border-radius">
                        <div class="image2 image-fitparent-width image2-border-radius"
                            :style="{ 'background-image': 'url(' + item.img + ')' }">
                        </div>
                    </div>
                    <Appsvg :color="7" :hover="3" class="absolute-center cursor-pointer" :xsw=40 :lgw=55>
                        <IPlay />
                    </Appsvg>
                </div>
                <Stack class="height-inherit p3" direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Txt bold class="mt5" :font=1 :color=1 text-align="left" :xs="20">{{ item.title1 }}</Txt>
                    <Txt class="mt3" :font=1 :color=1 text-align="left" :xs="14">{{ item.body1 }}</Txt>
                </Stack>
            </Grid>
        </Grid>
    </Stack>
    <swiper-container v-if="!size.biggerThan(sizeType.md)"
        :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35' : 'pr5 pl5'" class="mt10 backgroundapp-color-2"
        :slides-per-view="size.biggerThan(sizeType.xs) ? 2 : 1" speed="500" space-between="16">
        <swiper-slide class="height-inherit" v-for="(item, index) in data.shoppingAcademy.part3.items" :key="index">
            <div>
                <div class="position-relative">
                    <div class="backgroundapp-color-1 image2-border-radius">
                        <div class="image2 image-fitparent-width image2-border-radius"
                            :style="{ 'background-image': 'url(' + item.img + ')' }">
                        </div>
                    </div>
                    <Appsvg :color="7" :hover="3" class="absolute-center cursor-pointer" :xsw=40 :lgw=55>
                        <IPlay />
                    </Appsvg>
                </div>
                <Stack class="height-inherit p3" direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Txt bold class="mt5" :font=1 :color=1 text-align="left" :xs="20">{{ item.title1 }}</Txt>
                    <Txt class="mt3" :font=1 :color=1 text-align="left" :xs="14">{{ item.body1 }}</Txt>
                </Stack>
            </div>
        </swiper-slide>
    </swiper-container>
    <Stack :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35' : 'pr5 pl5 '" direction="column"
        justifyContent="flex-start" class="backgroundapp-color-2" alignItems="flex-start">
        <Grid class="mt40" container :lg="2" :xs="1">
            <Grid :lg="1" :xs="1">
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Txt bold :font=1 :color=1 :xs="35" :lg="60">
                        {{ data.shoppingAcademy.part4.left.title1 }}
                    </Txt>
                </Stack>
            </Grid>
            <Grid :lg="1" :xs="1">
                <Stack class="height-100p" direction="column" justifyContent="center" alignItems="center">
                    <Txt :font=1 :color=1 :md=20 :xs=16>
                        {{ data.shoppingAcademy.part4.right.body1 }}
                    </Txt>
                </Stack>
            </Grid>
        </Grid>
        <Grid class="mt34 pb20" v-if="size.biggerThan(sizeType.md)" :gap="10" container :lg="4" :xs="1">
            <Grid v-for="(item, index) in data.shoppingAcademy.part4.items" :key="index" :lg="1" :xs="1">
                <div class="position-relative">
                    <div class="backgroundapp-color-1 image2-border-radius">
                        <div class="image2 image-fitparent-width image2-border-radius"
                            :style="{ 'background-image': 'url(' + item.img + ')' }">
                        </div>
                    </div>
                    <Appsvg :color="7" :hover="3" class="absolute-center cursor-pointer" :xsw=40 :lgw=55>
                        <IPlay />
                    </Appsvg>
                </div>
                <Stack class="height-inherit p3" direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Txt bold class="mt5" :font=1 :color=1 text-align="left" :xs="20">{{ item.title1 }}</Txt>
                    <Txt class="mt3" :font=1 :color=1 text-align="left" :xs="14">{{ item.body1 }}</Txt>
                </Stack>
            </Grid>
        </Grid>
    </Stack>
    <swiper-container v-if="!size.biggerThan(sizeType.md)"
        :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35 pb20' : 'pr5 pl5 pb20'" class="mt10 backgroundapp-color-2"
        :slides-per-view="size.biggerThan(sizeType.xs) ? 2 : 1" speed="500" space-between="16">
        <swiper-slide class="height-inherit" v-for="(item, index) in data.shoppingAcademy.part4.items" :key="index">
            <div>
                <div class="position-relative">
                    <div class="backgroundapp-color-1 image2-border-radius">
                        <div class="image2 image-fitparent-width image2-border-radius"
                            :style="{ 'background-image': 'url(' + item.img + ')' }">
                        </div>
                    </div>
                    <Appsvg :color="7" :hover="3" class="absolute-center cursor-pointer" :xsw=40 :lgw=55>
                        <IPlay />
                    </Appsvg>
                </div>
                <Stack class="height-inherit p3" direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Txt bold class="mt5" :font=1 :color=1 text-align="left" :xs="20">{{ item.title1 }}</Txt>
                    <Txt class="mt3" :font=1 :color=1 text-align="left" :xs="14">{{ item.body1 }}</Txt>
                </Stack>
            </div>
        </swiper-slide>
    </swiper-container>
    <OpenShop bellStars />
    <Opportunity />
</template>