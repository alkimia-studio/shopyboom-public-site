<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import data from '@/helper/data.json'
const size = useSizeStore()
</script>
<template>
      <Stack :class="size.biggerThan(sizeType.md) ? 'pr35 pl35 pt40 pb40' : 'pr5 pl5 pt20 pb20'" direction="column"
    justifyContent="flex-start" class="backgroundapp-color-2" alignItems="flex-start">
    <Grid container :lg=2 :md=1>
      <Grid :lg=1 :md=1>
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Txt :line-height="size.biggerThan(sizeType.lg) ? 100: 70" :font=1 :color=1 :xs="30" :lg="73">
            {{ data.opportunity.left.title1 }}
          </Txt>
          <Txt :line-height="size.biggerThan(sizeType.lg) ? 100: 70" :font=1 :color=1 :xs="30" :lg="73">
            {{ data.opportunity.left.title2 }}
          </Txt>
          <Txt :line-height="size.biggerThan(sizeType.lg) ? 100: 70" :font=2 :color=3 :xs="62" :lg="73">
            {{ data.opportunity.left.title3 }}
          </Txt>
        </Stack>
      </Grid>
      <Grid :lg=1 :md=1>
        <Stack class="width-100p" :class="size.biggerThan(sizeType.md) ? 'pl30' : 'pb8'" direction="column"
          justifyContent="center" alignItems="flex-start">
          <Txt class="mt10" :font=1 :color=1 :xs="18" :lg="24">
            {{ data.opportunity.right.body1 }}
          </Txt>
          <input class="input1 textapp-color-1 font-1 borderapp-color-5 mt6" :placeholder="data.opportunity.right.placeholder" />
          <div>
            <Button1 :border=0 :color="2" :background="3" :hover-color="3" :hover-background="2"
              class="mt10 pt5 pb5 pr10 pl10">
              <Txt :font=1 :color=-1 :xs=16>{{ data.opportunity.right.buttonRound }}</Txt>
            </Button1>
          </div>
        </Stack>
      </Grid>
    </Grid>
  </Stack>
</template>