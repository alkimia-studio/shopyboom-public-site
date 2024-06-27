<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import { useHead } from '@unhead/vue'
import data from '@/helper/data.json'
import { useScrollStore } from '@/helper/scrollHandler'
import { onBeforeMount } from 'vue'
const size = useSizeStore()
const scroll = useScrollStore()
onBeforeMount(() => { scroll.enablePrint() })
useHead({
  title: data.risorse.head.title,
  meta: [
    {
      name: 'description',
      content: data.risorse.head.description,
    }
  ]
})
onBeforeMount(() => {
})
</script>
<template>
  <Stack class="backgroundapp-color-1 pt40 pb40 width-100p" direction="column" justifyContent="center"
    alignItems="center">
    <Anim delay="200" when="pageload" class="opacity-0" in="animate__fadeIn opacity-1" out="" count="1">
      <Txt tag="h1" text-align="center" :font="2" :color="3" :lg="100" :xs="56">{{
        data.risorse.part1.title1
      }}</Txt>
    </Anim>
    <Anim delay="400" when="pageload" class="opacity-0" in="animate__fadeIn opacity-1" out="" count="1">
      <Txt tag="h2" text-align="center" :font="1" :color="2" :lg="34" :xs="24">{{
        data.risorse.part1.title2
      }}</Txt>
    </Anim>
  </Stack>
  <Stack :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35 pt20' : 'pr5 pl5 pt20 '" direction="column"
    justifyContent="flex-start" class="backgroundapp-color-2" alignItems="flex-start">
    <Grid class="height-100p width-100p" container :gap="20" :lg="3" :xs="1">
      <Grid :lg="1" :xs="1">
        <Anim delay="600" when="pageload" in="animate__fadeInUp opacity-1" out="" count="1" class="opacity-0 height-100p">
          <Stack class="height-100p" direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Stack class="pb8 width-100p" direction="column" justifyContent="space-between" alignItems="flex-start">
              <Stack class="width-100p" direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Appsvg class="fillapp-color-3" :class="size.biggerThan(sizeType.lg) ? 'mb4' : 'mt10 mb4'" :xsw="40"
                  :lgw="60">
                  <IStudyHat />
                </Appsvg>
                <Txt tag="h3" class="word-no-break" :font="1" :color="1" :xs="30" :lg="40">
                  {{ data.risorse.part2.items[0].title1 }}
                </Txt>
                <Txt tag="h3" class="mt3" bold :font="2" :color="1" :xs="50" :lg="60">
                  {{ data.risorse.part2.items[0].title2 }}
                </Txt>
                <Txt class="mt3" :font="1" :color="1" :md="24" :xs="18">
                  {{ data.risorse.part2.items[0].body1 }}
                </Txt>
              </Stack>
              <div>
                <Button1 :href="data.risorse.part2.items[0].url" :border="0" :color="2" :background="3" :hover-color="3"
                  :hover-background="7" class="mt10 pr10 pl10">
                  <Txt bold :font="1" :color="-1" :xs="16">{{
                    data.risorse.part2.items[0].buttonRound
                  }}</Txt>
                </Button1>
              </div>
            </Stack>
          </Stack>
        </Anim>
      </Grid>
      <Grid :lg="1" :xs="1">
        <Anim :delay="size.biggerThan(sizeType.lg) ? 800 : 0"
          :when="size.biggerThan(sizeType.lg) ? 'pageload' : 'scroll'" 
          in="animate__fadeInUp opacity-1" out="" count="1"
          class="opacity-0 height-100p"
          auto-scroll-offset="50">
          <Stack class="height-100p" direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Stack class="pb8 width-100p" direction="column" justifyContent="space-between" alignItems="flex-start">
              <Stack class="width-100p" direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Appsvg class="fillapp-color-3" :class="size.biggerThan(sizeType.lg) ? 'mb4' : 'mt10 mb4'" :xsw="30"
                  :lgw="40">
                  <IQuestion />
                </Appsvg>
                <Txt  tag="h3" class="word-no-break" :font="1" :color="1" :xs="30" :lg="40">
                  {{ data.risorse.part2.items[1].title1 }}
                </Txt>
                <Txt  tag="h3" class="mt3" bold :font="2" :color="1" :xs="50" :lg="60">
                  {{ data.risorse.part2.items[1].title2 }}
                </Txt>
                <Txt class="mt3" :font="1" :color="1" :md="24" :xs="18">
                  {{ data.risorse.part2.items[1].body1 }}
                </Txt>
              </Stack>
              <div>
                <Button1 :href="data.risorse.part2.items[1].url" :border="0" :color="2" :background="3" :hover-color="3"
                  :hover-background="7" class="mt10 pr10 pl10">
                  <Txt bold :font="1" :color="-1" :xs="16">{{
                    data.risorse.part2.items[1].buttonRound
                  }}</Txt>
                </Button1>
              </div>
            </Stack>
          </Stack>
        </Anim>
      </Grid>
      <Grid :lg="1" :xs="1">
        <Anim :delay="size.biggerThan(sizeType.lg) ? 1000 : 0"
          :when="size.biggerThan(sizeType.lg) ? 'pageload' : 'scroll'" in="animate__fadeInUp opacity-1" out="" count="1"
          class="opacity-0 height-100p"
          auto-scroll-offset="0"
          >
          <Stack class="height-100p" direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Stack class="pb8 width-100p" direction="column" justifyContent="space-between" alignItems="flex-start">
              <Stack class="width-100p" direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Appsvg class="fillapp-color-3" :class="size.biggerThan(sizeType.lg) ? 'mb4' : 'mt10 mb4'" :xsw="30"
                  :lgw="40">
                  <ISeaBall />
                </Appsvg>
                <Txt tag="h3" class="word-no-break" :font="1" :color="1" :xs="30" :lg="40">
                  {{ data.risorse.part2.items[2].title1 }}
                </Txt>
                <Txt tag="h3" class="mt3" bold :font="2" :color="1" :xs="50" :lg="60">
                  {{ data.risorse.part2.items[2].title2 }}
                </Txt>
                <Txt class="mt3" :font="1" :color="1" :md="24" :xs="18">
                  {{ data.risorse.part2.items[2].body1 }}
                </Txt>
              </Stack>
              <div>
                <Button1 :href="data.risorse.part2.items[2].url" :border="0" :color="2" :background="3" :hover-color="3"
                  :hover-background="7" class="mt10 pr10 pl10">
                  <Txt bold :font="1" :color="-1" :xs="16">{{
                    data.risorse.part2.items[2].buttonRound
                  }}</Txt>
                </Button1>
              </div>
            </Stack>
          </Stack>
        </Anim>
      </Grid>
    </Grid>
    <Anim auto-scroll-offset="0" when="pageload" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0 width-100p">
    <Grid class="mt40 mb20 width-100p" container :lg="2" :xs="1">
      <Grid :lg="1" :xs="1">
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Txt tag="h3" :font="1" :color="1" :xs="25" :lg="40">
            {{ data.risorse.part3.left.title1 }}
          </Txt>
          <Txt tag="h3" :font="2" :color="3" :xs="50" :lg="80">
            {{ data.risorse.part3.left.title2 }}
          </Txt>
        </Stack>
      </Grid>
      <Grid :lg="1" :xs="1">
        <Stack class="height-100p" direction="column" justifyContent="center" alignItems="center">
          <Txt :font="1" :color="1" :md="20" :xs="16">
            {{ data.risorse.part3.right.body1 }}
          </Txt>
        </Stack>
      </Grid>
    </Grid>
    <Grid v-if="size.biggerThan(sizeType.md)" class="mb20 width-100p" :gap="10" container :lg="4" :xs="1">
      <Grid v-for="(item, index) in data.risorse.part4.items" :key="index" :lg="1" :xs="1">
        <div class="position-relative">
          <div class="backgroundapp-color-1 image2-border-radius">
            <div class="image2 image-fitparent-width image2-border-radius"
              :style="{ 'background-image': 'url(' + item.img + ')' }"></div>
          </div>
          <Appsvg :color="7" :hover="3" class="absolute-center cursor-pointer" :xsw="40" :lgw="55">
            <IPlay />
          </Appsvg>
        </div>
        <Stack class="height-inherit p3" direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Txt bold class="mt5" :font="1" :color="1" text-align="left" :xs="20">{{
            item.title1
          }}</Txt>
          <Txt class="mt3" :font="1" :color="1" text-align="left" :xs="14">{{ item.body1 }}</Txt>
        </Stack>
      </Grid>
    </Grid>
    </Anim>
  </Stack>
  <swiper-container v-if="!size.biggerThan(sizeType.md)"
    :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35 pb20' : 'pr5 pl5 pb20'" class="mt10 backgroundapp-color-2"
    :slides-per-view="size.biggerThan(sizeType.xs) ? 2 : 1" speed="500" space-between="16">
    <swiper-slide class="height-inherit" v-for="(item, index) in data.risorse.part4.items" :key="index">
      <div>
        <div class="position-relative">
          <div class="backgroundapp-color-1 image2-border-radius">
            <div class="image2 image-fitparent-width image2-border-radius"
              :style="{ 'background-image': 'url(' + item.img + ')' }"></div>
          </div>
          <Appsvg :color="7" :hover="3" class="absolute-center cursor-pointer" :xsw="40" :lgw="55">
            <IPlay />
          </Appsvg>
        </div>
        <Stack class="height-inherit p3" direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Txt bold class="mt5" :font="1" :color="1" text-align="left" :xs="20">{{
            item.title1
          }}</Txt>
          <Txt class="mt3" :font="1" :color="1" text-align="left" :xs="14">{{ item.body1 }}</Txt>
        </Stack>
      </div>
    </swiper-slide>
  </swiper-container>
  <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0">
  <OpenShop bellStars />
  </Anim>
  <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0">
  <Opportunity />
  </Anim>
</template>
