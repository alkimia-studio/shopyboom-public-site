<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import data from '@/helper/data.json'
const size = useSizeStore()
</script>
<template>
  <Stack :class="size.biggerThan(sizeType.md) ? 'pr35 pl35 pt50 pb50' : 'pr5 pl5'" direction="column"
    justifyContent="flex-start" class="backgroundapp-color-2" alignItems="flex-start">
    <Grid class="width-100p" container :lg="2" :md="1">
      <Grid :lg="1" :md="1">
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Appsvg class="fillapp-color-3" :class="size.biggerThan(sizeType.lg) ? 'mb8' : 'mt10 mb4'" :xsw="60"
            :lgw="80">
            <IStudyHat />
          </Appsvg>
          <Txt line-height="50" bold class="" :font="1" :color="1" :xs="30" :lg="67">
            {{ data.academy.left.title1 }}
          </Txt>
          <Txt bold :line-height="size.biggerThan(sizeType.md) ? 150 : 70" :font="2" :color="3" :xs="62" :lg="110">
            {{ data.academy.left.title2 }}
          </Txt>
        </Stack>
      </Grid>
      <Grid :lg="1" :md="1">
        <Stack class="width-100p" :class="size.biggerThan(sizeType.md) ? 'pl30' : 'pb8'" direction="column"
          justifyContent="center" alignItems="flex-start">
          <Txt class="mt10" :font="1" :color="1" :xs="18" :lg="24">
            {{ data.academy.right.body1 }}
          </Txt>
          <div>
            <Button1 href="/shopping-academy" :border="0" :color="2" :background="3" :hover-color="3"
              :hover-background="7" class="mt10 pr10 pl10">
              <Txt bold :font="1" :color="-1" :xs="16">{{ data.academy.right.buttonRound }}</Txt>
            </Button1>
          </div>
        </Stack>
      </Grid>
    </Grid>
  </Stack>
</template>
