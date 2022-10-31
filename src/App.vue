<template>
<div style="width:100%;height: 1113px;margin: auto">
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
        ocrrecordid: "3620d286-da49-059e-30eb-f85eac2efce4",
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
