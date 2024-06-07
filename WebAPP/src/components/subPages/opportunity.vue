<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'
import data from '@/helper/data.json'
import { useApi } from '@/helper/api'
import { info , success , error } from '@/helper/toast'
import { isNotEmpty, isEmail  } from '@/helper/validation'
import { type inputObj } from '@/helper/models'
import { ref } from 'vue'
const api = new useApi()
type formDataType = {
  email: inputObj
}
const formData = ref<formDataType>({
   email: { value: '', error: false },
});
const size = useSizeStore()
const sendRequest = () => {
  api.sendSignUp({
    Email: formData.value.email.value
  }).then((response) => {
    success(data.successMessages.sendRequest)
  }).catch((e) => {
    error(data.errorMessages.sendRequest)
  })

}
const validation = (): boolean => {
  let isValid: boolean = true;
  if (!isNotEmpty(formData.value.email.value)) {
    if (isValid)
      error(`${data.errorMessages.required}: Email`)
    formData.value.email.error = true;
    isValid = false;
  }
  if (!isEmail(formData.value.email.value)) {
      error(`${data.errorMessages.email}: Email`)
    formData.value.email.error = true;
    isValid = false;
  }
  return isValid;
}
const onSubmit = () => {
  if (validation())
    sendRequest()
}
</script>
<template>
  <Stack :class="size.biggerThan(sizeType.md) ? 'pr35 pl35 pt40 pb40' : 'pr5 pl5 pt20 pb20'" direction="column"
    justifyContent="flex-start" class="backgroundapp-color-2" alignItems="flex-start">
    <Grid container :lg=2 :md=1>
      <Grid :lg=1 :md=1>
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Txt :font=1 :color=1 :xs="30" :lg="73">
            {{ data.opportunity.left.title1 }}
          </Txt>
          <Txt :font=1 :color=1 :xs="30" :lg="73">
            {{ data.opportunity.left.title2 }}
          </Txt>
          <Txt :font=2 :color=3 :xs="40" :lg="73">
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
          <input v-model="formData.email.value" :class="{'error': formData.email.error}" class="input1 textapp-color-1 font-1 borderapp-color-5 mt6"
            :placeholder="data.opportunity.right.placeholder" />
          <div>
            <Button1 @click="()=>{onSubmit()}" :border=0 :color="2" :background="3" :hover-color="3" :hover-background="7"
              class="mt10 pr10 pl10">
              <Txt bold :font=1 :color=-1 :xs=16>{{ data.opportunity.right.buttonRound }}</Txt>
            </Button1>
          </div>
        </Stack>
      </Grid>
    </Grid>
  </Stack>
</template>