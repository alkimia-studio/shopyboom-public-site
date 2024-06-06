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
const shapeContainerMinHeight = {
    xlh: 1,
    lgh: 1,
    mdh: 550,
    smh: 500,
    xsh: 200
}
</script>
<template>
    <Banner1 src="/images/image2.jpg" class="backgroundapp-color-7">
        <Txt :class="
          size.biggerThan(sizeType.md) ? 'pt40' : size.biggerThan(sizeType.sm) ? 'pt30' : size.biggerThan(sizeType.xs) ? 'pt35' : 'pt25'
        " :font="2" :color="3" :xl="134" :lg="110" :md="80"
            :sm="70" :xs="45" text-align="center" bold>{{
            data.eCommerce.part1.title1 }}</Txt>
        <Txt class="mt6" :font="2" :color="2" :xl="93" :lg="81" :md="60"
            :sm="40" :xs="30" text-align="center" bold>{{
            data.eCommerce.part1.title2 }}</Txt>
        <Txt class="mt6" :font="2" :color="2" :xl="93" :lg="81" :md="60"
            :sm="40" :xs="30" text-align="center" bold>{{
            data.eCommerce.part1.title3 }}</Txt>
    </Banner1>
    <Stack direction="row" class="width-100p p10" justifyContent="center" alignItems="center">
        <Txt class="pr2" text-align="center" :font=1 :color=1 :lg=30 :md=20 :sm=20 :xs=18>{{
            data.eCommerce.part2.title1 }}</Txt>
    </Stack>
    <Stack :class="size.biggerThan(sizeType.sm) ? 'pr35 pl35' : 'pr5 pl5 pt20'" direction="column"
        justifyContent="flex-start" class="backgroundapp-color-2 pb40" alignItems="flex-start">
        <Grid :gap=0 class="mt20 width-100p" direction="rtl" container :lg=8 :md=1>
            <Grid class="direction-ltr" :lg=5 :md=1>
                <ShapeContainer :xlh="shapeContainerMinHeight.xlh" :lgh="shapeContainerMinHeight.lgh"
                    :mdh="shapeContainerMinHeight.mdh" :smh="shapeContainerMinHeight.smh"
                    :xsh="shapeContainerMinHeight.xsh">
                    <Shape page="ecommerce" part="part3" shape-name="rectangle1"
                        :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
                        <img class="shadow-3 round-3" :src="`/images/eCommerce/part3-img1.jpg`" />
                    </Shape>
                    <Shape page="ecommerce" part="part3" shape-name="rectangle2"
                        :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
                        <img src="/svgs/rectangle.svg" />
                    </Shape>
                    <Shape page="ecommerce" part="part3" shape-name="rectanglePipeStar"
                        :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
                        <img src="/svgs/rectanglePipeStar.svg" />
                    </Shape>
                </ShapeContainer>
            </Grid>
            <Grid class="direction-ltr" :class="size.biggerThan(sizeType.md) ? '' : 'mt4'" :lg=3 :md=1>
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Txt bold line-height="82" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1
                        :color=1 :xl=40 :lg=38 :md=40 :xs=24>{{ data.eCommerce.part3.left.title1 }}</Txt>
                    <Txt line-height="120" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=2
                        :color=3 :xl=100 :lg=80 :md=100 :xs=48>{{ data.eCommerce.part3.left.title2 }}</Txt>
                    <Txt class="mt2" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1
                        :md=24 :xs=18>
                        {{ data.eCommerce.part3.left.body1 }}</Txt>
                </Stack>
            </Grid>
        </Grid>
        <Grid :gap=0 :class="size.biggerThan(sizeType.sm) ? '' : 'mb25'" class="mt60 width-100p" container :lg=8 :md=1>
            <Grid :lg=5 :md=1>
                <ShapeContainer :xlh="shapeContainerMinHeight.xlh" :lgh="shapeContainerMinHeight.lgh" :mdh="350"
                    :smh="350" :xsh="150">
                    <template v-for="i in 6" :key="i">
                        <template v-for="j in 4" :key="j">
                         <Shape page="ecommerce" part="part4" :shape-name="`square${i}${j}`"
                            :stick-v="size.biggerThan(sizeType.md) ? 'left' : 'center'">
                                <img class="shadow-3 round-3" :src="`/images/eCommerce/${((i-1)*4+j)}.jpg`" />
                            </Shape>
                        </template>
                    </template>
                </ShapeContainer>
            </Grid>
            <Grid :class="size.biggerThan(sizeType.md) ? '' : 'mt4'" :lg=3 :md=1>
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Txt bold line-height="82" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1
                        :color=1 :xl=40 :lg=38 :md=40 :xs=24>{{ data.eCommerce.part4.right.title1 }}</Txt>
                    <Txt class="word-no-break" line-height="120"
                        :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=2 :color=3 :xl=100 :lg=80
                        :md=100 :xs=48>{{ data.eCommerce.part4.right.title2 }}</Txt>
                    <Txt class="mt2" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1
                        :md=24 :xs=18>
                        {{ data.eCommerce.part4.right.body1 }}</Txt>
                </Stack>
            </Grid>
        </Grid>
        <Grid :gap=0 :class="size.biggerThan(sizeType.lg) ? 'pt40': ''" class="mt60 width-100p" direction="rtl" container :lg=8 :md=1>
            <Grid class="direction-ltr" :lg=5 :md=1>
                <ShapeContainer :xlh="shapeContainerMinHeight.xlh" :lgh="shapeContainerMinHeight.lgh"
                    :mdh="shapeContainerMinHeight.mdh" :smh="shapeContainerMinHeight.smh"
                    :xsh="shapeContainerMinHeight.xsh">
                    <Shape page="ecommerce" part="part5" shape-name="rectangle1"
                        :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
                        <img class="shadow-3 round-3" :src="`/images/eCommerce/part5-img1.jpg`" />
                    </Shape>
                    <Shape page="ecommerce" part="part5" shape-name="rectangle2"
                        :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
                        <img src="/svgs/rectangle.svg" />
                    </Shape>
                    <Shape page="ecommerce" part="part5" shape-name="rectangleRobot"
                        :stick-v="size.biggerThan(sizeType.md) ? 'right' : 'center'">
                        <img src="/svgs/rectangleRobot.svg" />
                    </Shape>
                </ShapeContainer>
            </Grid>
            <Grid class="direction-ltr" :class="size.biggerThan(sizeType.md) ? '' : 'mt4'" :lg=3 :md=1>
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Txt bold line-height="82" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1
                        :color=1 :xl=40 :lg=38 :md=40 :xs=24>{{ data.eCommerce.part5.left.title1 }}</Txt>
                    <Txt line-height="120" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=2
                        :color=3 :xl=100 :lg=80 :md=100 :xs=48>{{ data.eCommerce.part5.left.title2 }}</Txt>
                    <Txt class="mt2" :text-align="size.biggerThan(sizeType.md) ? 'left' : 'center'" :font=1 :color=1
                        :md=24 :xs=18>
                        {{ data.eCommerce.part5.left.body1 }}</Txt>
                </Stack>
            </Grid>
        </Grid>
    </Stack>
    <BellStars />
    <Academy />
    <People />
    <OpenShop />
    <Opportunity />
</template>