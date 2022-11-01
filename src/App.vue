<template>
<div style="position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;">
  <ibzOcrCamera
      :ocrrecordid="ocrrecordid"
      :ocrroot="'/ocr/ocrrecord'"
       />
</div>
</template>

<script>
import IbzOcrCamera from './components/IbzOcrCamera'
export default {
  name: 'App',
  components: {
    IbzOcrCamera
  },
  data() {
    return {
        ocrrecordid: "3620d286-da49-059e-30eb-f85eac2efce9",
    }
  },
  methods: {
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
