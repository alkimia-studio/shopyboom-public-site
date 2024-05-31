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
    <Stack class="backgroundapp-color-1 pt40 pb40 width-100p" direction="column" justifyContent="center"
        alignItems="center">
        <Txt text-align="center" :font=2 :color=3 :lg="100" :xs="56">{{ data.piani.part1.title1 }}</Txt>
        <Txt text-align="center" :font=1 :color=2 :lg="34" :xs="24">{{ data.piani.part1.title2 }}</Txt>
    </Stack>
    <Stack :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35 mt30 mb30' : 'pr5 pl5 mt15 mb15'">
        <Grid  class="width-100p" :gap="size.biggerThan(sizeType.md) ? 4 : 12" container :lg="3" :xs="1">
            <Grid v-for="(item, index) in data.piani.part2.items" :key="index" :lg="1" :xs="1"
                :class="item.title5 === '' ? 'height-100p' : ''"
                :style="{ 'margin-top': item.title5 !== '' && size.biggerThan(sizeType.md) ? '-60px' : '' }">
                <Stack v-if="item.title5 !== ''" class="backgroundapp-color-3 pt4 pb4 border-top-12" direction="column"
                    justifyContent="center" alignItems="center">
                    <Txt text-align="center" :color="2" :font=1 :xs="16">{{ item.title5 }}</Txt>
                </Stack>
                <Stack :class="item.title5 !== '' ? 'active borderapp-color-3' : 'border-top-12'"
                    class="p4 height-inherit backgroundapp-color-21 hr1 piniacard" direction="column"
                    justifyContent="flex-start" alignItems="flex-start">
                    <Stack class="pb8 width-100p" direction="column" justifyContent="space-between" alignItems="center">
                        <Stack class="width-100p" direction="column" justifyContent="flex-start" alignItems="flex-start">
                            <Txt class="mt2 mb2" text-align="center" :font="1" :color="1" :xs="24">{{ item.title1 }}
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
                                    <Stack class="width-100p" direction="row" justifyContent="flex-start"
                                        alignItems="center">
                                        <ITickFill />
                                        <Txt class="ml6" :xs="18" :font="1" :color="1">{{ item2 }}</Txt>
                                    </Stack>
                                    <hr class="width-100p mt4" />
                                </div>

                            </Stack>
                        </Stack>
                        <div>
                            <Button1 :border=0 :color="2" :background="3" :hover-color="3" :hover-background="2"
                                class="mt10 pt5 pb5 pr10 pl10">
                                <Txt :font=1 :color=-1 :xs=16>{{ item.buttonRound }}</Txt>
                            </Button1>
                        </div>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
        <Stack direction="column" justifyContent="flex-start" class="mt20 mb25 width-100p" alignItems="center">
            <Txt text-align="center" :font="1" :color="1" :xs="30" bold>{{ data.piani.part3.title1 }}</Txt>
            <Txt text-align="center" :font="1" :color="1" :xs="30" bold>{{ data.piani.part3.title2 }}</Txt>
            <Txt text-align="center" :font="1" :color="1" :xs="30">{{ data.piani.part3.title3 }}</Txt>
            <div class="mt4">
                <Button1 :border=0 :color="2" :background="8" :hover-color="3" :hover-background="21"
                    class="pt5 pb5 pr10 pl10">
                    <Txt :font=1 :color=-1 :xs=16>{{ data.piani.part3.buttonRound }}</Txt>
                </Button1>
            </div>
            <Txt class="mt40" text-align="center" :font="2" :color="3" :lg="100" :xs="30">{{ data.piani.part3.title4 }}
            </Txt>
            <Txt text-align="center" :font="1" :color="1" :xs="30">{{ data.piani.part3.title5 }}</Txt>
        </Stack>
        <Stack class="pl15 pr15 pt5 pb5 height-100p backgroundapp-color-21 hr1 piniacard border-top-12 width-100p"
            direction="column" justifyContent="flex-start" alignItems="flex-start">
            <table class="table1 width-100p">
                <thead>
                    <tr>
                        <td v-for="(item, index) in data.piani.part4.headers" :key="index" style="text-align: center;">
                            <Txt :font="1" :color="1" :xs="16" text-align="center">{{ item }}</Txt>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="4">
                            <Stack  class="pt12 pb6" direction="row" justifyContent="flex-start" alignItems="center">
                                <IMarket />
                                <Txt bold class="ml3" :font="1" :color="1" :xs="32">{{ data.piani.part4.items[0].headerItem }}</Txt>
                            </Stack>
                        </td>
                    </tr>
                    <tr v-for="(item, index) in data.piani.part4.items[0].list" :key="index" class="">
                        <td class="width-50p pt6 pb6">
                            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                                <Txt bold :font="1" :color="1" :xs="24">{{ item.title1 }}</Txt>
                                <Txt :font="1" :color="1" :xs="16">{{ item.body1 }}</Txt>
                            </Stack>
                        </td>
                        <td class="pt6 pb6" v-if="item.item1">
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="22">
                                    <ITickFill />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td class="pt6 pb6" v-else>
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="16">
                                    <IX />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td class="pt6 pb6" v-if="item.item2">
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="22">
                                    <ITickFill />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td class="pt6 pb6" v-else>
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="16">
                                    <IX />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td class="pt6 pb6" v-if="item.item3">
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="22">
                                    <ITickFill />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td class="pt6 pb6" v-else>
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="16">
                                    <IX />
                                </Appsvg>
                            </Stack>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <Stack  class="pt12 pb6" direction="row" justifyContent="flex-start" alignItems="center">
                                <ISpeaker />
                                <Txt bold class="ml3" :font="1" :color="1" :xs="32">{{ data.piani.part4.items[1].headerItem }}</Txt>
                            </Stack>
                        </td>
                    </tr>
                    <tr v-for="(item, index) in data.piani.part4.items[1].list" :key="index" class="">
                        <td  class="width-50p pt6 pb6">
                            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                                <Txt bold :font="1" :color="1" :xs="24">{{ item.title1 }}</Txt>
                                <Txt :font="1" :color="1" :xs="16">{{ item.body1 }}</Txt>
                            </Stack>
                        </td>
                        <td  class="pt6 pb6" v-if="item.item1">
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="22">
                                    <ITickFill />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td  class="pt6 pb6" v-else>
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="16">
                                    <IX />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td  class="pt6 pb6" v-if="item.item2">
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="22">
                                    <ITickFill />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td  class="pt6 pb6" v-else>
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="16">
                                    <IX />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td  class="pt6 pb6" v-if="item.item3">
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="22">
                                    <ITickFill />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td  class="pt6 pb6" v-else>
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="16">
                                    <IX />
                                </Appsvg>
                            </Stack>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <Stack class="pt12 pb6" direction="row" justifyContent="flex-start" alignItems="center">
                                <IWheel />
                                <Txt bold class="ml3" :font="1" :color="1" :xs="32">{{ data.piani.part4.items[2].headerItem }}</Txt>
                            </Stack>
                        </td>
                    </tr>
                    <tr v-for="(item, index) in data.piani.part4.items[2].list" :key="index" class="">
                        <td class="width-50p pt6 pb6">
                            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                                <Txt bold :font="1" :color="1" :xs="24">{{ item.title1 }}</Txt>
                                <Txt :font="1" :color="1" :xs="16">{{ item.body1 }}</Txt>
                            </Stack>
                        </td>
                        <td  class="pt6 pb6" v-if="item.item1">
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="22">
                                    <ITickFill />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td  class="pt6 pb6" v-else>
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="16">
                                    <IX />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td  class="pt6 pb6" v-if="item.item2">
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="22">
                                    <ITickFill />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td  class="pt6 pb6" v-else>
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="16">
                                    <IX />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td  class="pt6 pb6" v-if="item.item3">
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="22">
                                    <ITickFill />
                                </Appsvg>
                            </Stack>
                        </td>
                        <td  class="pt6 pb6" v-else>
                            <Stack direction="column" justifyContent="center" alignItems="center">
                                <Appsvg :xsw="16">
                                    <IX />
                                </Appsvg>
                            </Stack>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Stack>
    </Stack>
    <BellStars />
    <Academy />
    <People />
    <Opportunity />
</template>