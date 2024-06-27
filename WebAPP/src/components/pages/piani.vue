<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import { useHead } from '@unhead/vue'
import data from '@/helper/data.json'
import { useScrollStore } from '@/helper/scrollHandler';
import { onBeforeMount } from 'vue';
const size = useSizeStore()
const scroll = useScrollStore()
onBeforeMount(() => { scroll.enablePrint() })
useHead({
  title: data.piani.head.title,
  meta: [
    {
      name: 'description',
      content: data.piani.head.description,
    }
  ]
})
</script>
<template>
  <Stack class="backgroundapp-color-1 pt40 pb40 width-100p" direction="column" justifyContent="center"
    alignItems="center">
    <Anim delay="200" when="pageload" class="opacity-0" in="animate__fadeIn opacity-1" out="" count="1">
      <Txt text-align="center" :font="2" :color="3" :lg="100" :xs="56">{{
        data.piani.part1.title1
        }}</Txt>
    </Anim>
    <Anim delay="400" when="pageload" class="opacity-0" in="animate__fadeIn opacity-1" out="" count="1">
      <Txt text-align="center" :font="1" :color="2" :lg="34" :xs="24">{{
        data.piani.part1.title2
        }}</Txt>
    </Anim>
  </Stack>
  <Stack :class="size.biggerThan(sizeType.md) ? 'pr35 pl35 mt30 mb30' : 'pr5 pl5 mt15 mb15'">
    <Grid class="width-100p" :gap="size.biggerThan(sizeType.md) ? 4 : 12" container :lg="3" :xs="1">
      <Grid v-for="(item, index) in data.piani.part2.items" :key="index" :lg="1" :xs="1"
        :class="item.title5 === '' ? 'height-100p' : ''"
        :style="{ 'margin-top': item.title5 !== '' && size.biggerThan(sizeType.md) ? '-60px' : '' }">
        <Anim in="animate__fadeInUp opacity-1" out="" count="1" class="opacity-0 height-inherit"
        :delay="size.biggerThan(sizeType.md) || index === 0 ? (600 + (index * 200)) : (0)"
        :when="size.biggerThan(sizeType.md) || index === 0 ? 'pageload' : 'scroll'" 
        auto-scroll-offset="50"
        >
        <Stack v-if="item.title5 !== ''" class="backgroundapp-color-3 pt4 pb4 border-top-12" direction="column"
          justifyContent="center" alignItems="center">
          <Txt text-align="center" :color="2" :font="1" :xs="16">{{ item.title5 }}</Txt>
        </Stack>
        <Stack :style="{ height: item.title5 !== '' ? 'calc(100% - (50px))' : 'inherit' }"
          :class="item.title5 !== '' ? 'active borderapp-color-3' : 'border-top-12'"
          class="p4 backgroundapp-color-21 hr1 piniacard shadow-3" direction="column" justifyContent="flex-start"
          alignItems="flex-start">
          <Stack :class="item.title5 !== '' ? 'height-100p' : ''" class="pb8 width-100p" direction="column"
            justifyContent="space-between" alignItems="center">
            <Stack class="width-100p" direction="column" justifyContent="flex-start" alignItems="flex-start">
              <Txt bold class="mt2 mb2 width-100p" text-align="center" :font="1" :color="1" :xs="24">{{ item.title1 }}
              </Txt>
              <hr class="width-100p" />
              <Stack class="pr10 pl10 pt10 pb8 width-100p" direction="column" justifyContent="flex-start"
                alignItems="flex-start">
                <div class="display-inline-block">
                  <Txt :font="1" :color="1" :xs="16">{{ item.title2 }}</Txt>
                  <Txt class="ml1" :font="1" :color="1" :xs="16" bold>{{ item.title3 }}</Txt>
                  <Txt class="ml1" :font="1" :color="1" :xs="16">{{ item.title4 }}</Txt>
                </div>
                <div v-for="(item2, index2) in item.list" :key="index2" class="width-inherit mt3 mb3">
                  <Stack class="width-100p" direction="row" justifyContent="flex-start" alignItems="center">
                    <Appsvg :xsw="22" :lgw="20" :xlw="22">
                      <ITickFill />
                    </Appsvg>
                    <Txt class="ml6" :xs="18" :font="1" :color="1">{{ item2 }}</Txt>
                  </Stack>
                  <hr class="width-100p mt4" />
                </div>
              </Stack>
            </Stack>
            <div class="width-100p">
              <Stack class="width-100p" direction="row" justifyContent="center" alignItems="center">
                <Txt text-align="right" :xs="24" :md="24" :lg="30" :font="2" :color="1">{{
                  item.price1
                }}</Txt>
                <Txt class="pl2 pr3" text-align="center" :xs="48" :md="48" :lg="60" :font="2" :color="1" bold>{{
                  item.price2 }}</Txt>
                <Txt text-align="left" :xs="24" :md="24" :lg="30" :font="2" :color="1">{{
                  item.price3
                }}</Txt>
              </Stack>
              <div class="text-align-center">
                <Button1 :border="0" :color="2" :background="3" :hover-color="3" :hover-background="7"
                  class="mt10 pr10 pl10">
                  <Txt bold :font="1" :color="-1" :xs="16">{{ item.buttonRound }}</Txt>
                </Button1>
              </div>
            </div>
          </Stack>
        </Stack>
        </Anim>
      </Grid>
    </Grid>
    <Stack direction="column" justifyContent="flex-start" class="mt20 mb25 width-100p" alignItems="center">
      <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0 width-100p text-align-center">
        <Txt text-align="center" :font="1" :color="1" :xs="30" bold>{{data.piani.part3.title1 }}</Txt>
      </Anim>
      <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0 width-100p text-align-center">
        <Txt text-align="center" :font="1" :color="1" :xs="30" bold>{{data.piani.part3.title2 }}</Txt>
      </Anim>
      <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0 width-100p text-align-center">
      <Txt text-align="center" :font="1" :color="1" :xs="30">{{ data.piani.part3.title3 }}</Txt>
      </Anim>
      <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0 width-100p text-align-center">
      <div>
        <Button1 :border="0" :color="2" :background="8" :hover-color="3" :hover-background="7" class="pr10 pl10">
          <Txt bold :font="1" :color="-1" :xs="16">{{ data.piani.part3.buttonRound }}</Txt>
        </Button1>
      </div>
      </Anim>
      <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0 width-100p text-align-center mt40">
        <Txt text-align="center" :font="2" :color="3" :lg="100" :md="70" :sm="50" :xs="50">{{ data.piani.part3.title4 }}</Txt>
      </Anim>
      <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0 width-100p text-align-center">
        <Txt text-align="center" :font="1" :color="1" :xs="30">{{ data.piani.part3.title5 }}</Txt>
      </Anim>
    </Stack>
    <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0 width-100p text-align-center">
    <Stack :class="size.biggerThan(sizeType.md) ? 'pl15 pr15' : 'pl5 pr5'"
      class="pt5 pb5 height-100p backgroundapp-color-21 hr1 piniacard shadow-3 border-top-12 width-100p"
      direction="column" justifyContent="flex-start" alignItems="flex-start">
      <table class="table1 width-100p">
        <thead>
          <tr>
            <td class="pt10" v-for="(item, index) in data.piani.part4.headers" :key="index" style="text-align: center">
              <Txt bold :font="1" :color="1" :md="24" :xs="6" :sm="12" text-align="center">{{
                item
              }}</Txt>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="4">
              <Stack class="pt12 pb6" direction="row" justifyContent="flex-start" alignItems="center">
                <Appsvg :xsw="30" :mdw="40">
                  <IMarket />
                </Appsvg>
                <Txt bold class="ml3" :font="1" :color="1" :md="32" :xs="18">{{
                  data.piani.part4.items[0].headerItem
                }}</Txt>
              </Stack>
            </td>
          </tr>
          <template v-for="(item, index) in data.piani.part4.items[0].list" :key="index">
            <tr>
              <td :class="size.biggerThan(sizeType.sm) ? 'width-50p' : 'width-25p'" class="pt6 pb6">
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                  <Txt bold :font="1" :color="1" :xs="16" :sm="24">{{ item.title1 }}</Txt>
                  <Txt class="mt3" :font="1" :color="1" :xs="12" :sm="16">{{ item.body1 }}</Txt>
                </Stack>
              </td>
              <td class="pt6 pb6" v-if="item.item1 === true">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="22" :smw="30">
                    <ITickFill />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" v-else-if="item.item1 === false">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="16" :smw="20">
                    <IX />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" style="text-align: center" v-else>
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Txt bold :font="1" :color="1" :md="24" :xs="6" :sm="12" text-align="center">{{
                    item.item1
                  }}</Txt>
                </Stack>
              </td>
              <td class="pt6 pb6" v-if="item.item2 == true">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="22" :smw="30">
                    <ITickFill />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" v-else-if="item.item2 === false">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="16" :smw="20">
                    <IX />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" style="text-align: center" v-else>
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Txt bold :font="1" :color="1" :md="24" :xs="6" :sm="12" text-align="center">{{
                    item.item2
                  }}</Txt>
                </Stack>
              </td>
              <td class="pt6 pb6" v-if="item.item3 === true">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="22" :smw="30">
                    <ITickFill />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" v-else-if="item.item3 === false">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="16" :smw="20">
                    <IX />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" style="text-align: center" v-else>
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Txt bold :font="1" :color="1" :md="24" :xs="6" :sm="12" text-align="center">{{
                    item.item3
                  }}</Txt>
                </Stack>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <hr class="hr1 width-100p" />
              </td>
            </tr>
          </template>
          <tr>
            <td colspan="4">
              <Stack class="pt12 pb6" direction="row" justifyContent="flex-start" alignItems="center">
                <Appsvg :xsw="30" :mdw="40">
                  <ISpeaker />
                </Appsvg>
                <Txt bold class="ml3" :font="1" :color="1" :xs="20" :sm="32">{{
                  data.piani.part4.items[1].headerItem
                }}</Txt>
              </Stack>
            </td>
          </tr>
          <template v-for="(item, index) in data.piani.part4.items[1].list" :key="index">
            <tr>
              <td :class="size.biggerThan(sizeType.sm) ? 'width-50p' : 'width-25p'" class="pt6 pb6">
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                  <Txt bold :font="1" :color="1" :xs="16" :sm="24">{{ item.title1 }}</Txt>
                  <Txt class="mt3" :font="1" :color="1" :xs="12" :sm="16">{{ item.body1 }}</Txt>
                </Stack>
              </td>
              <td class="pt6 pb6" v-if="item.item1 === true">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="22" :smw="30">
                    <ITickFill />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" v-else-if="item.item1 === false">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="16" :smw="20">
                    <IX />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" style="text-align: center" v-else>
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Txt bold :font="1" :color="1" :md="24" :xs="6" :sm="12" text-align="center">{{
                    item.item1
                  }}</Txt>
                </Stack>
              </td>
              <td class="pt6 pb6" v-if="item.item2 === true">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="22" :smw="30">
                    <ITickFill />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" v-else-if="item.item2 === false">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="16" :smw="20">
                    <IX />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" style="text-align: center" v-else>
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Txt bold :font="1" :color="1" :md="24" :xs="6" :sm="12" text-align="center">{{
                    item.item2
                  }}</Txt>
                </Stack>
              </td>
              <td class="pt6 pb6" v-if="item.item3 === true">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="22" :smw="30">
                    <ITickFill />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" v-else-if="item.item3 === false">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="16" :smw="20">
                    <IX />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" style="text-align: center" v-else>
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Txt bold :font="1" :color="1" :md="24" :xs="6" :sm="12" text-align="center">{{
                    item.item3
                  }}</Txt>
                </Stack>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <hr class="hr1 width-100p" />
              </td>
            </tr>
          </template>
          <tr>
            <td colspan="4">
              <Stack class="pt12 pb6" direction="row" justifyContent="flex-start" alignItems="center">
                <Appsvg :xsw="30" :mdw="40">
                  <IWheel />
                </Appsvg>
                <Txt bold class="ml3" :font="1" :color="1" :xs="20" :sm="32">{{
                  data.piani.part4.items[2].headerItem
                }}</Txt>
              </Stack>
            </td>
          </tr>
          <template v-for="(item, index) in data.piani.part4.items[2].list" :key="index">
            <tr>
              <td :class="size.biggerThan(sizeType.sm) ? 'width-50p' : 'width-25p'" class="pt6 pb6">
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                  <Txt bold :font="1" :color="1" :xs="16" :sm="24">{{ item.title1 }}</Txt>
                  <Txt class="mt3" :font="1" :color="1" :xs="12" :sm="16">{{ item.body1 }}</Txt>
                </Stack>
              </td>
              <td class="pt6 pb6" v-if="item.item1 === true">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="22" :smw="30">
                    <ITickFill />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" v-else-if="item.item1 === false">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="16" :smw="20">
                    <IX />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" style="text-align: center" v-else>
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Txt bold :font="1" :color="1" :md="24" :xs="6" :sm="12" text-align="center">{{
                    item.item1
                  }}</Txt>
                </Stack>
              </td>
              <td class="pt6 pb6" v-if="item.item2 === true">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="22" :smw="30">
                    <ITickFill />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" v-else-if="item.item2 === false">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="16" :smw="20">
                    <IX />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" style="text-align: center" v-else>
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Txt bold :font="1" :color="1" :md="24" :xs="6" :sm="12" text-align="center">{{
                    item.item2
                  }}</Txt>
                </Stack>
              </td>
              <td class="pt6 pb6" v-if="item.item3 === true">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="22" :smw="30">
                    <ITickFill />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" v-else-if="item.item3 === false">
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Appsvg :xsw="16" :smw="20">
                    <IX />
                  </Appsvg>
                </Stack>
              </td>
              <td class="pt6 pb6" style="text-align: center" v-else>
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Txt bold :font="1" :color="1" :md="24" :xs="6" :sm="12" text-align="center">{{
                    item.item3
                  }}</Txt>
                </Stack>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <hr class="hr1 width-100p" />
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </Stack>
  </Anim>
  </Stack>
  <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0">
    <OpenShop bellStars />
  </Anim>
  <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0">
    <Academy />
  </Anim>
  <People />
  <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0">
    <Opportunity />
  </Anim>
</template>
