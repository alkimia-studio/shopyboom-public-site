<script setup lang="ts">
const props = defineProps({
    number: { type: Number, required: true },
    color: { type: String, required: true}
})
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="165" height="165"
        viewBox="0 0 165 165">
        <defs>
            <filter id="Ellipse_3" x="0" y="0" width="165" height="165" filterUnits="userSpaceOnUse">
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feFlood flood-opacity="0.188" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
            </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Ellipse_3)">
            <circle id="Ellipse_3-2" data-name="Ellipse 3" cx="46.5" cy="46.5" r="46.5" transform="translate(36 33)"
                :fill="props.color" />
        </g>
        <text id="Title_PLATFORM:MOBILE_TAG:H4_" data-name="Title [PLATFORM:MOBILE][TAG:H4]"
            transform="translate(50 43)" fill="#fffcf6" font-size="50" font-family="SegoeUI, Segoe UI">
            <tspan x="18.523" y="54">{{ number }}</tspan>
        </text>
    </svg>
</template>